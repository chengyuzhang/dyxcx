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
		this.$router.push({
			path: '/jzrgl'
		})
	},
	toAddPage(){
		this.$router.push({
			path: '/tjjzr'
		})
	},
	toPage(idx){
		let path = ''
		switch(idx){
			case 0:
				path = '/jzjl'
			break;
			case 1:
				path = '/yyjl'
			break;
			case 2:
				path = '/jcjg'
			break;
			case 3:
				path = '/tjbg'
			break;
		}

		this.$router.push({
			path
		})
	},
})