var profile_data = (function() {


    var profile = (function() {
        var uuid = "9219affc-8c9d-4705-a13e-e6a1a882c522";
        var fbID;
        var pic ;
        var name ;
        var job = -1;
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
                /*
                 * 0: 行動力
                 * 1: 好奇心
                 * 2: 知識力
                 * 3: 思考力
                 * 4: 語文力
                 * 5: 人際力
                 * 6: 肢體力
                 * 7: 音樂力
                 * */
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
        setMBTI: function(job,strength,category){
            profile.job = job;
            profile.strength = strength;

          //  FIXME Add Email
          $.ajax({
            url: 'https://baton-huner-restful-server.herokuapp.com/users/' + profile.email + '/modifystrength',
            method: 'POST',
            crossDomain: true,
            dataType: 'json',
            data: JSON.stringify({strength: strength, job: job, category: category}),
            error: function(response) {
              console.log('Error');
            },
            success: function(responseData, textStatus, jqXHR) {
              console.log('success');
            }
          }).done(function(data){
            if (!data) {
              console.log('create user error.');
            } else {
              console.log('success, ready to redrict.');
            }
          });
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
