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
                showDialog("體力不足\n晚點再來")
                setTimeout(function() {
                    $('#myModal').modal('hide');
                }, 1000);
                return false;
            }
            return true;
        }
    });

    $('.fightBoss').click(function() {
        window.location.href = '../../battlepage.html' + "?monster=boss";
    })

    $('.trainingRoom').click(function() {
        window.location.href = '/trainingRoom.html';
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

    var userAp, userPoint, userMoney;

    $.ajax({
        method: "GET",
        url: "https://baton-huner-restful-server.herokuapp.com/users/"+$.cookie('userInfo'),
        dataType:"json",
        async: "false"
    })
    .done(function(data) {

        /*userAp = data.status.ap;
        userPoint= data.status.point
        userMoney = data.status.money;*/
        //假資料:
        userAp = 6;
        userPoint= 100;
        userMoney = 11000;
        $('.userLive').text(userAp);
        $('.userPoint').text(userPoint);
        $('.userMoney').text(userMoney);
        if (userPoint < 50) {
            $('.fightBoss').prop('disabled', true);
        }

    });

        return{
            userAp:userAp,
            userPoint:userPoint,
            userMoney:userMoney
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
    if (item == '獲得道具') {
        /*Ian 不在沒後臺QQ
        $.ajax({
            method: "POST",
            url: "https://baton-huner-restful-server.herokuapp.com/treasures",
            dataType:"json",
            data: JSON.stringify({
                email:$.cookie('userInfo'),
                treasure: "slot"
            })
        })
        .done(function(msg) {
            $('#myModal').modal('hide');
        });*/
    }else{
        if (item == '小怪來襲')
            monster = "little";
        else
            monster = "big";

        setTimeout(function() {
            window.location.href = '../../battlepage.html' + "?monster=" + monster;
        }, 1000);
    }
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
