$(document).ready(function() {
    var slideLength = $('.slide').length;
    var currentSlide = ($(".slide").index($('.slide:eq(3)')));
    $('.slide').eq(currentSlide).addClass('center-slide');
    rightLayout();
    leftLayout();
    $('.next').on('click', function() {
        $('.slide').eq(currentSlide).removeClass('center-slide');
        currentSlide++;
        $('.slide').eq(currentSlide).addClass('center-slide').css({ 'transform': ' scale(1)', 'opacity': '1' });
        rightLayout();
        leftLayout();
        if (currentSlide == 6) {
            $('.next').hide();
        } else {
            $('.prev').show();
        }
    });
    $('.prev').on('click', function() {
        $('.slide').eq(currentSlide).removeClass('center-slide');
        currentSlide--;
        $('.slide').eq(currentSlide).addClass('center-slide').css({ 'transform': ' scale(1)', 'opacity': '1' });
        rightLayout();
        leftLayout();
        if (currentSlide == 0) {
            $('.prev').hide();
        } else {
            $('.next').show();
        }
    });

    function rightLayout() {
        var j = 1;
        for (var i = currentSlide + 1; i < slideLength; i++) {
            var trans = 30 + (j * 20);
            $('.slide:eq(' + i + ')').css({ 'transform': 'translateX(' + trans + 'px) scale(.92)', 'opacity': '.2' });
            j++;
        }
    }

    function leftLayout() {
        var k = 1;
        for (var i = currentSlide - 1; i >= 0; i--) {
            var trans = (k * (-20)) - 30;
            $('.slide:eq(' + i + ')').css({ "transform": "translateX(" + trans + "px) scale(.92)", 'opacity': '.2' });
            k++;
        }
    }
});