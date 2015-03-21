var battle_data = (function() {
    var monster = (function() {
        var img_path = 'assets/img/avatar';
        var hp = 1000;
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
        var herb = {
            quality: 100,
            quantity: 3
        };
        var star = 3;
        var hp = 1000;
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
            }
        };
    })(); {

    };
    var question = (function() {
        var questions = [{
            id: 1,
            type: "tf",
            title: "Question 1",
            content: "Is it agile?\n",
            hint: '...',
            ans: "Yes"
        }, {
            id: 2,
            type: "tf",
            title: "Question 2",
            content: "Is it JQuery?\n",
            hint: '...',
            ans: "Yes"
        }, {
            id: 3,
            type: "tf",
            title: "Question 3",
            content: "the answer is true !!Lorem ipsum , consectetur adipisicing elit. Accusantium, nihil!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
            hint: '...',
            ans: "Yes"
        }, {
            id: 4,
            type: "tf",
            title: "Question 4",
            content: "the answer is false !! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
            hint: '...',
            ans: "No"
        }, {
            id: 5,
            type: "tf",
            title: "Question 5",
            content: "the answer is false !! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
            hint: '...',
            ans: "No"
        }, {
            id: 6,
            type: "tf",
            title: "Question 6",
            content: "the answer is true !! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
            hint: '...',
            ans: "Yes"
        }, {
            id: 7,
            type: "tf",
            title: "Question 7",
            content: "the answer is true !!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
            hint: '...',
            ans: "Yes"
        }, {
            id: 8,
            type: "tf",
            title: "Question 8",
            content: "the answer is false !!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
            hint: '...',
            ans: "No"
        }, {
            id: 9,
            type: "ch",
            title: "Question 9",
            content: "Which color let people happy?\n",
            hint: '...',
            anslist: ['red', 'black', 'blue', 'brown'],
            ans: ['1'] 
        }, {
            id: 10,
            type: "ch",
            title: "Question 10",
            content: "Which color let people sad?\n",
            hint: '...',
            anslist: ['red', 'yello', 'green', 'blue'],
            ans: ['4']
        }, {
            id: 11,
            type: "ch",
            title: "Question 11",
            content: "Which color let people feel cold?\n",
            hint: '...',
            anslist: ['red', 'yello', 'black', 'blue'],
            ans: ['3','4'] 
        }, {
        }];

        return {
            getNextQuestion: function() {
                //  return questions[Math.floor((Math.random() * questions.length))];
                return questions[10];
            },
            removeUsedQustion: function(current_question) {
                questions.splice(questions.indexOf(current_question), 1);
            },
            getTotalQuestion: function() {
                return questions.length;
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
