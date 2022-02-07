$(function(){
    'use strict';

    //Search Button Start
    var searchBtn = $('#search_btn');
    var searchBox = $('.search');
    var searchIcon = $('.fa-search');
    var searchCros = $('.fa-times');
    searchBox.hide()
    
    $('#search_btn').click(function(){
        // $(".search_btn,.fa-search").removeClass('fa-search');
        $(".search_btn,.fa-search").toggleClass('fa-times');
        $('.search').fadeToggle(1000);
    })
    //Search Button End
    
    // Menu Fixed Start
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass("fixed_menu");
        } else {
            $('.navbar').removeClass("fixed_menu");
        }
    });
    // Menu Fixed End

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});