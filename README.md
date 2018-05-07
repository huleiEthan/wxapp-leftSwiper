# wxapp-leftSwiper

> 微信小程序---左滑显示按钮组件

## document

``` bash
#index.json
	"usingComponents": {
		"left-swiper": "../components/leftSwiper/index"
	}

# index.wxml
	<view wx:for="{{list}}"  wx:key="{{index}}"  class="item">
		<left-swiper list="{{list}}" btnWidth="{{360}}">
			<view slot="left-swiper-content" class="txt">
				<image class="item-icon" mode="widthFix" src="{{item.icon}}"></image>{{item.txt}}
			</view>
			<view slot="left-swiper-btn">
				<view data-index="{{index}}" bindtap="delItem" class="inner del">删除</view>
				<view data-index="{{index}}" bindtap="delItem" class="inner fav">收藏</view>
			</view>
		</left-swiper>
	</view>
```

#效果图
![mahua](http://a3767c8e05b9af00df2d.b0.upaiyun.com/apicloud/05e36d4e5e46fddf6a8e42e47ba99d35.gif)
forked from demi520/wxapp-leftSwiperDel https://github.com/demi520/wxapp-leftSwiperDel
