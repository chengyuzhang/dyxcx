// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/yyjl/yyjl.js
Page({
  data: {

  },
  onLoad: function (options) {

  },
  toPage(ev){
    console.log('ev', ev)
    tt.navigateTo({
      url: '/pages/yyjlxq/yyjlxq'
    })
  },

  cancelOrder(ev){
    let idx = ev.currentTarget.dataset.idx
    
    tt.showModal({
      title: '确认要取消预约？',
      content: '您正在取消“儿内科主任医师”的预约 ',
      cancelText: '不取消',
      confirmText: '取消预约',
      confirmColor: '#576B95',
      success(res) {
        console.log("用户点击了" + (res.confirm ? "确定" : "取消"));
      },
      fail(err) {
        console.log(`showModal 调用失败`, err);
      },
    })
    return false
  },
})