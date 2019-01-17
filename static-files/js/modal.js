/**
 * Created by SHIJIN on 2/2/2018.
 */

jQuery(document).ready(function($){
    //open popup
    $( ".auto_modal" ).on( "click", function(event) {
        var modal_class=$(this).attr('data-modal');
        event.preventDefault();
        $('.is-visible').removeClass('is-visible');
        $('#'+modal_class+' .cd-popup').addClass('is-visible');
    });

    //close popup
    $('.cd-popup').on('click', function(event){
        if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
            event.preventDefault();
            $(this).removeClass('is-visible');
            // $('body').removeClass('fixed')
        }
    });
    //close popup when clicking the esc keyboard button
    $(document).keyup(function(event){
        if(event.which=='27'){
            $('.cd-popup').removeClass('is-visible');
        }
    });
});