// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/ksys/ksys.js
import { doctotAbout } from '../../request/api.js'

Page({
  data: {

  },
  onLoad: function (options) {
    console.log(options)
    this.setData({
      officeId: options.id
    })

    this.getDoctorList()
  },
  getDoctorList(){
    doctotAbout.getDoctorList({
      officeId: this.data.officeId
    }).then(res => {
      console.log('getDoctorList-res', res)
      this.setData({
        doctorList: res.data
      })
    }).catch(err => {
      console.log('getDoctorList-err', err)
    })
  },
  toDoctorDetail(ev){
    let id = ev.currentTarget.dataset.id

    tt.navigateTo({
      url: `/pages/ysjsxq/ysjsxq?id=${id}`
    });
  },
})