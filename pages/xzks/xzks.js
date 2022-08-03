// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/xzks/xzks.js
Page({
  data: {
    iH: 0,
    tabIndex: 0,
    sideTabs: [
      {
        title: 1231
      },
      {
        title: 324324
      },
      {
        title: 232
      },
      {
        title: 234234
      },
      {
        title: 1231
      },
      {
        title: 3434
      },
      {
        title: 434543
      },
      {
        title: 76575
      },
      {
        title: 1231
      },
      {
        title: 324324
      },
      {
        title: 232
      },
      {
        title: 234234
      },
      {
        title: 1231
      },
      {
        title: 3434
      },
      {
        title: 434543
      },
      {
        title: 76575
      }
    ]
  },
  onLoad: function (options) {

  },

  toPage(){
    tt.navigateTo({
      url: `/pages/xzhy/xzhy`
    });
  },
  setElHeight(){
    let pageH = 0
    let top = 0
    let iH = 0
    let statusBarHeight = 0
    let _this = this
    tt.getSystemInfo({
      success(res) {
        pageH = res.windowHeight
        statusBarHeight = res.statusBarHeight
        // console.log("getSystemInfo 调用成功", res);
      }
    });

    const query = tt.createSelectorQuery();
    query.select(".side-tab").boundingClientRect(function (res) {
      top = res.top
      iH = pageH - top - statusBarHeight
      console.log('iH', iH)
      _this.setData({
        iH
      })
    });
    query.exec();
  },
  changeTab(ev){
    let idx = ev.currentTarget.dataset.idx
    this.setData({
      tabIndex: idx
    })
  },
  onReady(){
    this.setElHeight()
  }
})