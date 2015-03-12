//  default value for total count down time is 10 sec, default front size for clock is 20.
var batontimer = {
    totalTimeSecond: 10,
    currentTimeSecond: null,
    fontsize: 20,
    internalTimer: null,
    clock: null,
    timesUpCallBack: null
};

(function() {
    var i = 0;
    //  private methods
    //  update clock element
    batontimer.updateClock = function() {
        var p = this.currentTimeSecond * 100 / this.totalTimeSecond;
        this.clock.options.text = {
            value: this.currentTimeSecond,
            font: this.fontsize + "px sans-serif"
        };
        this.clock.update(p);
    };

    //  public methods
    //  setters
    batontimer.setTotalTimeSecond = function(totalTimeSecond) {
        this.totalTimeSecond = totalTimeSecond
    };

    batontimer.setFontsize = function(fontsize) {
        this.fontsize = fontsize
    };

    //  setup a CircularProgress object and append to the element
    batontimer.setUpClock = function(domId, radius, color, lineCap, timesUpCallBack) {
        this.clock = new CircularProgress({
            radius: radius,
            strokeStyle: color,
            lineCap: lineCap,
            lineWidth: 4
        });
        this.timesUpCallBack = timesUpCallBack;
        $(domId).append(this.clock.el);
    };

    //  start or countinue counting
    batontimer.start = function() {
        var self = this;
        if (this.currentTimeSecond <= 0) {
            return;
        }

        this.internalTimer = setInterval(function() {
                i++;
                self.updateIntervalPerSecond();
            },
            1000
        );
    };

    //  pause the clock
    batontimer.pause = function() {
        var self = this;
        clearInterval(self.internalTimer);
        delete this.internalTimer;
    };

    //  reset and pause the clock
    batontimer.reset = function() {
        this.pause();
        this.currentTimeSecond = this.totalTimeSecond;
        this.updateClock();
        delete this.internalTimer;
    };

    //  Interval method
    batontimer.updateIntervalPerSecond = function() {
        this.currentTimeSecond--;
        this.updateClock();

        if (this.currentTimeSecond <= 0) {
            this.pause();
            this.timesUpCallBack && this.timesUpCallBack();
            this.reset();
            this.start();
        }
    };
})();