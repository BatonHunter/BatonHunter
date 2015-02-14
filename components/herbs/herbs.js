var Herb = function(hpType, healVal)
{
	this.healVal = healVal;
	this.hpType = hpType;
	
};

function heal(type, value)
{
	var herb = new Herb(type, value)
	user.takeMedicine(herb);
}
