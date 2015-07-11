var slotmachine = {};
slotmachine.AP = 6;
slotmachine.point = 0;
slotmachine.money = 0;

$(document).ready(function() {
    $('.slot img').css('height', $('.slots').css('height'))
        .css('width', '90%');

    //setCookie
    var date = new Date();
    date.setTime(date.getTime() + (10000 * 24 * 60 * 60 * 1000));
    $.cookie('userInfo', 'jack@gmail.com', {
        path: location.host,
        expires: date
    });

    // getUserStatus();
    $('.fightBoss').prop('disabled', true);

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

    $('.fightBoss').click(function() {
        window.href('/battlepage.html');
    })

    $('.trainingRoom').click(function() {
        window.href('/trainingRoom.html' + "?=Boss");
    })
});


var getUserStatus = function() {
    $.ajax({
        method: "POST",
        url: "/getUserStatus",
        data: $.cookie('userInfo')
    })
    .done(function(data) {
        $('.userLive').text(data.userLive);
        $('.userPoint').text(data.userPoint);
        $('.userMoney').text(data.userMoney);
        if (data.userPoint < 50) {
            $('.fightBoss').prop('disabled', true);
        }
    });
}

var showDialog = function(item) {
    var dDialog = $('#myModal');
    dDialog.find('.modal-body').text(item);
    var dMonsterImg = $('#monsterImg');

    switch (item) {
        case "獲得道具":
            dMonsterImg.attr("src","img/treasure_box.png");
            break;
        case "大怪來襲":
            dMonsterImg.attr("src","img/big_monster.png");
            break;
        case "小怪來襲":
            dMonsterImg.attr("src","img/small_monster.png");
            break;
    }

}

var saveResult = function(item) {
    var treasure = "";
    var monster = "";
    if (item.indexOf('獲得道具')) {
        treasure = item;
    } else {
        monster = item;
    }
    $.ajax({
            method: "POST",
            url: "/saveSlotResult",
            data: {
                treasure: treasure,
                monster: treasure
            }
        })
        .done(function(msg) {
            window.href('/battlepage.html');
        });
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
