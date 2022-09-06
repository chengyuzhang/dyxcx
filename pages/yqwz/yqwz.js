// /Users/zhangchengyu/Workstation/dyxcx/pages/yqwz/yqwz.js
import { areaAbout } from '../../request/api.js'

Page({
  data: {

  },
  onLoad: function (options) {
    this.mapCtx = tt.createMapContext("myMap")
    this.getAreaList()
  },
  getAreaList(){
    areaAbout.getAreaList({

    }).then(res => {
      console.log('getAreaList-res', res)
      this.setData({
        areaList: res.data
      })
    }).catch(err => {
      console.log('getAreaList-err', err)
    })
  },
  toNav(ev){
    let obj = ev.currentTarget.dataset.obj
    this.mapCtx.openMapApp({
      longitude: Number(obj.longitude),
      latitude: Number(obj.latitude),
      destination: obj.name,
      success(res) {
        console.log("拉起导航地图成功", res);
      },
      fail(err) {
        console.log("拉起导航地图失败", err);
      },
    })
  }
})