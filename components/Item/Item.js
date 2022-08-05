// /Users/zhangchengyu/Workstation/DcfyMiniApp/dcfy/components/Item/Item.js
Component({
  data: {

  },
  properties: {
    Event: null
  },
  methods: {
    toPage(){
      let myEventDetail = {a:1}
      
      this.triggerEvent(
        'Event',
        myEventDetail
      )
    }
  }
})