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

var que1 = {
  "scaleTitle": "抑郁症筛查量表",
  "scaleBrief": "在过去的两周内，以下情况烦扰您有多频繁？",
  "qNum": 9,
  "questions": [
    {
      "type": 1,
      "question": "1.做事时提不起劲或没有兴趣",
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
      }
      ]
    },
    {
      "type": 1,
      "question": "2.感到心情低落，沮丧或绝望",
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
        }
      ]
    },
    {
      "type": 1,
      "question": "3.入睡困难，睡不安稳或睡眠过多",
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
        }
      ]
    },
    {
      "type": 1,
      "question": "4.感觉疲倦或没有活力",
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
        }
      ]
    },
    {
      "type": 1,
      "question": "5.食欲不振或吃太多",
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
        }
      ]
    },
    {
      "type": 1,
      "question": "6.觉得自己很糟或觉得自己很失败，或让自己或家人失望",
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
        }
      ]
    },
    {
      "type": 1,
      "question": "7.对事物专注有困难，例如阅读报纸或看电视时",
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
        }
      ]
    },
    {
      "type": 1,
      "question": "8.行动或说话速度变得缓慢（或变得烦躁、坐立不安、动来动去等）已被周围人察觉",
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
        }
      ]
    },
    {
      "type": 1,
      "question": "9.有不如死掉或用某种方式伤害自己的念头",
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
        }
      ]
    }
  ]
}

var que2 = {
  "scaleTitle": "广泛性焦虑障碍量表",
  "scaleBrief": "在过去的两周内，有多少时候您收到以下任何问题困扰？",
  "qNum": 7,
  "questions": [
    {
      "type": 1,
      "question": "1.感觉紧张，焦虑或急切",
      "answers": [{
        "answer": "完全不会",
        "value": 0
      },
      {
        "answer": "几天",
        "value": 1
      },
      {
        "answer": "一半以上的日子",
        "value": 2
      },
      {
        "answer": "几乎每天",
        "value": 3
      }
      ]
    },
    {
      "type": 1,
      "question": "2.不能够停止或控制担忧",
      "answers": [{
        "answer": "完全不会",
        "value": 0
      },
      {
        "answer": "几天",
        "value": 1
      },
      {
        "answer": "一半以上的日子",
        "value": 2
      },
      {
        "answer": "几乎每天",
        "value": 3
      }
      ]
    },
    {
      "type": 1,
      "question": "3.对各种各样的事情担忧过多",
      "answers": [{
        "answer": "完全不会",
        "value": 0
      },
      {
        "answer": "几天",
        "value": 1
      },
      {
        "answer": "一半以上的日子",
        "value": 2
      },
      {
        "answer": "几乎每天",
        "value": 3
      }
      ]
    },
    {
      "type": 1,
      "question": "4.很难放松下来",
      "answers": [{
        "answer": "完全不会",
        "value": 0
      },
      {
        "answer": "几天",
        "value": 1
      },
      {
        "answer": "一半以上的日子",
        "value": 2
      },
      {
        "answer": "几乎每天",
        "value": 3
      }
      ]
    },
    {
      "type": 1,
      "question": "5.由于不安而无法静坐",
      "answers": [{
        "answer": "完全不会",
        "value": 0
      },
      {
        "answer": "几天",
        "value": 1
      },
      {
        "answer": "一半以上的日子",
        "value": 2
      },
      {
        "answer": "几乎每天",
        "value": 3
      }
      ]
    },
    {
      "type": 1,
      "question": "6.变得容易烦恼或急躁",
      "answers": [{
        "answer": "完全不会",
        "value": 0
      },
      {
        "answer": "几天",
        "value": 1
      },
      {
        "answer": "一半以上的日子",
        "value": 2
      },
      {
        "answer": "几乎每天",
        "value": 3
      }
      ]
    },
    {
      "type": 1,
      "question": "7.感到似乎将有可怕的事情发生而害怕",
      "answers": [{
        "answer": "完全不会",
        "value": 0
      },
      {
        "answer": "几天",
        "value": 1
      },
      {
        "answer": "一半以上的日子",
        "value": 2
      },
      {
        "answer": "几乎每天",
        "value": 3
      }
      ]
    },
  ]
}

var que3 = {
  "scaleTitle": "失眠严重指数",
  "scaleBrief": "对于以下问题，请您选出近1个月以来最符合您的睡眠情况的选项。",
  "qNum":7,
  "questions": [
    {
      "type": 1,
      "question": "1.入睡困难",
      "answers": [{
        "answer": "无",
        "value": 0
      },
      {
        "answer": "轻度",
        "value": 1
      },
      {
        "answer": "中度",
        "value": 2
      },
      {
        "answer": "重度",
        "value": 3
      },
      {
        "answer": "极重度",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "2.睡眠维持困难",
      "answers": [{
        "answer": "无",
        "value": 0
      },
      {
        "answer": "轻度",
        "value": 1
      },
      {
        "answer": "中度",
        "value": 2
      },
      {
        "answer": "重度",
        "value": 3
      },
      {
        "answer": "极重度",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "3.早醒",
      "answers": [{
        "answer": "无",
        "value": 0
      },
      {
        "answer": "轻度",
        "value": 1
      },
      {
        "answer": "中度",
        "value": 2
      },
      {
        "answer": "重度",
        "value": 3
      },
      {
        "answer": "极重度",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "4.对您目前的睡眠模式满意/不满意程度如何？",
      "answers": [{
        "answer": "很满意",
        "value": 0
      },
      {
        "answer": "满意",
        "value": 1
      },
      {
        "answer": "不太满意",
        "value": 2
      },
      {
        "answer": "不满意",
        "value": 3
      },
      {
        "answer": "很不满意",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "5.您认为您的失眠在多大程度上影响了你的日间功能？（如日间疲劳、处理工作和日常事务的能力、注意力、记忆力、情绪等）",
      "answers": [{
        "answer": "没有干扰",
        "value": 0
      },
      {
        "answer": "轻微",
        "value": 1
      },
      {
        "answer": "有些",
        "value": 2
      },
      {
        "answer": "较多",
        "value": 3
      },
      {
        "answer": "很多干扰",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "6.你的失眠问题影响了你的生活质量，你觉得在别人眼中你的失眠情况如何？",
      "answers": [{
        "answer": "没有",
        "value": 0
      },
      {
        "answer": "一点",
        "value": 1
      },
      {
        "answer": "有些",
        "value": 2
      },
      {
        "answer": "较多",
        "value": 3
      },
      {
        "answer": "很多",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "7.您对目前的睡眠问题的担心/痛苦程度如何？",
      "answers": [{
        "answer": "没有",
        "value": 0
      },
      {
        "answer": "一点",
        "value": 1
      },
      {
        "answer": "有些",
        "value": 2
      },
      {
        "answer": "较多",
        "value": 3
      },
      {
        "answer": "很多",
        "value": 4
      },
      ]
    }
  ]
}

var que4 = {
  "scaleTitle": "事件影响量表修订版",
  "scaleBrief": "过去一月，经历了新冠肺炎疫情的您是否体验到下列困扰，请您仔细阅读每个题目，选择最能够形容每一种困扰对您影响的程度。那件事指新冠肺炎以及其引发的一系列烦恼的事情。请按照自己在最近7天之内的体验，说明这件事情对你有多大影响。",
  "qNum": 22,
  "questions": [
    {
      "type": 1,
      "question": "1.任何与新冠肺炎相关的事物都会引发当时的感受。",
      "answers": [{
        "answer": "一点没有",
        "value": 0
      },
      {
        "answer": "很少出现",
        "value": 1
      },
      {
        "answer": "有时出现",
        "value": 2
      },
      {
        "answer": "常常出现",
        "value": 3
      },
      {
        "answer": "总是出现",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "2.我很难安稳地一觉睡到天亮。",
      "answers": [{
        "answer": "一点没有",
        "value": 0
      },
      {
        "answer": "很少出现",
        "value": 1
      },
      {
        "answer": "有时出现",
        "value": 2
      },
      {
        "answer": "常常出现",
        "value": 3
      },
      {
        "answer": "总是出现",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "3.别的东西也会让我想起那件事。",
      "answers": [{
        "answer": "一点没有",
        "value": 0
      },
      {
        "answer": "很少出现",
        "value": 1
      },
      {
        "answer": "有时出现",
        "value": 2
      },
      {
        "answer": "常常出现",
        "value": 3
      },
      {
        "answer": "总是出现",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "4.我感觉我易受刺激、易发怒。",
      "answers": [{
        "answer": "一点没有",
        "value": 0
      },
      {
        "answer": "很少出现",
        "value": 1
      },
      {
        "answer": "有时出现",
        "value": 2
      },
      {
        "answer": "常常出现",
        "value": 3
      },
      {
        "answer": "总是出现",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "5.每当想起那件事或其他事情使我记起它的时候，我会尽量避免使自己心烦意乱。",
      "answers": [{
        "answer": "一点没有",
        "value": 0
      },
      {
        "answer": "很少出现",
        "value": 1
      },
      {
        "answer": "有时出现",
        "value": 2
      },
      {
        "answer": "常常出现",
        "value": 3
      },
      {
        "answer": "总是出现",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "6.即使我不愿意去想那件事时，也会想起它。",
      "answers": [{
        "answer": "一点没有",
        "value": 0
      },
      {
        "answer": "很少出现",
        "value": 1
      },
      {
        "answer": "有时出现",
        "value": 2
      },
      {
        "answer": "常常出现",
        "value": 3
      },
      {
        "answer": "总是出现",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "7.我感觉，那件事好像不是真的，或者从未发生过。",
      "answers": [{
        "answer": "一点没有",
        "value": 0
      },
      {
        "answer": "很少出现",
        "value": 1
      },
      {
        "answer": "有时出现",
        "value": 2
      },
      {
        "answer": "常常出现",
        "value": 3
      },
      {
        "answer": "总是出现",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "8.我设法远离一切能使我记起那件事的事物。",
      "answers": [{
        "answer": "一点没有",
        "value": 0
      },
      {
        "answer": "很少出现",
        "value": 1
      },
      {
        "answer": "有时出现",
        "value": 2
      },
      {
        "answer": "常常出现",
        "value": 3
      },
      {
        "answer": "总是出现",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "9.有关那件事的画面会在我的脑海中突然出现。",
      "answers": [{
        "answer": "一点没有",
        "value": 0
      },
      {
        "answer": "很少出现",
        "value": 1
      },
      {
        "answer": "有时出现",
        "value": 2
      },
      {
        "answer": "常常出现",
        "value": 3
      },
      {
        "answer": "总是出现",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "10.我感觉自己神经过敏，易被惊吓。",
      "answers": [{
        "answer": "一点没有",
        "value": 0
      },
      {
        "answer": "很少出现",
        "value": 1
      },
      {
        "answer": "有时出现",
        "value": 2
      },
      {
        "answer": "常常出现",
        "value": 3
      },
      {
        "answer": "总是出现",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "11.我努力不去想那件事。",
      "answers": [{
        "answer": "一点没有",
        "value": 0
      },
      {
        "answer": "很少出现",
        "value": 1
      },
      {
        "answer": "有时出现",
        "value": 2
      },
      {
        "answer": "常常出现",
        "value": 3
      },
      {
        "answer": "总是出现",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "12.我觉察到我对那件事仍有很多感受，但我没有去处理它们。",
      "answers": [{
        "answer": "一点没有",
        "value": 0
      },
      {
        "answer": "很少出现",
        "value": 1
      },
      {
        "answer": "有时出现",
        "value": 2
      },
      {
        "answer": "常常出现",
        "value": 3
      },
      {
        "answer": "总是出现",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "13.我对那件事的感觉有点麻木。",
      "answers": [{
        "answer": "一点没有",
        "value": 0
      },
      {
        "answer": "很少出现",
        "value": 1
      },
      {
        "answer": "有时出现",
        "value": 2
      },
      {
        "answer": "常常出现",
        "value": 3
      },
      {
        "answer": "总是出现",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "14.我发现我的行为和感觉，好像又回到了那个事件发生的时候那样。",
      "answers": [{
        "answer": "一点没有",
        "value": 0
      },
      {
        "answer": "很少出现",
        "value": 1
      },
      {
        "answer": "有时出现",
        "value": 2
      },
      {
        "answer": "常常出现",
        "value": 3
      },
      {
        "answer": "总是出现",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "15.我难以入睡。",
      "answers": [{
        "answer": "一点没有",
        "value": 0
      },
      {
        "answer": "很少出现",
        "value": 1
      },
      {
        "answer": "有时出现",
        "value": 2
      },
      {
        "answer": "常常出现",
        "value": 3
      },
      {
        "answer": "总是出现",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "16.我因那件事而有强烈的情感波动。",
      "answers": [{
        "answer": "一点没有",
        "value": 0
      },
      {
        "answer": "很少出现",
        "value": 1
      },
      {
        "answer": "有时出现",
        "value": 2
      },
      {
        "answer": "常常出现",
        "value": 3
      },
      {
        "answer": "总是出现",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "17.我想要忘掉那件事。",
      "answers": [{
        "answer": "一点没有",
        "value": 0
      },
      {
        "answer": "很少出现",
        "value": 1
      },
      {
        "answer": "有时出现",
        "value": 2
      },
      {
        "answer": "常常出现",
        "value": 3
      },
      {
        "answer": "总是出现",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "18.我感觉自己难以集中注意力。",
      "answers": [{
        "answer": "一点没有",
        "value": 0
      },
      {
        "answer": "很少出现",
        "value": 1
      },
      {
        "answer": "有时出现",
        "value": 2
      },
      {
        "answer": "常常出现",
        "value": 3
      },
      {
        "answer": "总是出现",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "19.令我想起那件事的事物会引起我身体上的反应，如:出汗、呼吸困难、眩晕和心跳。",
      "answers": [{
        "answer": "一点没有",
        "value": 0
      },
      {
        "answer": "很少出现",
        "value": 1
      },
      {
        "answer": "有时出现",
        "value": 2
      },
      {
        "answer": "常常出现",
        "value": 3
      },
      {
        "answer": "总是出现",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "20.我曾经梦到过那件事。",
      "answers": [{
        "answer": "一点没有",
        "value": 0
      },
      {
        "answer": "很少出现",
        "value": 1
      },
      {
        "answer": "有时出现",
        "value": 2
      },
      {
        "answer": "常常出现",
        "value": 3
      },
      {
        "answer": "总是出现",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "21.我感觉自己很警觉或很戒备。",
      "answers": [{
        "answer": "一点没有",
        "value": 0
      },
      {
        "answer": "很少出现",
        "value": 1
      },
      {
        "answer": "有时出现",
        "value": 2
      },
      {
        "answer": "常常出现",
        "value": 3
      },
      {
        "answer": "总是出现",
        "value": 4
      },
      ]
    },
    {
      "type": 1,
      "question": "22.我尽量不提那件事。",
      "answers": [{
        "answer": "一点没有",
        "value": 0
      },
      {
        "answer": "很少出现",
        "value": 1
      },
      {
        "answer": "有时出现",
        "value": 2
      },
      {
        "answer": "常常出现",
        "value": 3
      },
      {
        "answer": "总是出现",
        "value": 4
      },
      ]
    }
  ]
}


var doctorinfos = {
  "qNum": 9,
  "questions": [
    
    {
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
      "type": 5,
      "question": "3. 您的民族",
      "answers": [{
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
var userinfos = {
  "qNum": 5,
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
      "type": 5,
      "question": "3. 您的民族",
      "answers": [{
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
  }
  ]
}
var doctornear = {
  "qNum": 13,
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
var usernear = {
  "qNum": 9,
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
var quefour = {
  "qNum":7,
  "questions": [{
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
    "type": 1,//4
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
    "type": 1,//2
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
    "type": 1,//4
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
    "type": 1,//2
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
}


//转化成小程序模板语言 这一步非常重要 不然无法正确调用
module.exports = {
  questions: questions,
  doctorinfos: doctorinfos,
  doctornear: doctornear,
  userinfos: userinfos,
  usernear: usernear,
  quefour: quefour,
  que1: que1,
  que2: que2,
  que3: que3,
  que4: que4
}