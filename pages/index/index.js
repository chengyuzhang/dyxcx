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

  },
  selectZone(){
    tt.navigateTo({
      url: `/pages/xzks/xzks`
    });
  },
  orderRegister(){
    this.setData({
      showSelectZone: true
    })
  },
  toJcjgPage(){},
  toPage(ev){
    let idx = ev.currentTarget.dataset.idx
    let path = ''
    switch(idx){
      case 0:
        path = '/xzhy'
      break;
      case 1:
        path = '/zjjs'
      break;
      case 2:
        path = '/zjjs'
      break;
      case 3:
        path = '/jzxz'
      break;
      case 4:
        path = '/yfxx'
      break;
      case 5:
        path = '/yyjj'
      break;
      case 6:
        path = '/yydt'
      break;
      case 7:
        path = '/yqwz'
      break;
    }

    this.$router.push({
      path
    })
  },
})
