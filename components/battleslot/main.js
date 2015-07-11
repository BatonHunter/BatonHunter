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
    var dDialog = $('#myModal');
    
    dDialog.find('.modal-body').text(item);

    var showDialogText; 

    switch (item) {
        case "獲得道具":
            showDialogText = "pic1";
            break;
        case "大怪來襲":
            showDialogText = "pic2";
            break;
        case "小怪來襲":
            showDialogText = "pic3";
            break;
    }

    console.log(showDialogText);
}

var saveResult = function(item) {
    
}

var onResult = function(res) {
    var dDialog = $('#myModal');

    dDialog.modal({
        backdrop: true,
        keyboard: false,
        show: true
    });

    if (res[0] === res[1] && res[1] === res[2]) {
        if (res[0] === 0) {
            showDialog("獲得道具");
            saveResult("獲得道具");
        } else {
            showDialog("大怪來襲");
            saveResult("大怪來襲");
        }
    } else {
        showDialog("小怪來襲");
        saveResult("小怪來襲");
    }
}
