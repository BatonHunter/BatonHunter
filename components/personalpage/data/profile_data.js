var profile_data = (function() {

    var SERVER = 'https://baton-huner-restful-server.herokuapp.com/',
        API_HELLO = 'hello';
        API_USER = 'user/kkk';


    var profile = (function() {
        var IS_FAKE_MODE = false;
        var uuid = "9219affc-8c9d-4705-a13e-e6a1a882c522";
        var fbID;
        var pic;
        var name;
        var job = -1;
        var strength = [];

        return {
            init: function(result) {
                if (!result) {
                    return;
                }
                console.log(result);
                uuid = result.uuid;
                pic = result.picUri;
                name = result.name;
                job = result.job;
                strength = result.strength; 
            },
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

                if (IS_FAKE_MODE) {
                    for (var i = 0; i < 8; ++i) {
                        strength[i] = Math.floor(Math.random() * 100);
                    }
                }

                return strength;
            },
        };
    })();



    return {
        setfbID: function(fbID){
            profile.fbID = fbID;
            profile.pic = "https://graph.facebook.com/" + fbID + "/picture?type=large";
        },
        setMTBI: function(job,strength){
            profile.job = job;
            profile.strength = strength;
        },

        getProfile: function(callback) {
            $.ajax({
              url: SERVER + API_USER,
              type: 'GET',
              dataType: 'JSONP',
              contentType: 'application/json; charset=utf-8',
              //jsonp:"callback",  
              //jsonpCallback:"success_jsonp", 
              // success: function(response, status, xhr){
              //       console.log('response: ' +response);
              //       console.log('status: ' +status);
              //       console.log('xhr: ' +xhr);
              //       callback(response);
              // },
              dataFilter:function(json){    
                console.log("dataFilter:"+json);    
                return json;    
               },
              success:function(json,textStatus){ 
                console.log('success');
                console.log(json);
                console.log(textStatus);
              },   
              error:function(XMLHttpRequest,textStatus,errorThrown){ 
                console.log('error');
                console.log(XMLHttpRequest);
                console.log('textStatus: '+textStatus);
                console.log('errorThrown: '+errorThrown);
              },

            });
        },

        getProfileFromServer: function(email, callback) {

            //request data from backend server
            $.get(ServerConfig.getUrl(email), function(result){  
                profile.init(result);
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
