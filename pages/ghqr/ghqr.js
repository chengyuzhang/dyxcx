// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/ghqr/ghqr.js
import { appointAbout, patientAbout } from '../../request/api.js'

Page({
  data: {
    clinicDate: '',
    startTime: '',
    endTime: '',
    areaName: '',
    officeName: '',
    clinicName: '',
    skill: '',
    jzrInfo: null
  },
  onLoad: function (options) {
    this.setData({
      id: options.id
    })

    this.appointPreview()

    let jzrInfo = tt.getStorageSync('jzrInfo') || null
    this.setData({
      jzrInfo: JSON.parse(jzrInfo)
    })

		if(!this.data.jzrInfo){
			this.getLastAppointPatient()
		}
  },
  async getLastAppointPatient(){
    await patientAbout.getLastAppointPatient({
    }).then(res => {
      console.log('getLastAppointPatient-res', res)
      if(res.data){
        this.setData({
          jzrInfo: res.data
        })
      }
    }).catch(err => {
      console.log('getLastAppointPatient-err', err)
    })
  },
  saveAppoint(){
    appointAbout.saveAppoint({
      dutyTimeId: this.data.id,
      patientId: this.data.jzrInfo.id
    }).then(res => {
      console.log('saveAppoint-res', res)
      
      tt.navigateTo({
        url: `/pages/ghcg/ghcg?id=${res.data.id}`
      })
    }).catch(err => {
      console.log('saveAppoint-err', err)
    })
  },
  appointPreview(){
    appointAbout.appointPreview({
      dutyTimeId: this.data.id
    }).then(res => {
      console.log('appointPreview-res', res)

      this.setData({
        clinicDate: res.data.clinicDate,
        startTime: res.data.startTime,
        endTime: res.data.endTime,
        areaName: res.data.areaName,
        officeName: res.data.officeName,
        clinicName: res.data.clinicName,
        skill: res.data.skill
      })

    }).catch(err => {
      console.log('appointPreview-err', err)
    })
  },
  toChange(){
    tt.redirectTo({
      url: `/pages/jzrlist/jzrlist?id=${this.data.id}`
    })
  },
  toPage(){
    tt.navigateTo({
      url: `/pages/ghxz/ghxz`
    })
  },
  toAddPage(){
    tt.navigateTo({
      url: '/pages/tjjzr/tjjzr'
    })
  }
})