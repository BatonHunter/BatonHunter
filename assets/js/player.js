
var Unit = function(hp,herbs){
	this.hp = hp;
	this.herbs = herbs;
    this.takeHerb = function(herb){
 		
 		if(!removeherb(this.herbs,herb))
 			return;

    	var addValue = herb.healVal;
    	var hpType = herb.hpType;
        this.hp.modifyHP(addValue,hpType)

    }

    function removeherb(herbs,herb){
	for (var i=0,leng = herbs.length ;i<leng ;++i){
		if(herb.hpType === herbs[i].hpType && herb.healVal === herbs[i].healVal){
			herbs.splice(i,1);
			return true;
		}
	}
	return false;
	}
}







