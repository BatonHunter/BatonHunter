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
	var getQuestionUrl = function(battle){
		if(battle.taskId === undefined || battle.taskId === ""){
           return serverBaseUrl + '/jobs/' + battle.jobId + '/question';
        }else{
           return serverBaseUrl + '/jobs/' + battle.jobId + '/task/' + battle.taskId + '/question'
        }
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
    var cardUrl = function(email) {
        return serverBaseUrl + '/users/' + email + '/card';
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

	var putTaskCompleteUrl = function(email,jobId,taskId){
		return serverBaseUrl + '/users/' + email + '/job/' + jobId + '/task/' + taskId;
	}

    return {
        getUrl: getUrl,
        postUrl: postUrl,
        modifyStrengthUrl: modifyStrengthUrl,
        getPictureUrl: pictureUrl,
        askUrl: askUrl,
		getJobTasks:getJobTasks,
        createJobUrl: createJobUrl,
        deleteJobUrl: deleteJobUrl,
        rewardVictoryUrl: rewardVictoryUrl,
		putTaskCompleteUrl : putTaskCompleteUrl,
        cardUrl: cardUrl,
		getQuestionUrl:getQuestionUrl 
    };
})();
