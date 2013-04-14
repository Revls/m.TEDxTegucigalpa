TEDx.setPlace('schedule', (function (){
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
