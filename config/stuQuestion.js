// 学生访谈问题
var stuque = {
  "queNum":20,
  "questions":[{
  "type": 1,
    "question": "1. 在过去的两个星期，你会不会每天都感觉到心情不开心呢？",
  "answers": [{
    "answer": "几乎每天",
    "value": 3
  },
  {
    "answer": "一半以上的时间吧",
    "value": 2
  },
  {
    "answer": "偶尔",
    "value": 1
  },
  {
    "answer": "完全没有",
    "value": 0
  },
  ]
},
{
  "type": 1,
  "question": "2. 每次不开心的情绪会持续时间有多长呢？",
  "answers": [{
    "answer": "一周以上",
    "value": 3
  },
  {
    "answer": "一周左右",
    "value": 2
  },
    {
      "answer": "一天以内",
      "value": 1
    },
    {
      "answer": "不会很长",
      "value": 0
    },
  ]
},
{
  "type": 1,
  "question": "3. 你平时的兴趣爱好多吗？",
  "answers": [{
    "answer": "没什么兴趣爱好",
    "value": 3
  },
  {
    "answer": "有一些爱好，比如看电影、打球…",
    "value": 1
  },
  {
    "answer": "爱好广泛",
    "value": 0
  },
 ]
  }, {
    "type": 1,
  "question": "4. 做一些和兴趣爱好相关的事情会让你觉得很开心吗？",
    "answers": [{
      "answer": "现在不会了，没什么感觉",
      "value": 3
    },
    {
      "answer": "有些时候会，有些时候不会",
      "value": 1
    },
    {
      "answer": "会",
      "value": 0
    },
    ]
  },
  {
    "type": 1,
    "question": "5. 最近两周，是不是每天都元气满满呢，有没有出现不想学习、不想去和同学们说话或者做事提不起劲呢？",
    "answers": [{
      "answer": "几乎每天",
      "value": 3
    },
    {
      "answer": "一半以上的时间吧",
      "value": 2
    },
      {
        "answer": "偶尔",
        "value": 1
      },
      {
        "answer": "完全没有",
        "value": 0
      },
    ]
  },
  {
    "type": 1,
    "question": "6. 嗯，那你最近上课或者做事的注意力怎么样呢?有没有出现注意力难以集中或者经常走神的情况呢？",
    "answers": [{
      "answer": "几乎每天",
      "value": 3
    },
    {
      "answer": "一半以上的时间吧",
      "value": 2
    },
    {
      "answer": "偶尔",
      "value": 1
    },
    {
      "answer": "完全没有",
      "value": 0
    },
    ]
  },
  {
    "type": 1,
    "question": "7. 你是一个很果断的人吗？在做决定的时候，会不会出现犹豫不决或者选择困难的情况呢？",
    "answers": [{
      "answer": "总是会犹豫不决或选择困难",
      "value": 3
    },
    {
      "answer": "偶尔会",
      "value": 1
    },
      {
        "answer": "没有出现这种情况",
        "value": 0
      },
    ]
  },
  {
    "type": 1,
    "question": "8. 你现在的生活状态和周围同学们相比，或者和你以前的状态相比，你觉得有什么很大的不同吗？",
    "answers": [{
      "answer": "有很大不同",
      "value": 3
    },
    {
      "answer": "没有什么不同",
      "value": 0
    },
    ]
  },
  {
    "type": 1,
    "question": "9. 你觉得活着的价值和意义是什么？",
    "answers": [{
      "answer": "没什么价值",
      "value": 3
    },
    {
      "answer": "好好活着就好",
      "value": 0
    },
    ]
  },
    {
      "type": 1,
      "question": "10. 你最近有没有经常自责，或者觉得自己总是让家人或者朋友失望呢？",
      "answers": [{
        "answer": "经常都会自责",
        "value": 3
      },
      {
        "answer": "偶尔会自责",
        "value": 1
      },
        {
          "answer": "没有这种想法",
          "value": 0
        },
      ]
    },
  {
    "type": 1,
    "question": "11. 你是否反复想要伤害自己、自杀或者希望自己死去？",
    "answers": [{
      "answer": "是的",
      "value": 3
    },
    {
      "answer": "没有想过",
      "value": 0
    },
    ]
  },
  {
    "type": 1,
    "question": "12. 能具体描述你是否有相关的计划或者行为吗？",
    "answers": [{
      "answer": "现在仍然有这种想法",
      "value": 3
    },
    {
      "answer": "曾经有过想法和计划",
      "value": 2
    },
    {
      "answer":"曾经有过想法，现在没有了",
      "value": 1
    },
    {
      "answer": "没有想过",
      "value": 0
    }]
  },
  {
    "type": 1,
    "question": "13. 你平均每天的睡眠时长是多久啊？",
    "answers": [{
      "answer": "大于13个小时",
      "value": 3
    },
    {
      "answer": "8-13个小时",
      "value": 2
    },
    {
      "answer": "4-6个小时",
      "value": 1
    },
    {
      "answer": "6-8个小时",
      "value": 0
    },]
  },
    {
      "type": 1,
      "question": "14. 你觉得你的睡眠质量好吗？",
      "answers": [{
        "answer": "非常不好",
        "value": 3
      },
      {
        "answer": "不是很好",
        "value": 2
      },
      {
        "answer": "有时候好，有时候不好",
        "value": 1
      },
      {
        "answer": "很好",
        "value": 0
      },]
    },
  {
    "type": 1,
    "question": "15. 有没有出现整夜失眠、入睡困难、早醒或者睡眠浅呢？",
    "answers": [{
      "answer": "几乎每天",
      "value": 3
    },
    {
      "answer": "一半以上的时间吧",
      "value": 2
    },
    {
      "answer": "偶尔",
      "value": 1
    },
    {
      "answer": "完全没有",
      "value": 0
    },]
  },
  {
    "type": 1,
    "question": "16. 最近食欲变化很大，会不想吃东西或者暴饮暴食吗？",
    "answers": [{
      "answer": "几乎每天",
      "value": 3
    },
    {
      "answer": "一半以上的时间吧",
      "value": 2
    },
    {
      "answer": "偶尔",
      "value": 1
    },
    {
      "answer": "完全没有",
      "value": 0
    },]
  },
    {
      "type": 1,
      "question": "17. 现在每天说话或动作会明显比过去缓慢，或者感到烦躁、坐卧不安、难以静坐吗？",
      "answers": [{
        "answer": "是的，经常这样",
        "value": 3
      },
      {
        "answer": "偶尔",
        "value": 1
      },
      {
        "answer": "完全没有",
        "value": 0
      },
      ]
    },
  {
    "type": 1,
    "question": "18. 您是否曾有一段时间，感觉 “情绪高涨”或者感觉精力充沛、或者遇到麻烦时仍充满自信、或者其他人认为您和平时不一样.",
    "answers": [{
      "answer": "有过",
      "value": 3
    },
    {
      "answer": "没有出现这种情况",
      "value": 0
    },
    ]
  },
  {
    "type": 1,
    "question": "19. 请问你和家人或是周围人的关系怎么样？他们对你怎么样？有没有人故意针对你",
    "answers": [{
      "answer": "关系不好，有人针对我",
      "value": 3
    },
    {
      "answer": "关系一般",
      "value": 2
    },
    {
      "answer": "关系挺好",
      "value": 0
    }]
  },
  {
    "type": 1,
    "question": "20. 在过去的六个月内，您是否对日常生活中、工作中、家庭中或者您周围的一系列事件，过分担心或紧张不安？",
    "answers": [{
      "answer": "会很担心",
      "value": 3
    },
    {
      "answer": "没有",
      "value": 0
    },
    ]
  }
]}

//转化成小程序模板语言 这一步非常重要 不然无法正确调用
module.exports = {
  stuque: stuque,
}