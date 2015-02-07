var HP = function(max){
	this.maxHP = max;
	this.value = maxHP;

	HP.prototype.isDead = function() {
		if(this.value <= 0){
			return true;
		}else{
			return false;
		}
	};
	HP.prototype.setHP = function(amount, type){
		switch type
			case 1:
				this.value += amount;
				break;
			case 2:
				this.value -= (maxHP * amount);
	}
	HP.prototype.getValue = function(){
		return this.value;
	}
}