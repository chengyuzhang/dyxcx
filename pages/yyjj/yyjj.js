// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/yyjj/yyjj.js
import { areaAbout } from '../../request/api.js'

Page({
  data: {
    tabIndex: 0,
    id: 2,
    intro: '',
    picture: ''
  },
  onLoad: function (options) {
		this.getAreaDetail()

  },
  changeTab(ev){
    let idx = ev.currentTarget.dataset.idx

    this.setData({
      tabIndex: idx
    })

    if(idx == 0){
      this.setData({
        id: 2
      })
    }else{
      this.setData({
        id: 1
      })
    }
    this.getAreaDetail()
  },
  getAreaDetail(){
    areaAbout.getAreaDetail({
      id: this.data.id
    }).then(res => {
      console.log('getAreaDetail-res', res)
      
      this.setData({
        intro: res.data.intro,
        picture: res.data.picture
      })
    }).catch(err => {
      console.log('getAreaDetail-err', err)
    })
  },
})