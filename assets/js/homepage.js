var Homepage = (function() {
    return {
        login: function(response) {

            //1.setfb id @profile_data
            Profile.setfbID(response.id);

            //2.try to create the profile on server
            Profile.tryCreateProfile(response.email, response.first_name + response.last_name, Profile.getPic(), function(strength_array) {

                console.log('user is created : ');
                console.log(strength_array);

                if (strength_array && strength_array.length) {
                    window.location = PageConfig.personalPage();
                } else {
                    window.location = PageConfig.mbtiStartPage();
                }
            });
        }
    }
})();

$(document).ready(function() {
    $('#loginWithFBButton').click(function(event) {
        $(this).attr('disabled', 'disabled');
        Facebook.login();
    });

    var access_token = window.location.href.split("#")[1].split("&")[0].split("=")[1];

    if (access_token != "") {
        $.ajax({
            url: "https://graph.facebook.com/me?access_token=" + access_token + "&fields=id,name,email,first_name,last_name",
            method: 'GET',
            crossDomain: true,
            dataType: 'json',
            async: false,
            error: function(response) {
                console.log('Error');
            },
            success: function(responseData, textStatus, jqXHR) {
                console.log('success');
            }
        }).done(function(response) {
            Homepage.login(response);
        });

    }
});