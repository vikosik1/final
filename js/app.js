$(document).ready(function() {
    // animated bounce for user
    // $('.ba-menu__item').on('mouseover', function(e) {
    //     e.preventDefault()
    //     $(this).addClass('animated bounce')
    // });
    // $('.ba-menu__item').on('mouseout', function(e) {
    //     e.preventDefault()
    //     $(this).removeClass('animated bounce')
    // });
    // END animated wobble for user

    // animated wobble for user
    $('.ba-user').on('mouseover', function(e) {
        e.preventDefault()
        $(this).addClass('animated wobble')
    });
    $('.ba-user').on('mouseout', function(e) {
        e.preventDefault()
        $(this).removeClass('animated wobble')
    });
    // END animated wobble for user

    // class active & tab for work
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


});