// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/ysjsxq/ysjsxq.js
import { doctotAbout } from '../../request/api.js'

Page({
  data: {
    id: '',
    academic: '',
    name: '',
    areaName: '',
    skill: '',
    intro: '',
    officeName: '',
    headPic: ''
  },
  onLoad: function (options) {
    this.setData({
      id: options.id
    })

    this.getDoctorDetail()
  },
  async getDoctorDetail(){
    await doctotAbout.getDoctorDetail({
      id: this.data.id
    }).then(res => {
      console.log('getDoctorDetail-res', res)

      this.setData({
        academic: res.data.academic,
        name: res.data.name,
        areaName: res.data.areaName,
        skill: res.data.skill,
        intro: res.data.intro,
        officeName: res.data.officeName,
        headPic: res.data.headPic,
        officeId: res.data.officeId
      })

    }).catch(err => {
      console.log('getDoctorDetail-err', err)
    })
  },
  toPage(){
    tt.redirectTo({
      url: `/pages/xzhy/xzhy?id=${this.data.officeId}`
    });
  },
})