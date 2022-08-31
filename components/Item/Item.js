// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/components/Item/Item.js
Component({
  data: {

  },
  properties: {
    Event: null,
    obj: null
  },
  methods: {
    toPage(){
      let myEventDetail = this.data.obj
      
      this.triggerEvent(
        'Event',
        myEventDetail
      )
    }
  }
})