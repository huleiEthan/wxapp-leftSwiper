// pages/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.tempData();
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
  
  },

  //测试临时数据
  tempData: function () {
    var list = [
      {
        txtStyle: "",
        icon: "/images/icon0.png",
        txt: "测试数据"
      },
      {
        txtStyle: "",
        icon: "/images/icon6.png",
        txt: "微信小程序"
      },
      {
        txtStyle: "",
        icon: "/images/icon1.png",
        txt: "圣诞老人是爸爸，顺着烟囱往下爬，礼物塞满圣诞袜，平安糖果一大把"
      },
      {
        txtStyle: "",
        icon: "/images/icon2.png",
        txt: "圣诞到来，元旦还会远吗？在圣诞这个日子里"
      },
      {
        txtStyle: "",
        icon: "/images/icon3.png",
        txt: "圣诞节(Christmas或Cristo Messa ),译名为“基督弥撒”。"
      },
      {
        txtStyle: "",
        icon: "/images/icon4.png",
        txt: "一年一度的圣诞节即将到来,姑娘们也纷纷开始跑趴了吧!"
      },
      {
        txtStyle: "",
        icon: "/images/icon5.png",
        txt: "圣诞节(Christmas或Cristo Messa ),译名为“基督弥撒”。"
      },
      {
        txtStyle: "",
        icon: "/images/icon2.png",
        txt: "你的圣诞节礼物准备好了吗?"
      },
      {
        txtStyle: "",
        icon: "/images/icon3.png",
        txt: "一年一度的圣诞节即将到来,姑娘们也纷纷开始跑趴了吧!"
      },
      {
        txtStyle: "",
        icon: "/images/icon4.png",
        txt: "圣诞到来，元旦还会远吗？"
      },
      {
        txtStyle: "",
        icon: "/images/icon5.png",
        txt: "记下这一刻的心情"
      }
    ];

    this.setData({
      list: list
    });
  },
  //点击删除按钮事件
  delItem: function (e) {
    //获取列表中要删除项的下标
    var index = e.target.dataset.index;
    var list = this.data.list;
    //移除列表中下标为index的项
    list.splice(index, 1);
    //更新列表的状态
    this.setData({
      list: list
    });
  },
})