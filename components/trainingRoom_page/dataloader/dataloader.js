
var DataLoader = (function (training_datas) {

    function getstatusString(isSuccess) {
        var result = "";
        if (isSuccess == null) {
            return result;
        }
        if (isSuccess) {
            result = "Complete";
        }
        return result;
    }

    function getUserTutorialStatus(tutorialId, user) {
        var userTutorials = user.getCurrentJob().tutorialStatus;

        for (var i = 0; i < userTutorials.length; i++) {
            if (tutorialId == userTutorials[i].id) {
                var isSuccess = userTutorials[i].status;
                return isSuccess;
            }
        }
        return null;
    }

    //return true or false
    function readyToTiger(user) {

        //取得事件(知識點)內容
        var tutorials = training_datas.getDatas();

        //取得事件(知識點)數量
        var tutorialsCount = tutorials.length;

        //是否己完成所有事件(知識點)的練習題(己可進入吃角子老虎)Flag
        var readyToTigerFlag = true;

        //檢查每個事件(知識點)是否都己完成
        for (var i = 0; i < tutorialsCount; i++) {

            //取得單一事件(知識點)是否己完成
            var tutorialStatus = getUserTutorialStatus(tutorials[i].id, user);

            //判斷單一事件是否完成? 如未完成代表無法進入吃角子老虎!
            if (tutorialStatus === false) {
                readyToTigerFlag = false;
                break;
            }
        }

        //回傳是否可進入吃角子老虎的狀態(true or false)
        return readyToTigerFlag;
    }


    return {
        loadTutorials: function (dom_id, user) {

            var tutorials = training_datas.getDatas();
            var tutorialsCount = tutorials.length;
            var tutorialsHtml = "<ul class='jobsTutorials list-group'>";


            for (var i = 0; i < tutorialsCount; i++) {
                var tutorialStatus = getUserTutorialStatus(tutorials[i].id, user);
                var tutorialStatusString = getstatusString(tutorialStatus);
                var tutorialTitle = tutorials[i].title;

                tutorialsHtml += "<li class='list-group-item' data-id='" + tutorials[i].id + "'>";
                tutorialsHtml += "<span class='badge'>" + tutorialStatusString + "</span>";
                tutorialsHtml += tutorialTitle;
                tutorialsHtml += "</li>";
            }
            tutorialsHtml += "</ul>";
            $("#" + dom_id).empty();
            $("#" + dom_id).append(tutorialsHtml);
        },
        showBtnToTiger: function () {
            var isReady = true;
            // isReady = readyToTigerFlag(player);
            if (isReady) {
                $('#goToTigerModel').modal('show');
            }
        }

    };
})(training_datas);
