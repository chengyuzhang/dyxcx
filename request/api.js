import { api } from './request'
let { get } = api
let baseURL = 'https://stuapi.xiaoxiedu.com'
let baseURL2 = 'https://xiaoxapi.aoji.cn'

export const indexAbout = {
	// async getInfos (data, headers) {
	// 	headers = Object.assign({}, headers, {'Content-Type': 'application/x-www-form-urlencoded'})
	// 	return await post(baseURL + `/index/recommendationInformationList`, qs.stringify(data), headers)
	// },
	// async getVideos (data, headers) {
	// 	headers = Object.assign({}, headers, {'Content-Type': 'application/x-www-form-urlencoded'})
	// 	return await post(baseURL + `/home/allV2`, qs.stringify(data), headers)
	// },
	// async getVideoDetail (data, headers) {
	// 	headers = Object.assign({}, headers, {'Content-Type': 'application/x-www-form-urlencoded'})
	// 	return await post(baseURL + `/video/info`, qs.stringify(data), headers)
	// },
	async getInfosDetail (data, headers) {
		headers = Object.assign({}, headers)
		return await get(baseURL2 + `/article/detailshare`, data, headers)
	},
}