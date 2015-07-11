var Homepage = (function() {
	return {
		login : function(response) {

			//1.setfb id @profile_data
			Profile.setfbID(response.id);

			//2.try to create the profile on server
			Profile.tryCreateProfile(response.email, response.first_name + response.last_name, Profile.getPic(), function(strength_array) {

				console.log('user is created : ');
				console.log(strength_array);

				if (strength_array && strength_array.length)
				{
					window.location = PageConfig.personalPage();
				}
				else
				{
					window.location = PageConfig.mbtiStartPage();
				}
			});
		}
	}
})();

$(document).ready(function(){
	$('#loginWithFBButton').click(function(event) {
		console.log($(this));
		$(this).attr('disabled', 'disabled');
		Facebook.login();
	});
});
