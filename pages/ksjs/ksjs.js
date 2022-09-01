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
      officeId: this.data.officeId,
      pageNo: 1,
      pageSize: 8
    }).then(res => {
      console.log('getDoctorList-res', res)
      this.setData({
        doctorList: res.data.records,
        total: res.data.total
      })
    }).catch(err => {
      console.log('getDoctorList-err', err)
    })
  },
  toPage(){
    tt.navigateTo({
      url: '/pages/xzhy/xzhy'
    });
  },
  toDoctorList(){
    tt.navigateTo({
      url: '/pages/ksys/ksys'
    });
  },
  toDoctorDetail(){
    tt.navigateTo({
      url: '/pages/ysjsxq/ysjsxq'
    });
  },
})