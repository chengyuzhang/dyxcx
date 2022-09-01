// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/xzks/xzks.js
const util= require('../../util/util.js')
import { index, officeAbout, areaAbout } from '../../request/api.js'

Page({
  data: {
    iH: 0,
    tabIndex: 0,
    sideTabs: [
      {
        title: 1231
      },
      {
        title: 324324
      },
      {
        title: 232
      },
      {
        title: 234234
      },
      {
        title: 1231
      },
      {
        title: 3434
      },
      {
        title: 434543
      },
      {
        title: 76575
      },
      {
        title: 1231
      },
      {
        title: 324324
      },
      {
        title: 232
      },
      {
        title: 234234
      },
      {
        title: 1231
      },
      {
        title: 3434
      },
      {
        title: 434543
      },
      {
        title: 76575
      }
    ],
    showSelectZone: false,
    childrenList: [],
    areaList: [],
    picture: '',
    name: '',
    address: ''

  },
  onLoad: function (options) {
    this.setData({
      id: options.id
    })

    this.getOfficeTree()
    this.getAreaList()
  },
  showSelectZoneFn(){
    this.setData({
      showSelectZone: true
    })
  },
  selectZone(ev){
    let id = ev.currentTarget.dataset.id

    tt.redirectTo({
      url: `/pages/xzks/xzks?id=${id}`
    })
  },
  getAreaList(){
    areaAbout.getAreaList({

    }).then(res => {
      console.log('getAreaList-res', res)
      this.setData({
        areaList: res.data
      })
      this.getAreaInfo()
    }).catch(err => {
      console.log('getAreaList-err', err)
    })
  },
  getAreaInfo(){
    let area = this.data.areaList.filter((item, index) => {
      return item.id == this.data.id
    })
    console.log('area', area)
    this.setData({
      name: area[0].name,
      address: area[0].address,
      picture: area[0].picture
    })

    console.log(this.data.picture)
  },
  getOfficeTree(){
    officeAbout.getOfficeTree({
      areaId: this.data.id
    }).then(res => {
      console.log('getOfficeTree-res', res)

      this.setData({
        sideTabs: res.data,
        childrenList: res.data[0].children
      })

      setTimeout(() => {
        this.setElHeight()
      }, 500)
      console.log('d',this.data.childrenList)
    }).catch(err => {
      console.log('getOfficeTree-err', err)
    })
  },
  toPage(){
    tt.navigateTo({
      url: `/pages/xzhy/xzhy`
    });
  },
  setElHeight(){
    let pageH = 0
    let top = 0
    let iH = 0
    let statusBarHeight = 0
    let _this = this
    tt.getSystemInfo({
      success(res) {
        pageH = res.windowHeight
        statusBarHeight = res.statusBarHeight
        // console.log("getSystemInfo 调用成功", res);
      }
    });

    const query = tt.createSelectorQuery();
    query.select(".side-tab").boundingClientRect(function (res) {
      top = res.top
      iH = pageH - top - statusBarHeight
      console.log('iH', iH)
      _this.setData({
        iH
      })
    });
    query.exec();
  },
  changeTab(ev){
    let idx = ev.currentTarget.dataset.idx
    this.setData({
      tabIndex: idx,
      childrenList: this.data.sideTabs[idx].children
    })
  },
  onReady(){
  }
})