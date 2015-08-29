beatmonster = function(element, path) {
    var getHit_path = path + '_fight.jpg';
    var original_path = path + '.jpg';

    $(element).css('background-image', 'url(' + getHit_path + ')');
    $(element).effect('shake', {}, 500, function() {
        $(element).css('background-image', 'url(' + original_path + ')');
    });
};