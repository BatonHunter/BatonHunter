ServerConfig = (function() {

    'use strict';
    
    var serverAskUrl = "https://baton-huner-restful-server.herokuapp.com/emails";
    var serverBaseUrl = "https://baton-huner-restful-server.herokuapp.com";

    var fbGraphAPIUrl = "https://graph.facebook.com/";

    var getUrl = function(email) {
        return serverBaseUrl + '/users/' + email;
    }

    var postUrl = function() {
        return serverBaseUrl +'/users' ;
    }

	var getJobTasks = function(jobId){
		return serverBaseUrl + '/jobs/' + jobId + '/task';
	}
	
	var getJobTasksQuestion = function(jobId,taskId){
		return getJobTasks(jobId) + '/' + taskId + '/question';
	}

    var modifyStrengthUrl = function(email) {
        return serverBaseUrl + '/users/' + email + '/strength';
    }

    var pictureUrl = function(fbID) {
        return fbGraphAPIUrl + fbID + "/picture?type=large"
    }

    var askUrl = function() {
      return serverAskUrl;
	}

    var createJobUrl = function(email) {
        return serverBaseUrl + '/users/' + email + '/job';
    }

    var rewardVictoryUrl = function() {
        return serverBaseUrl + '/treasures';
    }

    var deleteJobUrl = function(email, jobId){
        return serverBaseUrl + '/users/' + email + '/job/' + jobId;
    }

    return {
        getUrl: getUrl,
        postUrl: postUrl,
        modifyStrengthUrl: modifyStrengthUrl,
        getPictureUrl: pictureUrl,
        askUrl: askUrl,
		getJobTasks:getJobTasks,
		getJobTasksQuestion:getJobTasksQuestion,
        createJobUrl: createJobUrl,
        deleteJobUrl: deleteJobUrl,
        rewardVictoryUrl: rewardVictoryUrl
    };
})();
