// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/jcjg/jcjg.js
Page({
  data: {
    activeIndex: 0,
    showList: false,
    list: [
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
  toPage(){
    tt.navigateTo({
      url: '/pages/jcjgxq/jcjgxq'
    })
  }
})