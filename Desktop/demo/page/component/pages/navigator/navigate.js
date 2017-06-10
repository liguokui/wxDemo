Page({
  onLoad: function(options) {
    console.log(options)
    this.setData({
      title: options.title,
      tt:options.tt
    })
  }
})
