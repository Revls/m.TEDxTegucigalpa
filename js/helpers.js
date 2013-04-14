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
