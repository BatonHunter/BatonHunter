
var Unit = function(hp,medicines){
	this.hp = hp;
	this.medicines = medicines;
    this.takeMedicine = function(medicine){
 		
 		if(!removeMedicine(this.medicines,medicine))
 			return;

    	var addValue = medicine.healpoint;
    	var type = medicine.type;
        this.hp.modifyHP(addValue,type)

    }

    function removeMedicine(medicines,medicine){
	for (var i=0,leng = medicines.length ;i<leng ;++i){
		if(medicine.type === medicines[i].type && medicine.healpoint === medicines[i].healpoint){
			medicines.splice(i,1);
			return true;
		}
	}
	return false;
	}
}







