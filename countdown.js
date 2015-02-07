var CountDown = function(domId, totalTime, timeUpCallback) {
	var timer = new Timer({
		totalTimeSecond: totalTime,
		callbackTimeUp: timeUpCallback,
		callbackUpdatePerSecond: function(totalTimeSec, currentTimeSec) {
		        var p = currentTimeSec*100/totalTimeSec;
			$(domId).attr("style", "width: " + p + "%").text(currentTimeSec);
		    }
		});

	return timer;
}
