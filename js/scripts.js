$(document).ready(function() {
    let containerA = document.getElementById("circleA");
    let circleA = new ProgressBar.Circle(containerA, {

        color: '#fff',
        strokeWidth: 8,
        duration: 3000,
        from: {color: '#A020F0'},
        to: {color: '#fff'},
        
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value() * 18);
            circle.setText(value);
        }
})

let containerB = document.getElementById("circleB");
    let circleB = new ProgressBar.Circle(containerB, {

        color: '#fff',
        strokeWidth: 8,
        duration: 3000,
        from: {color: '#A020F0'},
        to: {color: '#fff'},
        
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value() * 4);
            circle.setText(value);
        }
})

let containerC = document.getElementById("circleC");
    let circleC = new ProgressBar.Circle(containerC, {

        color: '#fff',
        strokeWidth: 8,
        duration: 3000,
        from: {color: '#A020F0'},
        to: {color: '#fff'},
        
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value() * 2 );
            circle.setText(value);
        }
})

    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e) {

        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffset.top - 500) && stop == 0) {

        circleA.animate(1.0);
        circleB.animate(1.0);
        circleC.animate(1.0);

        stop = 1;
        }
    });

    

    setTimeout(function() {

        $('#data-area').parallax({imageSrc: 'img/sky.jpg'});

    }, 250);

    });

    setTimeout(function() {

        $('#data-area').parallax({imageSrc: 'img/sky.jpg'})
        /*$('#apply-area').parallax({imageSrc: 'img/tay.jpg'})*/

    }, 250);

    /*$('.filter-btn').on('click', function() {

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'div-btn') {
        eachBoxes('div', boxes);
    } else if(type == 'loc-btn') {
        eachBoxes('loc', boxes);
    } else if(type == 'stg-btn') {
        eachBoxes('stg', boxes);
    } else if(type == 'all-btn') {
        eachBoxes('all', boxes);
    }

    });

    function eachBoxes(type,boxes) {

        if(type == 'all') {
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function() {
                if(!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');
                } else {
                    $(this).fadeIn();
                }
            });
        }
    } */

    let navBtn = $('.nav-item');

    let bannerSection = $('#mainSlider');
    let asboutSection = $('#about-area');
    let servicesSection = $('#services-area');
    let dataSection = $('#data-area');
    let portifolioSection = $('#portifolio-area');
    let contactSection = $('#contact-area');

    let scrollTo = '';