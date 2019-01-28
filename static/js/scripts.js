    $("marquee").hover(function () { 
    	this.stop();
		}, 
		function () {
    		this.start();
	});
    $("#ticker-close").click(function(){
        $(".ticker_alert").fadeOut(500);
    });


    $(document).ready(function(){

        // Slider Options
        $(".Modern-Slider").slick({
            autoplay:true,
            autoplaySpeed:3000,
            speed:600,
            slidesToShow:1,
            slidesToScroll:1,
            pauseOnHover:false,
            dots:false,
            pauseOnDotsHover:true,
            cssEase:'linear',
            fade:true,
            draggable:true,
            prevArrow:'<button class="PrevArrow"></button>',
            nextArrow:'<button class="NextArrow"></button>',
            // Custom Dots With Thumbnails Tool Tip
            customPaging : function(slider, i) {
                var thumbnail = $(slider.$slides[i]).data('thumbnail');
                return '<a href="javascript:void(0)"></a>';},
        });

        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })
    

    });

    $(document).ready(function($){
        $(".nav-dropdown > li > a").on("click", function( e ) {
//            alert('sdfgfg');
//            e.preventDefault();
            $("body, html").animate({
                scrollTop: $( $(this).attr('href') ).offset().top -140
            }, 800);
        });
    });

    // $(window).load(function() {
    //     window.scrollTo(0, 0);
    // });

    function scroll_to_section()
    {
        if ( window.location.hash !== "") {
            var hash =  window.location.hash;
//            console.log(hash);

            $('html,body').animate({
                    scrollTop: $(hash).offset().top - 55},
                800);
        }
    }
    $(document).ready(function($){
        setTimeout(scroll_to_section, 1200);
    });


    $("#navigation1").navigation();
    $("#navigation1").scrollspy({
        offset: -55
    });
    // get header height (without border)
    var getHeaderHeight = $('.header').outerHeight();
    var borderAmount = 2;
    var shadowAmount = 30;
    var lastScrollPosition = 0;
    $('.header').css('top', '-' + (getHeaderHeight + shadowAmount + borderAmount) + 'px');

    $(window).scroll(function() {
        var currentScrollPosition = $(window).scrollTop();

        if ($(window).scrollTop() > 2 * (getHeaderHeight + shadowAmount + borderAmount) ) {

            $('body').addClass('');
            $('.header').css('top', 0);

            if (currentScrollPosition < lastScrollPosition) {
                $('.header').css('top', '-' + (getHeaderHeight + shadowAmount + borderAmount) + 'px');
            }
            lastScrollPosition = currentScrollPosition;

        } else {
            $('body').removeClass('scrollActive');
        }
    });

    $('.nav-submenu > li > a').on('click', function(){
        $('.nav-overlay-panel').trigger('click');
    });

    
    // COUNTDOWN

    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let countDown = new Date('Feb 15, 2019 09:30:00').getTime(),
        x = setInterval(function() {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById('days').innerHTML = Math.floor(distance / (day)),
                document.getElementById('hours').innerHTML = Math.floor((distance % (day)) / (hour)),
                document.getElementById('minutes').innerHTML = Math.floor((distance % (hour)) / (minute)),
                document.getElementById('seconds').innerHTML = Math.floor((distance % (minute)) / second);

        }, second)

    
    $(window).load(function() {
        $('#preLoader').fadeOut(500);
//            $('.register_btn').trigger('click');
    });

    $(".contact_support").click(function(){
        $('#popup-contact-support .cd-popup').toggleClass('is-visible');
    });

    $("#log1").click(function(){
        $('#popup-login1 .cd-popup').toggleClass('is-visible');
    });
    $("#Verify_Email").click(function(){
//        $('#popup-otp .cd-popup').toggleClass('is-visible');
    });

    $("#amount1").click(function(){
        $('#pay_online').show();
        $('#pay_offline').hide();
    });
    $("#amount2").click(function(){
        $('#pay_offline').show();
        $('#pay_online').hide();
    });

    $("#go_to_form2").click(function(){

    });
    $("#go_to_form3").click(function(){
//        $('#Form_3').show();
//        $('#Form_2').hide();
//        $('#Form_1').hide();
    });
    $("#go_to_form3").click(function(){
        $('#popup-otp .cd-popup').removeClass('is-visible');
    });
    $("#go_to_form4").click(function(){
//        $('#Form_4').show();
//        $('#Form_3').hide();
//        $('#Form_2').hide();
//        $('#Form_1').hide();
    });

    $("#back_to_form3").click(function(){
//        $('#Form_3').show();
//        $('#Form_4').hide();
//        $('#Form_2').hide();
//        $('#Form_1').hide();
    });
    $("#back_to_form2").click(function(){
//        $('#Form_2').show();
//        $('#Form_4').hide();
//        $('#Form_3').hide();
//        $('#Form_1').hide();
    });
    $("#back_to_form1").click(function(){
//        $('#Form_1').show();
//        $('#Form_4').hide();
//        $('#Form_3').hide();
//        $('#Form_2').hide();
    });


//    $(document).ready(function () {
//        $('form input').change(function () {
//            var fullPath = $('#upload_file').val();
//            var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
//            var filename = fullPath.substring(startIndex);
//            if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
//                filename = filename.substring(1);
//            }
////            console.log(filename);
//            $('.custom_upload p').text(filename);
//        });
//
//    });



    $("#phone,#phone2").intlTelInput({
        utilsScript: "assets/inasl/js/utils.js"
    });


    $(".dateclass").datepicker({
        autoclose: true,
        // todayHighlight: true,
        format: 'dd-mm-yyyy',
        startView: 'decade'
    });




    jQuery(document).ready(function($){
        //set your google maps parameters
        var $latitude = 28.5970982,
            $longitude = 77.1737268,
            $map_zoom = 16;

        //google map custom marker icon - .png fallback for IE11
        var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
        var $marker_url = ( is_internetExplorer11 ) ? 'https://inasl2018.com/assets/inasl/img/location_ico.png' : 'https://inasl2018.com/assets/inasl/img/location_ico.png';

        //define the basic color of your map, plus a value for saturation and brightness
        var	$main_color = '#d2cbc7',
            $saturation= -20,
            $brightness= 5;

        //we define here the style of the map
        var style= [
            {
                //set saturation for the labels on the map
                elementType: "labels",
                stylers: [
                    {saturation: $saturation}
                ]
            },
            {	//poi stands for point of interest - don't show these lables on the map
                featureType: "poi",
                elementType: "labels",
                stylers: [
                    {visibility: "off"}
                ]
            },
            {
                //don't show highways lables on the map
                featureType: 'road.highway',
                elementType: 'labels',
                stylers: [
                    {visibility: "off"}
                ]
            },
            {
                //don't show local road lables on the map
                featureType: "road.local",
                elementType: "labels.icon",
                stylers: [
                    {visibility: "off"}
                ]
            },
            {
                //don't show arterial road lables on the map
                featureType: "road.arterial",
                elementType: "labels.icon",
                stylers: [
                    {visibility: "off"}
                ]
            },
            {
                //don't show road lables on the map
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [
                    {visibility: "off"}
                ]
            },
            //style different elements on the map
            {
                featureType: "transit",
                elementType: "geometry.fill",
                stylers: [
                    { hue: $main_color },
                    { visibility: "on" },
                    { lightness: $brightness },
                    { saturation: $saturation }
                ]
            },
            {
                featureType: "poi",
                elementType: "geometry.fill",
                stylers: [
                    { hue: $main_color },
                    { visibility: "on" },
                    { lightness: $brightness },
                    { saturation: $saturation }
                ]
            },
            {
                featureType: "poi.government",
                elementType: "geometry.fill",
                stylers: [
                    { hue: $main_color },
                    { visibility: "on" },
                    { lightness: $brightness },
                    { saturation: $saturation }
                ]
            },
            {
                featureType: "poi.sport_complex",
                elementType: "geometry.fill",
                stylers: [
                    { hue: $main_color },
                    { visibility: "on" },
                    { lightness: $brightness },
                    { saturation: $saturation }
                ]
            },
            {
                featureType: "poi.attraction",
                elementType: "geometry.fill",
                stylers: [
                    { hue: $main_color },
                    { visibility: "on" },
                    { lightness: $brightness },
                    { saturation: $saturation }
                ]
            },
            {
                featureType: "poi.business",
                elementType: "geometry.fill",
                stylers: [
                    { hue: $main_color },
                    { visibility: "on" },
                    { lightness: $brightness },
                    { saturation: $saturation }
                ]
            },
            {
                featureType: "transit",
                elementType: "geometry.fill",
                stylers: [
                    { hue: $main_color },
                    { visibility: "on" },
                    { lightness: $brightness },
                    { saturation: $saturation }
                ]
            },
            {
                featureType: "transit.station",
                elementType: "geometry.fill",
                stylers: [
                    { hue: $main_color },
                    { visibility: "on" },
                    { lightness: $brightness },
                    { saturation: $saturation }
                ]
            },
            {
                featureType: "landscape",
                stylers: [
                    { hue: $main_color },
                    { visibility: "on" },
                    { lightness: $brightness },
                    { saturation: $saturation }
                ]

            },
            {
                featureType: "road",
                elementType: "geometry.fill",
                stylers: [
                    { hue: $main_color },
                    { visibility: "on" },
                    { lightness: $brightness },
                    { saturation: $saturation }
                ]
            },
            {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [
                    { hue: $main_color },
                    { visibility: "on" },
                    { lightness: $brightness },
                    { saturation: $saturation }
                ]
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [
                    { hue: $main_color },
                    { visibility: "on" },
                    { lightness: $brightness },
                    { saturation: $saturation }
                ]
            }
        ];

        //set google map options
        var map_options = {
            center: new google.maps.LatLng($latitude, $longitude),
            zoom: $map_zoom,
            panControl: false,
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: style,
        }
        //inizialize the map
        var map = new google.maps.Map(document.getElementById('google-container'), map_options);
        //add a custom marker to the map
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng($latitude, $longitude),
            map: map,
            visible: true,
            icon: $marker_url,
        });

        //add custom buttons for the zoom-in/zoom-out on the map
        function CustomZoomControl(controlDiv, map) {
            //grap the zoom elements from the DOM and insert them in the map
            var controlUIzoomIn= document.getElementById('cd-zoom-in'),
                controlUIzoomOut= document.getElementById('cd-zoom-out');
            controlDiv.appendChild(controlUIzoomIn);
            controlDiv.appendChild(controlUIzoomOut);

            // Setup the click event listeners and zoom-in or out according to the clicked element
            google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
                map.setZoom(map.getZoom()+1)
            });
            google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
                map.setZoom(map.getZoom()-1)
            });
        }

        var zoomControlDiv = document.createElement('div');
        var zoomControl = new CustomZoomControl(zoomControlDiv, map);

        //insert the zoom div on the top left of the map
        map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
    });





    $(document).ready(function(){
        $('#error_otp').hide();
    });
    $('#request_again').click(function () {
//        debugger;
        var profileid=$('#profile_id').val();
        $('#profile_id').val('');
        $('#send_otp').val('')
        $.ajax({
            method: 'post',
            data: {profileid:profileid,  _token : 'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9'},
            url: 'https://inasl2018.com/resend-otp',
            success: function (result) {
//                debugger;
//                console.log(result);
                if(result!='')
                {
                    $('#profile_id').val(result.profile_id);
                    $('#send_otp').val(result.otp);
                    $('#message_resend').show();
                }
                else{
                    alert('something went to wrong');

                }


            }
        })

    })


    $("#go_to_form3").click(function(){
        var profile_id=$('#profile_id').val();
        var otp_send=$('#send_otp').val();
        var enter_otp=$('#enter_otp').val();
        var accompany=$('#accompany_value').val();
        if(enter_otp==otp_send) {
            if (accompany == 1) {
                $('#Form_3').show();
                $('#Form_2').hide();
                $('#Form_1').hide();
                $('#profile_id_accompany').val(profile_id);
                $('#accomany_exist').val('1');
                $('#accompany_view').show();
                $('#step_value').html('3')

            }
            else {
                $('#accompany_details').hide();
                $('#accompany_view').hide();
                $('#step_value').html('3')
                $('#Form_4').show();
                $('#Form_3').hide();
                $('#Form_2').hide();
                $('#Form_1').hide();
                $('#accomany_exist').val('0');
//                debugger;
                $.ajax({
                    url: 'https://inasl2018.com/get-not-accompany',
                    data: {profile_id: profile_id, _token: 'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9'},
                    method: 'post',
                    success: function (result) {
                        if (result) {
                            $('#profile_id_payment').val(profile_id);
                            if(result.member_id==2||result.member_id==4||result.member_id==5||result.member_id==1||result.member_id==3){
//                                debugger;
                                var amount=result.amount;
                                $('#member_amount').html(result.amount);
                                $('#memberamount_total').html('INR'+' '+result.amount);
                                $('#type_id').val(result.member_id);
                                $('#type').val(result.member_id);
                                $('#accompany_amount').hide();
                                var membertotal = parseFloat($('#memberamount_total').html());
                                var subtotal = amount;
                                $('#subtotal').html('INR'+' '+subtotal);
                                var procesingfee = subtotal * 2.5 / 100;
                                $('#orginal_processing').val(procesingfee);
                                var subtotal = parseFloat(subtotal) + parseFloat(procesingfee);
                                $('#processing_fees').html('INR'+' '+procesingfee);
                                $('#grand_total').html('INR'+' '+subtotal);
                                $('#value_only').val(subtotal);
                                $('#process_text').html('Processing Fee (2.5%)');
                                var total_grand=$('#grand_total').html();
                                if(total_grand=='INR 0'||total_grand=='$0') {
                                    $('#payment_type').hide();
                                    $('#make_payment').hide();
                                    $('#offline').hide();
                                    $('#payment_zero').show();
                                    $('#processing_row').hide();
                                    $('#payment_type').hide();
                                    $('#processing_amnt').hide();
                                    $('#payment_mode').hide();
                                }
                                else{
                                    $('#payment_type').show();
                                    $('#make_payment').show();
                                    $('#offline').hide();
                                    $('#payment_zero').hide();
                                    $('#processing_row').show();
                                    $('#payment_type').show();
                                    $('#processing_amnt').show();
                                    $('#payment_mode').show();

                                }

                            }
                            else if(result.member_id==6||result.member_id==8||result.member_id==9){
//                                debugger;
                                $('#member_amount').html(result.amount);
                                var amount=result.amount;
                                $('#memberamount_total').html('$'+result.amount);
                                $('#type_id').val(result.member_id);
                                $('#accompany_amount').hide();
                                var membertotal = parseFloat(amount);
                                var subtotal = membertotal;
                                $('#subtotal').html('$'+subtotal);
                                $('#type').val(result.member_id);
                                var procesingfee = subtotal * 3.75 / 100;
                                $('#orginal_processing').val(procesingfee);
                                var subtotal = parseFloat(subtotal) + parseFloat(procesingfee);
                                $('#processing_fees').html('$'+procesingfee);
                                $('#grand_total').html('$'+subtotal);
                                $('#value_only').val(subtotal);
                                $('#process_text').html('Processing Fee (3.75%)');
                                var total_grand=$('#grand_total').html();
                                if(total_grand=='INR 0'||total_grand=='$0') {
                                    $('#payment_type').hide();
                                    $('#make_payment').hide();
                                    $('#offline').hide();
                                    $('#payment_zero').show();
                                    $('#processing_row').hide();
                                    $('#payment_type').hide();
                                    $('#processing_amnt').hide();
                                    $('#payment_mode').hide();
                                }
                                else{
                                    $('#payment_type').show();
                                    $('#make_payment').show();
                                    $('#offline').hide();
                                    $('#payment_zero').hide();
                                    $('#processing_row').show();
                                    $('#payment_type').show();
                                    $('#processing_amnt').show();
                                    $('#payment_mode').show();
                                }


                            }

                        }

                    }
                });
            }

        }
    });




    $(document).ready(function () {
                                                    });


    $(document).keypress(
        function(event){
            if (event.which == '13') {
                event.preventDefault();
            }

        });


    $('#login_btn').click(function(e)
    {
//        debugger;
        var page = $(this).data("id");
        e.preventDefault();
        var email=$('#login_email').val();
        var password=$('#password').val();
        $(".cst_overlay").css("display", "block");
        $.ajax({
            url: 'https://inasl2018.com/login',
            type: 'post',
            data: {'email':email,'password':password,'_token':'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9'},
            success: function (result) {
                if (result.status === 'success') {
                    $('#pass_miss').html("");
                    clearLoginForm();
                    $(".cst_overlay").css("display", "none");
                    $('#MemberLogin').modal('hide');
                    setDetails(result.data);
                }
                else
                {
                    $('#pass_miss').html("Invalid username or password");
                    $(".cst_overlay").css("display", "none");
                }
            },
            error: function(xhr, status, error) {
                console.log(xhr);
                console.log(status);
                console.log(error);
            }
        })
    });

    $("#zsWebToCase_260212000000647087").validate();

    
    $("#contact_Support").validate({
        ignore: [],
        rules: {
            'contact_name': {
                required: true
            },
            'contact_number':{
                required:true,
                number:true,
                minlength:10,
                maxlength:10
            },
            'mailid': {
                required: true
            },
            'contact_message':{
                required:true
            }
        },
        messages: {
            'contact_name': "Please enter your  Name.",
            'contact_number':{
                required:"Please enter Phone Number.",
                maxlength:"Phone Number should have 10 digits",
                minlength:"Phone Number should have 10 digits",
                number:"Please enter a valid number"
            },
            'mailid': "Please enter a valid email.",
            'contact_message':"Please enter message."
        },
        errorPlacement: function(error, element){
                error.insertAfter(element);
        },
        submitHandler: function(form,event) {
            $('#preLoader').show();
            $.ajax({
                url: 'https://inasl2018.com/contact-support',
                data: $('#contact_Support').serialize(),
                method: 'post',
                success: function (result) {
                    if(result){
                        $('#preLoader').hide();
                        $('#popup-contact-support .cd-popup').removeClass('is-visible');
                        $('#contact-us .cd-popup').addClass('is-visible');
                        $('#mailid').val('');
                        $('#name').val('');
                        $('#number').val('');
                        $('#message').val('');

                    }
                }
            });

        }
    });
    $("#zsWebToCase_260212000000585094").validate();


    $("#contact_Support_2").validate({
        ignore: [],
        rules: {
            'contact_name': {
                required: true
            },
            'contact_number':{
                required:true,
                number:true,
                minlength:10,
                maxlength:10
            },
            'mailid': {
                required: true
            },
            'contact_message':{
                required:true
            }
        },
        messages: {
            'contact_name': "Please enter your  Name.",
            'contact_number':{
                required:"Please enter Phone Number.",
                maxlength:"Phone Number should have 10 digits",
                minlength:"Phone Number should have 10 digits",
                number:"Please enter a valid number"
            },
            'mailid': "Please enter a valid email.",
            'contact_message':"Please enter message."
        },
        errorPlacement: function(error, element){
            error.insertAfter(element);
        },
        submitHandler: function(form,event) {
            $('#preLoader').show();
            $.ajax({
                url: 'https://inasl2018.com/contact-support',
                data: $('#contact_Support_2').serialize(),
                method: 'post',
                success: function (result) {
//                    debugger;
                    $('#preLoader').hide();
                    window.location.href = "index.html";


                }
            });

        }
    });



    
        $("#login_form").validate({
            ignore: [],
            rules: {
                selector: {
                    required: true
                }
            },
            messages: {
                selector: "Please select your category ."
            },
            errorPlacement: function (error, element) {
                if(element.attr("name") == "selector")
                {
                    error.insertAfter(element.parent().parent().parent().parent());
                }
            },
            submitHandler: function (form, event) {
//            debugger;
                var selector = $('input[name="selector"]:checked').val();
                if(selector==1){
                    $('#type_person').val('1');
                    $('#popup-login1 .cd-popup').addClass('is-visible');

                }else {
                    save_membership_type(selector);
                }
            }
        });

        function save_membership_type(selector)
        {
//        debugger;
            var memberId = $('#profileId').val();
            $.ajax({
                url: 'https://inasl2018.com/save-membertype',
                data: {selector: selector, memberId: memberId, _token: 'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9'},
                method: 'post',
                success: function (result) {
                    $('#popup-login1 .cd-popup').hide();
//                    console.log(result);
                    if (result != '') {
                        $('#profileId').val(result.id);
                        $('#member_type').html(result.registration_category.Category);
                        $('#member_amount').html(result.amount);
                        $('#type_id').val(result.member_id);
                        $('#accompany_amount').html(result.acc_amount);
                        $('#single_Accompany').val(result.acc_amount);
                        $('#Form_2').show();
                        $('#Form_1').hide();
                        if(result.member_id==2||result.member_id==4||result.member_id==5||result.member_id==1) {
                            $('#memberamount_total').html(result.amount);
                            $('#online_payment').show();
                            $('#pay_online_international').hide();
                        }
                        else{
                            $('#memberamount_total').html('$'+" "+result.amount);
                            $('#pay_online_international').show();
                            $('#online_payment').hide();
                        }
                        $('.custom_upload p').text("Drag your files or click here.");

                    }
                    else {
                        alert('something went wrong');
                    }
                }
            });
        }
        function getamount () {
//    debugger;
            var selector = $('input[name="selector"]:checked').val();
            if(selector==1){
                $('#type_person').val('1');
                $('#popup-login1 .cd-popup').addClass('is-visible');
                $('#popup-login1 .cd-popup').show();
                $('#amount').hide();

            }
            $.ajax({
                url: 'https://inasl2018.com/get-amount-member',
                data: {selector: selector, _token: 'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9'},
                method: 'post',
                success: function (result) {
//                    console.log(result);
                    if(selector==2||selector==3||selector==4||selector==5||selector==1){
                        $('#amount').html('Total Price:'+' '+result+" "+ 'INR ');
                        $('#amount').show();
                    }
                    else {
                        $('#amount').html('Total Price:'+' '+result+" "+ '$');
                    }

                }
            });


        }

    
        function get_states(country_div_id,state_div_id)
        {
            var country_id = $('#'+country_div_id).val();
            $.ajax({
                type: "POST",
                url: 'https://inasl2018.com/get-state-list',
                data: {country_id:country_id, _token : 'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9',requestId : ''},
                success: function( response )
                {
                    $('#'+state_div_id).html(response);
                },
                error: function(xhr, status, error) {
                    console.log(xhr.responseText);
                }
            });
        }

        function get_cities(state_div_id,city_div_id)
        {
            var country_id = $('#'+state_div_id).val();
            $.ajax({
                type: "POST",
                url: 'https://inasl2018.com/get-city-list',
                data: {country_id:country_id, _token : 'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9',requestId : ''},
                success: function( response )
                {
                    $('#'+city_div_id).html(response);
                },
                error: function(xhr, status, error) {
                    console.log(xhr.responseText);
                }
            });
        }

    
    
        $.validator.addMethod("validateMobileAccompany",
            function(value, element) {
//            console.log(element.id);
                return $("#"+element.id).intlTelInput("isValidNumber");
            },
            "Please enter a valid mobile number. "
        );
        //    validate_accompanying_form();
        //    function validate_accompanying_form()
        //    {
        $("#accompany-form").validate({
            ignore: [],
            rules: {
                'title_a[]': {
                    required: true
                },
                'firstname_a[]': {
                    required: true
                },
                'lastname_a[]': {
                    required: true
                },
                'dob_a[]': {
                    required: true
                },
                'streetline1_a[]': {
                    required: true
                },
                'streetline2_a[]': {
                    required: true
                },
                'countryid_a[]': {
                    required: true
                },
                'stateid_a[]': {
                    required: true
                },
                'city_a[]': {
                    required: true
                },
                'pin_a[]': {
                    required: true
                },
                'phonae_a[]':{
                    validateMobileAccompany:true
                },
                'email_a[]': {
                    required: true
                },
                'gender_a[]':{
                    required:true
                }
            },
            messages: {
                'title_a[]': "Please select a title.",
                'firstname_a[]': "Please enter your First name.",
                'lastname_a[]': "Please enter your Last name.",
                'dob_a[]': "Please select a date.",
                'streetline1_a[]': "Please enter your Street line 1.",
                'streetline2_a[]': "Please enter your Street line 2.",
                'pin_a[]': "Please enter your PIN/ZIP.",
                'countryid_a[]': "Please select a country.",
                'stateid_a[]': "Please select a state.",
                'city_a[]': "Please enter your City.",
                'phonae_a[]':"Please enter a valid mobile number",
                'email_a[]': "Please enter a valid email.",
                'gender_a[]':"Please choose any one."
            },
            errorPlacement: function(error, element){
                if(element.attr("name") == "phonae_a[]" ){
                    error.insertAfter(element.parent());
                } else if(element.attr("name")=="gender_a[]"){
                    error.insertAfter(element.parent().parent());
                }
                else{
                    error.insertAfter(element);
                }
            },
            submitHandler: function(form,event) {
                $('#countryId').attr('disabled',false);
                var prof_id=$('#profile_id_accompany').val();
                var type_id=$('#type_id').val();
                $('#type').val(type_id);
                $.ajax({
                    url: 'https://inasl2018.com/save-accompany',
                    data: $('#accompany-form').serialize(),
                    method: 'post',
                    success: function (result) {
                        console.log(result);
                        if(result!='')
                        {
                            $('#Form_4').show();
                            $('#Form_3').hide();
                            $('#Form_2').hide();
                            $('#Form_1').hide();
                            $('#profile_id_payment').val(prof_id);
                            if(type_id==2||type_id==3||type_id==4||type_id==5||type_id==1){
                                $countvalue=$('#accompany_count').html(result.accompany_count);
                                if($countvalue!=0) {
//                                    debugger;
                                    $('#accompany_details').show();
                                    $('#accompany_type').html('Accompanying Person (National)');
                                    var count = parseFloat($('#accompany_count').html());
                                    var amount = parseFloat($('#accompany_amount').html());
                                    var singleamount=$('#single_Accompany').val();
                                    var total_accompany = count * singleamount;
                                    $('#accompany_amount').html(singleamount);
                                    $('#accompany_amount').show();
                                    $('#accompany_total').html('INR'+' '+total_accompany);
                                    $('#single_Accompany').html(total_accompany);
                                    var membertotal = parseFloat($('#member_amount').html());
                                    $('#memberamount_total').html('INR'+' '+membertotal);
                                    var accompanytotal = parseFloat($('#accompany_total').html());
                                    var subtotal = membertotal + total_accompany;
                                    $('#subtotal').html('INR'+' '+subtotal);
                                    var procesingfee = subtotal * 2.5 / 100;
                                    $('#orginal_processing').val(procesingfee);
                                    var subtotal = parseFloat(subtotal) + parseFloat(procesingfee);
                                    $('#process_text').html('Processing Fee (2.5%)');
                                    $('#processing_fees').html('INR'+" "+procesingfee);
                                    $('#grand_total').html('INR'+' '+subtotal);
                                    $('#value_only').val(subtotal);
                                    $('#payment_type').show();
                                    $('#make_payment').show();
                                    $('#offline').hide();
                                    $('#payment_zero').hide();
                                    $('#processing_row').show();
                                    $('#payment_type').show();
                                    $('#processing_amnt').show();
                                    $('#payment_mode').show();



                                }
                                else{
                                    var membertotal = parseFloat($('#memberamount_total').html());
                                    var subtotal = membertotal;
                                    $('#subtotal').html(subtotal);
                                    var procesingfee = subtotal * 2.5 / 100;
                                    var subtotal = parseFloat(subtotal) + parseFloat(procesingfee);
                                    $('#processing_fees').html(procesingfee);
                                    $('#grand_total').html(subtotal);
                                    $('#value_only').val(subtotal);

                                }

                            }
                            else{
                                $count=$('#accompany_count').html(result.accompany_count);
                                if($count!=0) {
//                                    debugger;
                                    $('#accompany_details').show();
                                    $('#accompany_type').html('Accompanying Person (Intenational)');
                                    var count = parseFloat($('#accompany_count').html());
                                    var amount = parseFloat($('#accompany_amount').html());
                                    var singleamount = $('#single_Accompany').val();
                                    var total_accompany = count * singleamount;
                                    $('#accompany_total').html('$' + " " + total_accompany);
                                    var membertotal = parseFloat($('#member_amount').html());
                                    var accompanytotal = parseFloat($('#accompany_total').html());
                                    $('#accompany_amount').html(singleamount);
                                    $('#accompany_amount').show();
                                    var subtotal = membertotal + total_accompany;
                                    $('#subtotal').html('$' + " " + subtotal);
                                    var procesingfee = subtotal * 3.75 / 100;
                                    var subtotal = parseFloat(subtotal) + parseFloat(procesingfee);
                                    $('#processing_fees').html('$' + " " + procesingfee);
                                    $('#grand_total').html('$' + " " + subtotal);
                                    $('#value_only').val(subtotal);
                                    $('#orginal_processing').val(procesingfee);
                                    $('#process_text').html('Processing Fee (3.75%)');
                                    $('#payment_type').show();
                                    $('#make_payment').show();
                                    $('#offline').hide();
                                    $('#payment_zero').hide();
                                    $('#processing_row').show();
                                    $('#payment_type').show();
                                    $('#processing_amnt').show();
                                    $('#payment_mode').show();
                                }
                                else{
                                    var membertotal = parseFloat($('#memberamount_total').html());
                                    var subtotal = membertotal;
                                    $('#subtotal').html(subtotal);
                                    var procesingfee = subtotal * 3.75 / 100;
                                    var subtotal = parseFloat(subtotal) + parseFloat(procesingfee);
                                    $('#processing_fees').html(procesingfee);
                                    $('#grand_total').html(subtotal);
                                    $('#value_only').val(subtotal);

                                }
                            }



                        }
                        else{
                            alert('something went to wrong');
                        }


                    }
                });

            }
        });
        //    }
        $('#back_to_form2').click(function () {
//            debugger;
            var prof_id=$('#profile_id_accompany').val();
            $.ajax({
                url: 'https://inasl2018.com/delete-accompany',
                data: {prof_id: prof_id, _token: 'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9'},
                method: 'post',
                success: function (result) {
                    $('#Form_2').show();
                    $('#Form_4').hide();
                    $('#Form_3').hide();
                    $('#Form_1').hide();

                }
            });

        })



        var count = 1;
        $('.add_btn').click(function() {
//        $("#accompany-form").validate();
            $('.block:last').after(
                '<div class="block clearfix">' +
                '<div class="loop">'+
                '<div class="row">'+
                '<div class="col-md-2">'+
                '<div class="form_group">'+
                '<label class="form_label">Salutation <span>*</span></label>'+
                '<select class="form_input" name="title_a[]" required="">'+
                '' +
                ' <option value="1" > Prof. </option>' +
                '' +
                ' <option value="2" > Dr. </option>' +
                '' +
                ' <option value="3" > Mr. </option>' +
                '' +
                ' <option value="4" > Ms. </option>' +
                ''+
                '</select>'+
                '</div>'+
                '</div>'+
                '<div class="col-md-5">'+
                '<div class="form_group">'+
                '<label class="form_label">Enter First Name <span>*</span></label>'+
                '<input class="form_input" name="firstname_a[]" id="firstname_a'+count+'+" type="text" placeholder="First Name" required="">'+
                '</div>'+
                '</div>'+
                '<div class="col-md-5">'+
                '<div class="form_group">'+
                '<label class="form_label">Enter Last Name <span>*</span></label>'+
                '<input class="form_input" name="lastname_a[]" id="lastname_a'+count+'" type="text" placeholder="Last Name" required="">'+
                '</div>'+
                '</div>'+
                '</div>'+
                '<div class="row">'+
                '<div class="col-md-6">'+
                '<div class="form_group">'+
                '<label class="form_label">Date of Birth <span>*</span></label>'+
                '<div id="datepicker3" class="input-group date dateclass" data-date-format="mm-dd-yyyy" id="dob'+count+'">'+
                '<input class="form_input" type="text"  placeholder="MM-DD-YYYY" name=dob_a[]  required=""/>'+
                '<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '<div class="col-md-6">'+
                '<div class="form_group">'+
                '<label class="form_label">Gender <span>*</span></label>'+
                '<div class="gender">'+
                '<label class="custom_check">'+
                '<input type="hidden" name="gender_key[]" value="'+count+'">'+
                '<input type="radio" name="gender_a['+count+']" class="gender_radio" value="1" id="t'+count+'" checked required />'+
                '<span class="gender_icon male"></span>'+
                '<span class="gender_name">Male</span>'+
                '</label>'+
                '<label class="custom_check">'+
                '<input type="radio" name="gender_a['+count+']" class="gender_radio" value="2" id="tf'+count+'" required/>'+
                '<span class="gender_icon female"></span>'+
                '<span class="gender_name">Female</span>'+
                '</label>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '<div class="row">'+
                '<div class="col-md-6">'+
                '<div class="form_group">'+
                '<label class="form_label">Street Line 1<span>*</span></label>'+
                '<input class="form_input" name="streetline1_a[]" type="text" placeholder="Street line1" required="" id="streetline1_a'+count+'">'+
                '</div>'+
                '</div>'+
                '<div class="col-md-6">'+
                '<div class="form_group">'+
                '<label class="form_label">Street Line 2<span>*</span></label>'+
                '<input class="form_input" name="streetline2_a[]" type="text" placeholder="Street line2" required="" id="streetline2_a'+count+'">'+
                '</div>'+
                '</div>'+
                '</div>'+
                '<div class="row">'+
                '<div class="col-md-3">'+
                '<div class="form_group">'+
                '<label class="form_label">Country <span>*</span></label>'+
                '<select class="form_input" id="country_Id'+count+'" name="countyrid_a[]" required="" onchange="get_states(\'country_Id'+count+'\',\'state_id'+count+'\')">'+
                '<option value="">Select</option>'+
                ' ' +
                '<option value="1" > Afghanistan </option>' +
                '' +
                '<option value="2" > Albania </option>' +
                '' +
                '<option value="3" > Algeria </option>' +
                '' +
                '<option value="4" > American Samoa </option>' +
                '' +
                '<option value="5" > Andorra </option>' +
                '' +
                '<option value="6" > Angola </option>' +
                '' +
                '<option value="7" > Anguilla </option>' +
                '' +
                '<option value="8" > Antarctica </option>' +
                '' +
                '<option value="9" > Antigua And Barbuda </option>' +
                '' +
                '<option value="10" > Argentina </option>' +
                '' +
                '<option value="11" > Armenia </option>' +
                '' +
                '<option value="12" > Aruba </option>' +
                '' +
                '<option value="13" > Australia </option>' +
                '' +
                '<option value="14" > Austria </option>' +
                '' +
                '<option value="15" > Azerbaijan </option>' +
                '' +
                '<option value="16" > Bahamas The </option>' +
                '' +
                '<option value="17" > Bahrain </option>' +
                '' +
                '<option value="18" > Bangladesh </option>' +
                '' +
                '<option value="19" > Barbados </option>' +
                '' +
                '<option value="20" > Belarus </option>' +
                '' +
                '<option value="21" > Belgium </option>' +
                '' +
                '<option value="22" > Belize </option>' +
                '' +
                '<option value="23" > Benin </option>' +
                '' +
                '<option value="24" > Bermuda </option>' +
                '' +
                '<option value="25" > Bhutan </option>' +
                '' +
                '<option value="26" > Bolivia </option>' +
                '' +
                '<option value="27" > Bosnia and Herzegovina </option>' +
                '' +
                '<option value="28" > Botswana </option>' +
                '' +
                '<option value="29" > Bouvet Island </option>' +
                '' +
                '<option value="30" > Brazil </option>' +
                '' +
                '<option value="31" > British Indian Ocean Territory </option>' +
                '' +
                '<option value="32" > Brunei </option>' +
                '' +
                '<option value="33" > Bulgaria </option>' +
                '' +
                '<option value="34" > Burkina Faso </option>' +
                '' +
                '<option value="35" > Burundi </option>' +
                '' +
                '<option value="36" > Cambodia </option>' +
                '' +
                '<option value="37" > Cameroon </option>' +
                '' +
                '<option value="38" > Canada </option>' +
                '' +
                '<option value="39" > Cape Verde </option>' +
                '' +
                '<option value="40" > Cayman Islands </option>' +
                '' +
                '<option value="41" > Central African Republic </option>' +
                '' +
                '<option value="42" > Chad </option>' +
                '' +
                '<option value="43" > Chile </option>' +
                '' +
                '<option value="44" > China </option>' +
                '' +
                '<option value="45" > Christmas Island </option>' +
                '' +
                '<option value="46" > Cocos (Keeling) Islands </option>' +
                '' +
                '<option value="47" > Colombia </option>' +
                '' +
                '<option value="48" > Comoros </option>' +
                '' +
                '<option value="49" > Congo </option>' +
                '' +
                '<option value="50" > Congo The Democratic Republic Of The </option>' +
                '' +
                '<option value="51" > Cook Islands </option>' +
                '' +
                '<option value="52" > Costa Rica </option>' +
                '' +
                '<option value="53" > Cote D&#039;Ivoire (Ivory Coast) </option>' +
                '' +
                '<option value="54" > Croatia (Hrvatska) </option>' +
                '' +
                '<option value="55" > Cuba </option>' +
                '' +
                '<option value="56" > Cyprus </option>' +
                '' +
                '<option value="57" > Czech Republic </option>' +
                '' +
                '<option value="58" > Denmark </option>' +
                '' +
                '<option value="59" > Djibouti </option>' +
                '' +
                '<option value="60" > Dominica </option>' +
                '' +
                '<option value="61" > Dominican Republic </option>' +
                '' +
                '<option value="62" > East Timor </option>' +
                '' +
                '<option value="63" > Ecuador </option>' +
                '' +
                '<option value="64" > Egypt </option>' +
                '' +
                '<option value="65" > El Salvador </option>' +
                '' +
                '<option value="66" > Equatorial Guinea </option>' +
                '' +
                '<option value="67" > Eritrea </option>' +
                '' +
                '<option value="68" > Estonia </option>' +
                '' +
                '<option value="69" > Ethiopia </option>' +
                '' +
                '<option value="70" > External Territories of Australia </option>' +
                '' +
                '<option value="71" > Falkland Islands </option>' +
                '' +
                '<option value="72" > Faroe Islands </option>' +
                '' +
                '<option value="73" > Fiji Islands </option>' +
                '' +
                '<option value="74" > Finland </option>' +
                '' +
                '<option value="75" > France </option>' +
                '' +
                '<option value="76" > French Guiana </option>' +
                '' +
                '<option value="77" > French Polynesia </option>' +
                '' +
                '<option value="78" > French Southern Territories </option>' +
                '' +
                '<option value="79" > Gabon </option>' +
                '' +
                '<option value="80" > Gambia The </option>' +
                '' +
                '<option value="81" > Georgia </option>' +
                '' +
                '<option value="82" > Germany </option>' +
                '' +
                '<option value="83" > Ghana </option>' +
                '' +
                '<option value="84" > Gibraltar </option>' +
                '' +
                '<option value="85" > Greece </option>' +
                '' +
                '<option value="86" > Greenland </option>' +
                '' +
                '<option value="87" > Grenada </option>' +
                '' +
                '<option value="88" > Guadeloupe </option>' +
                '' +
                '<option value="89" > Guam </option>' +
                '' +
                '<option value="90" > Guatemala </option>' +
                '' +
                '<option value="91" > Guernsey and Alderney </option>' +
                '' +
                '<option value="92" > Guinea </option>' +
                '' +
                '<option value="93" > Guinea-Bissau </option>' +
                '' +
                '<option value="94" > Guyana </option>' +
                '' +
                '<option value="95" > Haiti </option>' +
                '' +
                '<option value="96" > Heard and McDonald Islands </option>' +
                '' +
                '<option value="97" > Honduras </option>' +
                '' +
                '<option value="98" > Hong Kong S.A.R. </option>' +
                '' +
                '<option value="99" > Hungary </option>' +
                '' +
                '<option value="100" > Iceland </option>' +
                '' +
                '<option value="101" > India </option>' +
                '' +
                '<option value="102" > Indonesia </option>' +
                '' +
                '<option value="103" > Iran </option>' +
                '' +
                '<option value="104" > Iraq </option>' +
                '' +
                '<option value="105" > Ireland </option>' +
                '' +
                '<option value="106" > Israel </option>' +
                '' +
                '<option value="107" > Italy </option>' +
                '' +
                '<option value="108" > Jamaica </option>' +
                '' +
                '<option value="109" > Japan </option>' +
                '' +
                '<option value="110" > Jersey </option>' +
                '' +
                '<option value="111" > Jordan </option>' +
                '' +
                '<option value="112" > Kazakhstan </option>' +
                '' +
                '<option value="113" > Kenya </option>' +
                '' +
                '<option value="114" > Kiribati </option>' +
                '' +
                '<option value="115" > Korea North </option>' +
                '' +
                '<option value="116" > Korea South </option>' +
                '' +
                '<option value="117" > Kuwait </option>' +
                '' +
                '<option value="118" > Kyrgyzstan </option>' +
                '' +
                '<option value="119" > Laos </option>' +
                '' +
                '<option value="120" > Latvia </option>' +
                '' +
                '<option value="121" > Lebanon </option>' +
                '' +
                '<option value="122" > Lesotho </option>' +
                '' +
                '<option value="123" > Liberia </option>' +
                '' +
                '<option value="124" > Libya </option>' +
                '' +
                '<option value="125" > Liechtenstein </option>' +
                '' +
                '<option value="126" > Lithuania </option>' +
                '' +
                '<option value="127" > Luxembourg </option>' +
                '' +
                '<option value="128" > Macau S.A.R. </option>' +
                '' +
                '<option value="129" > Macedonia </option>' +
                '' +
                '<option value="130" > Madagascar </option>' +
                '' +
                '<option value="131" > Malawi </option>' +
                '' +
                '<option value="132" > Malaysia </option>' +
                '' +
                '<option value="133" > Maldives </option>' +
                '' +
                '<option value="134" > Mali </option>' +
                '' +
                '<option value="135" > Malta </option>' +
                '' +
                '<option value="136" > Man (Isle of) </option>' +
                '' +
                '<option value="137" > Marshall Islands </option>' +
                '' +
                '<option value="138" > Martinique </option>' +
                '' +
                '<option value="139" > Mauritania </option>' +
                '' +
                '<option value="140" > Mauritius </option>' +
                '' +
                '<option value="141" > Mayotte </option>' +
                '' +
                '<option value="142" > Mexico </option>' +
                '' +
                '<option value="143" > Micronesia </option>' +
                '' +
                '<option value="144" > Moldova </option>' +
                '' +
                '<option value="145" > Monaco </option>' +
                '' +
                '<option value="146" > Mongolia </option>' +
                '' +
                '<option value="147" > Montserrat </option>' +
                '' +
                '<option value="148" > Morocco </option>' +
                '' +
                '<option value="149" > Mozambique </option>' +
                '' +
                '<option value="150" > Myanmar </option>' +
                '' +
                '<option value="151" > Namibia </option>' +
                '' +
                '<option value="152" > Nauru </option>' +
                '' +
                '<option value="153" > Nepal </option>' +
                '' +
                '<option value="154" > Netherlands Antilles </option>' +
                '' +
                '<option value="155" > Netherlands The </option>' +
                '' +
                '<option value="156" > New Caledonia </option>' +
                '' +
                '<option value="157" > New Zealand </option>' +
                '' +
                '<option value="158" > Nicaragua </option>' +
                '' +
                '<option value="159" > Niger </option>' +
                '' +
                '<option value="160" > Nigeria </option>' +
                '' +
                '<option value="161" > Niue </option>' +
                '' +
                '<option value="162" > Norfolk Island </option>' +
                '' +
                '<option value="163" > Northern Mariana Islands </option>' +
                '' +
                '<option value="164" > Norway </option>' +
                '' +
                '<option value="165" > Oman </option>' +
                '' +
                '<option value="166" > Pakistan </option>' +
                '' +
                '<option value="167" > Palau </option>' +
                '' +
                '<option value="168" > Palestinian Territory Occupied </option>' +
                '' +
                '<option value="169" > Panama </option>' +
                '' +
                '<option value="170" > Papua new Guinea </option>' +
                '' +
                '<option value="171" > Paraguay </option>' +
                '' +
                '<option value="172" > Peru </option>' +
                '' +
                '<option value="173" > Philippines </option>' +
                '' +
                '<option value="174" > Pitcairn Island </option>' +
                '' +
                '<option value="175" > Poland </option>' +
                '' +
                '<option value="176" > Portugal </option>' +
                '' +
                '<option value="177" > Puerto Rico </option>' +
                '' +
                '<option value="178" > Qatar </option>' +
                '' +
                '<option value="179" > Reunion </option>' +
                '' +
                '<option value="180" > Romania </option>' +
                '' +
                '<option value="181" > Russia </option>' +
                '' +
                '<option value="182" > Rwanda </option>' +
                '' +
                '<option value="183" > Saint Helena </option>' +
                '' +
                '<option value="184" > Saint Kitts And Nevis </option>' +
                '' +
                '<option value="185" > Saint Lucia </option>' +
                '' +
                '<option value="186" > Saint Pierre and Miquelon </option>' +
                '' +
                '<option value="187" > Saint Vincent And The Grenadines </option>' +
                '' +
                '<option value="188" > Samoa </option>' +
                '' +
                '<option value="189" > San Marino </option>' +
                '' +
                '<option value="190" > Sao Tome and Principe </option>' +
                '' +
                '<option value="191" > Saudi Arabia </option>' +
                '' +
                '<option value="192" > Senegal </option>' +
                '' +
                '<option value="193" > Serbia </option>' +
                '' +
                '<option value="194" > Seychelles </option>' +
                '' +
                '<option value="195" > Sierra Leone </option>' +
                '' +
                '<option value="196" > Singapore </option>' +
                '' +
                '<option value="197" > Slovakia </option>' +
                '' +
                '<option value="198" > Slovenia </option>' +
                '' +
                '<option value="199" > Smaller Territories of the UK </option>' +
                '' +
                '<option value="200" > Solomon Islands </option>' +
                '' +
                '<option value="201" > Somalia </option>' +
                '' +
                '<option value="202" > South Africa </option>' +
                '' +
                '<option value="203" > South Georgia </option>' +
                '' +
                '<option value="204" > South Sudan </option>' +
                '' +
                '<option value="205" > Spain </option>' +
                '' +
                '<option value="206" > Sri Lanka </option>' +
                '' +
                '<option value="207" > Sudan </option>' +
                '' +
                '<option value="208" > Suriname </option>' +
                '' +
                '<option value="209" > Svalbard And Jan Mayen Islands </option>' +
                '' +
                '<option value="210" > Swaziland </option>' +
                '' +
                '<option value="211" > Sweden </option>' +
                '' +
                '<option value="212" > Switzerland </option>' +
                '' +
                '<option value="213" > Syria </option>' +
                '' +
                '<option value="214" > Taiwan </option>' +
                '' +
                '<option value="215" > Tajikistan </option>' +
                '' +
                '<option value="216" > Tanzania </option>' +
                '' +
                '<option value="217" > Thailand </option>' +
                '' +
                '<option value="218" > Togo </option>' +
                '' +
                '<option value="219" > Tokelau </option>' +
                '' +
                '<option value="220" > Tonga </option>' +
                '' +
                '<option value="221" > Trinidad And Tobago </option>' +
                '' +
                '<option value="222" > Tunisia </option>' +
                '' +
                '<option value="223" > Turkey </option>' +
                '' +
                '<option value="224" > Turkmenistan </option>' +
                '' +
                '<option value="225" > Turks And Caicos Islands </option>' +
                '' +
                '<option value="226" > Tuvalu </option>' +
                '' +
                '<option value="227" > Uganda </option>' +
                '' +
                '<option value="228" > Ukraine </option>' +
                '' +
                '<option value="229" > United Arab Emirates </option>' +
                '' +
                '<option value="230" > United Kingdom </option>' +
                '' +
                '<option value="231" > United States </option>' +
                '' +
                '<option value="232" > United States Minor Outlying Islands </option>' +
                '' +
                '<option value="233" > Uruguay </option>' +
                '' +
                '<option value="234" > Uzbekistan </option>' +
                '' +
                '<option value="235" > Vanuatu </option>' +
                '' +
                '<option value="236" > Vatican City State (Holy See) </option>' +
                '' +
                '<option value="237" > Venezuela </option>' +
                '' +
                '<option value="238" > Vietnam </option>' +
                '' +
                '<option value="239" > Virgin Islands (British) </option>' +
                '' +
                '<option value="240" > Virgin Islands (US) </option>' +
                '' +
                '<option value="241" > Wallis And Futuna Islands </option>' +
                '' +
                '<option value="242" > Western Sahara </option>' +
                '' +
                '<option value="243" > Yemen </option>' +
                '' +
                '<option value="244" > Yugoslavia </option>' +
                '' +
                '<option value="245" > Zambia </option>' +
                '' +
                '<option value="246" > Zimbabwe </option>' +
                ''+
                '</select>'+
                '</div>'+
                '</div>'+
                '<div class="col-md-3">'+
                '<div class="form_group">'+
                '<label class="form_label">State <span>*</span></label>'+
                '<select class="form_input" id="state_id'+count+'" name="stateid_a[]" required="">'+
                '<option value="">Select State</option>'+
                '</select>'+
                '</div>'+
                '</div>'+
                '<div class="col-md-3">'+
                '<div class="form_group">'+
                '<label class="form_label">City <span>*</span></label>'+
                '<input class="form_input" name="city_a[]" id="city_a'+count+'" type="text" placeholder="City" required="">'+
                '</div>'+
                '</div>'+
                '<div class="col-md-3">'+
                '<div class="form_group">'+
                '<label class="form_label">Pin/zip <span>*</span></label>'+
                '<input class="form_input" name="pin_a[]" id="pin_a'+count+'" type="text" placeholder="Pin/Zip" required="">'+
                '</div>'+
                '</div>'+
                '</div>'+
                '<div class="row">'+
                '<div class="col-md-6">'+
                '<div class="form_group">'+
                '<label class="form_label">Enter Email id <span>*</span></label>'+
                '<input class="form_input" name="email_a[]" id="email_a'+count+'" type="email" placeholder="jondoe@gmail.com" required="">'+
                '</div>'+
                '</div>'+
                '<div class="col-md-6">'+
                '<div class="form_group">'+
                '<label class="form_label">Enter Phone Number <span>*</span></label>'+
                '<input class="form_input phone phone_flag" id="phone'+count+'" name="phonae_a[]" type="tel"  placeholder="Phone Number" required="">'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '<div class="remove"><i class="fa fa-minus"></i> Remove Person</div>'+
                '</div>'
            );
            $("#datepicker1,#datepicker2,#datepicker3").datepicker({
                autoclose: true,
//            todayHighlight: false
            }).datepicker('update', new Date());
            $(".phone_flag").intlTelInput({
                utilsScript: "assets/inasl/js/utils.js"
            });
            $(".dateclass").datepicker({
                autoclose: true,
                // todayHighlight: true,
                format: 'dd-mm-yyyy',
                startView: 'decade'
            });
//        validate_accompanying_form();
            $("#accompany-form").validate();
            count++;
        });
        $('.optionBox').on('click','.remove',function() {
            $(this).parent().remove();
        });
        $(".phone_flag").intlTelInput({
            utilsScript: "assets/inasl/js/utils.js"
        });
//        $.validator.addMethod("validateMobileAccompany",
//            function(value, element) {
//                return $(".phone_flag").intlTelInput("isValidNumber");
//            },
//            "Please enter a valid mobile number. "
//        );

    
        $(document).ready(function () {
            $('#offline').hide();
            $('#payment_zero').hide();
        })
        function showButton() {
            var grand_total=$('#value_only').val();
            var type_id=$("#type").val();
            if(type_id==2||type_id==4||type_id==5||type_id==3||type_id==1){
                $('#grand_total').html('INR'+' '+grand_total);
                $('#online_payment').show();

            }
            else if (type_id==6||type_id==7||type_id==8||type_id==9){
                $('#grand_total').html('$'+grand_total);
                $('#pay_online_international').show();
            }
            $('#process_text').show();
            $('#processing_fees').show();
            $('#make_payment').show();
            $('#offline').hide();
            $('#processing_row').show();
        }
        function showPayment() {
//        debugger;
            $('#processing_row').hide();
            $('#process_text').hide();
            $('#processing_fees').hide();
            $('#online_payment').hide();
            $('#pay_online_international').hide();
            var prcessingfee= parseFloat($('#processing_fees').html());
            var grand_total=parseFloat($('#grand_total').html());
            var total=grand_total-prcessingfee;
            var type_id=$('#type').val();
            if(type_id==2||type_id==4||type_id==5||type_id==3||type_id==1){

                var processing=parseFloat($('#orginal_processing').val());
                var grand_total=$('#value_only').val();
                var total_dispaly=grand_total-processing;
                $('#grand_total').html('INR'+' '+total_dispaly);
            }
            else if (type_id==6||type_id==7||type_id==8||type_id==9){
                var processing=parseFloat($('#orginal_processing').val());
                var grand_total=$('#value_only').val();
                var total_dispaly=grand_total-processing;
                $('#grand_total').html('$'+total_dispaly);
            }
            $('#make_payment').hide();
            $('#offline').show();

        }

        $('#make_payment').click(function () {
            var selector = $('input[name="amount1"]:checked').val();
            var total_grand=$('#grand_total').html();
            if(total_grand==0||total_grand=='$0'){
                $('#payment_type').hide();
                $('#make_payment').hide();
                $('#offline').show();
                $('#preLoader').show();
                $('#make_payment').prop('disabled', false);
                var profile_id = $('#profile_id_payment').val();
                var amount = $('#value_only').val();
                var type = $('#type_id').val();
                $.ajax({
                    url: 'https://inasl2018.com/payment-zero',
                    data: {profile_id: profile_id, amount: amount, type: type, _token: 'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9'},
                    method: 'post',
                    success: function (result) {
                        $('#preLoader').show();
                        window.location.href = "index.html";
                        $('#preLoader').hide();

                    }
                });
            }
            else {
                if (selector == 1 || selector == 2) {
                    $('#preLoader').show();
                    $('#make_payment').prop('disabled', false);
                    var profile_id = $('#profile_id_payment').val();
                    var amount = $('#value_only').val();
                    var type = $('#type_id').val();
                    $.ajax({
                        url: 'https://inasl2018.com/create-instamojo',
                        data: {profile_id: profile_id, amount: amount, type: type, _token: 'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9'},
                        method: 'post',
                        success: function (result) {
//                            debugger;
                            $('#preLoader').show();
                            $('#payment_failed').attr("href", result.insta_mojo_detail.long_url);
                            window.location.href = result.insta_mojo_detail.long_url;
                            $('#preLoader').hide();

                        }
                    });
                }
                else {
                    $('#payment_error').show();
                    $('#make_payment').prop('disabled', true);

                }
            }

        })
        $('#offline').click(function () {
//        debugger;
            $('#preLoader').show();
            var profile_id=$('#profile_id_payment').val();
            var amount=$('#grand_total').html();
            var type=$('#type_id').val();
            $.ajax({
                url: 'https://inasl2018.com/offline-payment',
                data: {profile_id:profile_id,amount:amount,type:type,_token : 'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9'},
                method: 'post',
                success: function (result) {
                    if(result){

                        window.location.href = "index.html";

                    }

                }
            });
        })
        $('#back_to_form3').click(function () {
            var accompany=$('#accomany_exist').val();
            if(accompany==1){
//            debugger;
                $('#Form_3').show();
                $('#Form_4').hide();
                $('#Form_2').hide();
                $('#Form_1').hide();
            }
            else if(accompany==0){
//            debugger;
                $('#Form_2').show();
                $('#Form_3').hide();
                $('#Form_4').hide();
                $('#Form_1').hide();


            }

        })
        $('#payment_zero').click(function () {
            var total_grand=$('#grand_total').html();
            if(total_grand=='INR 0'||total_grand=='$0'){
                $('#payment_type').hide();
                $('#make_payment').hide();
                $('#offline').show();
                $('#preLoader').show();
                $('#make_payment').prop('disabled', false);
                var profile_id = $('#profile_id_payment').val();
                var amount = $('#value_only').val();
                var type = $('#type_id').val();
                $.ajax({
                    url: 'https://inasl2018.com/payment-zero',
                    data: {profile_id: profile_id, amount: amount, type: type, _token: 'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9'},
                    method: 'post',
                    success: function (result) {
                        $('#preLoader').show();
                        window.location.href = "index.html";
                        $('#preLoader').hide();

                    }
                });
            }
        });
    


    


        function get_states(country_div_id,state_div_id)
        {
            console.log(country_div_id);
            console.log(state_div_id);
            var country_id = $('#'+country_div_id).val();
            $.ajax({
            type: "POST",
            url: 'https://inasl2018.com/get-state-list',
            data: {country_id:country_id, _token : 'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9',requestId : ''},
            success: function( response )
            {
            $('#'+state_div_id).html(response);
            },
            error: function(xhr, status, error) {
            console.log(xhr.responseText);
            }
            });
        }

        function get_cities(state_div_id,city_div_id)
        {
            var country_id = $('#'+state_div_id).val();
            $.ajax({
                type: "POST",
                url: 'https://inasl2018.com/get-city-list',
                data: {country_id:country_id, _token : 'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9',requestId : ''},
                success: function( response )
                {
                    $('#'+city_div_id).html(response);
                },
                error: function(xhr, status, error) {
                    console.log(xhr.responseText);
                }
            });
        }

    


    
        $.validator.addMethod("validateMobile",
            function(value, element) {
                return $("#phone").intlTelInput("isValidNumber");
            },
            "Please enter a valid mobile number. "
        );

        $("#profile-form").validate({
            ignore: [],
            rules: {
//
                title: {
                    required: true
                },
                firstname: {
                    required: true
                },
                lastname: {
                    required: true
                },
                date_picker: {
                    required: true
                },
                streetline1: {
                    required: true
                },
                streetline2: {
                    required: true
                },
                countryid: {
                    required: true
                },
                state_p: {
                    required: true
                },
                city: {
                    required: true
                },
                pin: {
                    required: true
                },
                phone: {
                    validateMobile: true
                },
                email: {
                    required: true,
                },
                upload_file:{
                    required:true,
                    accept:"image/jpg,image/jpeg,image/png,application/pdf",
                },
                certificatename:{
                    required:true,
                },
                gender:{
                    required:true,
                },
                person:{
                    required:true,
                }
            },
            messages: {
                title: "Please select a title.",
                firstname: "Please enter your First name.",
                lastname: "Please enter your Last name.",
                date_picker: "Please select a date.",
                streetline1: "Please enter your Street line 1.",
                streetline2: "Please enter your Street line 2.",
                pin: "Please enter PIN/ZIP .",
                country: "Please select a country.",
                state_p: "Please select a state.",
                city: "Please enter your City.",
                phone: "Please enter a valid phone number.",
                email: "Please enter a valid email.",
                subject: "Please enter message subject.",
                message: "Please enter your message.",
                upload_file:{
                    required:"Please upload images",
                    accept: "Please upload Pdf/Images",
                },
                gender:"Please choose Gender.",
                person:"This field is required."
            },
            errorPlacement: function(error, element){
                if(element.attr("name") == "phone" ){
                    error.insertAfter(element.parent());
                }
                else if(element.attr("name")=="gender"){
                    error.insertAfter(element.parent().parent());
                }
                else if(element.attr("name")=="state"){
                    error.insertAfter(element.parent().parent());
                }
                else if(element.attr("name")=="person"){
                    error.insertAfter(element.parent().parent());
                }
                else{
                    error.insertAfter(element);
                }
            },
            submitHandler: function(form,event) {
//                debugger;
                $('#preLoader').show();
                $('#countryId').attr('disabled',false);
                $('#Verify_Email').prop('disabled', true);
                var selector=$('input[name="person"]:checked').val();
                var form_data = new FormData($("#profile-form")[0]);
                var mobile_with_country_code = $("#phone").intlTelInput("getNumber");
                form_data.append('mobile_country_code', mobile_with_country_code);
                form_data.append('_token', 'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9');
                form_data.append('_token', 'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9');
                $.ajax({
                    url: 'https://inasl2018.com/save-profile',
                    data: form_data,
                    method: 'post',
                    cache : false,
                    contentType: false,
                    processData: false,
                    success: function (result) {
//                        console.log(result);
                        if(result!='')
                        {
                            $('#preLoader').hide();
                            $('#Verify_Email').prop('disabled', false);
                            $('#profile_id').val(result.profile_id);
                            $('#send_otp').val(result.otp);
                            $('#accompany_value').val(selector);
                            $('#popup-otp .cd-popup').toggleClass('is-visible');
                        }
                        else{
                            alert('something went to wrong');
                        }


                    }
                });

            }
        });



        $( ".test" ).on('input', function() {
            append_name_on_certificate();
        });
        $( "#title" ).change(function() {
            append_name_on_certificate();
        });
        function append_name_on_certificate()
        {
            var first_name = $('#firstname').val();
            var last_name = $('#lastname').val();
            if (firstname == '')
            {
                var first_name = $('#first_name1').val();
            }
            if (lastname == '')
            {
                var last_name = $('#last_name1').val();
            }
            if($('#title').val()!='')
            {
                var title = $.trim($("#title option:selected").text());
            }
            else
            {
                var title = '';
            }
            $('#certificatename').val(title+' '+first_name.replace(/\b[a-z]/g,function(f){return f.toUpperCase();})+' '+last_name.replace(/\b[a-z]/g,function(f){return f.toUpperCase();}));

        }

$('#back_to_form1').click(function () {
//debugger;
//    var id=$('#type_person').val();
//    if(id==1){
//        $('#popup-login1 .cd-popup').show();
//    }
//    else{
        $('#Form_1').show();
        $('#Form_4').hide();
        $('#Form_3').hide();
        $('#Form_2').hide();

//    }

})


    $('#button_ajax').click(function(e)
    {
//        debugger;
        var page = $(this).data("id");
        e.preventDefault();
        var email=$('#login_email').val();
        var password=$('#password').val();
        $('#preLoader').fadeIn();
        $.ajax({
            url: 'https://inasl2018.com/inasl-login',
            type: 'post',
            data: {'email':email,'password':password,'_token':'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9'},
            success: function (result) {
                if (result.status === 'success') {
                    $('#pass_miss').html("");
                    clearLoginForm();
                    $('#preLoader').fadeOut();
                    $('#MemberLogin').modal('hide');
                    setDetails(result.data);
                }
                else
                {
                    clearLoginForm();
                    $('#pass_miss').html("Invalid username or password");
                    $('#preLoader').fadeOut();
                }
            },
            error: function(xhr, status, error) {
                console.log(xhr);
                console.log(status);
                console.log(error);
                $('#preLoader').fadeOut();
            }
        })
    });

    function setDetails(data) {
        $('#firstname').val(data.MemberProfile.FirstName);
        $('#lastname').val(data.MemberProfile.LastName);
        $('#streetline1').val(data.MemberProfile.Address);
        $('#email').val(data.EmailId);
        // $('#confirm_email').val(data.EmailId);
        $('#phone').val(data.MobileNumber);
        $('#membership_no').val(data.MembershipId);
        var firstname=data.MemberProfile.FirstName;
        var lastname=data.MemberProfile.LastName;
        var full_name=firstname+" "+lastname;
        $('#certificatename').val('Prof.'+' '+full_name);
        save_membership_type(1);
    }


    function clearLoginForm()
    {
        $('#login_email').val("");
        $('#password').val("");
        $('#pass_miss').html("");
    }



    $("#signupForm").validate({
        errorElement: "span",
        ignore: "",
        // Specify the validation rules
        rules: {
            membership_num: "required"
        },

        // Specify the validation error messages
        messages: {
            membership_num: "please enter your membership number."
        },
        submitHandler: function(form) {
//            var postData = $( "#signupForm" ).serialize();
            var membership=$('#membership_num').val();
            $(".cst_overlay").css("display", "block");
                        //            console.log(form_data);
            $.ajax({
                url: 'https://inasl2018.com/signup',
                type: 'post',
                data: {'membership_no':membership,'_token':'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9'},
                success: function (data,event) {
                    //event.preventDefault();
//                    var obj = jQuery.parseJSON(data);
//                    console.log(data);
                    if (data.status === 'noMobile') {
                        emptySignupMessage();
                        $('#MemberSignUp')
                            .modal('hide')
                            .on('hidden.bs.modal', function (e) {
                                $('#noMobile').modal('show');
                                $(this).off('hidden.bs.modal'); // Remove the 'on' event binding
                            });

                        $(".cst_overlay").css("display", "none");
                    }else if (data.status === 'success') {
                        emptySignupMessage();
                        $('#signupForm')[0].reset();
                        $('#signupForm').css("display", "none");
                        var lastNum = data.data.mobile.substr(data.data.mobile.length - 4);
                        $('#OtpMessage').html("<p>An OTP has been sent to your registered mobile no XXXXXX"+lastNum+".</p>");
                        $('#validateRegisterOtp').css("display", "block");
                        $(".cst_overlay").css("display", "none");
                    }
                    else
                    {
                        emptySignupMessage();
                        $('#membershipError').html(data.messages.notFound);
                        $(".cst_overlay").css("display", "none");
                    }
                }
            });
        }
    });

    $("#noMobileNo").validate({
        errorElement: "span",
        ignore: "",
        // Specify the validation rules
        rules: {
            noMobileNoFirstName: "required",
            noMobileNoLastName: "required",
            noMobileNoMobile: {
                required: true,
                digits: true
            },
            noMobileNoEmail: {
                required: true,
                email: true
            }
        },

        // Specify the validation error messages
        messages: {
            noMobileNoFirstName: "Please enter your first name.",
            noMobileNoLastName: "Please enter your last name.",
            noMobileNoMobile: {
                required: "Please enter a valid mobile no with 10 digits.",
                digits : "Please enter a valid mobile no with 10 digits."
            },
            noMobileNoEmail: {
                required: "Please enter a valid email address.",
                email: "Please enter a valid email address."
            }
        },
        submitHandler: function(form,event) {
//            console.log(form);
//            var targetUrl  = 'ajax/noMobileNo.php';
//            var postData = $( "#noMobileNo" ).serialize();
            var postData = new FormData($("#noMobileNo")[0]);
            postData.append('_token', 'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9');
            $(".cst_overlay").css("display", "block");
            event.preventDefault();
//            console.log(postData);
            $.ajax({
                url: 'https://inasl2018.com/noMobileNo',
                method: 'post',
                data: postData,
                cache : false,
                contentType: false,
                processData: false,
                success: function (data) {
                    var obj = jQuery.parseJSON(data);
//                    console.log(obj.messages.email);
                    if (obj.status === 'success') {
                        $('#noMobileNo')[0].reset();
                        $('#noMobileNo').css("display", "none");
                        $("#noMobileMessage").css("display", "block");
                        $(".cst_overlay").css("display", "none");
                    }
                    else
                    {
                        $('#noMobileNo')[0].reset();
                        $('#noMobileNo').css("display", "none");
                        $("#noMobileMessage").css("display", "block");
                        $(".cst_overlay").css("display", "none");
                        event.preventDefault();
                    }
                }
            });
            event.preventDefault();
        }

    });

    //registration otp form validation
    $("#validateRegisterOtp").validate({
        errorElement: "span",
        ignore: "",
        // Specify the validation rules
        rules: {
            RegisterOtp: "required"
        },

        // Specify the validation error messages
        messages: {
            membership_num: "please enter your otp number."
        },
        submitHandler: function(form) {
            var otp=$('#RegisterOtp').val();
            $(".cst_overlay").css("display", "block");
            $.ajax({
                url: 'https://inasl2018.com/validateRegistrationOtp',
                type: 'post',
                data: {'otp':otp,'_token':'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9'},
                success: function (data,event) {
                    //event.preventDefault();
//                    console.log(data);
//                    var obj = jQuery.parseJSON(data);
                    if (data.status === 'success') {
                        emptySignupMessage();
                        $('#validateRegisterOtp')[0].reset();
                        $('#validateRegisterOtp').css("display", "none");
                        $('#createPassword').css("display", "block");
                        $(".cst_overlay").css("display", "none");
                    }
                    else
                    {
                        emptySignupMessage();
                        $('#registrationOtpError').html(data.messages.notFound);
                        $('#registrationOtpError').css("display", "block");
                        $(".cst_overlay").css("display", "none");

                    }
                }
            });

        }
    });

    //create password form validation
    $("#createPassword").validate({
        errorElement: "span",
        ignore: "",
        // Specify the validation rules
        rules: {
            createPasswordFirstName: "required",
            createPasswordLastName: "required",
            password1: "required",
            comfirmPassword: {
                equalTo: "#password1"
            },
            createPasswordEmail: {
                required: true,
                email: true
            }
        },

        // Specify the validation error messages
        messages: {
            createPasswordFirstName: "Please enter your first name.",
            createPasswordLastName: "Please enter your last name.",
            password1: "Please enter your password.",
            comfirmPassword: {
                required:"Please confirm your password.",
                equalTo:"passwords needs to be the same"
            },
            createPasswordEmail: {
                required: "Please enter a valid email address.",
                email: "Please enter a valid email address."
            }
        },
        submitHandler: function(form,event) {
//            var targetUrl  = 'ajax/createPassword.php';
//            var postData = $( "#createPassword" ).serialize();
            var postData = new FormData($("#createPassword")[0]);
            postData.append('_token', 'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9');
            $(".cst_overlay").css("display", "block");
            event.preventDefault();
            //console.log(postData);
            $.ajax({
                url: 'https://inasl2018.com/createPassword',
                type: 'post',
                data: postData,
                cache : false,
                contentType: false,
                processData: false,
                success: function (result) {
//                    var obj = jQuery.parseJSON(data);
//                    console.log(result);
                    if (result.status === 'success') {
                        emptySignupMessage();
                        $('#createPassword')[0].reset();
                        $(".cst_overlay").css("display", "none");
//                        window.location="my-profile-edit.php?mode=first";
                        $('#MemberSignUp').modal('hide');
                        setDetails(result.data);
                        event.preventDefault();
                    }
                    else
                    {
                        emptySignupMessage();
                        $('#emailError').html("The email has already been taken.");
                        $(".cst_overlay").css("display", "none");
                        event.preventDefault();
                    }
                }
            });
            event.preventDefault();
        }

    });




    //create password form validation
    $("#forgotMembershipNo").validate({
        errorElement: "span",
        ignore: "",
        // Specify the validation rules
        rules: {
            forgotFirstName: "required",
            forgotLastName: "required",
            forgotMobile: {
                required: true,
                digits: true
            },
            forgotEmail: {
                required: true,
                email: true
            }
        },

        // Specify the validation error messages
        messages: {
            forgotFirstName: "Please enter your first name.",
            forgotLastName: "Please enter your last name.",
            forgotMobile: {
                required: "Please enter a valid mobile no with 10 digits.",
                digits : "Please enter a valid mobile no with 10 digits."
            },
            forgotEmail: {
                required: "Please enter a valid email address.",
                email: "Please enter a valid email address."
            }
        },
        submitHandler: function(form,event) {
            var postData = new FormData($("#forgotMembershipNo")[0]);
            postData.append('_token', 'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9');
            $(".cst_overlay").css("display", "block");
            event.preventDefault();
            // console.log(postData);
            $.ajax({
                url: 'https://inasl2018.com/forgotMembership',
                type: 'post',
                data: postData,
                cache : false,
                contentType: false,
                processData: false,
                success: function (data) {
                    if (data.status === 'success') {
                        $('#forgotMembershipNo')[0].reset();
                        $('#forgotMembershipNo').css("display", "none");
                        $("#forgotMembershipMessage").css("display", "block");
                        $(".cst_overlay").css("display", "none");
                    }
                    else
                    {
                        $('#forgotMembershipNo')[0].reset();
                        $('#forgotMembershipNo').css("display", "none");
                        $("#forgotMembershipMessage").css("display", "block");
                        $(".cst_overlay").css("display", "none");
                        event.preventDefault();
                    }
                }
            });
            event.preventDefault();
        }

    });

    $("#mobileNoChanged").validate({
        errorElement: "span",
        ignore: "",
        // Specify the validation rules
        rules: {
            mobileNoChangedFirstName: "required",
            mobileNoChangedLastName: "required",
            mobileNoChangedMobile: {
                required: true,
                digits: true
            },
            mobileNoChangedEmail: {
                required: true,
                email: true
            }
        },

        // Specify the validation error messages
        messages: {
            mobileNoChangedFirstName: "Please enter your first name.",
            mobileNoChangedLastName: "Please enter your last name.",
            mobileNoChangedMobile: {
                required: "Please enter a valid mobile no with 10 digits.",
                digits : "Please enter a valid mobile no with 10 digits."
            },
            mobileNoChangedEmail: {
                required: "Please enter a valid email address.",
                email: "Please enter a valid email address."
            }
        },
        submitHandler: function(form,event) {
            var postData = new FormData($("#mobileNoChanged")[0]);
            postData.append('_token', 'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9');
            $(".cst_overlay").css("display", "block");
            event.preventDefault();
            //console.log(postData);
            $.ajax({
                url: 'https://inasl2018.com/mobileNoChanged',
                type: 'post',
                data: postData,
                cache : false,
                contentType: false,
                processData: false,
                success: function (data) {
//                    console.log(data.messages.email);
                    if (data.status === 'success') {
                        $('#mobileNoChanged')[0].reset();
                        $('#mobileNoChanged').css("display", "none");
                        $("#mobileNoChangedMessage").css("display", "block");
                        $(".cst_overlay").css("display", "none");
                    }
                    else
                    {
                        $('#mobileNoChanged')[0].reset();
                        $('#mobileNoChanged').css("display", "none");
                        $("#mobileNoChangedMessage").css("display", "block");
                        $(".cst_overlay").css("display", "none");
                        event.preventDefault();
                    }
                }
            });
            event.preventDefault();
        }

    });

    //resendMembershipOtp

    $('#resendMembershipOtp').click(function(e)
    {
        $(".cst_overlay").css("display", "block");
        $.ajax({
            url: 'https://inasl2018.com/resendOtp',
            type: 'post',
            data: {'_token':'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9'},
            success: function (data) {
                $('#registrationOtpError').css("display", "none");
                $("#otpResendMessage").html('OTP resent successfully.');
                $(".cst_overlay").css("display", "none");
            },
            error: function(xhr, status, error) {
                console.log(xhr);
                console.log(status);
                console.log(error);
            }
        })
    });

    $('#requestOtpBtn').click(function(e)
    {
        e.preventDefault();
        var mobile=$('#otpMobileNo').val();
        $(".cst_overlay").css("display", "block");
        $.ajax({
            url: 'https://inasl2018.com/validateMobile',
            type: 'post',
            data: {'mobile':mobile, '_token':'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9'},
            success: function (data) {
//                console.log(data);
//                console.log(data.status);
                if (data.status === 'success') {
                    $('#otpMobileError').html("");
                    $('#otpMobileNo').val("");
                    $('#ValidateMobile')
                        .modal('hide')
                        .on('hidden.bs.modal', function (e) {
                            $('#VerifyOtp').modal('show');
                            $(this).off('hidden.bs.modal'); // Remove the 'on' event binding
                        });
                    $(".cst_overlay").css("display", "none");
                }
                else
                {
                    $('#otpMobileError').html("Mobile number does not exist in our database.");
                    $(".cst_overlay").css("display", "none");
                }
            }
        })

    });

    $('#verifyOtpBtn').click(function(e)
    {
        e.preventDefault();
        var otp = $('#otpCode').val();
        $(".cst_overlay").css("display", "block");
        $.ajax({
            url: 'https://inasl2018.com/validateOtp',
            type: 'post',
            data: {'otp':otp, '_token':'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9'},
            success: function (data) {
//                console.log(data);
                if (data === '1') {
                    $('#otpError').html("");
                    $('#otpCode').val("");
                    $('#VerifyOtp')
                        .modal('hide')
                        .on('hidden.bs.modal', function (e) {
                            $('#ResetPassword').modal('show');
                            $(this).off('hidden.bs.modal'); // Remove the 'on' event binding
                        });
                    $(".cst_overlay").css("display", "none");
                }
                else
                {
                    $('#otpError').html("Please enter a valid otp.");
                    $(".cst_overlay").css("display", "none");
                }
            }
        })

    });

    $("#otpChangePass").validate({
        errorElement: "span",
        ignore: "",
        // Specify the validation rules
        rules: {

            otpPassword: "required",
            otpConfPassword: {
                equalTo: "#otpPassword"
            }
        },

        // Specify the validation error messages
        messages: {
            otpPassword: "please enter your new password.",
            otpConfPassword: {
                required:"please confirm your new password.",
                equalTo:"passwords need to be same"
            }
        },
        submitHandler: function(form) {
            var password =  $('#otpPassword').val();
            $(".cst_overlay").css("display", "block");
            //console.log(postData);
            $.ajax({
                url: 'https://inasl2018.com/resetPassword',
                type: 'post',
                data: {'password': password,'_token':'DDgv8xV0nfcjRNcBchM0Ha3cT2wjAlwoUIPRxpJ9'},
                success: function (data) {
//                    console.log(data);

                    if (data === '1') {
                        $('#otpPasswordMessage').html("");
                        $('#otpPassword').val("");
                        $('#otpConfPassword').val("");
                        $('#ResetPassword')
                            .modal('hide')
                            .on('hidden.bs.modal', function (e) {
                                $('#MemberLogin').modal('show');
                                $(this).off('hidden.bs.modal'); // Remove the 'on' event binding
                            });
                        $(".cst_overlay").css("display", "none");
                        event.preventDefault();
                    }
                    else
                    {
                        $('#otpPasswordMessage').html("Your session has expired. Please reload the page.");
                        $(".cst_overlay").css("display", "none");
                        event.preventDefault();
                    }
                }
            });

            event.preventDefault();
        }
    });