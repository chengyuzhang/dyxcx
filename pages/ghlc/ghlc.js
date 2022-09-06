// /Users/zhangchengyu/Workstation/dyxcx/pages/ghlc/ghlc.js
import { noticeAbout } from '../../request/api.js'

Page({
  data: {
    id: '',
    data: {}
  },
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
    this.getJzxzDetails()
  },
  getJzxzDetails(){
    noticeAbout.getJzxzDetails({
      id: this.data.id
    }).then(res => {
      console.log('getJzxzDetails-res', res)
      this.setData({
        data: res.data
      })
    }).catch(err => {
      console.log('getJzxzDetails-err'. err)
    })
  }
})