// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/pages/tjjzr/tjjzr.js
Page({
  data: {
    relationIndex: 0,
    cardIndex: 0,
    dateIndex: 0,
    nationIndex: 0,
    sexIndex: 0,
    typeIndex: 0,
    gxVal: '',
    xmVal: '',
    zjlxVal: '',
    zjhmVal: '',
    mzVal: '',
    srVal: '',
    ybkhVal: '',
    sjhVal: '',
    yzmVal: '',
    numStr: 10,
    cardTypeList: ['身份证'],
    relationList: ['本人','配偶','子女','父亲','母亲','其他亲属',],
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
    iBtn: true
  },
  onLoad: function (options) {

  },
  pickerRelation(ev){
    let idx = Number(ev.detail.value)
    this.setData({
      gxVal: this.data.relationList[idx]
    })  
  },
  pickerCardType(ev){
    let idx = Number(ev.detail.value)
    this.setData({
      zjlxVal: this.data.cardTypeList[idx]
    })  
  },
  pickerNation(ev){
    let idx = Number(ev.detail.value)
    this.setData({
      mzVal: this.data.nationList[idx]
    })  
  },
  datePickerChange(ev){
    this.setData({
      srVal: ev.detail.value
    })
  }
})