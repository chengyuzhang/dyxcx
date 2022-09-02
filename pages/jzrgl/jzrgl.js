// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/jzrgl/jzrgl.js
import { patientAbout } from '../../request/api.js'

Page({
  data: {
    isHas: true,
    jzrList: []
  },
  onLoad: function (options) {
    this.getPatientList()

    
    
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
  deletePatient(id){
    patientAbout.deletePatient({
      id
    }).then(res => {
      console.log('deletePatient-res', res)
      this.getPatientList()

      setTimeout(() => {
        tt.showToast({
          title: "删除就诊人成功",
          icon: 'none',
          duration: 2000,
          success(res) {
            console.log(res)
          },
          fail(res) {
            console.log("showToast 调用失败", res);
          },
        })
      }, 500)

    }).catch(err => {
      console.log('deletePatient-err', err)
    })
  },
  deleteFn(ev){
    let obj = ev.currentTarget.dataset.obj
    let _this = this
    tt.showModal({
      title: '是否删除就诊人？',
      content: '您正在删除已绑定的就诊人',
      confirmText: '删除',
      confirmColor: '#576B95',
      success(res) {
        console.log(res)
        if(res.confirm){
          _this.deletePatient(obj.id)
        }
        console.log("用户点击了" + (res.confirm ? "确定" : "取消"));
      },
      fail(err) {
        console.log(`showModal 调用失败`, err);
      },
    })
  },
  toCodePage(ev){
    let obj = ev.currentTarget.dataset.obj

    tt.navigateTo({
      url: `/pages/jzm/jzm?id=${obj.id}`
    })
  },
  toAddPage(){
    tt.navigateTo({
      url: '/pages/tjjzr/tjjzr'
    })
  }
})