var questions = [
    {
        "type": 1,
        "question": "1.您是否同意参与此次调查？",
        "answers": [{
            "answer": "是",
        },
            {
                "answer": "否",
            }]
    },
    {
        "type": 2,
        "question": "2.您是医护工作者吗？",
        "answers": [{
            "answer": "不是（跳转到大众版）",
        },
            {
                "answer": "是，请填写您目前工作单位",
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
                "answer": "完全没有",
                "value": 0
            },
                {
                    "answer": "有几天",
                    "value": 1
                },
                {
                    "answer": "一半以上天数",
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
            "question": "2.感到心情低落、沮丧或绝望",
            "answers": [{
                "answer": "完全没有",
                "value": 0
            },
                {
                    "answer": "有几天",
                    "value": 1
                },
                {
                    "answer": "一半以上天数",
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
            "question": "3.入睡困难、睡不安稳或睡眠过多",
            "answers": [{
                "answer": "完全没有",
                "value": 0
            },
                {
                    "answer": "有几天",
                    "value": 1
                },
                {
                    "answer": "一半以上天数",
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
                "answer": "完全没有",
                "value": 0
            },
                {
                    "answer": "有几天",
                    "value": 1
                },
                {
                    "answer": "一半以上天数",
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
                "answer": "完全没有",
                "value": 0
            },
                {
                    "answer": "有几天",
                    "value": 1
                },
                {
                    "answer": "一半以上天数",
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
            "question": "6.觉得自己很糟、很失败，或让自己、家人失望",
            "answers": [{
                "answer": "完全没有",
                "value": 0
            },
                {
                    "answer": "有几天",
                    "value": 1
                },
                {
                    "answer": "一半以上天数",
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
            "question": "7.对专注于做某件事情有困难，例如阅读报纸或看电视",
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
            "question": "8.行动或说话速度变得缓慢（或变得烦躁、坐立不安、动来动去等）已被周围人所察觉",
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
            "question": "10.感觉紧张，焦虑或急切",
            "answers": [{
                "answer": "完全不会",
                "value": 0
            },
                {
                    "answer": "有几天",
                    "value": 1
                },
                {
                    "answer": "超过一周",
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
            "question": "11.不能够停止或控制担忧",
            "answers": [{
                "answer": "完全不会",
                "value": 0
            },
                {
                    "answer": "有几天",
                    "value": 1
                },
                {
                    "answer": "超过一周",
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
            "question": "12.对各种各样的事情担忧过多",
            "answers": [{
                "answer": "完全不会",
                "value": 0
            },
                {
                    "answer": "好几天",
                    "value": 1
                },
                {
                    "answer": "超过一周",
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
            "question": "13.很难放松下来",
            "answers": [{
                "answer": "完全不会",
                "value": 0
            },
                {
                    "answer": "好几天",
                    "value": 1
                },
                {
                    "answer": "超过一周",
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
            "question": "14.由于不安而无法静坐",
            "answers": [{
                "answer": "完全不会",
                "value": 0
            },
                {
                    "answer": "好几天",
                    "value": 1
                },
                {
                    "answer": "超过一周",
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
            "question": "15.变得容易烦恼或急躁",
            "answers": [{
                "answer": "完全不会",
                "value": 0
            },
                {
                    "answer": "好几天",
                    "value": 1
                },
                {
                    "answer": "超过一周",
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
            "question": "16.感到似乎将有可怕的事情发生而害怕",
            "answers": [{
                "answer": "完全不会",
                "value": 0
            },
                {
                    "answer": "好几天",
                    "value": 1
                },
                {
                    "answer": "超过一周",
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
    "scaleBrief": "对于以下问题，请您选出近1个月以来最符合您的睡眠情况的数字。",
    "qNum": 7,
    "questions": [
        {
            "type": 7,
            "question": "17 请描述您当前(或最近一周)失眠问题的严重程度----入睡困难",
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
            "type": 7,
            "question": "18 请描述您当前(或最近一周)失眠问题的严重程度----睡眠维持困难",
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
            "type": 7,
            "question": "19 请描述您当前(或最近一周)失眠问题的严重程度----早醒",
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
            "question": "20.对您目前的睡眠模式满意度",
            "answers": [{
                "answer": "很满意",
                "value": 0
            },
                {
                    "answer": "满意",
                    "value": 1
                },
                {
                    "answer": "一般",
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
            "question": "21.您认为您的睡眠问题在多大程度上干扰了您的日间功能（如日间疲劳、处理工作和日常事务的能力、注意力、记忆力、情绪等）",
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
            "question": "22.你的失眠问题影响了你的生活质量，你觉得在别人眼中你的失眠情况如何？",
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
            "question": "23.您对目前的睡眠问题的担心/痛苦程度如何？",
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
    "scaleBrief": "过去一月，经历了新冠肺炎疫情的您是否体验到下列困扰，请您仔细阅读每个题目，选择最能够形容每一种困扰对您影响的程度。请按照自己在最近7天之内的体验，说明这件事情对你有多大影响。",
    "qNum": 22,
    "questions": [
        {
            "type": 7,
            "question": "24.任何与新冠肺炎相关的事物都会引发当时的感受。",
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
            "type": 7,
            "question": "25.我很难安稳地一觉睡到天亮。",
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
            "type": 7,
            "question": "26.别的东西也会让我想起肺炎。",
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
            "type": 7,
            "question": "27.我感觉我易受刺激、易发怒。",
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
            "type": 7,
            "question": "28.每当想起肺炎疫情或其他事情使我记起它的时候，我会尽量避免使自己心烦意乱。",
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
            "type": 7,
            "question": "29.即使我不愿意去想肺炎疫情，也会想起它。",
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
            "type": 7,
            "question": "30.我感觉，肺炎疫情好像不是真的，或者从未发生过。",
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
            "type": 7,
            "question": "31.我设法远离一切能使我记起肺炎疫情的事物。",
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
            "type": 7,
            "question": "32.有关肺炎疫情的画面会在我的脑海中突然出现。",
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
            "type": 7,
            "question": "33.我感觉自己神经过敏，易被惊吓。",
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
            "type": 7,
            "question": "34.我努力不去想肺炎疫情。",
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
            "type": 7,
            "question": "35.我觉察到我对肺炎疫情仍有很多感受，但我没有去处理它们。",
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
            "type": 7,
            "question": "36.我对肺炎疫情的感觉有点麻木。",
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
            "type": 7,
            "question": "37.我发现我的行为和感觉，好像又回到了肺炎疫情发生的时候那样。",
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
            "type": 7,
            "question": "38.我难以入睡。",
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
            "type": 7,
            "question": "39.我因肺炎疫情而有强烈的情感波动。",
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
            "type": 7,
            "question": "40.我想要忘掉肺炎疫情。",
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
            "type": 7,
            "question": "41.我感觉自己难以集中注意力。",
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
            "type": 7,
            "question": "42.令我想起肺炎疫情的事物会引起我身体上的反应，如:出汗、呼吸困难、眩晕和心跳。",
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
            "type": 7,
            "question": "43.我曾经梦到过肺炎疫情。",
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
            "type": 7,
            "question": "44.我感觉自己很警觉或很戒备。",
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
            "type": 7,
            "question": "45.我尽量不提肺炎疫情。",
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

var que5 = {
    "scaleTitle": "",
    "scaleBrief": "我们想就您的工作经历询问一些问题，包括在帮助别人的工作过程中正面和负面的经历。请就您目前的状态考虑以下问题，并选择一个最接近您最近2周内状态的数字。",
    "qNum": 30,
    "questions": [
        {
            "type": 7,
            "question": "73.我感到快乐",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "74.我的精力不止倾注于一个被助者",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "75.能够帮助别人使我感到满足",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "76.我感到与别人有联系",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "77.我被意外的声音所惊吓",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "78.在帮助别人后我感受到鼓舞",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "79.作为一个助人者，我感到自己很难将自己个人生活与助人职业生活区分开来",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "80.我所帮助的人创伤性经历使我失眠了",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "81.我想我受被助者的创伤性经历影响了",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "82.我被助人者这份工作束缚住了",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "83.由于我的助人者工作，我感到自己对很多事情都很紧张",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "84.我喜欢助人者这份工作",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "85.从事助人者工作，让我感到压抑",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "86.我感到自己在体验被助者的创伤",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "87.我拥有可以支撑自己的信念",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "88.对于能够不断拥有助人者的技巧与方法，我感到高兴",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "89.我就是自己想要成为的那种人",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "90.我的助人者工作让我感到很满足",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "91.由于从事助人者这份工作，我感到精疲力竭",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "92.对于那些被助者以及我如何帮助他们，我有恰当的想法和感受",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "93.对于我所要处理的工作量以及病（案）例数，我感到不堪重负",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "94.相信我的工作是有用的",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "95.我回避某些情景与活动，因为那会让我想起被助者的可怕经历",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "96.我为自己能够帮助别人感到骄傲",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "97.由于我从事助人者工作，我经常会突然冒出令人恐惧的想法",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "98.由于助人者这份工作，我陷入了困境",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "99.我感到自己是一个成功的助人者",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "100.我不能回忆起与创伤性受害者工作的重要部分",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "101.我是一个非常敏感的人",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        },
        {
            "type": 7,
            "question": "102.我高兴能够选择助人者这份工作",
            "answers": [{
                "answer": "从没有",
                "value": 0
            },
                {
                    "answer": "很少",
                    "value": 1
                },
                {
                    "answer": "有一些",
                    "value": 2
                },
                {
                    "answer": "较多",
                    "value": 3
                },
                {
                    "answer": "经常",
                    "value": 4
                },
                {
                    "answer": "总是",
                    "value": 5
                },
            ]
        }
    ]
}

var doctorinfos = {
    "qNum": 10,
    "questions": [
        {
            "type": 9,
            "question": "2.您是医务工作者吗？",
            "answers": [
                {
                    "answer": "是，请填写您目前工作单位",
                },
                {
                    "answer": "否（请选择大众版）",
                },
            ]
        },
        {
            "type": 1,
            "question": "3. 您的性别",
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
            "question": "4. 您的民族",
            "answers": [{}
            ]
        },
        {
            "type": 1,
            "question": "5. 您的年龄",
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
            "question": "6. 婚姻状况",
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
            "question": "7. 学历",
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
            "type": 2,
            "question": "8. 工作单位",
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
                    "answer": "雷神山医院、火神山医院",
                },
                {
                    "answer": "方舱医院",
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
            "question": "9. 执业资质 ",
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
            "type": 10,
            "question": "10. 目前实际工作所在科室 ",
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
                    "answer": "其他普通病房或门诊（请填写具体科室）",
                },
                {
                    "answer": "其他（如管理、后勤等）",
                }
            ]
        },
        {
            "type": 1,
            "question": "11. 职称 ",
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
        },
    ]
}
var userinfos = {
    "qNum": 9,
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
            "answers": [{}
            ]
        },
        {
            "type": 1,
            "question": "4. 您的年龄",
            "answers": [{
                "answer": "18以下",
            }, {
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
            "type": 11,
            "question": "7. 您的职业",
            "answers": [{}
            ]
        },
        {
            "type": 1,
            "question": "8. 家中是否有超过65岁的老人？",
            "answers": [{
                "answer": "是",
            },
                {
                    "answer": "否",
                }]
        },


        {
            "type": 1,
            "question": "9. 家中的老人是否患有高血压、糖尿病等基础性疾病？",
            "answers": [{
                "answer": "是",
            },
                {
                    "answer": "否",
                }]
        },
        {
            "type": 1,
            "question": "10. 是否有子女未成年（未满18周岁）",
            "answers": [{
                "answer": "是",
            },
                {
                    "answer": "否",
                },
                {
                    "answer": "无子女",
                }]
        },
    ]
}
var job = [
    "在校学生",
    "家庭主妇",
    "待业",
    "离退休人员",
    "国家机关、党群组织、企事业单位负责人",
    "专业技术人员",
    "办事人员和有关人员",
    "商业、服务业人员",
    "农林牧渔水利业生产人员",
    "生产运输设备操作人员及有关人员",
    "军人",
    "其他劳动者"
]
var doctornear = {
    "qNum": 18,
    "questions": [
        {
            "type": 9,
            "question": "12. 您是否是外省支援湖北的医务人员？ ",
            "answers": [
                {
                    "answer": "是，您原本的工作单位",
                },
                {
                    "answer": "否",
                }
            ]
        },
        {
            "type": 6,
            "question": "13. 近一周居住城市",
            "answers": [{
                "answer": "请选择",
            }]
        },
        {
            "type": 1,
            "question": "14. 近一周居住状态",
            "answers": [{
                "answer": "独居",
            },
                {
                    "answer": "与家人居住",
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
            "question": "15. 截至目前为止，您是否直接从事发热患者或确诊新冠肺炎患者的诊疗或护理工作？",
            "answers": [{
                "answer": "是",
            },
                {
                    "answer": "否",
                }]
        },
        {
            "type": 3,//3
            "question": "16. 截止目前为止，是否有以下人员确诊为新冠肺炎？[多选]",
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
                    "answer": "您居住的小区、街道有确诊病例",
                },
                {
                    "answer": "无",
                }]
        },
        {
            "type": 1,
            "question": "17. 近一周，您本人和与您共同居住的人（包括家人或合住的人）中，是否有人未确诊，但有发热、咳嗽等症状？",
            "answers": [{
                "answer": "是",
            },
                {
                    "answer": "否",
                }]
        },
        {
            "type": 1,
            "question": "18. 您认为，您是否已经接受足够的新冠肺炎医院感染防护培训？",
            "answers": [{
                "answer": "是",
            },
                {
                    "answer": "否",
                }]
        },
        {
            "type": 1,
            "question": "19. 工作中，您是否有条件按照最新的《新型冠状病毒医院感染预防与控制指南》或相关技术标准的要求，规范的做好个人防护？",
            "answers": [{
                "answer": "是",
            },
                {
                    "answer": "否",
                }]
        },
        {
            "type": 1,
            "question": "20. 您认为当前的“新型冠状病毒医院感染防护标准”是否能保护您在工作中避免感染新型冠状病毒？",
            "answers": [{
                "answer": "是",
            },
                {
                    "answer": "否",
                }]
        },
        {
            "type": 1,
            "question": "21. 您是否担心自己容易感染 ",
            "answers": [{
                "answer": "是",
            },
                {
                    "answer": "否",
                }]
        },
        {
            "type": 4,//4
            "question": "22. 近一周您主要通过哪种方式获取新冠肺炎疫情信息？[多选]",
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
            "question": "23. 您认为新闻或社交媒体（朋友圈、公众号、微博、抖音等）发布的心理调适资源或心理热线对您是否有帮助？",
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
            "question": "24. 近一周，您平均每天通过各种方式接收疫情信息的时间大概为多少小时 ",
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
        },
        {
            "type": 1,
            "question": "25. 对于新冠肺炎被控制的进度，您的不确定感程度 ",
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
        {
            "type": 2,
            "question": "26. 请问您近1月来在这次肺炎诊疗一线工作了多少天？",
            "answers": [{
                "answer": "1周",
            },
                {
                    "answer": "2周",
                },
                {
                    "answer": "3周",
                },
                {
                    "answer": "4周",
                },
                {
                    "answer": "未直接参与诊治肺炎患者",
                }]
        },
        {
            "type": 2,
            "question": "27. 请问您近1月来，平均几天轮一个班？",
            "answers": [{
                "answer": "每天在岗",
            },
                {
                    "answer": "2天",
                },
                {
                    "answer": "3天",
                },
                {
                    "answer": "4天",
                },
                {
                    "answer": "5天",
                },
                {
                    "answer": "大于5天",
                },
                {
                    "answer": "其他",
                }]
        },
        {
            "type": 1,
            "question": "28. 请问您近1月平均每天工作多少小时？",
            "answers": [{
                "answer": "小于4小时",
            },
                {
                    "answer": "4-8小时",
                },
                {
                    "answer": "8-12小时",
                },
                {
                    "answer": "12小时以上",
                }]
        },
        {
            "type": 1, //7
            "question": "29. 请给您目前耗竭程度评个分？0-10分，0分无耗竭，10分严重耗竭",
            "answers": [{
                "answer": "无耗竭",
                "value": 0
            },
                {
                    "answer": "1",
                    "value": 1
                },
                {
                    "answer": "2",
                    "value": 2
                },
                {
                    "answer": "3",
                    "value": 3
                },
                {
                    "answer": "4",
                    "value": 4
                },
                {
                    "answer": "中度耗竭",
                    "value": 5
                },
                {
                    "answer": "6",
                    "value": 6
                },
                {
                    "answer": "7",
                    "value": 7
                },
                {
                    "answer": "8",
                    "value": 8
                },
                {
                    "answer": "9",
                    "value": 9
                },
                {
                    "answer": "重度耗竭",
                    "value": 10
                }]
        }
    ]
}
var usernear = {
    "qNum": 10,
    "questions": [
        {
            "type": 6,
            "question": "11. 近一周居住城市",
            "answers": [{
                "answer": "请选择",
            }]
        },
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
                    "answer": "与朋友同事居住",
                },
                {
                    "answer": "与其他人居住",
                }]
        },

        {
            "type": 3,//3
            "question": "14. 截止目前为止，是否有以下人员确诊为新冠肺炎？[多选]",
            "answers": [
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
                    "answer": "您居住的小区、街道有确诊病例",
                },
                {
                    "answer": "无",
                }]
        },
        {
            "type": 12,
            "question": "15. 您目前的状态及所在地？请填写您目前所在医院名称",
            "answers": [
                {
                    "answer": "确诊，医院隔离",
                },
                {
                    "answer": "确诊，居家隔离",
                },
                {
                    "answer": "疑似，医院隔离",
                },
                {
                    "answer": "疑似，居家隔离",
                },
                {
                    "answer": "无明显症状，居家隔离",
                },
                {
                    "answer": "未隔离",
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
            "question": "17.1. 武汉封城之后，您是否有以下情绪，请选出每一项对应的严重程度----焦虑不安",
            "answers": [{
                "answer": "无",
            },
                {
                    "answer": "轻度",
                },
                {
                    "answer": "中度",
                },
                {
                    "answer": "重度",
                },
                {
                    "answer": "极重",
                }]
        },
        {
            "type": 1,
            "question": "17.2. 武汉封城之后，您是否有以下情绪，请选出每一项对应的严重程度----抑郁绝望",
            "answers": [{
                "answer": "无",
            },
                {
                    "answer": "轻度",
                },
                {
                    "answer": "中度",
                },
                {
                    "answer": "重度",
                },
                {
                    "answer": "极重",
                }]
        },
        {
            "type": 1,
            "question": "17.3. 武汉封城之后，您是否有以下情绪，请选出每一项对应的严重程度----愤怒",
            "answers": [{
                "answer": "无",
            },
                {
                    "answer": "轻度",
                },
                {
                    "answer": "中度",
                },
                {
                    "answer": "重度",
                },
                {
                    "answer": "极重",
                }]
        },
        {
            "type": 4,
            "question": "18. 武汉封城后对您的生活哪些方面造成了重大影响",
            "answers": [{
                "answer": "就医",
            },
                {
                    "answer": "交通出行",
                },
                {
                    "answer": "工作学习",
                },
                {
                    "answer": "日常饮食起居",
                },
                {
                    "answer": "走亲访友以及娱乐活动",
                },
                {
                    "answer": "其他",
                }]
        },
        {
            "type": 4,
            "question": "19. 近一周您主要通过哪种方式获取新冠肺炎疫情信息？",
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
            "question": "20. 您认为新闻或社交媒体（朋友圈、公众号、微博、抖音等）发布的心理调适资源或心理热线对您是否有帮助？",
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
            "question": "21. 近一周，您平均每天通过各种方式接收疫情信息的时间大概为多少小时 ",
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
        },
        {
            "type": 1,
            "question": "22. 对于新冠肺炎被控制的进度，您的不确定感程度 ",
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
    "qNum": 6,
    "questions": [

        {
            "type": 1,
            "question": "66. 总的来说，您认为您的健康状况是：",
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
            "question": "67. 和疫情发生前相比较，您认为您目前的健康状况大致如何？",
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
            "type": 4,//4
            "question": "68. 您在此次新冠肺炎疫情发生后，曾经得到过哪些心理上的帮助？[多选题]",
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
                    "answer": "个体心理辅导",
                },
                {
                    "answer": "心理治疗",
                },
                {
                    "answer": "没获得任何帮助",
                },
                {
                    "answer": "其他",
                },
            ]
        },
        {
            "type": 4,//4
            "question": "69. 您希望了解哪项有关心理方面的知识和技能？[多选题]",
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
                    "answer": "如何寻求专业心理人员的帮助",
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
            "type": 3,//3
            "question": "70. 此次新冠肺炎疫情中，您希望接下来获得哪方面的心理帮助？[多选题]",
            "answers": [{
                "answer": "心理评估或诊断",
            },
                {
                    "answer": "提供心理健康自助资料",
                },
                {
                    "answer": "远程个体视频心理咨询",
                },
                {
                    "answer": "远程团体视频心理咨询",
                },
                {
                    "answer": "远程个体语音心理咨询",
                },
                {
                    "answer": "远程团体语音心理咨询",
                },
                {
                    "answer": "面对面干预",
                },
                {
                    "answer": "药物干预",
                },
                {
                    "answer": "不需要",
                },
            ]
        },
        {
            "type": 1,
            "question": "71. 在做好防护的情况下，如果有关机构开展针对此次疫情的心理健康教育活动，如讲座、咨询等，您愿意参加吗？",
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
    que4: que4,
    que5: que5,
    job: job
}