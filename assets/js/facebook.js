var Facebook = (function() {
    function login() {
        var url = 'https://www.facebook.com/dialog/oauth?' 
        + 'client_id=749074021805322' 
        + '&display=popup' 
        + '&response_type=token' 
        + '&redirect_uri=' + window.location.href;
        window.location.replace(url);
    };

    return {
        login: login
    };
})();