// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/wzxq/wzxq.js
import { newsAbout } from '../../request/api.js'

Page({
  data: {
    doctorAcademic: '',
    doctorName: '',
    doctorOffice: '',
    doctorPicture: '',
    content: '',
    updateTime: '',
    title: ''
  },
  onLoad: function (options) {
    this.setData({
      id: options.id
    })

    this.getInfoDetail()
  },
  
  getInfoDetail(){
    newsAbout.getInfoDetail({
      id: this.data.id
    }).then(res => {
      console.log('getInfoDetail-res', res)
       this.setData({
        doctorAcademic: res.data.doctorAcademic,
        doctorName: res.data.doctorName,
        doctorOffice: res.data.doctorOffice,
        doctorPicture: res.data.doctorPicture,
        content: res.data.content,
        updateTime: res.data.updateTime,
        title: res.data.title
      })
    }).catch(err => {
      console.log('getInfoDetail-err'. err)
    })
  },
})