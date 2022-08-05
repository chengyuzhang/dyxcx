const app = getApp()

Page({
  data: {
    showSelectZone: false,
    tabIndex: 0,
    items: [
      {
        title: '核酸检测'
      },
      {
        title: '专家介绍'
      },
      {
        title: '体检预约'
      },
      {
        title: '就诊须知'
      },
      {
        title: '孕妇学校'
      },
      {
        title: '医院简介'
      },
      {
        title: '医院动态'
      },
      {
        title: '院区位置'
      },
    ],
  },
  onLoad: function () {
    console.log('Welcome to Mini Code')
  },
  showSelectZoneFn(){
    this.setData({
      showSelectZone: false
    })
  },
  changeTab(ev){
    let idx = ev.currentTarget.dataset.idx
    this.setData({
      tabIndex: idx
    })
  },
  toMore(){
    if(this.data.tabIndex == 0){
      tt.navigateTo({
        url: `/pages/yydt/yydt`
      })
    }else{
      tt.navigateTo({
        url: `/pages/yfxx/yfxx`
      })
    }
  },
  selectZone(){
    tt.navigateTo({
      url: `/pages/xzks/xzks`
    })
  },
  orderRegister(){
    this.setData({
      showSelectZone: true
    })
  },
  toJcjgPage(){
    tt.navigateTo({
      url: '/pages/jcjg/jcjg'
    })
  },
  toPage(ev){
    let idx = ev.currentTarget.dataset.idx
    let path = ''
    switch(idx){
      case 0:
        path = '/pages/xzhy/xzhy'
      break;
      case 1:
        path = '/pages/zjjs/zjjs'
      break;
      case 2:
        path = '/pages/zjjs/zjjs'
      break;
      case 3:
        path = '/pages/jzxz/jzxz'
      break;
      case 4:
        path = '/pages/yfxx/yfxx'
      break;
      case 5:
        path = '/pages/yyjj/yyjj'
      break;
      case 6:
        path = '/pages/yydt/yydt'
      break;
      case 7:
        path = '/pages/yqwz/yqwz'
      break;
    }

    tt.navigateTo({
      url: path
    })
  },
  toDetailPage(){
  	tt.navigateTo({
      url: '/pages/wzxq/wzxq'
    })
  }
})
