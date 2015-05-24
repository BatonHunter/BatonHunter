<<<<<<< HEAD
var DataLoader = (function() {

    function getstatusString(isSuccess) {
        var result = "";
        if (isSuccess == null)
            return result;

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



    return {
        loadTutorials: function(dom_id, user) {
        	
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
        }

    };


})();
=======
var DataLoader=(function(){	
	var current_data;

	var fakeData;
	var fakeContent
	return {
		loadData:function(dom_id){
			//$(dom_id).find('p')empty();


			$("#"+dom_id).find('p').html("helloworld");
			
			current_data=training_data.getData();

			//fake data

			fakeData=current_data[0];

			//
			switch(fakeData.type){
				case 'imagePlusText':
					fakeContent=fakeData.content;
					$("#"+dom_id).find('p').html(fakeContent);
				break;

				case 'text':
				break;

				default:
				break;
			}
		}
	}
})();
>>>>>>> upstream/feature/training-room
