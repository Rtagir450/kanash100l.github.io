jQuery.noConflict()

jQuery('.part').hover(
    function(){
    jQuery('.description').html(jQuery(this).attr('description-data'));
    jQuery('.description').fadeIn();
    },
    function() {
        jQuery('.description').fadeOut(50);
    }
)