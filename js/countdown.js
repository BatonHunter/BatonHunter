(CountDown = function(domId, radius, totalTime, fontSize, timeUpCallback) {
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
            progress.options.text = {
                value: currentTimeSec,
                font: fontSize + "px sans-serif"
            };

			progress.update(p);
	    }
	});

	return timer;
})();