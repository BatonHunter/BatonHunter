var battle_data = (function() {
    var monster = (function() {
        var img_path = 'assets/img/avatar';
        var hp = 10;
        return {
            getImg_path: function() {
                return img_path;
            },

            getHp: function() {
                return hp;
            }
        };

    })();

    var player = (function() {
            var userName = "Ian";
            var jobs = [{

                jobCategory: 'nurse',

                tutorialStatus: [{
                    "id": 1,
                    "status": true
                }, {
                    "id": 2,
                    "status": true
                }]
            }, {
                jobCategory: 'police',
                tutorialStatus: [

                    {
                        "id": 1,
                        "status": true
                    }, {
                        "id": 2,
                        "status": true
                    }
                ]

            }];
            var currentJob = {
                jobCategory: 'nurse',
                tutorialStatus: [{
                    "id": 1,
                    "status": false
                }, {
                    "id": 2,
                    "status": true
                },{
                    "id": 3,
                    "status": false
                },{
                    "id": 4,
                    "status": false
                },{
                    "id": 5,
                    "status": false
                },{
                    "id": 6,
                    "status": false
                },{
                    "id": 7,
                    "status": false
                },{
                    "id": 8,
                    "status": false
                },{
                    "id": 9,
                    "status": false
                },{
                    "id": 10,
                    "status": false
                }]
            };


            var herb = {
                quality: 100,
                quantity: 3
            };
            var star = 3;
            var hp = 10;
            return {
                getStar: function() {
                    return star;
                },
                getHp: function() {
                    return hp;
                },
                getHerbQuality: function() {
                    return herb.quality;
                },
                getHerbQuantity: function() {
                    return herb.quantity;
                },
                useHerb: function() {
                    herb.quantity--;
                },
                useStar: function() {
                    star--;
                    if (star <= 0) {
                        return false;
                    }
                    return true;
                },
                getCurrentJob: function() {
                    return currentJob;
                },
                getjobs: function() {
                    return jobs;
                },
                setTutorialState: function(Id) {
                	//Search Current Job's tutorialStatus match to Id, return Index


                	for (var i = 0; i < currentJob.tutorialStatus.length; i++) {
                		var jobId=currentJob.tutorialStatus[i].id;
                		// console.log("index :"+ i + "id " + currentJob.tutorialStatus[i].id);
                		if (Id==jobId) {
                			console.log("match ! index is :"+i);
                			//Set current Job's tutorialStatus as True
                			currentJob.tutorialStatus[i].status=true;
          			      	//Set jobs's tutorialStatus as True
          					//not finish yet

          					//exit
          					break;
                		}
                		else{
                			console.log("fail to success");
                		}
                	};

            	}

        };
    })(); {

};
var question = (function() {
    var questions = [{
        id: 1,
        type: "tf",
        title: "Question 8",
        content: "the answer is false !!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
        hint: '...',
        ans: "No"
    }, {
        id: 2,
        type: "linkQuestion",
        title: "Question 9",
        content: [{
            Qid: 1,
            Qtxt: "11111"
        }, {
            Qid: 2,
            Qtxt: "2222"
        }, {
            Qid: 3,
            Qtxt: "333"
        }, {
            Qid: 4,
            Qtxt: "444"
        }],
        hint: '...',
        ans: [{
            Aid: 1,
            Atxt: "11111"
        }, {
            Aid: 2,
            Atxt: "2222"
        }, {
            Aid: 3,
            Atxt: "333"
        }, {
            Aid: 4,
            Atxt: "444"
        }],

    }, {
        id: 3,
        type: "linkQuestion",
        title: "Question 10",
        content: [{
            Qid: 1,
            Qtxt: "10"
        }, {
            Qid: 2,
            Qtxt: "2222"
        }, {
            Qid: 3,
            Qtxt: "333"
        }, {
            Qid: 4,
            Qtxt: "444"
        }],
        hint: '...',
        ans: [{
            Aid: 1,
            Atxt: "10"
        }, {
            Aid: 2,
            Atxt: "2222"
        }, {
            Aid: 3,
            Atxt: "333"
        }, {
            Aid: 4,
            Atxt: "444"
        }],
    }, {
        id: 4,
        type: "ch",
        title: "Question 11",
        content: "Which color let people feel cold?\n",
        hint: '...',
        anslist: ['red', 'yello', 'black', 'blue'],
        ans: ['3', '4']
    }, {
        id: 5,
        type: "ch",
        title: "Question 12",
        content: "Who is most handsome?\n",
        hint: '...',
        anslist: ['Ian', 'Ian', 'Ian', 'Ian'],
        ans: ['1', '2', '3', '4']
    }];

    return {
        getNextQuestion: function() {
            return questions[Math.floor((Math.random() * questions.length))];
        },
        removeUsedQustion: function(current_question) {
            questions.splice(questions.indexOf(current_question), 1);
        },
        getTotalQuestion: function() {
            return questions.length;
        },
	setQuestion:function(ques){
            questions = ques;
        }
    };

})();

return {
    getMonster: function() {
        return monster;
    },
    getPlayer: function() {
        return player;
    },
    getQuestion: function() {
        return question;
    }
};
})();
