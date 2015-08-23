var battle_data = (function(serverConfig) {

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
            }, {
                "id": 3,
                "status": false
            }, {
                "id": 4,
                "status": false
            }, {
                "id": 5,
                "status": false
            }, {
                "id": 6,
                "status": false
            }, {
                "id": 7,
                "status": false
            }, {
                "id": 8,
                "status": false
            }, {
                "id": 9,
                "status": false
            }, {
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
                    var jobId = currentJob.tutorialStatus[i].id;
                    // console.log("index :"+ i + "id " + currentJob.tutorialStatus[i].id);
                    if (Id == jobId) {
                        console.log("match ! index is :" + i);
                        //Set current Job's tutorialStatus as True
                        currentJob.tutorialStatus[i].status = true;
                        //Set jobs's tutorialStatus as True
                        //not finish yet

                        //exit
                        break;
                    } else {
                        console.log("fail to success");
                    }
                };

            }

        };
    })(); 
    
    var question = (function() {
        var questions = {};

        $.ajax({
            //君君‘s database
            url: "https://batonhunter.firebaseio.com/questions.json?print=pretty",
            async: false,
            dataType: 'json',
            success: function(data) {

                questions = data;
            }

        });
        questions.splice(0, 1);

        console.log(questions.length);
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
            setQuestion: function(ques) {
                questions = ques;
            }
        };

    })();

        
    return {
        getMonster: function(Monster) {
            var img_path = 'assets/img/avatar';
            var hp;
            var monsterType=Monster;
            if (Monster=="boss") {
                hp=1000;
            }else if (Monster=="big") {
                hp=100;
            }else if (Monster=="little") {
                hp=10;
            }
            
            return {
                getImg_path: function() {
                    return img_path;
                },
                getHp: function() {
                    console.log(hp);
                    return hp;
                },
                getMonsterType: function() {
                    return monsterType;
                }
            }
        },
        getPlayer: function() {
            return player;
        },
        getQuestion: function() {
            return question;
        },
		getTrainQuestion:function(jobId,taskId){
			var _dfr;
            var url = serverConfig.getJobTasksQuestion(jobId,taskId);	
			
			_dfr = $.Deferred();
			$.getJSON(url,function(data){
				return _dfr.resolve(data);
			});
			return _dfr.promise();
	    }
    };

})(ServerConfig);


