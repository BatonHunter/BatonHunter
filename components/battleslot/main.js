/*
 *
 *	jQuery Slot Machine
 *
 */
// var height_slot_number = '100';

// function go(tens, units) {
//     addSlots($("#slots_units .number-wrapper"));
//     addSlots($("#slots_units .number-wrapper"));
//     moveSlots($("#slots_units .number-wrapper"), units);
//     addSlots($("#slots_tens .number-wrapper"));
//     addSlots($("#slots_tens .number-wrapper"));
//     moveSlots($("#slots_tens .number-wrapper"), tens);
// }

$(document).ready(function() {
    // addSlots($("#slots_units .number-wrapper"));
    // addSlots($("#slots_tens .number-wrapper"));
    $('#slotArm').click(function(e) {
        var slotArm = $(this).addClass('clicked');
        delay = setTimeout(function() {
            slotArm.removeClass('clicked');
        }, 500);
        e.preventDefault();
        go(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
    });
});


// function addSlots(jqo) {
//     for (var i = 0; i < 10; i++) {
//         jqo.append("<div class='slot'>" + i + "</div>");
//     }
// }

// function moveSlots(jqo, num) {
//     var time = 6500;
//     var number = num;
//     time += Math.round(Math.random() * 1000);
//     jqo.stop(true, true);

//     var num_slot = Math.round((jqo.find('.slot').length) / 20);
//     var margin_top = ((num_slot - 1) * (height_slot_number * 10)) + (num * height_slot_number);

//     jqo.animate({
//         "margin-top": "-" + margin_top + "px"
//     }, {
//         'duration': time,
//         'easing': "easeOutElastic"
//     });
// }
