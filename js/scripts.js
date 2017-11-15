// 3D Carousel Slider
var swiper = new Swiper('.swiper-container', {
	effect: 'coverflow',
	loop: true,
	centeredSlides: true,
	slidesPerView: 3,
	initialSlide: 6,
	freeMode: true,
	speed: 3000,
	autoplay:4000,
	slidesPerView: 'auto',
	keyboardControl: true,
	mousewheelControl: false,
	lazyLoading: true,
	preventClicks: false,
	preventClicksPropagation: false,
	lazyLoadingInPrevNext: true,
	nextButton: '.swiper-button-next',
   prevButton: '.swiper-button-prev',
	coverflow: {
		rotate: 0,
		stretch: 0,
		depth: 250,
		modifier: 1,
		slideShadows : false,
	}
});
