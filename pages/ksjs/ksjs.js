// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/ksjs/ksjs.js
Page({
  data: {

  },
  onLoad: function (options) {

  },
  toPage(){
    tt.navigateTo({
      url: '/pages/xzhy/xzhy'
    });
  },
  toDoctorList(){
    tt.navigateTo({
      url: '/pages/ksys/ksys'
    });
  },
  toDoctorDetail(){
    tt.navigateTo({
      url: '/pages/ysjsxq/ysjsxq'
    });
  },
})