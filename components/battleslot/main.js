var slotmachine = {};

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
            var dDialog = $('#myModal');
            if (res[0] === res[1] && res[1] === res[2]) {
                if (res[0] === 0) {
                    dDialog.find('.modal-body').text("道具");
                } else {
                    dDialog.find('.modal-body').text("大怪");
                }
            } else {
                dDialog.find('.modal-body').text("小怪");
            }
            dDialog.modal({
                backdrop: false,
                keyboard: false,
                show: true
            });
            console.log(res);
        }
    });
});
