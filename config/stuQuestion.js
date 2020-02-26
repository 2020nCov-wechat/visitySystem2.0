// 学生访谈问题
var stuque = {
  "queNum":20,
  "questions":[{
  "type": 1,
  "question": "1. 在过去的两个星期，你会不会每天都感到心情低落，沮丧或绝望",
  "answers": [{
    "answer": "几乎每天",
    "value": 0
  },
  {
    "answer": "一半以上时间吧",
    "value": 1
  },
  {
    "answer": "偶尔",
    "value": 2
  },
  {
    "answer": "完全没有",
    "value": 3
  },
  ]
},
{
  "type": 1,
  "question": "2. 做一些和兴趣爱好相关的事情会让你觉得很开心吗？",
  "answers": [{
    "answer": "会",
    "value": 0
  },
  {
    "answer": "不会",
    "value": 1
  },
  ]
},
{
  "type": 1,
  "question": "3. 最近两周，有没有经常感觉疲倦或没有活力？",
  "answers": [{
    "answer": "几乎每天",
    "value": 0
  },
  {
    "answer": "一半以上的时间吧",
    "value": 1
  },
  {
    "answer": "偶尔",
    "value": 2
  },
  {
    "answer": "完全没有",
    "value": 3
  },]
  }, {
    "type": 1,
    "question": "4. 最近上课或者做事时，有没有经常出现注意力难以集中或者经常走神的情况呢？",
    "answers": [{
      "answer": "几乎每天",
      "value": 0
    },
    {
      "answer": "一半以上的时间吧",
      "value": 1
    },
    {
      "answer": "偶尔",
      "value": 2
    },
    {
      "answer": "完全没有",
      "value": 3
    },]
  },
  {
    "type": 1,
    "question": "5. 你是一个很果断的人吗？",
    "answers": [{
      "answer": "不是",
      "value": 0
    },
    {
      "answer": "算是吧",
      "value": 1
    },
    ]
  },
  {
    "type": 1,
    "question": "6. 在做决定的时候，会不会出现犹豫不决或者选择困难的情况呢？",
    "answers": [{
      "answer": "会犹豫不决或选择困难",
      "value": 0
    },
    {
      "answer": "没有出现这种情况",
      "value": 1
    },
    {
      "answer": "不确定",
      "value": 2
    },
    ]
  },
  {
    "type": 1,
    "question": "7. 你现在的生活状态和周围同学相比，或者和你以前的状态相比，你觉得有什么很大的不同吗？",
    "answers": [{
      "answer": "有很大不同",
      "value": 0
    },
    {
      "answer": "没什么不同",
      "value": 1
    },
    ]
  },
  {
    "type": 1,
    "question": "8. 你觉得活着的意义和价值是什么",
    "answers": [{
      "answer": "没什么价值",
      "value": 0
    },
    {
      "answer": "好好活着就好",
      "value": 1
    },
    ]
  },
  {
    "type": 1,
    "question": "9. 你最近有没有经常自责？",
    "answers": [{
      "answer": "会经常自责",
      "value": 0
    },
    {
      "answer": "没有这种想法",
      "value": 1
    },
    {
      "answer": "偶尔会自责",
      "value": 2
    },
    ]
  },
    {
      "type": 1,
      "question": "10. 有没有觉得自己总是让家人或者朋友失望呢？",
      "answers": [{
        "answer": "是的",
        "value": 0
      },
      {
        "answer": "没有",
        "value": 1
      },
      ]
    },
  {
    "type": 1,
    "question": "11. 嗯嗯，那你是否反复想要伤害自己、自杀或者希望自己死去？",
    "answers": [{
      "answer": "是的",
      "value": 0
    },
    {
      "answer": "没有想过",
      "value": 1
    },
    ]
  },
  {
    "type": 1,
    "question": "12. 能具体描述你是否有相关的计划或者行为吗？",
    "answers": [{
      "answer": "曾经有过自杀的想法",
      "value": 0
    },
    {
      "answer": "想法、计划都有",
      "value": 1
    },
    {
      "answer": "没有想过",
      "value": 2
    }]
  },
  {
    "type": 1,
    "question": "13. 有没有出现整夜失眠、入睡困难、早醒或者睡眠浅呢？",
    "answers": [{
      "answer": "几乎每天",
      "value": 0
    },
    {
      "answer": "一半以上的时间吧",
      "value": 1
    },
    {
      "answer": "偶尔",
      "value": 2
    },
    {
      "answer": "完全没有",
      "value": 3
    },]
  },
    {
      "type": 1,
      "question": "14. 你觉得你的睡眠质量好吗？",
      "answers": [{
        "answer": "很不好",
        "value": 0
      },
      {
        "answer": "不好",
        "value": 1
      },
      {
        "answer": "还好",
        "value": 2
      },
      {
        "answer": "很好",
        "value": 3
      },]
    },
  {
    "type": 1,
    "question": "15. 每天都有食欲不振或者吃太多",
    "answers": [{
      "answer": "几乎每天",
      "value": 0
    },
    {
      "answer": "一半以上的时间吧",
      "value": 1
    },
    {
      "answer": "偶尔",
      "value": 2
    },
    {
      "answer": "完全没有",
      "value": 3
    },]
  },
  {
    "type": 1,
    "question": "16. 现在每天说话或动作会明显比过去缓慢吗？",
    "answers": [{
      "answer": "几乎每天",
      "value": 0
    },
    {
      "answer": "一半以上的时间吧",
      "value": 1
    },
    {
      "answer": "偶尔",
      "value": 2
    },
    {
      "answer": "完全没有",
      "value": 3
    },]
  },
    {
      "type": 1,
      "question": "17. 会经常感到烦躁、坐卧不安、难以静坐？",
      "answers": [{
        "answer": "是的，经常这样",
        "value": 0
      },
      {
        "answer": "偶尔会",
        "value": 1
      },
      {
        "answer": "完全不会",
        "value": 2
      },
      ]
    },
  {
    "type": 1,
    "question": "18. 是否曾有一段时间感觉情绪高涨或感觉精力充沛、或者遇到麻烦时仍充满自信",
    "answers": [{
      "answer": "有过",
      "value": 0
    },
    {
      "answer": "没有出现这种情况",
      "value": 1
    },
    ]
  },
  {
    "type": 1,
    "question": "19. 请问你和家人或是周围人的关系怎么样？他们对你怎么样？有没有人针对你",
    "answers": [{
      "answer": "关系挺好",
      "value": 0
    },
    {
      "answer": "关系不好，有人针对我",
      "value": 1
    },
    {
      "answer": "关系一般",
      "value": 2
    }]
  },
  {
    "type": 1,
    "question": "20. 在过去的六个月内，您是否对日常生活中、工作中、家庭中或者您周围的一系列事件，过分担心或紧张不安？",
    "answers": [{
      "answer": "没有",
      "value": 0
    },
    {
      "answer": "会很担心",
      "value": 1
    },
    ]
  }
]}

//转化成小程序模板语言 这一步非常重要 不然无法正确调用
module.exports = {
  stuque: stuque,
}