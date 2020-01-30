var questions = [{
  "type": 1,
  "question": "1.入睡困难，睡不安稳或睡眠过多",
  "answers": [{
    "answer": "完全不会",
    "value": 0
  },
  {
    "answer": "好几天",
    "value": 1
  },
  {
    "answer": "一半以上的天数",
    "value": 2
  },
  {
    "answer": "几乎每天",
    "value": 3
  },
  ]
},
{
  "type": 1,
  "question": "2.对事物专注有困难，例如阅读报纸或看电视时",
  "answers": [{
    "answer": "完全不会",
    "value": 0
  },
  {
    "answer": "好几天",
    "value": 1
  },
  {
    "answer": "一半以上的天数",
    "value": 2
  },
  {
    "answer": "几乎每天",
    "value": 3
  },
  ]
},
{
  "type": 1,
  "question": "3.动作或说话速度缓慢到别人已经察觉？或正好相反-烦躁或坐立不安、动来动去的情况更胜于平常",
  "answers": [{
    "answer": "完全不会",
    "value": 0
  },
  {
    "answer": "好几天",
    "value": 1
  },
  {
    "answer": "一半以上的天数",
    "value": 2
  },
  {
    "answer": "几乎每天",
    "value": 3
  },
  ]
}
]

var doctorinfos = {
  "qNum": 8,
  "questions": [{
    "type": 1,
    "question": "2. 您的性别",
    "answers": [{
      "answer": "男",
    },
    {
      "answer": "女",
    }
    ]
  },

  {
    "type": 1,
    "question": "4. 您的年龄",
    "answers": [{
      "answer": "18~25",
    },
    {
      "answer": "26~30",
    },
    {
      "answer": "31~40",
    },
    {
      "answer": "41~50",
    },
    {
      "answer": "51~60",
    },
    {
      "answer": "60以上",
    }
    ]
  },
  {
    "type": 1,
    "question": "5. 婚姻状况",
    "answers": [{
      "answer": "未婚",
    },
    {
      "answer": "已婚",
    },
    {
      "answer": "丧偶",
    },
    {
      "answer": "离异",
    }
    ]
  },
  {
    "type": 1,
    "question": "6. 学历",
    "answers": [{
      "answer": "初中及以下",
    },
    {
      "answer": "高中/中专",
    },
    {
      "answer": "本科/大专",
    },
    {
      "answer": "硕士",
    },
    {
      "answer": "博士",
    }
    ]
    },
    {
      "type": 1,
      "question": "7. 工作单位",
      "answers": [{
        "answer": "三级医院",
      },
      {
        "answer": "二级医院",
      },
      {
        "answer": "一级医院",
      },
      {
        "answer": "社区服务中心",
      },
      {
        "answer": "疾控中心",
      },
      {
        "answer": "其他",
      }
      ]
    },
    {
      "type": 1,
      "question": "8. 执业资质 ",
      "answers": [{
        "answer": "医生",
      },
      {
        "answer": "护士",
      },
      {
        "answer": "行政管理人员",
      },
      {
        "answer": "其他医院工作人员",
      }
      ]
    },
    {
      "type": 1,
      "question": "9. 目前实际工作所在科室 ",
      "answers": [{
        "answer": "发热门诊",
      },
      {
        "answer": "急诊",
      },
      {
        "answer": "普通隔离病房",
      },
      {
        "answer": "重症病房",
      },
      {
        "answer": "精神/心理科",
        },
        {
          "answer": "其他普通病房或门诊",
        },
        {
          "answer": "其他",
        }
      ]
    },
    {
      "type": 1,
      "question": "10. 职称 ",
      "answers": [{
        "answer": "无",
      },
      {
        "answer": "初级",
      },
      {
        "answer": "中级",
      },
      {
        "answer": "副高",
      },
      {
        "answer": "正高",
      }
      ]
    }
  ]
}
var doctornear = {
  "qNum":13,
  "questions": [
  //   {
  //   "type": 6,
  //   "question": "11. 近一周居住城市",
  //   "answers": [{
  //     "answer": "请选择",
  //   }]
  // },
  {
    "type": 1,
    "question": "12. 近一周主要居住地点",
    "answers": [{
      "answer": "城市",
    },
    {
      "answer": "农村",
    }]
  },
  {
    "type": 1,
    "question": "13. 近一周居住状态",
    "answers": [{
      "answer": "独居",
    },
    {
      "answer": "与家人居住",
    },
    {
      "answer": "与同事居住",
    },
    {
      "answer": "与朋友同事居住",
    },
    {
      "answer": "与其他人居住",
    }]
  },
  {
    "type": 1,
    "question": "14. 截至目前为止，您是否直接从事发热患者或确诊新冠肺炎患者的诊疗或护理工作？",
    "answers": [{
      "answer": "是",
    },
    {
      "answer": "否",
    }]
  },
  {
    "type": 1,//3
    "question": "15. 截止目前为止，是否有以下人员确诊为新冠肺炎？[多选]",
    "answers": [{
      "answer": "科室接诊的患者",
    },
    {
      "answer": "您本人",
    },
    {
      "answer": "家人",
    },
    {
      "answer": "同事",
    },
    {
      "answer": "朋友",
    },
    {
      "answer": "您居住的小区",
    },
    {
      "answer": "无",
    }]
  },
  {
    "type": 1,
    "question": "16. 近一周，您本人和与您共同居住的人（包括家人或合住的人）中，是否有人未确诊，但有发热、咳嗽等症状？",
    "answers": [{
      "answer": "是",
    },
    {
      "answer": "否",
    }]
  },
  {
    "type": 1,
    "question": "17. 您认为，您是否已经接受足够的新冠肺炎医院感染防护培训？",
    "answers": [{
      "answer": "是",
    },
    {
      "answer": "否",
    }]
  },
  {
    "type": 1,
    "question": "18. 工作中，您是否有条件按照最新的《新型冠状病毒医院感染预防与控制指南》或相关技术标准的要求，规范的做好个人防护？",
    "answers": [{
      "answer": "是",
    },
    {
      "answer": "否",
    }]
  },
  {
    "type": 1,
    "question": "19. 您认为当前的“新型冠状病毒医院感染防护标准”是否能保护您在工作中避免感染新型冠状病毒？",
    "answers": [{
      "answer": "是",
    },
    {
      "answer": "否",
    }]
  },
  {
    "type": 1,
    "question": "20. 您是否担心自己容易感染 ",
    "answers": [{
      "answer": "是",
    },
    {
      "answer": "否",
    }]
  },
  {
    "type": 1,//4
    "question": "21. 近一周您主要通过哪种方式获取新冠肺炎疫情信息？[多选]",
    "answers": [{
      "answer": "与他人聊天（包括面对面、电话、语音、视频、文字聊天等）",
    },
    {
      "answer": "社交媒体（包括朋友圈、公众号、微博、抖音等）",
    },
    {
      "answer": "电视",
    },
    {
      "answer": "其他",
    }]
  },
  {
    "type": 1,
    "question": "22. 您认为新闻或社交媒体（朋友圈、公众号、微博、抖音等）发布的心理调适资源或心理热线对您是否有帮助？",
    "answers": [{
      "answer": "有很大的帮助",
    },
    {
      "answer": "中等程度的帮助",
    },
    {
      "answer": "稍微有帮助",
    },
    {
      "answer": "无帮助",
    },
    {
      "answer": "没有关注，无法评价",
    }]
  },
  {
    "type": 1,
    "question": "23. 近一周，您平均每天通过各种方式接收疫情信息的时间大概为多少小时 ",
    "answers": [{
      "answer": "小于1小时",
    },
    {
      "answer": "1-2小时",
    },
    {
      "answer": "3-4小时",
    },
    {
      "answer": "5小时及以上",
    }]
  }, {
    "type": 1,
    "question": "24. 对于新冠肺炎被控制的进度，您的不确定感程度 ",
    "answers": [{
      "answer": "很强",
    },
    {
      "answer": "强",
    },
    {
      "answer": "一般",
    },
    {
      "answer": "无",
    }]
  },
  ]
}


//转化成小程序模板语言 这一步非常重要 不然无法正确调用
module.exports = {
  questions: questions,
  doctorinfos: doctorinfos,
  doctornear: doctornear
}