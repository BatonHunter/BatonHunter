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
            treasure: 0, //set probability of treasure to 0
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
        },
        isShuffable: function() {
            return true;
        }
    });
    $('.trainingRoom').click(function() {
        window.location.href = '../../trainingRoom.html';
    })
});

var countDownAP = function() {
    var tempLive = $('.userLive').text();
    tempLive = tempLive - 1;
    $('.userLive').text(tempLive);
    if (tempLive == 0) {
        // $('#slotArm').prop('disabled', true);
    }
}

var showDialog = function(item) {
    var dDialog = $('#myModal');

    dDialog.modal({
        backdrop: false,
        keyboard: false,
        show: true
    });
    dDialog.find('.modal-body').text(item);
    var dMonsterImg = $('#monsterImg');

    switch (item) {
        case "大怪來襲":
            dMonsterImg.attr("src", "img/big_monster.png");
            break;
        case "小怪來襲":
            dMonsterImg.attr("src", "img/small_monster.png");
            break;
        default:
            dMonsterImg.attr("src", "");
            break;
    }
}

var saveResult = function(item) {
    var treasure = "";
    var monster = "";

    if (item == '小怪來襲')
        monster = "little";
    else
        monster = "boss";

    setTimeout(function() {
        window.location.href = "../../battlepage.html?&monster=" + monster;
    }, 1000);
}

var onResult = function(res) {
    countDownAP();

    if (res[0] === res[1] && res[1] === res[2]) {
        if (res[0] === 0) {
            showDialog("小怪來襲");
            saveResult("小怪來襲");
        } else {
            showDialog("大怪來襲");
            saveResult("大怪來襲");
        }
    } else {
        showDialog("小怪來襲");
        saveResult("小怪來襲");
    }
}