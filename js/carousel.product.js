$('.product-carousel').owlCarousel({
	loop:true,
	autoplay:true,
	autoplayHoverPause:true,
	margin:20,
	nav:true,
	dots:false,
	navText: ['<i class="fa fa-chevron-left fa-lg fa-fw"></i>', '<i class="fa fa-chevron-right fa-lg fa-fw"></i>'],
	responsive:{
		0:{
			items:2
		},
		768:{
			items:3
		}
	}
});