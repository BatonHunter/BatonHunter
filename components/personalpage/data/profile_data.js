var profile_data = (function() {


    var profile = (function() {
        var uuid = "9219affc-8c9d-4705-a13e-e6a1a882c522";
        var fbID;
        var pic ;
        var name ;
        var job;
        var strength ;//= ["100","100"];    

        return {
            getUuid: function() {
                return uuid;
            },
            getPic: function() {
                return pic;
            },
            getName: function() {
                return name;
            },
            getJob: function() {
                return job;
            },
            getStrength: function() {
                return strength;
            },
        };
    })();



    return {
        setfbID: function(fbID){
            profile.fbID = fbID;
        },
        setMTBI: function(job,strength){
            profile.job = job;
            profile.strength = strength;
        },

        getProfile: function() {
            return profile;
        },
        getProfileFromServer: function(email, callback) {
            //request data from backend server

            setTimeout(function() {
                callback(profile);
            }, 1000);
        }
    };
})();
