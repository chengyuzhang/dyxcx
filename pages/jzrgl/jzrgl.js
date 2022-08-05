// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/jzrgl/jzrgl.js
Page({
  data: {
      isHas: true
  },
  onLoad: function (options) {

  },
  deleteFn(ev){
    let idx = ev.currentTarget.dataset.idx
    
    tt.showModal({
      title: '是否删除就诊人？',
      content: '您正在删除已绑定的就诊人',
      confirmText: '删除',
      confirmColor: '#576B95',
      success(res) {
        console.log("用户点击了" + (res.confirm ? "确定" : "取消"));
      },
      fail(err) {
        console.log(`showModal 调用失败`, err);
      },
    })
  },
  toCodePage(){
    tt.navigateTo({
      url: '/pages/jzm/jzm'
    })
  }
})