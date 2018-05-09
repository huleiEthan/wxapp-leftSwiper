// component/leftSwiperDel/index.js
Component({

  behaviors: [],

  properties: {
    btnWidth: { //按钮的总宽度 单位（rpx）
      type: Number,
      value: 180
    }, 
    itemHeight: { // 高度 单位（rpx）
      type: Number,
      value: 100
    }
  },

  data: {
    startX: 0,
    txtStyle: ''
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () { },

  moved: function () { },

  detached: function () { },

  ready: function() {
    this.initEleWidth();
  },

  externalClasses: ['left-swiper-class'],

  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  methods: {
    touchS: function (e) {
      if (e.touches.length == 1) {
        this.setData({
          //设置触摸起始点水平方向位置
          startX: e.touches[0].clientX
        });
      }
    },
    touchM: function (e) {
      if (e.touches.length == 1) {
        //手指移动时水平方向位置
        var moveX = e.touches[0].clientX;
        //手指起始点位置与移动期间的差值
        var disX = this.data.startX - moveX;
        var btnWidth = this.data.btnWidth;
        var txtStyle = "";
        if (disX == 0 || disX < 0) {//如果移动距离小于等于0，文本层位置不变
          txtStyle = "left:0px";
        } else if (disX > 0) {//移动距离大于0，文本层left值等于手指移动距离
          txtStyle = "left:-" + disX + "px";
          if (disX >= btnWidth) {
            //控制手指移动距离最大值为删除按钮的宽度
            txtStyle = "left:-" + btnWidth + "px";
          }
        }
        this.setData({
          txtStyle: txtStyle
        })
      }
    },

    touchE: function (e) {
      if (e.changedTouches.length == 1) {
        //手指移动结束后水平位置
        var endX = e.changedTouches[0].clientX;
        //触摸开始与结束，手指移动的距离
        var disX = this.data.startX - endX;
        var btnWidth = this.data.btnWidth;
        //如果距离小于删除按钮的1/2，不显示删除按钮
        var txtStyle = disX > btnWidth / 2 ? "left:-" + btnWidth + "px" : "left:0px";
        this.setData({
          txtStyle: txtStyle
        })
      }
    },
    //获取元素自适应后的实际宽度
    getEleWidth: function (w) {
      var real = 0;
      try {
        var res = wx.getSystemInfoSync().windowWidth;
        var scale = (750 / 2) / (w / 2);//以宽度750px设计稿做宽度的自适应
        // console.log(scale);
        real = Math.floor(res / scale);
        return real;
      } catch (e) {
        return false;
        // Do something when catch error
      }
    },
    initEleWidth: function () {
      var btnWidth = this.getEleWidth(this.data.btnWidth);
      this.setData({
        btnWidth: btnWidth
      });
    },
    hideSwiperBtn: function () {
      this.setData({
        txtStyle: "left:0px"
      })
    }
  }
})