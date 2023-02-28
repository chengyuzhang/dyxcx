// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/my/my.js
import { patientAbout, login } from '../../request/api.js'

Page({
	data: {
		showTabBar: true,
		nickName: '',
		headImgurl: '',
		peopleList: [
		]
  	},
	onLoad: function (options) {
		// this.getUserInfos()
		// this.getPatientList()
	},
	onShow(){
		this.getUserInfos()
		this.getPatientList()
	},
	getUserInfos(){
		login.getUserInfos({
		}).then(res => {
			console.log('getUserInfos-res', res)
			this.setData({
				nickName: res.data.nickName,
				headImgurl: res.data.headImgurl,
			})
		}).catch(err => {
			console.log('getUserInfos-err', err)
		})
	},
	getPatientList(){
		patientAbout.getPatientList({
		}).then(res => {
			console.log('getPatientList-res', res)
			let peopleList = res.data.map((item, index) => {
				switch(item.relation){
					case 1:
						item.relationName = '本人'
					break;
					case 2:
						item.relationName = '配偶'
					break;
					case 3:
						item.relationName = '子女'
					break;
					case 4:
						item.relationName = '父亲'
					break;
					case 5:
						item.relationName = '母亲'
					break;
					case 6:
						item.relationName = '其他'
					break;
				}
				return item
			})
			if(peopleList.length > 5){
				peopleList = peopleList.slice(0, 5)
				this.setData({
					peopleList
				})
			}else{
				this.setData({
					peopleList
				})
			}
		}).catch(err => {
			console.log('getPatientList-err', err)
		})
	},
	toJzrglPage(){
		tt.navigateTo({
			url: '/pages/jzrgl/jzrgl'
		})
	},
	toCodePage(ev){
		let obj = ev.currentTarget.dataset.obj
	
		tt.navigateTo({
		  url: `/pages/jzm/jzm?id=${obj.id}`
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