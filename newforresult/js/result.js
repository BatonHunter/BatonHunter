function callResultPage(isWin, timeCost){
	if(typeof(Storage) !== "undefined"){
		//cache[JoshWang]: for total fighting time storage
		if(isWin){
			localStorage.timeCost = timeCost;
			location.href = "win.html"; 
		}else{
			localStorage.timeCost = timeCost;
			location.href = "lose.html";
		}
	}else {
		alert("Sorry! No Web Storage support..");
	}
}

function loadResultValues(){
	//TODO [Cloud Lin] , 暫時用random
	var money = (parseInt(Math.random() * 500) + 100);
	var exp = (parseInt(Math.random() * 500) + 100);
	var score = (parseInt(Math.random() * 2000) + 1000);
	$("#time").text(localStorage.timeCost);
	$("#money").text(money);
	$("#exp").text(exp);
	$("#score").text(score);
}