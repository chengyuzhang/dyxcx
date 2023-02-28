const app = getApp()
import { index, newsAbout, areaAbout, noticeAbout, login } from '../../request/api.js'
// import { api } from '../../request/request.js'
console.log('app', app)
Page({
  data: {
    showSelectZone: false,
    tabIndex: 0,
    items: [
      {
        title: '专家介绍'
      },
      {
        title: '就诊须知'
      },
      {
        title: '孕妇学校'
      },
      {
        title: '医院简介'
      },
      {
        title: '医院动态'
      },
      {
        title: '院区位置'
      },
    ],
    ads: [],
    yydtList: [],
    yyxxList: [],
    ghxzDeatil: '',
    showGhxz: false,
    isShowOpacity: true
  },
  onLoad: async function () {
    console.log('isShowOpacity',  this.data.isShowOpacity)
    // await this.getToken()
    // this.getAds()
    // this.getYydtInfoList()
    // this.getYyxxInfoList()
    // this.getAreaList()
    // this.getGhxzDetails()
  },
  async onShow(){
    await this.getToken()
    this.getAds()
    this.getYydtInfoList()
    this.getYyxxInfoList()
    this.getAreaList()
    this.getGhxzDetails()
  },
  getAuthSetting(){
    app.getAuthSetting()
  },
  async getToken(){
    let _this = this
    let token = tt.getStorageSync('token')

    if(token) {
      _this.setData({
        isShowOpacity: false
      })
      return
    }
    let getCodeAndUserInfo = await app.getCodeAndUserInfo()

    return login.getToken({
      anonymousCode: getCodeAndUserInfo[0].anonymousCode,
      avatarUrl: getCodeAndUserInfo[1].userInfo.avatarUrl,
      city: getCodeAndUserInfo[1].userInfo.city,
      code: getCodeAndUserInfo[0].code,
      country: getCodeAndUserInfo[1].userInfo.country,
      gender: getCodeAndUserInfo[1].userInfo.gender,
      language: getCodeAndUserInfo[1].userInfo.language,
      nickName: getCodeAndUserInfo[1].userInfo.nickName,
      province: getCodeAndUserInfo[1].userInfo.province
    }).then(res => {
      if(res.data){
          tt.setStorageSync('token', res.data)
          _this.setData({
            isShowOpacity: false
          })
      }
    }).catch(err => {
        console.log('getToken', err)
    })
  },
  agreeGhxz(){
    this.setData({
      showGhxz: false
    })
  },
  getGhxzDetails(){
    noticeAbout.getGhxzDetails({

    }).then(res => {
      console.log('getGhxzDetails-res', res)
      this.setData({
        ghxzDeatil: res.data.content
      })
    }).catch(err => {
      console.log('getGhxzDetails-err', err)
    })
  },
  getAds(){
    index.getAds({
      spaceCode: 'SY-ZB'
    }).then(res => {
      console.log('getAds-res', res)
      this.setData({
        ads: res.data
      })
    }).catch(err => {
      console.log('getAds-err'. err)
    })
  },
  async getYydtInfoList(){
    await newsAbout.getInfoList({
      type: 2,
      pageNo: 1,
      pageSize: 5,
    }).then(res => {
      console.log('getYydtInfoList-res', res)
      this.setData({
        yydtList: res.data
      })
    }).catch(err => {
      console.log('getYydtInfoList-err'. err)
    })
  },
  async getYyxxInfoList(){
    await newsAbout.getInfoList({
      type: 1,
      pageNo: 1,
      pageSize: 5,
    }).then(res => {
      console.log('getYyxxInfoList-res', res)
      this.setData({
        yyxxList: res.data
      })
    }).catch(err => {
      console.log('getYyxxInfoList-err'. err)
    })
  },
  showSelectZoneFn(){
    this.setData({
      showSelectZone: false
    })
  },
  changeTab(ev){
    let idx = ev.currentTarget.dataset.idx
    this.setData({
      tabIndex: idx
    })
  },
  toMore(){
    if(this.data.tabIndex == 0){
      tt.navigateTo({
        url: `/pages/yydt/yydt`
      })
    }else{
      tt.navigateTo({
        url: `/pages/yfxx/yfxx`
      })
    }
  },
  selectZone(ev){
    let id = ev.currentTarget.dataset.id

    this.setData({
      showSelectZone: false
    })
    
    if(this.data.isHs){
      tt.navigateTo({
        url: `/pages/xzhy-hs/xzhy-hs?id=${id}`
      })

      this.setData({
        isHs: false
      })
    }else{
      tt.navigateTo({
        url: `/pages/xzks/xzks?id=${id}`
      })
    }
  },
  toJcjgPage(){
    tt.navigateTo({
      url: '/pages/jcjg/jcjg'
    })
  },
  orderRegister(){
    this.setData({
      showGhxz: true,
      showSelectZone: true
    })
  },
  toPage(ev){
    let idx = ev.currentTarget.dataset.idx
    let path = ''
    switch(idx){
      // case 0:
      //   this.setData({
      //     showGhxz: true,
      //     showSelectZone: true,
      //     isHs: true,
      //   })
      //   // path = '/pages/xzhy/xzhy'
      // break;
      case 0:
        path = '/pages/zjjs/zjjs'
      break;
      case 1:
        path = '/pages/jzxz/jzxz'
      break;
      case 2:
        path = '/pages/yfxx/yfxx'
      break;
      case 3:
        path = '/pages/yyjj/yyjj'
      break;
      case 4:
        path = '/pages/yydt/yydt'
      break;
      case 5:
        path = '/pages/yqwz/yqwz'
      break;
    }

    tt.navigateTo({
      url: path
    })
  },
  toDetailPage(obj){
  	tt.navigateTo({
      url: `/pages/wzxq/wzxq?id=${obj.detail.id}`
    })
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
})
