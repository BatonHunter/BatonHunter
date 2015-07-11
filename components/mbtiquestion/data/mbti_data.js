var mbti_data = (function() {
    var questions = [ {
        id: 1,
        title: "Question 1",
        content: "[A]我會先了解別人的想法,再下決定。\n [B]我不和別人商量, 就下決定。\n",
        ans_A: "E",
        ans_B: "I"
     },{
        id: 2,
        title: "Question 2",
        content: "[A]我是一個富於想像或憑直覺的人。\n [B]我是一個講求精確,講求事實的人。\n",
        ans_A: "N",
        ans_B: "S"
     },{
        id: 3,
        title: "Question 3",
        content: "[A]我會根據現有資料及情境的分析,對他人做評斷。\n [B]我會先了解他人的需要及價值觀,才對他人做評斷。\n",
        ans_A: "T",
        ans_B: "F"
     },{
        id: 4,
        title: "Question 4",
        content: "[A]我會順著他人的意思做出承諾。\n [B]我會自己做承諾,並確實加以實踐。\n",
        ans_A: "P",
        ans_B: "J"
     },{
        id: 5,
        title: "Question 5",
        content: "[A]我要有安靜、獨自思考的時間。\n [B]我喜歡與他人打成一片。\n",
        ans_A: "I",
        ans_B: "E"
     },{
        id: 6,
        title: "Question 6",
        content: "[A]我會運用我熟悉的好方法來完成工作。\n [B]我會嘗試運用新的方法來完成工作。\n",
        ans_A: "S",
        ans_B: "N"
     },{
        id: 7,
        title: "Question 7",
        content: "[A]我會以合乎邏輯思考及按部就班的分析得到結論。\n [B]我會根據過去生活的體驗及信息來得到結論。\n",
        ans_A: "T",
        ans_B: "F"
     },{
        id: 8,
        title: "Question 8",
        content: "[A]我會訂下完成工作的最後期限。\n [B]我會擬訂時間表,並嚴格遵行。\n",
        ans_A: "P",
        ans_B: "J"
     },{
        id: 9,
        title: "Question 9",
        content: "[A]和別人稍談某個主題,即自我思考一番。\n [B]我會和他人盡興暢談某事後,再自我思考一番。\n",
        ans_A: "I",
        ans_B: "E"
     },{
        id: 10,
        title: "Question 10",
        content: "[A]我會設想各種可能發生的情況。\n [B]我只按實際的情況處理問題。\n",
        ans_A: "N",
        ans_B: "S"
     },{
        id: 11,
        title: "Question 11",
        content: "[A]我認為自己是一個善於思考的人。\n  [B]我被別人認為是一個敏於感覺的人。\n",
        ans_A: "T",
        ans_B: "F"
     },{
        id: 12,
        title: "Question 12",
        content: "[A]我會事前詳細考慮各種可能性,事後反覆思考。\n [B]我會搜集需要的資料,稍後作考慮後,作出明快決定。\n",
        ans_A: "P",
        ans_B: "J"
     },{
        id: 13,
        title: "Question 13",
        content: "[A]我擁有內在的思想和情感,而不為他人所知。\n [B]我會與他人共同分享某些活動或事件。\n",
        ans_A: "I",
        ans_B: "E"
     },{
        id: 14,
        title: "Question 14",
        content: "[A]我喜歡抽象與理論的事。\n [B]我喜歡具體與實際的事。\n",
        ans_A: "N",
        ans_B: "S"
     },{
        id: 15,
        title: "Question 15",
        content: "[A]我會協助別人探索他們自己的感受。\n [B]我會協助別人做出合理的決定。\n",
        ans_A: "F",
        ans_B: "T"
     },{
        id: 16,
        title: "Question 16",
        content: "[A]我對問題的答案保持彈性,且可修改。\n [B]我對問題的答案是明確的、可預知的。\n",
        ans_A: "P",
        ans_B: "J"
     },{
        id: 17,
        title: "Question 17",
        content: "[A]我很少表達自己內心的想法及感受。\n [B]我很自在表達自己內心的想法及感受。\n",
        ans_A: "I",
        ans_B: "E"
     },{
        id: 18,
        title: "Question 18",
        content: "[A]我傾向從大處著眼。\n [B]我喜歡從小處著手。\n",
        ans_A: "N",
        ans_B: "S"
     },{
        id: 19,
        title: "Question 19",
        content: "[A]我慣於運用常識,憑著信念來做決定。\n [B]我善於運用資料分析事實來做決定。\n",
        ans_A: "F",
        ans_B: "T"
     },{
        id: 20,
        title: "Question 20",
        content: "[A]我會事先詳細計劃。\n [B]我會臨時視需要而作計劃。\n",
        ans_A: "J",
        ans_B: "P"
     },{
        id: 21,
        title: "Question 21",
        content: "[A]我喜歡結交新朋友。\n [B]我喜歡獨處或與熟識者交往。\n",
        ans_A: "E",
        ans_B: "I"
     },{
        id: 22,
        title: "Question 22",
        content: "[A]我重視概念。\n [B]我重視事實。\n",
        ans_A: "N",
        ans_B: "S"
     },{
        id: 23,
        title: "Question 23",
        content: "[A]我相信自已的想法。\n [B]我相信經證實的結論。\n",
        ans_A: "F",
        ans_B: "T"
     },{
        id: 24,
        title: "Question 24",
        content: "[A]我會儘可能在記事簿記下事情。\n [B]我儘可能少用記事簿記載事情。\n",
        ans_A: "J",
        ans_B: "P"
     },{
        id: 25,
        title: "Question 25",
        content: "[A]我會在團體中詳細地討論新奇未決定的問題。\n [B]我全會自已先想出結論,然後才和他人討論。\n",
        ans_A: "E",
        ans_B: "I"
     },{
        id: 26,
        title: "Question 26",
        content: "[A]我會擬定詳密計劃,然後確實的執行。\n [B]我擬定的計劃,但不一定執行。\n",
        ans_A: "N",
        ans_B: "S"
     },{
        id: 27,
        title: "Question 27",
        content: "[A]我是理性的。\n [B]我是感性的。\n",
        ans_A: "T",
        ans_B: "F"
     },{
        id: 28,
        title: "Question 28",
        content: "[A]我會隨心所欲做些事。\n [B]我完儘量事先了解別人期望我做什麼。\n",
        ans_A: "P",
        ans_B: "J"
     },{
        id: 29,
        title: "Question 29",
        content: "[A]我喜歡成為眾人的焦點。\n [B]我喜歡退居幕後。\n",
        ans_A: "E",
        ans_B: "I"
     },{
        id: 30,
        title: "Question 30",
        content: "[A]我喜歡自由想像。\n [B]我傾向檢視實情。\n",
        ans_A: "N",
        ans_B: "S"
     },{
        id: 31,
        title: "Question 31",
        content: "[A]我喜歡體驗感人的情境或事物。\n [B]我傾向運用能力,分析情境。\n",
        ans_A: "F",
        ans_B: "T"
     },{
        id: 32,
        title: "Question 32",
        content: "[A]我會在預定的時間內開會。\n [B]我會在一切妥當或安適的情況下,宣報開會。\n",
        ans_A: "J",
        ans_B: "P"
     }
    ];

    var mbti_character = [ {
        category:  "ISTJ",
        style:     "▲公務員型",
        character: "王屬衛隊",
        value:     "▲注重傳統、安全及和平的生活",
        capability:"▲能使用邏輯和理性思維客觀地做出決定",
        picture:   "http://100sexiest.fhm.com.tw/upload/girl_8667456683.jpg"
     },{
        category:  "ISFJ",
        style:     "▲照顧者型",
        character: "靈療牧師",
        value:     "▲實際穩重、腳踏實地——他們不喜歡跟理論及抽象思維打交道",
        capability:"▲擅於察言觀色，對他人的情感和反應有著敏銳的洞察力",
        picture:   "http://100sexiest.fhm.com.tw/upload/girl_8e893ba4a7.jpg"
     },{
        category:  "INFJ",
        style:     "▲作家型",
        character: "真理修士",
        value:     "▲憑自己的直覺理解身邊的人和事物",
        capability:"▲能邏輯且理性地工作——運用直覺理解目標並向目標努力",
        picture:   "http://100sexiest.fhm.com.tw/upload/girl_d35e750596.jpg"
     },{
        category:  "INTJ",
        style:     "▲專家型",
        character: "煉金術師",
        value:     "▲能夠理解極為複雜的理論資料",
        capability:"▲邏輯及推理能力極強",
        picture:   "http://100sexiest.fhm.com.tw/upload/girl_d0289b3053.jpg"
     },{
        category:  "ISTP",
        style:     "▲冒險家型",
        character: "疾風遊俠",
        value:     "▲對於事物的工作原理很有興趣",
        capability:"▲擅於運用邏輯推理來分析自己所儲備的信息，並由此解決問題或發現事情的原委",
        picture:   "http://100sexiest.fhm.com.tw/upload/girl_e1816faa9e.jpg",
     },{
        category:  "ISFP",
        style:     "▲藝術家型",
        character: "吟遊詩人",
        value:     "▲活在當下",
        capability:"▲對周圍的環境有著敏銳的洞察力",
        picture:   "http://100sexiest.fhm.com.tw/upload/girl_29a6b31afb.jpg",
     },{
        category:  "INFP",
        style:     "▲哲學家型",
        character: "水晶法師",
        value:     "▲堅定地價值體系",
        capability:"▲富於創意和靈感",
        picture:   "http://100sexiest.fhm.com.tw/upload/girl_cbe71bc8c8.jpg",
     },{
        category:  "INTP",
        style:     "▲學者型",
        character: "聖殿主教",
        value:     "▲探究真相，試圖通過分析內在規律和結構來理解事物",
        capability:"▲擅於記住事情細節,具洞察力  ▲具備創造力和洞察力",
        picture:   "http://100sexiest.fhm.com.tw/upload/girl_e7fcdacc59.jpg",
     },{
        category:  "ESTP",
        style:     "▲挑戰者型",
        character: "熾血鬥士",
        value:     "▲活在當下, 喜歡冒險, 以行動為主",
        capability:"▲能迅速發現問題，並及時給出優秀的解決方案  ▲優秀的人際技巧",
        picture:   "http://100sexiest.fhm.com.tw/upload/girl_a375240311.jpg",
     },{
        category:  "ESFP",
        style:     "▲表演者型",
        character: "星光舞者",
        value:     "▲活在當下, 狂熱於新鮮事物和體驗",
        capability:"▲知道如何讓自己和他人快樂  ▲待人熱情",
        picture:   "http://100sexiest.fhm.com.tw/upload/girl_0657d9265d.jpg",
     },{
        category:  "ENFP",
        style:     "▲記者型",
        character: "大地行者",
        value:     "▲以計劃為中心",
        capability:"▲能有邏輯且理性地工作  ▲善於合作，為人友好  ▲極相信直覺，且對他人的洞察力強",
        picture:   "http://100sexiest.fhm.com.tw/upload/girl_0024ebfddb.jpg"
     },{
        category:  "ENTP",
        style:     "▲發明家型",
        character: "創世技師",
        value:     "▲對於知識和競爭力極為推崇  ▲以解決各類困難的問題為樂",
        capability:"▲優秀的溝通技巧,人際技巧.樂於與他人進行論辯  ▲樂於思考,頭腦機敏,富於創造",
        picture:   "http://100sexiest.fhm.com.tw/upload/girl_6ddb8a0d1d.jpg"
     },{
        category:  "ESTJ",
        style:     "▲大男人型",
        character: "巨劍戰士",
        value:     "▲在生活中擁有一套明晰的標準和信念  ▲重視安全與傳統,忠誠",
        capability:"▲天生的領袖,樂於創造秩序和架構  ▲優秀的組織能力  ▲做事認真負責,充滿動力",
        picture:   "http://100sexiest.fhm.com.tw/upload/girl_c0a75049e5.jpg"
     },{
        category:  "ESFJ",
        style:     "▲主人型",
        character: "聖慈神官",
        value:     "▲井井有條,忠心不二  ▲腳踏實地、注重實踐  ▲推崇平靜安全的生活",
        capability:"▲喜歡構建秩序、架構和計劃 ▲對日常事務的處理中也十分出色  ▲喜歡與其他人溝通  ▲自始至終完成任務的可靠人選",
        picture:   "http://100sexiest.fhm.com.tw/upload/girl_ebad3887ee.jpg"
     },{
        category:  "ENFJ",
        style:     "▲教育家型",
        character: "白袍長老",
        value:     "▲重視和諧,待人真誠熱情,重視他人的感受  ▲重視結構和組織",
        capability:"▲優秀的組織能力,富於創造和想像力▲優於常人的人際交往能力,通過幫助他人來獲取滿足感",
        picture:   "http://100sexiest.fhm.com.tw/upload/girl_dd39d0814e.jpg"
     },{
        category:  "ENTJ",
        style:     "▲陸軍元帥型",
        character: "戰地霸主",
        value:     "▲高度重視知識  ▲希望事物有組織有秩序▲自信, 果斷",
        capability:"▲天生的領袖  ▲極強的語言溝通能力  ▲擁有將理論變為方案的魄力",
        picture:   "http://100sexiest.fhm.com.tw/upload/girl_953a076d6b.jpg"
     }
    ];

    var default_strengths = {
        ISTJ : {
                action:    25,
                curiosity: 25,
                knowledge: 25,
                thinking:  50,
                language:  25,
                social:    40,
                physical:  25,
                music:     25},
        ISFJ : {
                action:    25,
                curiosity: 40,
                knowledge: 50,
                thinking:  25,
                language:  25,
                social:    25,
                physical:  25,
                music:     25},
        INFJ : {
                action:    25,
                curiosity: 50,
                knowledge: 25,
                thinking:  25,
                language:  25,
                social:    25,
                physical:  25,
                music:     40},
        INTJ : {
                action:    25,
                curiosity: 25,
                knowledge: 40,
                thinking:  50,
                language:  25,
                social:    25,
                physical:  25,
                music:     25},
        ISTP : {
                action:    40,
                curiosity: 50,
                knowledge: 25,
                thinking:  25,
                language:  25,
                social:    25,
                physical:  25,
                music:     25},
        ISFP : {
                action:    25,
                curiosity: 25,
                knowledge: 25,
                thinking:  25,
                language:  40,
                social:    25,
                physical:  25,
                music:     50},
        INFP : {
                action:    25,
                curiosity: 25,
                knowledge: 25,
                thinking:  40,
                language:  25,
                social:    25,
                physical:  50,
                music:     25},
        INTP : {
                action:    25,
                curiosity: 25,
                knowledge: 50,
                thinking:  40,
                language:  25,
                social:    25,
                physical:  25,
                music:     25},
        ESTP : {
                action:    50,
                curiosity: 25,
                knowledge: 25,
                thinking:  25,
                language:  25,
                social:    40,
                physical:  25,
                music:     25},
        ESFP : {
                action:    25,
                curiosity: 25,
                knowledge: 25,
                thinking:  25,
                language:  25,
                social:    25,
                physical:  40,
                music:     50},
        ENFP : {
                action:    25,
                curiosity: 25,
                knowledge: 25,
                thinking:  25,
                language:  50,
                social:    25,
                physical:  25,
                music:     40},
        ENTP : {
                action:    25,
                curiosity: 25,
                knowledge: 40,
                thinking:  25,
                language:  25,
                social:    50,
                physical:  25,
                music:     25},
        ESTJ : {
                action:    50,
                curiosity: 25,
                knowledge: 25,
                thinking:  25,
                language:  25,
                social:    25,
                physical:  40,
                music:     25},
        ESFJ : {
                action:    25,
                curiosity: 25,
                knowledge: 25,
                thinking:  25,
                language:  40,
                social:    50,
                physical:  25,
                music:     25},
        ENFJ : {
                action:    25,
                curiosity: 40,
                knowledge: 25,
                thinking:  25,
                language:  50,
                social:    25,
                physical:  25,
                music:     25},
        ENTJ : {
                action:    40,
                curiosity: 25,
                knowledge: 25,
                thinking:  25,
                language:  25,
                social:    25,
                physical:  50,
                music:     25}
    };

    return {
        getQuestion: function(id) {
            return questions[id - 1];
        },
        getTotalQuestion: function() {
            return questions.length;
        },
        getCharacter: function(type){
            var i=0;
            for(; i<mbti_character.length;i++)
            {
                if(type == mbti_character[i].category)
                    return  mbti_character[i];
            }    
        },
        getTotalCharacter: function() {
            return mbti_character.length;
        },
        getTypeByIdx: function(idx){
            return mbti_character[idx].category;
        },
        getDefaultStrengths: function(jobID){
            return default_strengths[jobID];
        }
    };

})();
