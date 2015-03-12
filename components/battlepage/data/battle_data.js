var battle_data = (function() {

    var getMonster = function() {

        return {
            img_path: 'assets/img/avatar',
            hp: 1000
        };
    };

    var getPlayer = function() {
        return {
            herb: {
            	quality: 100,
            	quantity: 3
            },
            star: 3,
            hp: 1000
        };
    };

    return {
        monster: getMonster(),
        player: getPlayer()
    };
})();