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

    var userData = getUserStatus();
    if(userData.userPoint >= 50) {
        $('.fightBoss').prop('disabled', false);
    }else{
        $('.fightBoss').prop('disabled', true);   
    }

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
        },
        isShuffable: function () {
            var tempLive = $('.userLive').text();
            if (tempLive == 0) {
                showDialog("體力不足喔")
                return false;
            }
            return true;
        }
    });

    $('.fightBoss').click(function() {
        window.href('/battlepage.html' + "?monster=boss");
    })

    $('.trainingRoom').click(function() {
        window.href('/trainingRoom.html');
    })
});

var countDownAP = function(){
    var tempLive = $('.userLive').text();
    tempLive = tempLive - 1;
    $('.userLive').text(tempLive);
    if( tempLive == 0){
        // $('#slotArm').prop('disabled', true);
    } 
}

var getUserStatus = function() {
    var userLive,userPoint,userMoney;
    $.ajax({
        method: "POST",
        url: "/getUserStatus",
        data: $.cookie('userInfo')
    })
    .done(function(data) {
        userLive = data.userLive;
        userPoint= data.userPoint
        userMoney = data.userMoney;
        $('.userLive').text(data.userLive);
        $('.userPoint').text(data.userPoint);
        $('.userMoney').text(data.userMoney);
        if (data.userPoint < 50) {
            $('.fightBoss').prop('disabled', true);
        }
    });

    return{
        userLive:userLive,
        userPoint:userPoint,
        userMoney:userMoney
    }
}

var showDialog = function(item) {
    var dDialog = $('#myModal');

    dDialog.modal({
        backdrop: true,
        keyboard: false,
        show: true
    });
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
        default:
            dMonsterImg.attr("src","");
            break;
    }

}

var saveResult = function(item) {
    var treasure = "";
    var monster = "";
    if (item.indexOf('獲得道具')) {
        treasure = item;
    } else if(item.indexOf('小')){
        monster = "little";
    }else{
        monster = "big";
    }
    $.ajax({
            method: "POST",
            url: "/saveSlotResult",
            data: {
                userEmail:$.cookie('userInfo'),
                treasure: treasure
            }
        })
        .done(function(msg) {
            window.href('/battlepage.html' + "?monster=" + monster);
        });
}

var onResult = function(res) {
    countDownAP();

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
