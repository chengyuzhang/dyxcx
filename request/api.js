import { api } from './request.js'
// import config from '../../../config/env.js'
let {get, post} = api

let baseURL = 'http://hzx.ngrok.aojiedu.com'
let baseURL1 = 'https://xiaoxapi.aoji.cn'

export const index = {
	async getAds (data, headers) {
		return await get(baseURL + `/advert/spaceAdvertList`, data, headers)
	}
}

export const areaAbout = {
	async getAreaList (data, headers) {
		return await get(baseURL + `/area/allList`, data, headers)
	},
	async getAreaDetail (data, headers) {
		return await get(baseURL + `/area/detail`, data, headers)
	}
}

//预约相关
export const appointAbout = {
	async appointPreview (data, headers) {
		return await get(baseURL + `/appoint/appointPreview`, data, headers)
	},
	async getAppointDetail (data, headers) {
		return await get(baseURL + `/appoint/detail`, data, headers)
	},
	async saveAppoint (data, headers) {
		return await post(baseURL + `/appoint/saveAppoint`, data, headers)
	},
	async getAppointList (data, headers) {
		return await get(baseURL + `/appoint/pageList`, data, headers)
	},
	async cancelAppoint (data, headers) {
		return await get(baseURL + `/appoint/cancelAppoint`, data, headers)
	},
}

//就诊人相关
export const patientAbout = {
	async addPatient (data, headers) {
		return await post(baseURL + `/patient/addPatient`, data, headers)
	},
	async getPatientList (data, headers) {
		return await get(baseURL + `/patient/allList`, data, headers)
	},
	async deletePatient (data, headers) {
		return await get(baseURL + `/patient/delete`, data, headers)
	},
	async getPatientDetail (data, headers) {
		return await get(baseURL + `/patient/detail`, data, headers)
	},
	async getLastAppointPatient (data, headers) {
		return await get(baseURL + `/patient/lastAppointPatient`, data, headers)
	}
}

export const noticeAbout = {
	async getJzxzList (data, headers) {
		return await get(baseURL + `/notice/allList`, data, headers)
	},
	async getJzxzDetails (data, headers) {
		return await get(baseURL + `/notice/detail`, data, headers)
	},
	async getGhxzDetails (data, headers) {
		return await get(baseURL + `/notice/detailGuahao`, data, headers)
	}
}

export const newsAbout = {
	async getInfoList (data, headers) {
		return await get(baseURL + `/news/pageList`, data, headers)
	},
	async getInfoDetail (data, headers) {
		return await get(baseURL + `/news/detail`, data, headers)
	},
}

export const officeAbout = {
	async getDutyDate (data, headers) {
		return await get(baseURL + `/office/dutyDate`, data, headers)
	},
	async officeDutyDay (data, headers) {
		return await get(baseURL + `/office/officeDutyDay`, data, headers)
	},
	async getDutyDateHs (data, headers) {
		return await get(baseURL + `/office/dutyDateHs`, data, headers)
	},
	async getOfficeTree (data, headers) {
		return await get(baseURL + `/office/officeTree`, data, headers)
	},
	async getOfficeDetail (data, headers) {
		return await get(baseURL + `/office/detail`, data, headers)
	},
	async getOfficeDutyTimes (data, headers) {
		return await get(baseURL + `/office/officeDutyTimes`, data, headers)
	},
}

export const doctotAbout = {
	async getDoctorList (data, headers) {
		return await get(baseURL + `/doctor/pageList`, data, headers)
	},
	async getDoctorDetail (data, headers) {
		return await get(baseURL + `/doctor/detail`, data, headers)
	},
	async getDoctorDuty (data, headers) {
		return await get(baseURL + `/doctor/doctorDuty`, data, headers)
	},

}

export const tool = {
	async smsCode (data, headers) {
		return await get(baseURL + `/tool/smsCode`, data, headers)
	},
}
export const login = {
	async getCode (data, headers) {
		return await get(baseURL + `/wxlogin/login`, data, headers)
	},
	async getUserInfos (data, headers) {
		return await get(baseURL + `/user/detail`, data, headers)
	},
}
