$(document).ready(function() {
    $('.new-nav__list__item').hover(function() {
        $(this).find('.new-nav__list__item__wrapper').addClass('new-list-active');
    }, function() {
        $(this).find('.new-nav__list__item__wrapper').removeClass('new-list-active');
    });

    $('.new-header-top__burger').on('click', function() {
        if(!$('.new-header__burger-menu').hasClass('menu-active')){
            $('.new-header__burger-menu').addClass('menu-active');
        } else {
            $('.new-header__burger-menu').removeClass('menu-active');
        }
    });
});