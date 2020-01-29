"use strict";

$(document).ready(function() {
    new WOW().init();
    // ----------animated wobble for user---------
    $('.ba-user').on('mouseover', function(e) {
        e.preventDefault()
        $(this).addClass('animated wobble')
    });
    $('.ba-user').on('mouseout', function(e) {
        e.preventDefault()
        $(this).removeClass('animated wobble')
    });
    // END animated wobble for user

    // ----------class active & tab for work----------
    $('.ba-offer-work').on('click', function(e) {
        e.preventDefault()
        $(this).siblings(".active").removeClass('active')
        $(this).addClass('active')
        let dataTab = $(this).attr('data-tab')
        $('.ba-offer-tab').siblings(".active").removeClass('active')
        let $arr = $('.ba-offer-tab')

        $arr.each(function(index) {
            if (index == dataTab) {
                console.log(index + ": " + dataTab)
                $(this).addClass('active animated jello')
            }
        });

    });
    // END class active & tab for work

    // ------- block hover ---------
    $('.ba-packages__block').on('mouseover', function(e) {
        e.preventDefault()
        $('#ba-packages__block').removeClass('active')
        $(this).addClass('active')
    });
    $('.ba-packages__block').on('mouseout', function(e) {
        e.preventDefault()
        $(this).removeClass('active')
        $('#ba-packages__block').addClass('active')
    });
    // END  block hover 
    // ----- scroll-----
    $("nav li a").click(function() {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({ scrollTop: destination }, 800);
    });
    $(".ba-header-scroll a").click(function() {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({ scrollTop: destination }, 800);
    });

    //-------menu dropdown ----------

    $('.ba-header-menu-btn').on('click', function() {
        $('.ba-menu').toggle();
        $('.ba-header-menu-btn i').toggleClass('fa-times')
        $(this).toggleClass('ba-header-menu-btn_position')
    });




});