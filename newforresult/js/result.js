var result = function() {
	this.money;
	this.exp = ((Math.random() * 500) + 100);
	this.score = ((Math.random() * 2000) + 1000);

	result.prototype.callResultPage = function(isWin, timeCost){
		this.isWin = isWin;
		this.timeCost = timeCost;
		if(isWin){
			location.href = "win.html"; 
		}else{
			location.href = "lose.html";
			$("#resultBlock #exp").text("54645p");
		}
	}
}