jQuery(document).ready(function($){
    //move nav element position according to window width
    moveNavigation();
    $(window).on('resize', function(){
        (!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
    });

    //mobile version - open/close navigation
    $('.cd-nav-trigger').on('click', function(event){
        event.preventDefault();
        if($('header').hasClass('nav-is-visible')) $('.moves-out').removeClass('moves-out');


        $('.cd-main-content').toggleClass('nav-is-visible');
        $('header').toggleClass('nav-is-visible');
        $('.cd-main-nav').toggleClass('nav-is-visible');
        $('footer').toggleClass('nav-is-visible');
        $('#over-hidden').toggleClass('over-hidden');
        $('body').toggleClass('hideOverflow');
    });

    //mobile version - go back to main navigation
    $('.go-back').on('click', function(event){
        event.preventDefault();
        $('.cd-main-nav').removeClass('moves-out');
    });

    //open sub-navigation
    $('.cd-subnav-trigger').on('click', function(event){
        event.preventDefault();
        $('.cd-main-nav').toggleClass('moves-out');
    });

    function moveNavigation(){
        var navigation = $('.cd-main-nav-wrapper');
        var screenSize = checkWindowWidth();
        if ( screenSize ) {
            //desktop screen - insert navigation inside header element
            navigation.detach();
            navigation.insertBefore('.cd-nav-trigger');
        } else {
            //mobile screen - insert navigation after .cd-main-content element
            navigation.detach();
            navigation.insertAfter('.cd-main-content');
        }
    }

    function checkWindowWidth() {
        var mq = window.getComputedStyle(document.querySelector('header'), '::before').getPropertyValue('content').replace(/"/g, '').replace(/'/g, "");
        return ( mq == 'mobile' ) ? false : true;
    }

    $(".filter-button").click(function() {
        var value = $(this).attr('data-filter');
        var valueHtml = $(this).html();

        $("#category").html(valueHtml);
        if(value == "all")
        {
            $('.filter').show('1000');
        } else {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
        }
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#to-top').fadeIn();
        } else {
            $('#to-top').fadeOut();
        }
    });

    $("#to-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    setTimeout(function() {
        $('body .animate').each(function(k) {
            var el = $(this);
            setTimeout(function() {
                el.animate({'opacity': 1}, 500)
            }, k * 200, 'easeInOutExpo');
        });
    }, 1000);

});