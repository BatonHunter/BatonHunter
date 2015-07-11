var slotmachine = {};
slotmachine.AP = 6;
slotmachine.point = 0;
slotmachine.money = 0;

$(document).ready(function() {
    $('.slot img').css('height', $('.slots').css('height'))
        .css('width', '90%');
    window.machine = new SlotMachine({
        trigger: '#slotArm',
        defaultRepeat: 10,
        probs: {
            base: 27,
            treasure: 1,
            monster1: 1,
            monster2: 1
        },
        slots: [{
            selector: '#slots-1',
            active: 0,
            //repeat: 5,
            randomize: function() {
                // control slot result
                return 4;
            }
        }, {
            selector: '#slots-2',
            active: 1,
        }, {
            selector: '#slots-3',
            active: 2,
        }],
        onCompleted: function(res) {
            // index start from 0
            onResult(res);
            console.log(res);
        }
    });
});
var showDialog = function(item) {
    dDialog.find('.modal-body').text(item);
}

var saveResult = function(item) {
    
}

var onResult = function(res) {
    var dDialog = $('#myModal');
    dDialog.modal({
        backdrop: false,
        keyboard: false,
        show: true
    });
    if (res[0] === res[1] && res[1] === res[2]) {
        if (res[0] === 0) {
            showDialog("道具");
            saveResult("道具");
        } else {
            showDialog("大怪");
            saveResult("大怪");
        }
    } else {
        showDialog("小怪");
        saveResult("小怪");
    }
}
