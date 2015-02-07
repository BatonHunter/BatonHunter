var HP = function(maxHP){
	this.max = maxHP;
	this.value = maxHP;

	HP.prototype.getValue = function(){
		return this.value;
	}
	HP.prototype.isDead = function() {
		if(this.value <= 0){
			return true;
		}else{
			return false;
		}
	};
	HP.prototype.setHP = function(amount, type){
		switch (type){
			case 1:
				this.value += amount;
				break;
			case 2:
				this.value += (maxHP * amount * 0.01);
				break;
			default:
				console.log("TYPE ERROR");
				break;
			}
		if(this.value > this.max){
			this.value = this.max;
		}else if(this.value < 0){
			this.value = 0;
		}
	}
}
