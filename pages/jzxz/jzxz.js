// /Users/zhangchengyu/Workstation/dyxcx/pages/jzxz/jzxz.js
import { noticeAbout } from '../../request/api.js'

Page({
  data: {
    jzxzList: [],
  },
  onLoad: function (options) {
    this.getJzxzList()
  },
  getJzxzList(){
    noticeAbout.getJzxzList({
    }).then(res => {
      console.log('getJzxzList-res', res)
      this.setData({
        jzxzList: res.data
      })
    }).catch(err => {
      console.log('getJzxzList-err'. err)
    })
  },
  toPage(ev){
    let id = ev.currentTarget.dataset.id
    let path = ''

    switch(id){
      case 1:
        path = `/pages/ghlc/ghlc?id=${id}`
      break;
    }
    tt.navigateTo({
      url: path
    })
  }
})