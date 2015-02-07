var Timer = function(options) {

    this.totalTimeSecond = options.totalTimeSecond;
    this.currentTimeSecond = options.totalTimeSecond;
    this.callbackTimeUp = options.callbackTimeUp || null;
    this.callbackUpdatePerSecond = options.callbackUpdatePerSecond || null;
    this.internalTimer = null;

    this.updateIntervalPerSecond = function() {
        
        this.currentTimeSecond--;

        if (this.callbackUpdatePerSecond) {
            this.callbackUpdatePerSecond(this.totalTimeSecond, this.currentTimeSecond);    
        }

        if(this.currentTimeSecond <= 0){
            
            this.stopTimer();
        }
    }

    this.startCountdown = function() {

        var self = this;

        if (self.internalTimer || self.currentTimeSecond <= 0) {
            return;
        }

        self.internalTimer = setInterval(function() {
                self.updateIntervalPerSecond();
            }, 
            1000
        );
    }

    this.pause = function() {
        clearInterval(this.internalTimer);
        delete this.internalTimer;
    }

    this.resume = function() {

        var self = this;

        if (self.internalTimer) {
                return;
        }

        if (self.currentTimeSecond > 0) {

            self.internalTimer = setInterval(function() {  
                    self.updateIntervalPerSecond();
                }, 
                1000
            );
        } else {

            this.stopTimer();
        }
    }

    this.reset = function() {

        this.pause();
        this.currentTimeSecond = this.totalTimeSecond;

        if (this.callbackUpdatePerSecond) {
            this.callbackUpdatePerSecond(this.totalTimeSecond, this.currentTimeSecond);    
        }

        delete this.internalTimer;
    }

    this.stopTimer = function() {

        if (this.callbackTimeUp) {
            this.callbackTimeUp();
        }

        this.pause();
    }
};

/*
var timer = new Timer({
    totalTimeSecond: 3,
    callbackTimeUp: function() { console.log('time up!'); },
    callbackUpdatePerSecond: function(totalTimeSec, currentTimeSec) {
        console.log('update : ' + currentTimeSec);
    }
});

timer.startCountdown();
*/
