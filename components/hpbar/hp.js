var HP = function(maxHP, $element){
	//variable init
	this.currentHP = maxHP;
	this.maxHP = maxHP;
	this.$element = $element;

	//blood UI init
	this.HPuiController = function(value){
		var percent = this.currentHP/this.maxHP*100;
		var progressBarWidth = percent * this.$element.width() / 100;
		this.$element.find('div').animate({ width: progressBarWidth }, 500).html( this.currentHP + "/" + this.maxHP + "&nbsp;(" +percent + "%)&nbsp;");
	}
	this.HPuiController(this.maxHP);
};

HP.prototype.modifyHP = function(value, type){
	switch (type){
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
	if(this.currentHP > this.maxHP){
		this.currentHP = this.maxHP;
	}else if(this.currentHP < 0){
		this.currentHP = 0;
	}
	this.HPuiController(value);
};

HP.prototype.isDead = function() {
	if(this.currentHP <= 0){
		return true;
	}else{
		return false;
	}
};