// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/yyjj/yyjj.js
Page({
  data: {
	  tabIndex: 0
  },
  onLoad: function (options) {

  },
  changeTab(ev){
    let idx = ev.currentTarget.dataset.idx

    this.setData({
      tabIndex: idx
    })
  }
})