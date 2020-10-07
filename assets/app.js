$(document).ready(function (){
    $('.slider').slick({
        arrows:false,
        dots: true,
        adaptiveHeight: true,
        infinite: false,
        mobileFirst: true,
    });
})

$("#nav").on('click', function () {
    $("#dropdown").show();
});



