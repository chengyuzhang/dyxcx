// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/xzhy/xzhy.js
const util= require('../../util/util.js')
import { officeAbout } from '../../request/api.js'

Page({
  data: {
    swList: [],
    xwList: [],
    clinicDate: '',
    areaAddress: '',
    areaName: '',
    officeName: '',
    officeId: 1,
    showCalendar: false,
    remainTime: 0,
    targetDay: '',
    // activeIndex: 3,
    orderDate: [
    ],
    year: '',
    month: '',
    daysNum: 0,
    weekDay: 0,
    timeShow: false,
    timeIndex: 0,
    date: '',
    minDate: new Date(2022, 9, 1),
    maxDate: new Date(2022, 10, 31),
    tabIndex: 0,
    tabStatus: 1,
    dateList: [
    ],
    timeList: [
    ]
  },
  onLoad: async function (options) {
    this.setData({
      officeId: options.id
    })

    await this.getDutyDate()
    this.formatOrderDate()
  },
  formatOrderDate(){
    let orderDate = this.data.dateList.map((item, index) => {
			let splitDate = item.date.split('-')
			item.year = splitDate[0]
			item.month = splitDate[1]
			item.day = splitDate[2]

			switch(item.status){
				case 2:
					item.statusStr = '有号'
				break;
				case 1:
					item.statusStr = '无号'
				break;
				case 3:
					item.statusStr = '约满'
				break;
				case 4:
					item.statusStr = '即将放号'
				break;
			}

			let currentDate = new Date()
			let year = currentDate.getFullYear()
			let month = currentDate.getMonth() + 1
			let day = currentDate.getDate()

			if(year == splitDate[0] && month == splitDate[1] && day == splitDate[2]) {
				item.dayStr = '今天'
			}

			if((month + 1) == splitDate[1] && 1 == splitDate[2]) {
				item.dayStr = `${splitDate[1]}月`
			}

			if((month + 2) == splitDate[1] && 1 == splitDate[2]) {
				item.dayStr = `${splitDate[1]}月`
			}

			return item
		})

    this.setData({
      orderDate
    })
		this.createCalendar(orderDate[0].date, orderDate[orderDate.length-1].date)
  },
  getDate(ev){
    // if(item.status != 2) return
    clearInterval(this.data.timer)

    let idx = ev.currentTarget.dataset.idx
    let obj = ev.currentTarget.dataset.obj

    this.setData({
      activeIndex: idx,
      showCalendar: false,
      tabIndex: idx,
      clinicDate: obj.date,
      tabStatus: obj.status
    })

    if(obj.openTime){
      this.calcRemainTime(obj.openTime)
    }
    this.officeDutyDay()
  },
  createCalendar(startDateStr, endDateStr){
    let setDateStart = new Date(startDateStr)
    let setDateEnd = new Date(endDateStr)

    this.setData({
      weekDay: setDateStart.getDay(),
      daysNum: (setDateEnd - setDateStart) / 86400000,
      year: setDateStart.getFullYear(),
      month: setDateStart.getMonth() + 1
    })
  },
  showCalendarFn(){
    this.setData({
      showCalendar: !this.data.showCalendar
    })
  },
  orderFn(obj){
    this.setData({
      dutyId: obj.id,
      timeShow: true
    })
    this.getOfficeDutyTimes()
  },
  async getOfficeDutyTimes(){
    await officeAbout.getOfficeDutyTimes({
      dutyId: this.data.dutyId
    }).then(res => {
      console.log('getOfficeDutyTimes-res', res)
      this.setData({
        timeList: res.data
      })
    }).catch(err => {
      console.log('getOfficeDutyTimes-err', err)
    })
  },
  async getDutyDate(){
    await officeAbout.getDutyDate({
      officeId: this.data.officeId
    }).then(res => {
      console.log('getDutyDate-res', res)
      

      let dateList = res.data.ddList.map((item, index) => {
        item.title = util.formatDay(item.date)
        let arr = item.date.split('-')
        item.str = `${arr[1]}-${arr[2]}`
        return item
      })


      this.setData({
        areaAddress: res.data.areaAddress,
        areaName: res.data.areaName,
        officeName: res.data.officeName,
        dateList
      })
      console.log('dateList', dateList)

    }).catch(err => {
      console.log('getDutyDate-err', err)
    })
  },
  changeTab(ev){
    clearInterval(this.data.timer)
    let idx = ev.currentTarget.dataset.idx
    let obj = ev.currentTarget.dataset.obj
    
    this.setData({
      tabIndex: idx,
      tabStatus: obj.status,
      clinicDate: obj.date
    })

    let arr = obj.str.split('-')

    this.setData({
      targetDay: `${arr[0]}月${arr[1]}日`
    })

    if(obj.openTime){
      this.calcRemainTime(obj.openTime)
    }

    this.officeDutyDay()
  },
  officeDutyDay(){
    officeAbout.officeDutyDay({
      officeId: this.data.officeId,
      clinicDate: this.data.clinicDate
    }).then(res => {
      console.log('officeDutyDay-res', res)

      this.setData({
        swList: res.data.swList,
        xwList: res.data.xwList
      })
    }).catch(err => {
      console.log('officeDutyDay-err', err)
    })
  },
  calcRemainTime(targetDay){
    clearInterval(this.data.timer)
    let timer = setInterval(() => {
      let tDate = new Date(targetDay).getTime()
      let cDate = new Date().getTime()

      this.setData({
        remainTime: tDate - cDate
      })

      let days = parseInt(this.data.remainTime/(86400 * 1000))
      let hours = parseInt(this.data.remainTime%(86400*1000) / (3600 * 1000))
      let mins = parseInt(this.data.remainTime%(3600 * 1000) / (60 * 1000))
      let secs = parseInt(this.data.remainTime%(60 * 1000) / 1000)
  
      this.setData({
        remainDay: days,
        remainHours: hours,
        remainMinutes: mins,
        remainSeconds: secs,
      })
      console.log(this.data.remainSeconds)
      if(this.data.remainTime < 0){
        clearInterval(this.data.timer)
      }
    }, 1000)

    this.setData({
      timer
    })
  },
  getTimeZone(ev){
    let idx = ev.currentTarget.dataset.idx
    console.log(idx)
    this.setData({
      timeIndex: idx
    })
    // tt.navigateTo({
    //   url: `/pages/ghqr/ghqr`
    // })
  },
  timeShowFn(){
    this.setData(
      {
        timeShow: !this.data.timeShow
      }
    )
  },
  toPage(){
    tt.navigateTo({
      url: '/pages/ksjs/ksjs'
    });
  }
})