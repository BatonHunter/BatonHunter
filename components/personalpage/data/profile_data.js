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

                uuid = result.uuid;
                pic = result.picUri;
                name = result.name;
                job = result.job;
                strength = result.strength;

                console.log()
            },
            getUuid: function() {
                return uuid;
            },
            getPic: function() {
                return pic;
            },
            setPic: function(picture) {
                pic = picture;
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
            profile.setPic("https://graph.facebook.com/" + fbID + "/picture?type=large");
        },
        setMBTI: function(job,strength,category){
            profile.job = job;
            profile.strength = strength;

          //  FIXME Add Email, and set cookie
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
              window.location = PageConfig.personalPage();
            }
          }).done(function(data){
            if (!data) {
              console.log('create user error.');
            } else {
              console.log('success, ready to redrict.');
            }
          });
        },
        getPic: function() {
            return profile.getPic();
        },
        getProfile: function(callback) {
            $.ajax({
              url: SERVER + API_USER,
              type: 'GET',
              dataType: 'JSONP',
              contentType: 'application/json; charset=utf-8',
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
                console.log('get profile from server : ');
                console.log(result);

                profile.init(result);
                callback(profile);
            });
        },
        tryCreateProfile: function(mail, name, photoUrl, callback) {

            $.ajax({
                url: ServerConfig.postUrl(),
                method: 'POST',
                crossDomain: true,
                dataType: 'json',
                data: JSON.stringify({name: name, picUri: photoUrl, email: mail}),
                error: function( response ) {
                    console.log('post failed!');
                    console.log(response);
                },
                success: function( responseData, textStatus, jqXHR ) {
                    console.log('post success!');
                }
            })
                .done(function( data ) {
                    if ( ! data ) {
                        console.log( 'create users failed' );
                    } else {
                        console.log('response from server : ');
                        console.log( data );

                        profile.init(data);
                        callback(profile);
                    }
                });
        }
    };
})();
