/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    $('#dl-menu').dlmenu();

    $("#owl-demo").owlCarousel({
        items: 7,
        lazyLoad: true,
        autoPlay: 5000,
        navigation: true
    });
    $("#owl-demo-product").owlCarousel({
        items: 4,
        lazyLoad: true,
        navigationText: ["<p></p>", "<p></p>"],
        autoPlay: 5000,
        navigation: true
    });
    $("#owl-demo-video").owlCarousel({
        items: 3,
        lazyLoad: true,
        navigationText: ["<p></p>", "<p></p>"],
        autoPlay: 5000,
        navigation: true
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 600) {
            $('.menu-web').addClass('visible');
            $('.wrap-menu').addClass('visible');
            $('.wrap-menu').animate({
                top: '0px'
            });
            //$(window).unbind('scroll');
        }
        if ($(window).scrollTop() < 600) {
            $('.menu-web').removeClass('visible');
            $('.wrap-menu').removeClass('visible');
            $('.wrap-menu').removeAttr('style');
        }
    });
    jQuery('#btn-search-header').click(function () {
        var searchSelector = jQuery('#s');
        if (searchSelector.is(':visible'))
        {
            searchSelector.animate({width: "0%"}, 500, function () {
                searchSelector.hide();
            });
        } else {
            searchSelector.show();
            searchSelector.animate({width: "100%"}, 500);
        }
    });
    $(function () {
        $("#toTop").scrollToTop(1000);
    });

});
