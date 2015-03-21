$(document).on({
    mousedown: function(e) {
        e = e || window.event;
        var $this = $(this);
        $thisOwnerTitle.draggable({
            cursor: "move",
            revert: function() {

            },
            helper: "clone",
            cursorAt: {
                top: ,
                left:
            },
            start: function() {
            	
            },
            stop: function() {
            	
            }
        });
    },
    mouseenter: function(e) {

    },
    mouseleave: function(e) {

    }
}, ".linkLinkSeeRespond");