var mbti_data = (function() {
    var questions = [ {
        id: 1,
        title: "Question 1",
        content: "[A]我會先了解別人的想法,再下決定。\n [B]我不和別人商量, 就下決定。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 2,
        title: "Question 2",
        content: "[A]我是一個富於想像或憑直覺的人。\n [B]我是一個講求精確,講求事實的人。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 3,
        title: "Question 3",
        content: "[A]我會根據現有資料及情境的分析,對他人做評斷。\n [B]我會先了解他人的需要及價值觀,才對他人做評斷。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 4,
        title: "Question 4",
        content: "[A]我會順著他人的意思做出承諾。\n [B]我會自己做承諾,並確實加以實踐。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 5,
        title: "Question 5",
        content: "[A]我要有安靜、獨自思考的時間。\n [B]我喜歡與他人打成一片。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 6,
        title: "Question 6",
        content: "[A]我會運用我熟悉的好方法來完成工作。\n [B]我會嘗試運用新的方法來完成工作。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 7,
        title: "Question 7",
        content: "[A]我會以合乎邏輯思考及按部就班的分析得到結論。\n [B]我會根據過去生活的體驗及信息來得到結論。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 8,
        title: "Question 8",
        content: "[A]我會訂下完成工作的最後期限。\n [B]我會擬訂時間表,並嚴格遵行。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 9,
        title: "Question 9",
        content: "[A]我會與人稍談笑話題後,再自我思考一番。\n [B]我會和他人盡興暢談某事後,再自我思考一番。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 10,
        title: "Question 10",
        content: "[A]我會設想各種可能發生的情況。\n [B]我只按實際的情況處理問題。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 11,
        title: "Question 11",
        content: "[A]我認為自己是一個善於思考的人。\n  [B]我被別人認為是一個敏於感覺的人。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 12,
        title: "Question 12",
        content: "[A]我會事前詳細考慮各種可能性,事後反覆思考。\n [B]我會搜集需要的資料,稍後作考慮後,作出明快決定。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 13,
        title: "Question 13",
        content: "[A]我擁有內在的思想和情感,而不為他人所知。\n [B]我會與他人共同分享某些活動或事件。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 14,
        title: "Question 14",
        content: "[A]我喜歡抽象與理論的事。\n [B]我喜歡具體與實際的事。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 15,
        title: "Question 15",
        content: "[A]我會協助別人探索他們自己的感受。\n [B]我會協助別人做出合理的決定。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 16,
        title: "Question 16",
        content: "[A]我對問題的答案保持彈性,且可修改。\n [B]我對問題的答案是明確的、可預知的。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 17,
        title: "Question 17",
        content: "[A]我很少表達自己內心的想法及感受。\n [B]我很自在表達自己內心的想法及感受。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 18,
        title: "Question 18",
        content: "[A]我傾向從大處著眼。\n [B]我喜歡從小處著手。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 19,
        title: "Question 19",
        content: "[A]我慣於運用常識,憑著信念來做決定。\n [B]我善於運用資料分析事實來做決定。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 20,
        title: "Question 20",
        content: "[A]我會事先詳細計劃。\n [B]我會臨時視需要而作計劃。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 21,
        title: "Question 21",
        content: "[A]我喜歡結交新朋友。\n [B]我喜歡獨處或與熟識者交往。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 22,
        title: "Question 22",
        content: "[A]我重視概念。\n [B]我重視事實。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 23,
        title: "Question 23",
        content: "[A]我相信自已的想法。\n [B]我相信經證實的結論。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 24,
        title: "Question 24",
        content: "[A]我會儘可能在記事簿記下事情。\n [B]我儘可能少用記事簿記載事情。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 25,
        title: "Question 25",
        content: "[A]我會在團體中詳細地討論新奇未決定的問題。\n [B]我全會自已先想出結論,然後才和他人討論。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 26,
        title: "Question 26",
        content: "[A]我會擬定詳密計劃,然後確實的執行。\n [B]我擬定的計劃,但不一定執行。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 27,
        title: "Question 27",
        content: "[A]我是理性的。\n [B]我是感性的。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 28,
        title: "Question 28",
        content: "[A]我會隨心所欲做些事。\n [B]我完儘量事先了解別人期望我做什麼。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 29,
        title: "Question 29",
        content: "[A]我喜歡成為眾人的焦點。\n [B]我喜歡退居幕後。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 30,
        title: "Question 30",
        content: "[A]我喜歡自由想像。\n [B]我傾向檢視實情。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 31,
        title: "Question 31",
        content: "[A]我喜歡體驗感人的情境或事物。\n [B]我傾向運用能力,分析情境。\n",
      ans_A: "",
      ans_B: ""
     },{
        id: 32,
        title: "Question 32",
        content: "[A]我會在預定的時間內開會。\n [B]我會在一切妥當或安適的情況下,宣報開會。\n",
      ans_A: "",
      ans_B: ""
     }
    ];

    return {
        getQuestion: function(id) {
            return questions[id - 1];
        },
        getTotalQuestion: function() {
            return questions.length;
        }
    };

})();
