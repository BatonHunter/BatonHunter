
var Unit = function(hp,herbs){
	this.hp = hp;
	this.herbs = herbs;
    this.onHerbsCountChanged = null;

    this.takeHerb = function(herb){
 		
        if (this.hp.isFull() && (herb.healVal > 0)) {
            return;
        }

 		if (!removeherb(this.herbs,herb)) {
 			return;
        }

    	var addValue = herb.healVal;
    	var hpType = herb.hpType;
        this.hp.modifyHP(addValue,hpType);

        this.onHerbsCountChanged(this.herbs.length);
    }

    function removeherb(herbs,herb){
    	for (var i = 0, leng = herbs.length; i < leng; ++i) {
    		if (herb.equals(herbs[i])){
    			herbs.splice(i,1);
    			return true;
    		}
    	}
    	return false;
	}
}







