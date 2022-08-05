// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/yydt/yydt.js
Page({
  data: {
    items: [
        {},{},{},{},{},{},{},{}
    ]
  },
  onLoad: function (options) {

  },
  toDetailPage(e){

    console.log('eee', e)
	  tt.navigateTo({
      url: '/pages/wzxq/wzxq'
    })
  }
})