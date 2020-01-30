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

//转化成小程序模板语言 这一步非常重要 不然无法正确调用
module.exports = {
  questions: questions
}