// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/jcjg/jcjg.js
Page({
  data: {
    tabIndex: 0,
    activeIndex: 0,
    showList: false,
    list1: [
      {},
      {},
    ],
    list2: [
      {},
      {},
    ],
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
  changeTab(ev){
    let idx = ev.currentTarget.dataset.idx
    this.setData({
      tabIndex: idx
    })
  }
})