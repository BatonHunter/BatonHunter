function callResultPage(isWin, timeCost){
	if(typeof(Storage) !== "undefined"){
		//cache[Cloud Lin]: for total fighting time storage
		localStorage.timeCost = timeCost;
		if(isWin){
			location.href = "layout/win.html"; 
		}else{
			location.href = "layout/lose.html";
		}
	}else {
		alert("Sorry! No Web Storage support..");
	}
}

function loadResultValues(){
	//TODO [Cloud Lin] , 暫時用random
	var money = (parseInt(Math.random() * 5000) + 1000);
	var exp = (parseInt(Math.random() * 5000) + 321);
	var score = (parseInt(Math.random() * 10000) + 1000);
	$("#time").text(localStorage.timeCost);
	$("#money").text(money);
	$("#exp").text(exp);
	$("#score").text(score);
}