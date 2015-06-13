ServerConfig = (function() {

    'use strict';
    
    var serverBaseUrl = "https://baton-huner-restful-server.herokuapp.com/users/";

    var getUrl = function(email) {
        return serverBaseUrl + email;
    }

    var postUrl = function() {
        return serverBaseUrl;
    }

    return {
        getUrl: getUrl,
        postUrl: postUrl
    };
})();