// pages/order/order.js
Page({
  data: {
    //当前切换页面
    activeItem: 0,
    orderList: []
  },
  changeItem: function (e) {
    let active = e.target.dataset.act;
    // console.log(active)
    this.setData({
      activeItem: active
    })
    let w = {};
    if (active == 1) {
      w = {
        status: "待消费"
      }
    } else if (active == 2) {
      w = {
        status: "待评价"
      }
    } else if (active == 3) {
      w = {
        status: "退款"
      }
    }
    this.getList(w)
  },
  /* 页面加载时候所要做的执行的方法 */
  onLoad: function () {
    //第一步：初始化
    wx.cloud.init();
    //第六步：获取列表方法
    this.getList();
  },
  /* 获取列表方法 */
  getList: async function (w) {
    //第二步：打开数据库
    const db = wx.cloud.database();
    //第三步：链接order数据库
    const order_db = db.collection("order")
    //第四步：根据传入的where条件查询数据
    let res = {}; //定义一个空对象，来存储数据库中所拿到的数据
    if (!w) {
      res = await order_db.get();
    } else {
      res = await order_db.where(w).get();
    }
    console.log(res);
    //第五步：将获取到的数据赋给orderList
    this.setData({
      orderList: res.data
    })
  }
})