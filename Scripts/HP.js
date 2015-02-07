var HP = function(maxHP){
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
				console.log(this);
				console.log(maxHP);
				break;
			default:
				console.log("TYPE ERROR");
				break;
			}
		if(this.value > maxHP){
			this.value = maxHP;
		}else if(this.value < 0){
			this.value = 0;
		}
	}
}
