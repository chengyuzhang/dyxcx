// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/jzm/jzm.js
import { patientAbout } from '../../request/api.js'
var wxbarcode = require('../../util/barcode.js')
console.log(wxbarcode)
Page({
  data: {
    id: '',
    hisMzhm: '',
    name: '',
    idNo: ''
  },
  onLoad: async function (options) {
    this.setData({
      id: options.id
    })
    await this.getPatientDetail()
    this.barc('barcode', this.data.hisMzhm, 700, 160)
  },
  async getPatientDetail(){
    await patientAbout.getPatientDetail({
      id: this.data.id
    }).then(res => {
      console.log('getPatientDetail-res', res)
      this.setData({
        hisMzhm: res.data.hisMzhm,
        name: res.data.name,
        idNo: res.data.idNo,
      })
    }).catch(err => {
      console.log('getPatientDetail-err', err)
    })
  },
  barc(id, code, width, height) {
    console.log(1111)
    wxbarcode.code128(tt.createCanvasContext(id), code, this.convert_length(width), this.convert_length(height))
  },
  convert_length(length) {
      return Math.round(tt.getSystemInfoSync().windowWidth * length / 750);
  }
})