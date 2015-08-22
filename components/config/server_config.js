ServerConfig = (function() {

    'use strict';
    
    var serverBaseUrl = "https://baton-huner-restful-server.herokuapp.com/users";
    var serverAskUrl = "https://baton-huner-restful-server.herokuapp.com/emails";
    //  var serverAskUrl = "http://192.168.0.121:4567/emails";
    var fbGraphAPIUrl = "https://graph.facebook.com/";

    var getUrl = function(email) {
        return serverBaseUrl + '/' + email;
    }

    var postUrl = function() {
        return serverBaseUrl;
    }

    var modifyStrengthUrl = function(email) {
        return serverBaseUrl + '/' + email + '/strength';
    }

    var pictureUrl = function(fbID) {
        return fbGraphAPIUrl + fbID + "/picture?type=large"
    }

    var askUrl = function() {
      return serverAskUrl;
    }

    return {
        getUrl: getUrl,
        postUrl: postUrl,
        modifyStrengthUrl: modifyStrengthUrl,
        getPictureUrl: pictureUrl,
        askUrl: askUrl
    };
})();
