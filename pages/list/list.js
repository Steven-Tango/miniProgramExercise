var goods = require('./data.js')
Page({
  data: {
    nTitle: '饿了么-唐杰', //设置默认值 
    isSortShow: false, //综合排序是否点开
    sortTitle: '综合排序',
    list: goods.list
  },
  onLoad: function (options) {
    this.setData({
      nTitle: options.name+'-唐杰1910070136',
    })
  },
  clickSort: function () {
    this.data.isSortShow = !this.data.isSortShow;
    this.setData({
      isSortShow: this.data.isSortShow
    });
  },
  chooseSort: function (e) {
    console.log(e);
    this.setData({
      sortTitle: e.target.dataset.title
    })
  }
})