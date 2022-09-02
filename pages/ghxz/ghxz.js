// c:\Users\cyzha\Workstation\dyxcx\pages\ghxz\ghxz.js
import { noticeAbout } from '../../request/api.js'

Page({
  data: {
    data: ''
  },
  onLoad: function (options) {
    this.getGhxzDetails()
  },
  getGhxzDetails(){
    noticeAbout.getGhxzDetails({
    }).then(res => {
      console.log('getGhxzDetails-res', res)
      this.setData({
        data: res.data
      })
    }).catch(err => {
      console.log('getGhxzDetails-err'. err)
    })
  }
})