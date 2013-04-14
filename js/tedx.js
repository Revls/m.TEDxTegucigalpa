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
