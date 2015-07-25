var validation = (function() {
    return {
        validatePassword : function() {
            if ($('#pwd').value() != $('#pwd-confirm').value()) {
                return false;
            }

            if ($('#pwd').value().length < 8) {
                return false;
            }

            return true;
        }
    };
})();

$(document).ready(function() {
    
    $('#signUpForm').validate({
        rules: {
            pwd_confirm: {
                equalTo: '#pwd'
            }
        }
    });

    $('#loginForm').validate();
    $('#resetPasswordForm').validate();

    $('form').on('submit', function(e){

        e.stopPropagation();
        e.preventDefault();

        if ($('form').valid()) {
            console.log("success");
        } else {
            console.log("failed");
        }
    });
});