/*! TEDxTeguigalpa - v0.1.0 - 2013-04-13
* http://revls.alejo.in/
* Copyright (c) 2013 Alejandro Morales; Licensed MIT */
!function (exports){

function Events(){}

Events.create = function (options){
  return new Events(options)
}

Events.prototype._listeners = {}

Events.prototype.emit = function (evnt){
  if (!this._listeners[evnt]) return this
  var args = [].slice.call(arguments, 1)
  this._listeners[evnt].forEach(function (cb){
    try {
      cb.apply(this, args)
    } catch (exc){
      console.log('ERROR executing function', exc.stack)
    }
  }, this)
}

Events.prototype.on = 
Events.prototype.bind =  function (evnt, cb){
  if (!this._listeners[evnt]) this._listeners[evnt] = []
  this._listeners[evnt].push(cb)
  return this
}

exports.Events = Events

// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
;(function(){
  var cache = {};
 
  exports.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
     
      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
       
        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +
       
        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
   
    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();

}(typeof TEDx !== 'undefined' ? TEDx : window.TEDx = {})
;!function(){
  var cbs = []
  $$(document).ready(function(){
    var args = arguments
    cbs.forEach(function(cb){
      cb.apply(TEDx, args)
    })
  })

TEDx.extend =
TEDx.set = function (tx, val){
  if (!val && typeof tx === 'object')  {
    return Object.keys(tx).forEach(function (t){
      TEDx.extend(t, tx[t])
    })
  } else if (!val) return
  TEDx[tx] = val
}

TEDx.extend({
  Places: {},
  $: window.$$,
  time: moment,
  server: 'http://localhost:3001/',
  get: function (tx){
    if (TEDx[tx]) return TEDx[tx]
    return null
  },
  setPlace: function (place, fn){
    TEDx.Places[place] = fn
  },
  ready: function (cb){
    cbs.push(cb)
    return TEDx
  },
  json: function (url, cb, server){
    if (!server) url = TEDx.get('server') + url
    return TEDx.$.get(url, null, cb, 'application/json')
  },
  api: function (url, cb) {
    return TEDx.json('api/v1' + url, cb)
  },
})

TEDx.time.lang('es')
TEDx.set('topic', 'tegucigalpa')

/// Hack ;_;
window.onhashchange = function (ev){
  var hash = location.hash.replace('#','')
  if (hash && TEDx.Places[hash]) TEDx.Places[hash].enter()
}
}()
;!function (exports){
  var $ = window.$$
    , api = {
        endp: 'https://api.instagram.com/v1/',
        token: $('[name="token.ig"]').attr('content')
      }
    
  api.tags = 'tags/{{tag}}/media/recent?access_token=' + api.token
  api.comments = 'media/{{id}}/comments?access_token=' + api.token

  function Instagram(){
    this.init()
  }

  Instagram.prototype = Object.create(TEDx.Events.prototype, {
    constructor: Instagram
  })

  Instagram.prototype.init = function (){
    var self = this
    self.on('search:tag', function (tag){
      self.byTag(tag)
    })
  }
  Instagram.prototype.byTag = function (tag, cb){
    var url = (api.endp + api.tags).replace('{{tag}}', tag)
    var self = this
    var req = $.get(url, null, function (resp){
      self.emit('search:done', resp)
      if (cb) cb(resp)
    }, 'application/json')
  }
  Instagram.prototype.getCommentsFor = function (id, cb){
    if (!id) return
    var url = (api.endp + api.comments).replace('{{id}}', id)
    var req = $.get(url, null, function (resp){
      if (cb) cb(resp)
      self.emit('comments:' + id, resp)
    }, 'application/json')
  }
  Instagram.prototype.serialize = function (json){
    var data = json.data
      , resp = []

    data.forEach(function(itm){
      resp.push({
        time: itm.created_time,
        comments: itm.comments.count,
        link: itm.link,
        likes: itm.likes.count,
        _likes: itm.likes,
        img: itm.images.low_resolution,
        _imgs: itm.images,
        description: itm.caption.text,
        user: itm.user.username,
        pic: itm.user.profile_picture,
        name: itm.user.full_name
      })
    })
    return resp
  }
  exports.instagram = new Instagram

}(typeof TEDx !== 'undefined' ? TEDx : window.TEDx = {})

;TEDx.setPlace('schedule', (function (){
  var server = TEDx.get('server')

  return {
    init: function (){

    },
    format: function (date){
      return TEDx.time(Number(date)).format('lll')
    },
    enter: function (){
      Lungo.Notification.show()
      TEDx.api('/calendar.json', function (resp){
        Lungo.Notification.hide()
        TEDx.$('#horario').html(
          TEDx.tmpl(TEDx.$('#sitem').html(), {
            data: JSON.parse(resp)
          })
        )
      })
    },
  }
})())
;TEDx.setPlace('timeline', (function(){
  var topic = TEDx.get('topic')
  var instagram = TEDx.instagram
  return {
    enter: function (ev){
      instagram.byTag(topic, function (res){
        if (typeof res === 'string') res = JSON.parse(res)
        var grams = instagram.serialize(res)

        TEDx.$('#list').append(
          TEDx.tmpl('simgs', {
            data: grams
          })
        )
      })
    }
  }
})())
;TEDx.ready(function(){
  Lungo.init({
    name: 'TEDx'
  })
})
