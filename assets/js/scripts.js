$(document).ready(function() {
    "use strict";
    //Jquery MatchHeight
    $('.team-section .container').each(function() {
        $(this).find('.single-team').matchHeight();
    });

    $('.map-section .row').each(function() {
        $(this).find('.col-md-6').matchHeight();
    });

    $('.projects-section .row').each(function() {
        $(this).find('.col-md-6 .project-content2, .col-md-6 .project-content3').matchHeight();
    });




    $(window).scroll(function(){        

        if($(window).scrollTop() > 10){
            $(".menu-section").addClass("stickymenu");
        }
        else{
            $(".menu-section").removeClass("stickymenu");
        }
       
    });

    function menuHeight() {
    	var $menu = $('.menu-section').outerHeight();
    	$('body').css('padding-top', $menu)
    }
    menuHeight();

    $(window).resize(function () {
    	menuHeight();
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        event.preventDefault();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - $('.menu-section').outerHeight()
        }, 1000, 'easeInOutExpo');
    });




    //Responsive Mobile Menu
    $('.header-menu').slicknav({
        label: '',
        duration: 600,
        prependTo: '.mobile-menu',
        closeOnClick: true,
        closedSymbol: '',
        opendSymbol: ''
    });




});