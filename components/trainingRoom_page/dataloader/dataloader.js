
var DataLoader = (function (training_datas) {

    function getstatusString(isSuccess) {
        var result = "";
        if (isSuccess == false) {
            return result;
        }
        if (isSuccess) {
            result = "Complete";
        }
        return result;
    }

    function getUserTutorialStatus(tutorialId, userState) {
        var tasksCount  = userState.length;
        for (var i = 0; i < tasksCount ; i++) {
            if (tutorialId == userState[i].taskId) {
                return userState[i].isComplete;
            }
        }
        return false;
    }

    //return true or false
    function readyToTiger(userState,jobId) {

        var state = true;
        training_datas.getDatas(jobId).done(function(tasks){

            //取得事件(知識點)數量
            var tasksCount = tasks.length;

            //是否己完成所有事件(知識點)的練習題(己可進入吃角子老虎)Flag
            var readyToTigerFlag = true;

            //檢查每個事件(知識點)是否都己完成
            for (var i = 0; i < tasksCount; i++) {

                //取得單一事件(知識點)是否己完成
                var tutorialStatus = getUserTutorialStatus(tasks[i].taskId, userState);

                //判斷單一事件是否完成? 如未完成代表無法進入吃角子老虎!
                if (tutorialStatus === false) {
                    readyToTigerFlag = false;
                    break;
                }
            }

            //回傳是否可進入吃角子老虎的狀態(true or false)
            state = readyToTigerFlag;

        });
        return state;
    }


    return {
        loadTasks: function (dom_id, userState,jobId) {
			training_datas.getDatas(jobId).done(function(tasks){

          	   var tasksCount = tasks.length;
          	   var tasksHtml = "<ul class='jobsTasks list-group'>";

         	   for (var i = 0; i < tasksCount; i++) {
            	    var tutorialStatus = getUserTutorialStatus(tasks[i].taskId, userState);
              	    var tutorialStatusString = getstatusString(tutorialStatus);
              	    var tutorialTitle = tasks[i].title;

             	    tasksHtml += "<li class='list-group-item' data-id='" + tasks[i].taskId + "'>";
              	    tasksHtml += "<span class='badge'>" + tutorialStatusString + "</span>";
               	  	tasksHtml += tutorialTitle;
              	    tasksHtml += "</li>";
           	   }
	
      	       tasksHtml += "</ul>";
        	   $("#" + dom_id).empty();
           	   $("#" + dom_id).append(tasksHtml);
			});
        },
        showBtnToTiger: function (userState,jobId) {
            var isReady = false;
            var startButton = document.getElementById("goToFightBtn");
            isReady = readyToTiger(userState,jobId);
            console.log("isReady"+isReady);
            if (isReady) {
                $('#goToTigerModel').modal('show');
                startButton.style.visibility='visible';
            }
        }

    };
})(training_datas);
