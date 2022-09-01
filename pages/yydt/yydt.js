// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/yydt/yydt.js
import { newsAbout } from '../../request/api.js'

Page({
  data: {
    finished: false,
    loading: false,
    pageNo: 1,
    pageSize: 10,
    items: [
    ]
  },
  onLoad: function (options) {
    this.getYydtInfoList()
  },
  async getYydtInfoList(){
    this.setData({
      loading: true
    })
    return await newsAbout.getInfoList({
      type: 1,
      pageNo: this.data.pageNo,
      pageSize: this.data.pageSize,
    }).then(res => {
      let list = res.data
      if(list.length < this.data.pageSize){
        this.setData({
          finished: true
        })
      }
      this.setData({
        items: this.data.items.concat(list)
      })

      this.setData({
        loading: false,
        pageNo: ++ this.data.pageNo
      })
    }).catch(err => {
      console.log('getYydtInfoList-err'. err)
    })
  },
  lower(){
    console.log(this.data.loading)
    console.log(this.data.finished)
    if(this.data.loading || this.data.finished) return
    this.getYydtInfoList()
  },
  toDetailPage(obj){
  	tt.navigateTo({
      url: `/pages/wzxq/wzxq?id=${obj.detail.id}`
    })
  }
})