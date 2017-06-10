// contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    site: { name: "默认地址", address: "默认地址", latitude: "默认经度", longitude:"默认维度"},
    dialog: {
      title: 'ddd',
      content: 'dd',
      hidden: true
    }
  },
  btn:function(){
    wx.chooseLocation({
      success:function(res){
        var name = res.name
        var address = res.address
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          name: name,
          address: address
        })
      },
      complete:function(res){
        var name = res.name
        var address = res.address
        var latitude = res.latitude
        var longitude = res.longitude
        // this.data.site.name = name
        // this.data.site.address = address
        // this.data.site.latitude = latitude
        // this.data.site.longitude = longitude

      }
    })
  },
  getLocation:function(){
    wx.getLocation({
      type:"wgs84",
      success: function(res) { 
        //回调函数给便令赋值问题
        // this.setData(
        //   {
        //     "dialog.title": "dialog.title",
        //     "dialog.content": "dialog.title",
        //     "dialog.hidden": false
        //   }
        // )
      },
    })
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy

        wx.openLocation({
          latitude: latitude,
          longitude: longitude,

        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})