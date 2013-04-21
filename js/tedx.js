!function(){
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
  server: 'http://192.168.0.190:3001/',
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
var C = Lungo.Constants
var lng = Lungo

lng.dom(C.QUERY.SECTION_ROUTER_TOUCH).touch(_onSection);
lng.dom(C.QUERY.ARTICLE_ROUTER_TOUCH).touch(_onSection);
lng.dom(C.QUERY.SECTION_ROUTER_TAP).tap(_onSection);
lng.dom(C.QUERY.ARTICLE_ROUTER_TAP).tap(_onSection);
lng.dom(C.QUERY.ASIDE_ROUTER).touch(_onSection);
lng.dom(C.QUERY.MENU_ROUTER).touch(_onSection);
// lng.dom(QUERY.MENU_HREF).touch(_closeMenu);

// window.onhashchange = 
function _onSection(ev){
  el = lng.dom(this)
  var hash = el.data("view-section")
  
  hash = hash || location.hash.replace('#','')
  console.log('hash changedr' + hash  )
  if (hash && TEDx.Places[hash]) TEDx.Places[hash].enter()
}


}()
