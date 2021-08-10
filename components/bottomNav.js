Component({
  /* 组件属性列表 */
  properties: {
    current: {
      //current属性实在被调用时写入组件里面的属性
      //该属性值必须时String类型的值，没有写默认值时首页
      type: String,
      value: "首页"
    }
  },
  /* 组件的初始数据 */
  data: {
    navList: [{
        "name": "首页",
        "pagePath": "/pages/index/index",
        "imgPath": "/img/icon-1.png",
        "selectedImgPath": "/img/icon-choose-1.png"
      },
      {
        "name": "订单",
        "pagePath": "/pages/order/order",
        "imgPath": "/img/icon-2.png",
        "selectedImgPath": "/img/icon-choose-2.png"
      },
      {
        "name": "我的",
        "pagePath": "/pages/my/my",
        "imgPath": "/img/icon-3.png",
        "selectedImgPath": "/img/icon-choose-3.png"
      }
    ]
  },
  /* 组件的方法列表 */
})