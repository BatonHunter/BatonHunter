
//default value for total count down time is 10 sec, default front size for clock is 20.
var batontimer = {    
    totalTimeSecond: 10,
    currentTimeSecond: null,
    fontsize: 20,
    internalTimer: null,
    clock:null
};

(function(){
    //private methods
    //update clock element
    updateClock = function() {
        var p = batontimer.currentTimeSecond*100/batontimer.totalTimeSecond;
        batontimer.clock.options.text = {
            value: batontimer.currentTimeSecond,
            font: batontimer.fontsize + "px sans-serif"
        };
        batontimer.clock.update(p);
    };

    //public methods
    //setters
    batontimer.setTotalTimeSecond = function(totalTimeSecond){this.totalTimeSecond = totalTimeSecond};
    batontimer.setFontsize = function(fontsize){this.fontsize = fontsize};

    //setup a CircularProgress object and append to the element
    batontimer.setUpClock = function(domId, radius){
        this.clock = new CircularProgress({
            radius: radius,
            strokeStyle: 'blue',
            lineCap: 'round',
            lineWidth: 4
        });
        $(domId).append(this.clock.el);
    };

    //start or countinue counting
    batontimer.start = function() {
        if (this.internalTimer || this.currentTimeSecond <= 0) {
            return;
        }

        this.internalTimer = setInterval(function() {
                batontimer.updateIntervalPerSecond();
            }, 
            1000
        );
    };    

    //pause the clock
    batontimer.pause = function() {
        clearInterval(this.internalTimer);
        delete this.internalTimer;
    };

    //reset and pause the clock
    batontimer.reset = function() {
        this.pause();
        this.currentTimeSecond = this.totalTimeSecond;
        updateClock();    
        delete this.internalTimer;
    };

    //Interval method
    batontimer.updateIntervalPerSecond = function() {
        batontimer.currentTimeSecond--;
        if(batontimer.currentTimeSecond < 0){
            //TODO[IanChiu]:Undone task for time's up event.     
            batontimer.reset();
            batontimer.start();
        }else{
            updateClock();    
        }
    };
})();