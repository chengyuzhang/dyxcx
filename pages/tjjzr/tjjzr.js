// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/tjjzr/tjjzr.js
import { patientAbout, tool } from '../../request/api.js'
const util= require('../../util/util.js')

Page({
  data: {
    showList: false,
    showCardType: false,
    cardTypeList: [{
      name: '身份证',
      id: 1
    }],
    relationList: [
      {
        name: '本人',
        id: 1
      },
      {
        name: '配偶',
        id: 2
      },
      {
        name: '子女',
        id: 3
      },
      {
        name: '父亲',
        id: 4
      },
      {
        name: '母亲',
        id: 5
      },
      {
        name: '其他亲属',
        id: 6
      },
    ],
    showRelation: false,
    nationList: [
      "汉族",
      "蒙古族",
      "回族",
      "藏族",
      "维吾尔族",
      "苗族",
      "彝族",
      "壮族",
      "布依族",
      "朝鲜族",
      "满族",
      "侗族",
      "瑶族",
      "白族",
      "土家族",
      "哈尼族",
      "哈萨克族",
      "傣族",
      "黎族",
      "傈僳族",
      "佤族",
      "畲族",
      "高山族",
      "拉祜族",
      "水族",
      "东乡族",
      "纳西族",
      "景颇族",
      "柯尔克孜族",
      "土族",
      "达斡尔族",
      "仫佬族",
      "羌族",
      "布朗族",
      "撒拉族",
      "毛南族",
      "仡佬族",
      "锡伯族",
      "阿昌族",
      "普米族",
      "塔吉克族",
      "怒族",
      "乌孜别克族",
      "俄罗斯族",
      "鄂温克族",
      "德昂族",
      "保安族",
      "裕固族",
      "京族",
      "塔塔尔族",
      "独龙族",
      "鄂伦春族",
      "赫哲族",
      "门巴族",
      "珞巴族",
      "基诺族"
    ],
    showNation: false,
    minDate: new Date(1950, 0, 1),
    maxDate: new Date(),
    currentDate: new Date(),
    showDate: false,
    sexIndex: '',
    typeIndex: '',
    gxId: '',
    gxVal: '',
    xmVal: '',
    zjlxVal: '',
    zjlxId: '',
    zjhmVal: '',
    mzVal: '',
    srVal: '',
    ybkhVal: '',
    sjhVal: '',
    yzmVal: '',
    srFormat: '',
    numStr: 60,
    iBtn: true,
    hasZjhm: false,
    phoneHide: ''
  },
  onLoad: function (options) {

  },

  getPatientInfo(){
    if(!this.data.zjhmVal){
      tt.showToast({
        title: "请输入证件号码！",
        icon: 'none',
        duration: 1500,
        success(res) {
          console.log(res)
        },
        fail(res) {
          console.log("showToast 调用失败", res);
        },
      })
      return
    }

    patientAbout.getPatientInfo({
      idNo: this.data.zjhmVal
    }).then(res => {

      this.setData({
        showList: true
      })
      console.log('getPatientInfo-res', res)

      if(res.data){
        this.setData({
          srFormat: res.data.birthday || util.getBirthdayFromIdCard(this.data.zjhmVal),
          srVal: res.data.birthday || util.getBirthdayFromIdCard(this.data.zjhmVal),
          ybkhVal: res.data.feeNo,
          typeIndex: res.data.feeType,
          zjhmVal: res.data.idNo,
          zjlxId: res.data.idType,
          xmVal: res.data.name,
          mzVal: res.data.nationality,
          sjhVal: res.data.phone,
          sexIndex: res.data.sex,
          phoneHide: res.data.phoneHide
        })

        if(this.data.xmVal){
          this.setData({
            hasXm: true
          })
        }
        if(this.data.zjlxId){
          this.setData({
            hasZjlx: true
          })
        }
        if(this.data.zjhmVal){
          this.setData({
            hasZjhm: true
          })
        }
        if(this.data.sexIndex){
          this.setData({
            hasSex: true
          })
        }
        if(this.data.mzVal){
          this.setData({
            hasMz: true
          })
        }
        if(this.data.srVal){
          this.setData({
            hasSr: true
          })
        }
        if(this.data.typeIndex){
          this.setData({
            hasFb: true
          })
        }
        if(this.data.ybkhVal){
          this.setData({
            hasYbkh: true
          })
        }
        if(this.data.sjhVal){
          this.setData({
            hasPhone: true
          })
        }

        this.data.cardTypeList.forEach((item, index) => {
          if(item.id == this.data.zjlxId){
            this.setData({
              zjlxVal: item.name
            })
          }
        })
      }else{
        this.setData({
          srFormat: util.getBirthdayFromIdCard(this.data.zjhmVal),
          srVal: util.getBirthdayFromIdCard(this.data.zjhmVal)
        })
      }

    }).catch(err => {
      console.log('getPatientInfo-err', err)
    })
  },
  addPatient(){
    if(!this.data.gxId){
      tt.showToast({
        title: "请选择就诊人与本人关系！",
        icon: 'none',
        duration: 1500,
        success(res) {
          console.log(res)
        },
        fail(res) {
          console.log("showToast 调用失败", res);
        },
      })
      return
    }
    if(!this.data.xmVal){
      tt.showToast({
        title: "请输入姓名！",
        icon: 'none',
        duration: 1500,
        success(res) {
          console.log(res)
        },
        fail(res) {
          console.log("showToast 调用失败", res);
        },
      })
      return
    }
    if(!this.data.zjlxId){
      tt.showToast({
        title: "请选择证件类型！",
        icon: 'none',
        duration: 1500,
        success(res) {
          console.log(res)
        },
        fail(res) {
          console.log("showToast 调用失败", res);
        },
      })
      return
    }
    if(!this.data.zjhmVal){
      tt.showToast({
        title: "请输入证件号码！",
        icon: 'none',
        duration: 1500,
        success(res) {
          console.log(res)
        },
        fail(res) {
          console.log("showToast 调用失败", res);
        },
      })
      return
    }
    if(!this.data.sexIndex){
      tt.showToast({
        title: "请选择性别！",
        icon: 'none',
        duration: 1500,
        success(res) {
          console.log(res)
        },
        fail(res) {
          console.log("showToast 调用失败", res);
        },
      })
      return
    }
    if(!this.data.mzVal){
      tt.showToast({
        title: "请选择民族！",
        icon: 'none',
        duration: 1500,
        success(res) {
          console.log(res)
        },
        fail(res) {
          console.log("showToast 调用失败", res);
        },
      })
      return
    }
    if(!this.data.srVal){
      tt.showToast({
        title: "请选择生日！",
        icon: 'none',
        duration: 1500,
        success(res) {
          console.log(res)
        },
        fail(res) {
          console.log("showToast 调用失败", res);
        },
      })
      return
    }
    if(!this.data.typeIndex){
      tt.showToast({
        title: "请选择费别！",
        icon: 'none',
        duration: 1500,
        success(res) {
          console.log(res)
        },
        fail(res) {
          console.log("showToast 调用失败", res);
        },
      })
      return
    }
    if(!this.data.ybkhVal && this.data.typeIndex == 2){
      tt.showToast({
        title: "请输入医保卡号！",
        icon: 'none',
        duration: 1500,
        success(res) {
          console.log(res)
        },
        fail(res) {
          console.log("showToast 调用失败", res);
        },
      })
      return
    }
    if(!this.data.sjhVal){
      tt.showToast({
        title: "请输入正确手机号！",
        icon: 'none',
        duration: 1500,
        success(res) {
          console.log(res)
        },
        fail(res) {
          console.log("showToast 调用失败", res);
        },
      })
      return
    }
    if(!this.data.yzmVal){
      tt.showToast({
        title: "请输入验证码！",
        icon: 'none',
        duration: 1500,
        success(res) {
          console.log(res)
        },
        fail(res) {
          console.log("showToast 调用失败", res);
        },
      })
      return
    }

    patientAbout.addPatient({
      birthday: this.data.srVal,
      feeNo: this.data.ybkhVal,
      feeType: this.data.typeIndex,
      idNo: this.data.zjhmVal,
      idType: this.data.zjlxId,
      name: this.data.xmVal,
      nationality: this.data.mzVal,
      phone: this.data.sjhVal,
      relation: this.data.gxId,
      sex: this.data.sexIndex,
      smsCode: this.data.yzmVal,
    }).then(res => {
      console.log('addPatient-res', res)
      tt.showToast({
        title: res.message,
        icon: 'none',
        duration: 1500,
        success(res) {
          console.log(res)
          tt.navigateBack({})
        },
        fail(res) {
          console.log("showToast 调用失败", res);
        },
      })
    }).catch(err => {
      console.log('addPatient-err', err)
    })
  },
  smsCode(){
    tool.smsCode({
      phone: this.data.sjhVal
    }).then(res => {
      console.log('smsCode-res', res)
      tt.showToast({
        title: "验证码已发送！",
        icon: 'none',
        duration: 1500,
        success(res) {
          console.log(res)
        },
        fail(res) {
          console.log("showToast 调用失败", res);
        },
      })
    }).catch(err => {
      console.log('smsCode-err', err)
    })
  },
  pickerRelation(ev){
    let idx = Number(ev.detail.value)
    this.setData({
      gxVal: this.data.relationList[idx].name,
      gxId: this.data.relationList[idx].id
    })
  },
  pickerCardType(ev){
    let idx = Number(ev.detail.value)
    this.setData({
      zjlxVal: this.data.cardTypeList[idx].name,
      zjlxId: this.data.cardTypeList[idx].id
    })
  },
  pickerNation(ev){
    let idx = Number(ev.detail.value)
    this.setData({
      mzVal: this.data.nationList[idx]
    })
  },
  datePickerChange(ev){
    console.log(ev.detail.value)
    this.setData({
      srVal: ev.detail.value
    })
  },
  changeSex(ev){
    let idx = ev.currentTarget.dataset.sex
    this.setData({
      sexIndex: idx
    })
  },
  changeType(ev){
    let idx = ev.currentTarget.dataset.type
    this.setData({
      typeIndex: idx
    })
  },
  getCode(){
    console.log('this.data.sjhVal', this.data.sjhVal)
    if(!util.checkPhone(this.data.sjhVal)){
      tt.showToast({
        title: "请输入正确手机号！",
        icon: 'none',
        duration: 1500,
        success(res) {
          console.log(res)
        },
        fail(res) {
          console.log("showToast 调用失败", res);
        },
      })
      return
    }

    if(!this.data.iBtn) return
    this.setData({
      iBtn: false
    })
    const count = this.data.numStr
    let num = this.data.numStr
    let timer = null
    timer = setInterval(() => {
      num--

      this.setData({
          numStr: num
      })

      if(num < 0){
        this.setData({
        iBtn: true,
        numStr: count
      })
        clearInterval(timer)
      }
    }, 1000)
    this.smsCode()
  },
  getSjh(e){
    this.setData({
      sjhVal: e.detail.value
    })
  },
  getXm(e){
    this.setData({
      xmVal: e.detail.value
    })
  },
  getZjhm(e){
    this.setData({
      zjhmVal: e.detail.value
    })
  },
  getYbkh(e){
    this.setData({
      ybkhVal: e.detail.value
    })
  },
  getYzm(e){
    this.setData({
      yzmVal: e.detail.value
    })
  },
  getZjhm(e){
    this.setData({
      zjhmVal: e.detail.value
    })
  },
})