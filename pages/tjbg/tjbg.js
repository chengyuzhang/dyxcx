// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/jcjg/jcjg.js
import { appointAbout, patientAbout } from '../../request/api.js'

Page({
  data: {
    activeIndex: 0,
    showList: false,
    jzrList: [],
    list: [
      {},
      {},
    ]
  },
  onLoad: async function (options) {
    await this.getLastAppointPatient()
    this.getPatientList()
  },
  showListFn(){
    this.setData({
      showList: true
    })
  },
  getItem(ev){
    let idx = ev.currentTarget.dataset.idx
    
    this.setData({
      activeIndex: idx,
      showList: false,
      jzrInfo: this.data.jzrList[idx],
      jzrInfo: null,
      appointList: [],
      finished: false,
      loading: false,
      pageNo: 1
    })
    this.getAppointList()
  },
  getPatientList(){
    patientAbout.getPatientList({
    }).then(res => {
      console.log('getPatientList-res', res)
      this.setData({
        jzrList: res.data
      })
      this.data.jzrList.forEach((item, index) => {
        if(item.name == this.data.jzrInfo.name){
          this.setData({
            activeIndex: index
          })
        }
      })
    }).catch(err => {
      console.log('getPatientList-err', err)
    })
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
  toPage(){
    tt.navigateTo({
      url: '/pages/jcjgxq/jcjgxq'
    })
  }
})