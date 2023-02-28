
App({
  onLaunch: async function () {
    // this.getAuthSetting()
  },
  getAuthSetting(){
    tt.getSetting({
      success(res) {
        let bl = res.authSetting.hasOwnProperty('scope.userInfo')
        console.log('bl', bl)
        if(bl && !res.authSetting['scope.userInfo']){
          tt.openSetting({
            success: (res) => {
              console.log('openSetting-res', res)
              console.log("openSetting success");
            },
            fail: (err) => {
              console.log('openSetting-err', err)
              console.log("openSetting fail");
            },
            complete: (res) => {
              console.log("openSetting complete");
            },
          })
        }
      },
      fail(err) {
        console.log("getSetting 调用失败", err);
      },
    })
  },
  async getCodeAndUserInfo(){
    let _this = this
    let p1 = await new Promise((resolve, reject) => {
      tt.login({
        force: true,
        success(res) {
          console.log('res', res)
          resolve(res)
          // resolve('wAOWh2Zr2qXm8a7i')
        },
        fail(res) {
          // console.log(`login 调用失败`);
          reject(res)
        },
      })
    })

    let p2 = await new Promise((resolve, reject) => {
      tt.getUserInfo({
        withCredentials: true,
        success(res) {
          resolve(res)
        },
        fail(res) {
          reject(res)
          console.log(`getUserInfo 调用失败`)
        },
      })
    })
    return Promise.all([p1, p2])
    .then(res => {
      return res
    }).catch(err => {
      return err
      console.log('eeeerr', err)
    })
  },
  globalData: {
  }
})
