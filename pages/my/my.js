// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/my/my.js
Page({
	data: {
		peopleList: [
			{
				name: '星星'
			},
			{
				name: ''
			},
			{
				name: ''
			},
			{
				name: ''
			},
			{
				name: ''
			},
		]
  	},
	onLoad: function (options) {

	},

	toJzrglPage(){
		tt.navigateTo({
			url: '/pages/jzrgl/jzrgl'
		})
	},
	toAddPage(){
		tt.navigateTo({
			url: '/pages/tjjzr/tjjzr'
		})
	},
	toPage(ev){
		let idx = ev.currentTarget.dataset.idx
		let path = ''
		
		switch(idx){
			case '0':
				path = '/pages/jzjl/jzjl'
			break;
			case '1':
				path = '/pages/yyjl/yyjl'
			break;
			case '2':
				path = '/pages/jcjg/jcjg'
				console.log(23123)
			break;
			case '3':
				path = '/pages/tjbg/tjbg'
			break;
		}

		tt.navigateTo({
			url: path
		})
	},
})