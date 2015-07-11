ServerConfig = (function() {

    'use strict';
    
    var serverBaseUrl = "https://baton-huner-restful-server.herokuapp.com/users";
    var fbGraphAPIUrl = "https://graph.facebook.com/";

    var getUrl = function(email) {
        return serverBaseUrl + '/' + email;
    }

    var postUrl = function() {
        return serverBaseUrl;
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
        getPictureUrl: pictureUrl
    };
})();