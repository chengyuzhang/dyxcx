// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/jzrgl/jzrgl.js
import { patientAbout } from '../../request/api.js'

Page({
  data: {
    isHas: true,
    jzrList: []
  },
  onLoad: function (options) {
    this.getPatientList()
    this.setData({
      id: options.id
    })
  },
  toPage(ev){
    let obj = ev.currentTarget.dataset.obj

    tt.setStorageSync('jzrInfo', JSON.stringify(obj))
    
    tt.redirectTo({
      url: `/pages/ghqr/ghqr?id=${this.id}`
    })
  },
  getPatientList(){
    patientAbout.getPatientList({
    }).then(res => {
      console.log('getPatientList-res', res)
      this.setData({
        jzrList: res.data
      })
    }).catch(err => {
      console.log('getPatientList-err', err)
    })
  },
  toCodePage(ev){
    let obj = ev.currentTarget.dataset.obj

    tt.navigateTo({
      url: `/pages/jzm/jzm?id=${obj.id}`
    })
  }
})