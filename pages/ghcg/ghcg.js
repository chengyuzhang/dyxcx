// /Users/zhangchengyu/Workstation/dyxcx/pages/ghcg/ghcg.js
import { appointAbout } from '../../request/api.js'

Page({
  data: {
    id: '',
    tradeNo: '',
    areaName: '',
    prePrice: '',
    queueNo: '',
    tradeStatus: ''
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

      this.setData({
        areaName: res.data.areaName,
        tradeNo: res.data.tradeNo,
        prePrice: res.data.prePrice,
        queueNo: res.data.queueNo,
        tradeStatus: res.data.tradeStatus
      })
      
    }).catch(err => {
      console.log('getAppointDetail-err', err)
    })
  },
  toPage(ev){
    let idx = ev.currentTarget.dataset.idx

    if(idx == 0){
      tt.redirectTo({
        url: `/pages/index/index`
      })
    }else{
      tt.navigateTo({
        url: `/pages/yyjl/yyjl`
      })
    }
  }
})