// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/yyjl/yyjl.js
import { appointAbout, patientAbout } from '../../request/api.js'

Page({
  data: {
    loading: false,
    finished: false,
    activeIndex: 0,
    showList: false,
    showDialog: false,
    patientId: '',
    jzrList: [],
    appointList: [],
    pageNo: 1,
    pageSize: 5,
    jzrInfo: null
  },
  onLoad: async function (options) {
    await this.getLastAppointPatient()
    this.getPatientList()
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
  toPage(ev){
    console.log('ev', ev)
    tt.navigateTo({
      url: '/pages/yyjlxq/yyjlxq'
    })
  },
  showListFn(){
    console.log(111)
    this.setData({
      showList: true
    })

    console.log('this.data.showList', this.data.showList)
  },
  cancelOrder(ev){
    let idx = ev.currentTarget.dataset.idx
    
    tt.showModal({
      title: '确认要取消预约？',
      content: '您正在取消“儿内科主任医师”的预约 ',
      cancelText: '不取消',
      confirmText: '取消预约',
      confirmColor: '#576B95',
      success(res) {
        console.log("用户点击了" + (res.confirm ? "确定" : "取消"));
      },
      fail(err) {
        console.log(`showModal 调用失败`, err);
      },
    })
    return false
  },
})