TEDx.setPlace('timeline', (function(){
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
