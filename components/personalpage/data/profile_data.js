var profile_data = (function() {


    var profile = (function() {
        var uuid = "9219affc-8c9d-4705-a13e-e6a1a882c522";
        var fbID;
        var pic ;
        var name ;
        var job;
        var strength = [];    

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

                for (var i = 0; i < 8; ++i) {
                    strength[i] = Math.floor(Math.random() * 100);
                }

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
            $.post("https://wwww.xxx.yyyy/test.php",email,function(result){  
                console.log(result);

            });


            setTimeout(function() {
                callback(profile);
            }, 1000);
        },

        postProfileToServer: function(email,name,PhotoUrl,callback) {

            setTimeout(function() {
                callback(profile);
            }, 1000);

        }

    };
})();
