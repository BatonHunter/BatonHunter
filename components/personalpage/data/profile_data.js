var Profile = (function() {

    var IS_FAKE_MODE = false,
        COOKIE_KEY = 'profile';

    var init = function(result) {
        if (!result) {
            return;
        }

        console.log('result:');
        console.log(result);

        var profile = getProfileFromCookie();

        profile.uuid = result.uuid;
        profile.pic = result.picUri;
        profile.name = result.name;
        profile.strength = result.strength;
        profile.email = result.email;
        profile.jobs = result.jobs;
        profile.ap = result.ap;
        profile.point = result.point;
        profile.money = result.money;
        
        saveToCookie(profile);
    }

    var getProfileFromCookie = function() {
        var profileStr = Cookies.getItem(COOKIE_KEY) || "{}";
        return JSON.parse(profileStr);
    }

    var saveToCookie = function(profile) {
        Cookies.setItem(COOKIE_KEY, JSON.stringify(profile));
    }

    var getAp = function() {
        return getProfileFromCookie().ap;
    }

    var getPoint = function() {
        return getProfileFromCookie().point;
    }

    var setfbID = function(ID) {
        var profile = getProfileFromCookie();
        profile.fbID = ID;
        profile.picUrl = ServerConfig.getPictureUrl(ID);
        saveToCookie(profile);
    }

    var getEmail = function() {
        return getProfileFromCookie().email;
    }
    
    var getUuid = function() {
        return getProfileFromCookie().uuid;
    }

    var getPic = function() {
        return getProfileFromCookie().picUrl;
    }

    var getName = function() {
        return getProfileFromCookie().name;
    }

    var setJob = function(job) {
        var profile = getProfileFromCookie();
        profile.job = job;
        saveToCookie(profile);
    }

    var getJobs = function() {
        return getProfileFromCookie().jobs;
    }

    var setStrength = function(strength) {
        var profile = getProfileFromCookie();
        profile.strength = strength;
        saveToCookie(profile);
    }

    var getStrength = function() {
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
        var strength = [];

        if (IS_FAKE_MODE) {
            for (var i = 0; i < 8; ++i) {
                strength[i] = Math.floor(Math.random() * 100);
            }
            return strength;
        }

        return getProfileFromCookie().strength;
    }

    var setCategory = function(category) {
        var profile = getProfileFromCookie();
        profile.category = category;
        saveToCookie(profile);
    }

    var getMoney = function() {
        return getProfileFromCookie().money;
    }

    var setMBTI = function(job, strength, category) {
        setJob(job);
        setStrength(strength);
        setCategory(category);

        $.ajax({
            url: ServerConfig.modifyStrengthUrl(getEmail()),
            method: 'POST',
            crossDomain: true,
            dataType: 'json',
            data: JSON.stringify({strength: strength, role: job, category: category}),
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
    }

    var tryCreateProfile = function(mail, name, photoUrl, callback) {

        $.ajax({
            url: ServerConfig.postUrl(),
            method: 'POST',
            crossDomain: true,
            dataType: 'json',
            data: JSON.stringify({name: name, picUri: photoUrl, email: mail}),
            error: function( response ) {
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
                    init(data);
                    callback(getStrength());
                }
            });
    }

    return {
        setfbID: setfbID,
        setMBTI: setMBTI,
        getPic: getPic,
        getJobs: getJobs,
        getAp: getAp,
        getPoint: getPoint,
        getMoney: getMoney,
        getEmail: getEmail,
        getStrength: getStrength,
        tryCreateProfile: tryCreateProfile
    };
})();
