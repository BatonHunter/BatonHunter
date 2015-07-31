var HP = function(maxHP, $element,pageCondition) {
    //variable init
    this.currentHP = maxHP;
    this.maxHP = maxHP;
    this.$element = $element;
    this.pageCondition=pageCondition;
    //blood UI init
    this.HPuiController = function(value) {
        var percent = this.currentHP / this.maxHP * 100;
        var progressBarWidth = percent * this.$element.width() / 100;
        this.$element.find('div').animate({
            width: progressBarWidth
        }, 500).html(this.currentHP + "/" + this.maxHP + "&nbsp;(" + parseInt(percent) + "%)&nbsp;");
        if (this.isDead()) {
            if (this.$element.attr('id') === "user-hp") {
                this.lose();
            } else {
                this.win();
            }
        }
    }
    this.HPuiController(this.maxHP);
};

HP.prototype.heal = function(event) {
    if (battle_data.getPlayer().getHerbQuantity() !== 0) {
        if (userHP.modifyHP(event.data.value, event.data.type)) {
            battle_data.getPlayer().useHerb();
            $(event.data.count_id).text(' X ' + battle_data.getPlayer().getHerbQuantity());
        }
    } else {
        $(event.data.dom_id).off;
    }
};

HP.prototype.modifyHP = function(value, type) {
    if (value > 0 && this.currentHP >= this.maxHP) {
        return false;
    }
    switch (type) {
        case 1:
            this.currentHP += value;
            break;
        case 2:
            this.currentHP += (this.maxHP * value * 0.01);
            break;
        default:
            //type error
            break;
    }

    if (this.currentHP > this.maxHP) {
        this.currentHP = this.maxHP;
    } else if (this.currentHP < 0) {
        this.currentHP = 0;
    }
    this.HPuiController(value);
    return true;
};


HP.prototype.isDead = function() {
    if (this.currentHP <= 0) {
        return true;
    } else {
        return false;
    }
};


HP.prototype.isFull = function() {
    return (this.currentHP >= this.maxHP);
};




//TODO: 將battlepage跟simplebattlepage合併後重構
HP.prototype.win = function() {
    $('#winModal').modal('show');
    // var userObj = $.cookie('userInfo');
    // userObj.monster= battle_data.getMonster();
    // $.ajax({
    //     method: "POST",
    //     url: "/saveBattleResult",
    //     data: userObj
    // })
    // .done(function(data) {
        console.log("condition:"+this.pageCondition);
        var data = { money: 1000000000000, isLvUp: true, exp: 100 };

        Profile.setGameMoney(data.money);
        Profile.setGameIsLvUp(data.isLvUp);
        Profile.setGameExp(data.exp);

        //EXP , Money , 是否升級
        $('#winModal').on('hidden.bs.modal', function (e) {
        window.location.href="./components/result_page/win.html";
        });
        setTimeout(function() {
            window.location.href="./components/result_page/win.html";
        }, 2000);

        console.log($.cookie('winInfo'));

    // });
};



HP.prototype.lose = function() {
    $('#loseModal').modal('show');
    $('#loseModal').on('hidden.bs.modal', function (e) {
        window.location.href="./components/result_page/lose.html";
    });
    setTimeout(function() {
        window.location.href="./components/result_page/lose.html";
    }, 2000);
};
