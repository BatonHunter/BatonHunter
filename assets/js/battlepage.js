
// //component init


// QuestionLoader.loadQuestion('#question');
// var userHP;
// var enemyHP;
// var battleTimer;



$(document).ready(function() {
    //fighting page countdown clock
    battleTimer = Object.create(batontimer);
    battleTimer.setUpClock('#counter', 20, 'red', 'circle', function() {
        userHP.modifyHP(-50, 1);
    });
    battleTimer.reset();
    battleTimer.start();

    //luckystar coountdown clock
    var hintTimer = Object.create(batontimer);
    hintTimer.setUpClock('#hint-timer', 30, 'red', 'circle', function() {
        $.fancybox.close();
    });
    luckystar.setFancybox('#luckystar', hintTimer, battleTimer, '#luckyCount');

    userHP = new HP(battle_data.getPlayer().getHp(), $("#user-hp"));
    enemyHP = new HP(battle_data.getMonster().getHp(), $("#enemy-hp"));

    $('#herbsCount').text(' X ' + battle_data.getPlayer().getHerbQuantity());
    $('#herb').on("click", {
        dom_id: "#herb",
        value: battle_data.getPlayer().getHerbQuality(),
        type: 1,
        count_id: "#herbsCount"
    }, userHP.heal);


    
    //not totally complete, just let question items draggable


    

});



jQuery.fn.swap = function(b){ 
    // method from: http://blog.pengoworks.com/index.cfm/2008/9/24/A-quick-and-dirty-swap-method-for-jQuery
    b = jQuery(b)[0]; 
    var a = this[0]; 
    var t = a.parentNode.insertBefore(document.createTextNode(''), a); 
    b.parentNode.insertBefore(a, b); 
    t.parentNode.insertBefore(b, t); 
    t.parentNode.removeChild(t); 
    return this; 
};


$( ".resultItem" ).draggable({ revert: true, helper: "clone" });

$( ".resultItem" ).droppable({
    accept: ".resultItem",
    activeClass: "ui-state-hover",
    hoverClass: "ui-state-active",
    drop: function( event, ui ) {

        var draggable = ui.draggable, droppable = $(this),
            dragPos = draggable.position(), dropPos = droppable.position();
        
        draggable.css({
            left: dropPos.left,
            top: dropPos.top
        });

        droppable.css({
            left: dragPos.left+'px',
            top: dragPos.top-2*'px'
        });
        draggable.swap(droppable);
    }
});
