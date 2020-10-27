let MAX_SQUAD = 4;
let memberStringNames = ['squad1', 'squad2', 'squad3', 'squad4']
let squadNames = [];
let picNames = ['member-1.png', 'member-2.png', 'member-3.jpg', 'member-4.jpg'];


$(document).ready( () => {
    resizeBackdrop();

    $(window).resize( () => {
        resizeBackdrop();
    });
});

function resizeBackdrop() {
    // Set bottom backdrop to cover full height of window
    let backdropHeight = Math.max($('#cards-container').outerHeight(), 
                    $(window).height() - ($('#heading').outerHeight() + $('#member-input-container').outerHeight()));
    $('#backdrop').css('height', `${backdropHeight}px`);
}