// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/yyjlxq/yyjlxq.js
import { appointAbout } from '../../request/api.js'

Page({
  data: {
    id: '',
    patientName: '',
    clinicName: '',
    areaName: '',
    officeName: '',
    startTime: '',
    endTime: '',
    clinicDate: '',
    prePrice: '',
    tradeNo: '',
    canCancelTime: '',
    createTime: '',
    statusStr: '',
    queueNo: ''
  },
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
    this.getAppointDetail()
  },
  getAppointDetail(){
    appointAbout.getAppointDetail({
      id: this.data.id
    }).then(res => {
      console.log('getAppointDetail-res', res)

      let status = res.data.tradeStatus

      if(status == 1){
        this.setData({
          statusStr: '预约成功'
        })
      }
      if(status == 2){
        this.setData({
          statusStr: '已取消'
        })
      }

      this.setData({
        areaName: res.data.areaName,
        startTime: res.data.startTime,
        endTime: res.data.endTime,
        tradeNo: res.data.tradeNo,
        officeName: res.data.officeName,
        patientName: res.data.patientName,
        clinicName: res.data.clinicName,
        prePrice: res.data.prePrice,
        clinicDate: res.data.clinicDate,
        tradeStatus: res.data.tradeStatus,
        canCancelTime: res.data.canCancelTime,
        createTime: res.data.createTime,
        queueNo: res.data.queueNo
      })
    }).catch(err => {
      console.log('getAppointDetail-err', err)
    })
  },
  cancelOrder(){
    let _this = this

    tt.showModal({
      title: '确认要取消预约？',
      content: `您正在取消“${this.data.officeName}${this.data.clinicName}”的预约`,
      cancelText: '不取消',
      confirmText: '取消预约',
      confirmColor: '#576B95',
      success(res) {
        if(res.confirm){
          _this.cancelAppoint()
        }
        console.log("用户点击了" + (res.confirm ? "确定" : "取消"));
      },
      fail(err) {
        console.log(`showModal 调用失败`, err);
      },
    })
    return false
  },
  cancelAppoint(){
    appointAbout.cancelAppoint({
      id: this.data.id
    }).then(res => {
      console.log('cancelAppoint-res', res)
      tt.redirectTo({
        url: '/pages/yyjl/yyjl'
      })
    }).catch(err => {
      console.log('cancelAppoint-err', err)
    })
  },
})