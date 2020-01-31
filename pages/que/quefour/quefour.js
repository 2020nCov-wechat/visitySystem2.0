//index.js
//获取应用实例
const app = getApp()
import Toast from '@vant/weapp/toast/toast';

Page({
  backClick: function () {
    var that = this;
    wx.showModal({
      title: '退出答题',
      content: '确认要退出答题吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('点击确认回调');

          var time = setTimeout(function () {
            wx.switchTab({
              url: "/pages/que2/first/first",
              success() {
                var page = getCurrentPages().pop();
                if (page == undefined || page == null) return;

              }
            });
          }, 1000)

        } else {
          console.log('点击取消回调')
        }
      }
    })
  },
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    health: '',
    change: '',
    help:'',
    person:'',
    type:'',
    method:'',
    activities:'',
    questions: [{
      "type": 1,
      "question": "68. 总的来说，您认为您的健康状况是：",
      "answers": [{
        "answer": "好",
      },
      {
        "answer": "一般",
      },
      {
        "answer": "差",
      },
      ]
    },
      {
        "type": 1,
        "question": "69. 和疫情发生前相比较，您认为您目前的健康状况大致如何？",
        "answers": [{
          "answer": "变好了",
        },
        {
          "answer": "差不多",
        },
        {
          "answer": "差一些",
        },
        {
          "answer": "差多了",
        },
        ]
      },
      {
        "type": 4,
        "question": "70. 您在此次新冠肺炎疫情发生后，曾经得到过哪些心理上的帮助？[多选]",  
        "answers": [{
          "answer": "收到关于心理方面的宣传材料",
        },
        {
          "answer": "听到媒体对心理方面的宣传",
        },
        {
          "answer": "团体心理辅导",
        },
        {
          "answer": "心理治疗",
        },
          {
            "answer": "没获得过任何帮助",
          },
          {
            "answer": "其他",
          },
        ]
      },
      {
        "type": 2,
        "question": "71. 此次新冠肺炎疫情中，您最希望由谁提供心理帮助？",  
        "answers": [{
          "answer": "专业心理咨询人员",
        },
        {
          "answer": "家人及亲戚",
        },
        {
          "answer": "朋友同事",
        },
        {
          "answer": "不需要帮助",
        },
        {
          "answer": "其他",
        },
        ]
      },
      {
        "type": 4,
        "question": "72. 您希望了解哪项有关心理方面的知识和技能？[多选]",   
        "answers": [{
          "answer": "常见的心理反应",
        },
        {
          "answer": "自己如何缓解心理反应",
        },
        {
          "answer": "如何帮助别人缓解心理反应",
        },
        {
          "answer": "如何寻求专业心理咨询人员的帮助",
        },
          {
            "answer": "不感兴趣",
          },
          {
            "answer": "其他",
          },
        ]
      },
      {
        "type": 2,
        "question": "73. 此次新冠肺炎疫情中，您最希望获得哪方面的心理帮助？",  
        "answers": [{
          "answer": "收到关于心理方面的宣传材料",
        },
        {
          "answer": "听到媒体对心理方面的宣传",
        },
        {
          "answer": "集体接受心理辅导",
        },
        {
          "answer": "个体心理咨询",
        },
        {
          "answer": "不感兴趣",
        },
        {
          "answer": "其他",
        },
        ]
      },
      {
        "type": 1,
        "question": "74. 在做好防护的情况下，如果有关机构开展针对此次疫情的心理健康教育活动如讲座、咨询等，您愿意参加吗？",
        "answers": [{
          "answer": "愿意",
        },
        {
          "answer": "不愿意",
        },
        ]
      }
    ]
  },

  onChange: function (event) {
    console.log("onChange:"+event.target.id + "-> " + event.detail);
    if (event.target.id=='health'){
      this.setData({
        health: event.detail
      })
    } else if (event.target.id == 'change'){
      this.setData({
        change: event.detail
      })
    } else if (event.target.id == 'help'){
      this.setData({
        help: event.detail
      })
    } else if (event.target.id == 'person') {
      this.setData({
        person: event.detail
      })
    } else if (event.target.id == 'type') {
      this.setData({
        type: event.detail
      })
    } else if (event.target.id == 'method') {
      this.setData({
        method: event.detail
      })
    } else if (event.target.id == 'activities') {
      this.setData({
        activities: event.detail
      })
    }
  },
  
  onLoad: function () {
    //更新openid
    app.updateOpenid()
  },
 
  //提交健康需求
  submitNeed:function(){
    var message = []
    message.push(this.data.health)
    message.push(this.data.change)
    message.push(this.arrayToString(this.data.help))
    message.push(this.data.person)
    message.push(this.arrayToString(this.data.type))
    message.push(this.data.method)
    message.push(this.data.activities)
    console.log(message)

    var newopenid = app.globalData.openid
    var newSession_key = app.globalData.session_key
    newSession_key = newSession_key.replace(/ +/g, '%2B')
    newopenid = newopenid.replace(/ +/g, '%2B')

    var that = this
    wx.request({
      //获取openid接口
      url: getApp().globalData.submitNeed,
      data: {
        openid: newopenid,
        session_key: newSession_key,
        message:message
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data)
        if (res.data.errorCode == 200) {
          console.log("发送成功")
          Toast.success('成功提交');

          var time = setTimeout(function () {
            wx.switchTab({
              url: "/pages/my/my",
              success() {
                var page = getCurrentPages().pop();
                if (page == undefined || page == null) return;
                
              }
            });
          }, 1000)

        } else {
          //登录过期
          if (res.data.errCode != 200) {
            console.log("提交失败")
            //更新openid
            Toast.loading({
              mask: true,
              message: '加载中...',
              duration: 100
            });
            that.send(message)
          }
        }

      },
    })
  },

  arrayToString:function(array){
    var returnResult=''
    for(var str in array){
      returnResult=returnResult+array[str]+','
    }
    return returnResult
  }
})
