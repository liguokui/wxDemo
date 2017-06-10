Page({
  data: { 
    latitude: 34.807679,
    longitude: 113.549571,
     scale:13,
    markers: [{
      latitude: 34.807679,
      longitude: 113.549571,
      name: '中国-河南-郑州',
      iconPath: '/image/location.png',
      title:"电子商务产业园",
      label:"企汇网",
      // rotate:0,
      // alpha:10,
      // width:50,
      // height:50,
      callout: { content: "电子商务产业园--企汇网", color: "#000", fontSize: 16, borderRadius: 10, bgColor: "#fff", padding: 0, display:'ALWAYS'}
    }],
    // covers: [{
    //   latitude: 34.808206,
    //   longitude: 113.550622,
    //   iconPath: '/image/location.png'
    // }, {
    //     latitude: 34.808206,
    //     longitude: 113.550622,
    //   iconPath: '/image/location.png'
    // }], 
    // polyline: [{
    //   points: [{
    //     latitude: 34.810962,
    //     longitude: 113.552868,
    //   }, {
    //       latitude: 34.811006,
    //       longitude: 113.55806,
    //     }, {
    //       latitude: 34.807731,
    //       longitude: 113.55267,
    //   }, {
    //       latitude: 34.808146,
    //       longitude: 113.55064,
    //   }],
    //   color: "#FFddddDD",
    //   width: 2,
    //   dottedLine: true
    // }],
    circles:[{
      latitude: 34.807679,
      longitude: 113.549571,
      radius:300,
      color:"#00ff1a75",
      fillColor:"#ff000000",
      strokeWidth:2
    }], 
    controls: [{
      id: 100,
      position: {left:1,top:1,width:50,height:50},
      iconPath: '/image/location.png',
      clickable:true
    }]
  }
  
  
})

 