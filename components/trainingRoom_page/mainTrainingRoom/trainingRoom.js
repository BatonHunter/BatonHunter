(function() {

    var userState = Profile.getUserJobsState(),
		currentTaskId ;		

	var para=getPara.get();
	var currentJobId = Profile.getCurrentJobId();

	
    DataLoader.loadTasks('tasks',userState,currentJobId);
    DataLoader.showBtnToTiger(userState,currentJobId);

    //dialog effect setting
    $("#dialog").dialog({
        autoOpen: false,
        hide: {
            effect: "explode",
            duration: 1000
        }
    });


    $(document).on("click", "#tasks li", function() {
        var taskId = $(this).data('id'),
            task = training_datas.getData(taskId);
			currentTaskId = taskId;        	

        var image = task.imagePath;
        $('#dialog').dialog('option', 'title', task.title);
        $("#dialog").find('p').html(task.content);
        $('#dialog').find('img').attr('src', image);
        $("#dialog").dialog("open");
    });


    $(document).on("click","#EnterBattle",function(){
		
		var url = "battlepage.html?monster=big&taskId=" + currentTaskId + "&jobId=" + currentJobId;
        window.location.href = url;
    });

})();
