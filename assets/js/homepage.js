var Homepage = (function() {
	return {
		login : function(response) {

			//1.setfb id @profile_data
			profile_data.setfbID(response.id);

			//2.try to create the profile on server
			profile_data.tryCreateProfile(response.email, response.first_name + response.last_name, profile_data.getPic(), function(user_data) {

				console.log('user is created : ');
				console.log(user_data);

				if (user_data.getStrength() && user_data.getStrength().length)
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
