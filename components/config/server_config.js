ServerConfig = (function() {

    'use strict';
    
    var serverBaseUrl = "https://baton-huner-restful-server.herokuapp.com";
    var fbGraphAPIUrl = "https://graph.facebook.com/";

    var getUrl = function(email) {
        return serverBaseUrl + '/users/' + email;
    }

    var postUrl = function() {
        return serverBaseUrl;
    }

	var getJobTasks = function(jobId){
		return serverBaseUrl + '/jobs/' + jobId + '/task';
	}
	
	var getJobTasksQuestion = function(jobId,taskId){
		return getJobTasks(jobId) + '/' + taskId + '/question';
	}

    var modifyStrengthUrl = function(email) {
        return serverBaseUrl + '/' + email + '/modifystrength';
    }

    var pictureUrl = function(fbID) {
        return fbGraphAPIUrl + fbID + "/picture?type=large"
    }

    return {
        getUrl: getUrl,
        postUrl: postUrl,
        modifyStrengthUrl: modifyStrengthUrl,
        getPictureUrl: pictureUrl,
		getJobTasks:getJobTasks,
		getJobTasksQuestion:getJobTasksQuestion
    };
})();
