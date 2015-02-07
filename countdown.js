var CountDown = function(domId, radius, totalTime, timeUpCallback) {
	var progress = new CircularProgress({
	  radius: radius,
	  strokeStyle: 'blue',
	  lineCap: 'round',
	  lineWidth: 4
	});

	$(domId).append(progress.el);


	var timer = new Timer({
		totalTimeSecond: totalTime,
		callbackTimeUp: timeUpCallback,
		callbackUpdatePerSecond: function(totalTimeSec, currentTimeSec) {
		        var p = currentTimeSec*100/totalTimeSec;
			// $(domId).attr("style", "width: " + p + "%").text(currentTimeSec);
			progress.update(p, currentTimeSec);
		    }
		});

	return timer;
}
