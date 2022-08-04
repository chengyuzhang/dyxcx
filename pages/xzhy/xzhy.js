// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/xzhy/xzhy.js
Page({
  data: {
    timeShow: false,
    timeIndex: 0,
    tabStatus: 1,
    dateList: [
      {
        title: '周五',
        str: '07-05',
        status: '1'
      },
      {
        title: '周五',
        str: '07-05',
        status: '2'
      },
      {
        title: '周五',
        str: '07-05',
        status: '3'
      },
      {
        title: '周五',
        str: '07-05',
        status: '4'
      },
      {
        title: '周五',
        str: '07-05',
        status: '1'
      },
      {
        title: '周五',
        str: '07-05',
        status: '2'
      },
      {
        title: '周五',
        str: '07-05',
        status: '3'
      },
      {
        title: '周五',
        str: '07-05',
        status: '4'
      },
      {
        title: '周五',
        str: '07-05',
        status: '1'
      },
      {
        title: '周五',
        str: '07-05',
        status: '2'
      },
      {
        title: '周五',
        str: '07-05',
        status: '3'
      },
      {
        title: '周五',
        str: '07-05',
        status: '4'
      },
      {
        title: '周五',
        str: '07-05',
        status: '1'
      },
      {
        title: '周五',
        str: '07-05',
        status: '2'
      },
      {
        title: '周五',
        str: '07-05',
        status: '3'
      },
      {
        title: '周五',
        str: '07-05',
        status: '4'
      },
    ],
    timeList: [
      {
        time: '8:30-9:00'
      },
      {
        time: '8:30-9:00'
      },
      {
        time: '8:30-9:00'
      },
      {
        time: '8:30-9:00'
      },
      {
        time: '8:30-9:00'
      },
      {
        time: '8:30-9:00'
      },
      {
        time: '8:30-9:00'
      },
    ]
  },
  onLoad: function (options) {

  },

  changeTab(ev){
    let idx = ev.currentTarget.dataset.idx
    this.setData({
      tabIndex: idx,
      tabStatus: this.data.dateList[idx].status
    })
  },
  getTimeZone(ev){
    let idx = ev.currentTarget.dataset.idx
    console.log(idx)
    this.setData({
      timeIndex: idx
    })
    tt.navigateTo({
      url: `/pages/ghqr/ghqr`
    })
  },
  timeShowFn(){
    this.setData(
      {
        timeShow: !this.data.timeShow
      }
    )
  }
})