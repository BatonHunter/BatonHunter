var Profile = (function () {

    var IS_FAKE_MODE = false,
        COOKIE_KEY = 'profile';
        COOKIE_PATH = '/';  // one cookie for multiple pages

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
        profile.category = result.category;
        profile.role = result.role;
        profile.jobs = result.jobs;
        profile.ap = result.status.ap;
        profile.point = result.status.point;
        profile.money = result.status.money;
        profile.exp = result.status.exp;
        profile.level = result.status.level;

        //Datas after battle
        profile.gameMoney = result.gameMoney;
        profile.gameExp = result.gameExp;
        profile.isWin = result.isWin;
        profile.isLvUp = result.isLvUp;
        //
        profile.cardInvisible = result.cardInvisible;
        //

        saveToCookie(profile);
    }

    var getCardInvisible = function() {
        var cardType;

        $.ajax({
            url: ServerConfig.getUrl(getEmail()),
            dataType:'json',
            async: false,
            success: function(data) {
            cardType = data.cards;
            }
        });   

        console.log(cardType);

        if (cardType.length >=1) {
            return true;
        }else{
            return false;
        }
        // if($.isEmptyObject(cardType)){
        //         console.log("true")
        //         return true;
        //         optional stuff to do after success 
        //     }else{
        //         console.log("false")
        //         return false;
        //     }
    }       

    var getProfileFromCookie = function() {
        var profileStr = Cookies.getItem(COOKIE_KEY) || "{}";
        return JSON.parse(profileStr);
    }

    var saveToCookie = function(profile) {
        Cookies.setItem(COOKIE_KEY, JSON.stringify(profile), COOKIE_PATH);
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

    var getfbID = function() {
        return getProfileFromCookie().fbID;
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

    var getCategory = function() {
        return getProfileFromCookie().category;
    }

    var getRole = function() {
        return getProfileFromCookie().role;
    }

    var setJob = function(job) {
        var profile = getProfileFromCookie();
        profile.job = job;
        saveToCookie(profile);
    }

    var setCardInvisible = function(type){

        $.ajax({
            url: ServerConfig.cardUrl(getEmail()),
            method: "POST",
            crossDomain: true,
            dataType: "json",
            data: JSON.stringify({"title":"tony!!"}),
            error: function(response) {
                console.log("cant set card state");
            },
            success: function(responseData, textStatus, jqXHR) {
                console.log('Successfully seted');
            }
        }).done(function(data){
            if (!data) {
                console.log('cant set');
            } else{
                console.log('success set');
            }
        });
    }
    // Set Data after battle

    var setGameMoney = function(gameMoney){
        var profile = getProfileFromCookie();
        profile.gameMoney = gameMoney;
        profile.money += gameMoney;
        saveToCookie(profile);
    }


    var setGameExp = function(gameExp){
        var profile = getProfileFromCookie();
        profile.gameExp = gameExp;
        profile.exp += gameExp;
        saveToCookie(profile);
    }

    var setGameIsWin = function(isWin){
        var profile = getProfileFromCookie();
        profile.isWin = isWin;
        saveToCookie(profile);
    }

    var setGameIsLvUp = function(isLvUp){
        var profile = getProfileFromCookie();
        profile.isLvUp = isLvUp;
        saveToCookie(profile);
    }

    //Get battle Data
    var getGameMoney = function() {
        return getProfileFromCookie().gameMoney;
    }

    var getGameExp = function() {
        return getProfileFromCookie().gameExp;
    }

    var getIsWin = function() {
        return getProfileFromCookie().isWin;
    }

    var getIsLvUp = function() {
        return getProfileFromCookie().isLvUp;
    }

    function isRepeatedJob(job) {

        var profile = getProfileFromCookie();

        if (!profile.jobs) {
            return false;
        }

        for (var i = 0; i < profile.jobs.length; ++i) {
            if (job.id === profile.jobs[i].id) {
                return true;
            }
        }

        return false;
    }

    var createJob = function(job) {

        // don't create duplicated job
        if (isRepeatedJob(job)) {
            console.log('repeated job!');
            return;
        }

        $.ajax({
            url: ServerConfig.createJobUrl(getEmail()),
            method: 'POST',
            crossDomain: true,
            dataType: 'json',
            async: false,
            data: JSON.stringify(job),
            error: function(response) {
                console.log('Error');
            },
            success: function(responseData, textStatus, jqXHR) {
                console.log('success');
            }
        }).done(function(data) {
            if (!data) {
                console.log('create job error');
            } else {
                console.log('create job success');
            }
        });

        var profile = getProfileFromCookie();
        profile.jobs = profile.jobs || [];
        profile.jobs.push(job);
        saveToCookie(profile);
    }

    var deleteJob = function(jobId) {

        var url = ServerConfig.deleteJobUrl(getEmail(), jobId);

        $.ajax({
            url: url,
            method: 'DELETE',
            crossDomain: true,
            dataType: 'json',
            async: false,
            error: function(response) {
                console.log('Error');
            },
            success: function(responseData, textStatus, jqXHR) {
                console.log('success');
            }
        }).done(function(data) {
            if (!data) {
                console.log('delete job error');
            } else {
                console.log('delete job success');
            }
        });

        var profile = getProfileFromCookie();
        profile.jobs = profile.jobs || [];

        for (var i = 0; i < profile.jobs.length; ++i) {
            if (jobId === profile.jobs[i].id) {
                profile.jobs.splice(i,1);
            }
        }

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
    var setRole = function(role) {
        var profile = getProfileFromCookie();
        profile.role = role;
        saveToCookie(profile); 
    }

    var getMoney = function() {
        return getProfileFromCookie().money;
    }

    var getExp = function() {
        return getProfileFromCookie().exp;
    }

    var setMBTI = function(role, strength, category) {
        setRole(role);
        setStrength(strength);
        setCategory(category);

        $.ajax({
            url: ServerConfig.modifyStrengthUrl(getEmail()),
            method: 'POST',
            crossDomain: true,
            dataType: 'json',
            data: JSON.stringify({strength: strength, role: role, category: category}),
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

    var rewardVictory = function(treasureType) {
        var email = getEmail();

        $.ajax({
            url: ServerConfig.rewardVictoryUrl(),
            method: 'POST',
            crossDomain: true,
            dataType: 'json',
            data: JSON.stringify({email: email, treasure: treasureType}),
            error: function(response) {
                console.log('Cannot reward victory');
            },
            success: function(responseData, textStatus, jqXHR) {
                console.log('Successfully rewarded victory');
            }
            }).done(function(data){
            if (!data) {
                console.log('Error getting money and exp increments');
            } else {
                console.log('Success, ready to increment money and exp in browser cookie.');
                setGameMoney(data.money);
                setGameExp(data.exp);
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
        setGameMoney : setGameMoney,
        setGameExp : setGameExp,
        setGameIsWin : setGameIsWin,
        setGameIsLvUp : setGameIsLvUp,
        setCardInvisible : setCardInvisible,
        createJob: createJob,
        deleteJob: deleteJob,
        getfbID: getfbID,
        getName: getName,
        getPic: getPic,
        getCategory: getCategory,
        getRole: getRole,
        getJobs: getJobs,
        getAp: getAp,
        getPoint: getPoint,
        getMoney: getMoney,
        getExp: getExp,
        getEmail: getEmail,
        getStrength : getStrength,
        getGameMoney : getGameMoney,
        getGameExp : getGameExp,
        getIsWin : getIsWin,
        getIsLvUp : getIsLvUp,
        getCardInvisible : getCardInvisible,
        rewardVictory: rewardVictory,
        tryCreateProfile: tryCreateProfile
    };
})();
