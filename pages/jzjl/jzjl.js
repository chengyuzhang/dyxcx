// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/jzjl/jzjl.js
Page({
  data: {
    activeIndex: 0,
    showList: false,
	items: [
		{},
		{},
		{},
		{},
	]
  },
  onLoad: function (options) {

  },
  showListFn(){
    this.setData({
      showList: true
    })
  },
  getItem(ev){
    let idx = ev.currentTarget.dataset.idx
    this.setData({
      activeIndex: idx,
      showList: false
    })
  },
})