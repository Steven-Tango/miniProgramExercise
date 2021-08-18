// pages/my/my.js
Page({
  data: {
    headImg: '',
    succseeImg: ''
  },
  chooseImg: function () {
    wx.chooseImage({
      count: 1,
      success: res => {
        console.log(res)
        this.setData({
          headImg:res.tempFilePaths[0]
        })
      },
      fail:err=>{
        console.error(err)
      }
    })
  },
  //上传后的图片放到存储
  upLoadImg:function(){
    if(!this.data.headImg){
      wx.showToast({
        title: '未上传图片',
        icon:'error',
        duration:2000
      })
    }
    let imgString = new Date().getTime();
    wx.cloud.init()
    wx.cloud.uploadFile({
      cloudPath:"head"+imgString+".jpg",
      filePath:this.data.headImg,
      success:res=>{
        console.log(res)
        wx.showToast({
          title: '上传成功',
        })
        this.setData({
          succseeImg:res.fileID
        })
      }
    })
  }
})