const formatTime = (date, dot = '-') => {
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()
	const hour = date.getHours()
	const minute = date.getMinutes()
	const second = date.getSeconds()

	return {
		time: [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':'),
		date: [year, month, day].map(formatNumber).join(dot)
	}
}

const formatDay = (date) => {
	let d = new Date(date)
	let day = d.getDay()

	switch(day){
		case 0:
			return '周日'
		break;
		case 1:
			return '周一'
		break;
		case 2:
			return '周二'
		break;
		case 3:
			return '周三'
		break;
		case 4:
			return '周四'
		break;
		case 5:
			return '周五'
		break;
		case 6:
			return '周六'
		break;
	}
}

const formatNumber = n => {
	n = n.toString()
	return n[1] ? n : '0' + n
}

const isChinese = str => {
	let reg = /^[\u4E00-\u9FA5]+$/
	if (!reg.test(str)) return false
	return true
}

const changeFontRule = num => {
	num = num ? num : 0
	//判断要转变的数值正负
	let isPlus = Number(num) >= 0 ? true : false
	//对绝对值进行操作并转变成字符串
	num = '' + Math.abs(num)
	//把数值（小数）分隔成数组
	let dotArr = num.split('.')
	//取整数部分
	num = dotArr[0]
	//对整数部分转换成倒序的数组
	let arr = num.split('').reverse()
	let tempArr = []
	//对转成倒序后的数组进行每3位添加“,”操作
	arr.forEach((item, index) => {
		if ((index + 1) % 3 == 0) {
			tempArr.push(',' + item)
		} else {
			tempArr.push(item)
		}
	})
	//把添加“,”后的数组转成正数组并转成字符串
	let string = tempArr.reverse().join('')
	//转成字符串如果首位是“,” 就从[1]位取值
	if (string.indexOf(',') == 0) {
		string = string.slice(1)
	}
	//如果有数组有[1]项，说明传进来的值是小数，并对是几位小数进行判断和包装成两位小数
	if (dotArr[1]) {
		dotArr[1] = dotArr[1].length ? dotArr[1] : dotArr[1] + '00'
		if (String(dotArr[1]).length == 1) {
			dotArr[1] = dotArr[1] + '0'
		} else {
			dotArr[1] = dotArr[1]
		}
	} else {
		dotArr[1] = '00'
	}
	//合并整数与小数部分
	string = string + '.' + dotArr[1]
	//判断要返回的值是正还是负
	string = isPlus ? string : '-' + string
	return string
}

const checkPhone = phone => {
	if (!(/^1[23456789]\d{9}$/.test(phone))) {
		return false
	} else {
		return true
	}
}

//获取元素的getBoundingClientRect
const getElRec = el => {
	let rec = el.getBoundingClientRect()

	return rec
}

module.exports = {
	formatTime: formatTime,
	isChinese: isChinese,
	checkPhone: checkPhone,
	changeFontRule: changeFontRule,
	getElRec: getElRec,
	formatDay,
	formatNumber
}