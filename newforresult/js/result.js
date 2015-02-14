var result = function() {
	var isWin;
	var timeCost;
	var money = ((Math.random() * 500) + 100);
	var exp = ((Math.random() * 500) + 100);
	var score = ((Math.random() * 2000) + 1000);


	result.prototype.callResultPage = function(isWin, timeCost){
		if(typeof(Storage) !== "undefined"){
			if(isWin){
				location.href = "win.html"; 
			}else{
				//cache[JoshWang]: for total fighting time storage
				localStorage.timeCost = timeCost;
				location.href = "lose.html";
			}
		}else {
			alert("Sorry! No Web Storage support..");
		}
	}

	result.prototype.loadResultValues = function(){
		$("#time").text(localStorage.timeCost);
		$("#money").text(money);
		$("#exp").text(exp);
		$("#score").text(score);
	}
}