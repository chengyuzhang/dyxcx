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
    this.getAppointList()
  },
  getAppointList(){
    this.setData({
      loading: true
    })
    appointAbout.getAppointList({
      patientId: this.data.jzrInfo.id,
      pageNo: this.data.pageNo,
      pageSize: this.data.pageSize,
    }).then(res => {
      console.log('getAppointList-res', res)

      let list = res.data.map((item, index) => {
        let status = item.tradeStatus

        if(status == 1){
          item.statusStr = '预约成功'
        }
        if(status == 2){
          item.statusStr = '已取消'
        }
        return item
      })

      if(list.length < this.data.pageSize){
        this.setData({
          finished: true
        })
      }
      this.setData({
        appointList: this.data.appointList.concat(list)
      })

      this.setData({
        loading: false,
        pageNo: ++ this.data.pageNo
      })

    }).catch(err => {
      console.log('getAppointList-err', err)
    })
  },
  lower(){
    console.log(this.data.loading)
    console.log(this.data.finished)
    if(this.data.loading || this.data.finished) return
    this.getAppointList()
  },
  getItem(ev){
    let idx = ev.currentTarget.dataset.idx
    
    this.setData({
      activeIndex: idx,
      showList: false,
      jzrInfo: this.data.jzrList[idx],
      appointList: [],
      finished: false,
      loading: false,
      pageNo: 1
    })
    this.getAppointList()
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
    tt.navigateTo({
      url: '/pages/yyjlxq/yyjlxq'
    })
  },
  toXzhyPage(){
    tt.redirectTo({
      url: '/pages/index/index'
    })
  },
  showListFn(){
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