// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/components/navBar/navBar.js
Component({
  data: {
    currentIndex: ''
  },
  properties: {
    idx: Number || String
  },
  created(){
    this.setData({
      currentIndex: this.data.idx
    })
  },
  methods: {
		toNav(ev){
      let idx = ev.currentTarget.dataset.idx
			this.setData({
        currentIndex: idx
      })

			if(idx == 0){
				tt.navigateTo({
          url: '/pages/index/index'
        })
			}

			if(idx == 1){
				tt.navigateTo({
          url: '/pages/my/my'
        })
			}
		}
  }
})