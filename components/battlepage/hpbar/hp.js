var HP = function(maxHP, $element) {
    //variable init
    this.currentHP = maxHP;
    this.maxHP = maxHP;
    this.$element = $element;

    //blood UI init
    this.HPuiController = function(value) {
        var percent = this.currentHP / this.maxHP * 100;
        var progressBarWidth = percent * this.$element.width() / 100;
        this.$element.find('div').animate({
            width: progressBarWidth
        }, 500).html(this.currentHP + "/" + this.maxHP + "&nbsp;(" + percent + "%)&nbsp;");
        
        //這段移到gamestatus.js中處理.
        /*
        if (this.isDead()) {
            if (this.$element.attr('id') === "user-hp") {
                this.lose();
            } else {
                this.win();
            }
        }
        */
        
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

HP.prototype.win = function() {
    alert("really? winner?");    
};

HP.prototype.lose = function() {
    alert("you are a stupid loser!!!!");
};