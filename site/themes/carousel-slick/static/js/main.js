//Playing with Ken Wheeler Slick carousel
$('.slider').slick({
	//dots: true,
	infinite: false,
	centerMode: true,
	centerPadding: '15%',
	slidesToShow: 1,
	speed: 500,
responsive: [{

      breakpoint: 992,
      settings: {
        slidesToShow: 1
      }

    }]
});


/* $(".slick-center").addClass(
		"switch");
$(".slick-current").prev().addClass(
		"switch");
$('.slider').on('init', function(currentSlide) {
	console.log(currentSlide);
	$(".slick-center").prev().toggleClass("switch");
}); */
