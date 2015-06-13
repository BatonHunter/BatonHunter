var Homepage = (function() {
	return {
		login : function(response) {

			//1.setfb id @profile_data
			profile_data.setfbID(response.id);

			//2.get profile from backend server
			profile_data.getProfileFromServer(response.email, function(profile) {

				if (profile.getStrength() && profile.getStrength().length)
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