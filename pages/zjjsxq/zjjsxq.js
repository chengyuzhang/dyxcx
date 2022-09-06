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
    headPic: '',
    ksList: []
  },
  onLoad: function (options) {
    this.setData({
      id: options.id
    })

    this.getDoctorDetail()
    this.getDoctorDuty()
  },
  async getDoctorDuty(){
    await doctotAbout.getDoctorDuty({
      id: this.data.id
    }).then(res => {
      console.log('getDoctorDuty-res', res)

      this.setData({
        ksList: res.data
      })
    }).catch(err => {
      console.log('getDoctorDuty-err', err)
    })
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
        headPic: res.data.headPic
      })

    }).catch(err => {
      console.log('getDoctorDetail-err', err)
    })
  },
  toPage(ev){
    let id = ev.currentTarget.dataset.id

    tt.redirectTo({
      url: `/pages/xzhy/xzhy?id=${id}`
    });
  },
})