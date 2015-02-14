var Herb = function(hpType, healVal)
{
	this.healVal = healVal;
	this.hpType = hpType;
	
    this.equals(herb) {
        return this.hpType === herb.hpType && this.healVal === herb.healVal;
    }
};

function heal(type, value)
{
	var herb = new Herb(type, value)
	user.takeHerb(herb);
}
