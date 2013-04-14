!function (exports){
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

