// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/ksjs/ksjs.js
import { officeAbout, doctotAbout } from '../../request/api.js'

Page({
  data: {
    areaName: '',
    name: '',
    skill: '',
    intro: '',
    total: '',
    doctorList: []
  },
  onLoad: function (options) {
    console.log(options)
    this.setData({
      officeId: options.id
    })
    
		this.getOfficeDetail()
		this.getDoctorList()
  },
  getOfficeDetail(){
    officeAbout.getOfficeDetail({
      officeId: this.data.officeId
    }).then(res => {
      console.log('getOfficeDetail-res', res)
      this.areaName = res.data.areaName
      this.name = res.data.name
      this.skill = res.data.skill
      this.intro = res.data.intro
      
      this.setData({
        areaName: res.data.areaName,
        name: res.data.name,
        skill: res.data.skill,
        intro: res.data.intro
      })
    }).catch(err => {
      console.log('getOfficeDetail-err', err)
    })
  },
  getDoctorList(){
    doctotAbout.getDoctorList({
      officeId: this.data.officeId
    }).then(res => {
      console.log('getDoctorList-res', res)
      this.setData({
        doctorList: res.data,
        total: res.data.length
      })
    }).catch(err => {
      console.log('getDoctorList-err', err)
    })
  },
  toPage(){
    tt.redirectTo({
      url: '/pages/index/index'
    });
  },
  toDoctorList(){
    tt.navigateTo({
      url: `/pages/ksys/ksys?id=${this.data.officeId}`
    });
  },
  toDoctorDetail(ev){
    let id = ev.currentTarget.dataset.id

    tt.navigateTo({
      url: `/pages/ysjsxq/ysjsxq?id=${id}`
    });
  },
})