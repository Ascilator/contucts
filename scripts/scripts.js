jQuery(function () {


	$('.burger').click(function(){
		$('.wrapper_1').slideToggle(300);
		$('.burger').toggleClass('active');	
	});
	$('.menu_link_lvl_1').mouseenter(function(){
		$(`.menu_cont_lvl_2`).css({
			'display':'none'
		});
		$(this).next().css({
			'display':'flex'
		});
		
	});
	$(`.menu_cont_lvl_2`).mouseleave(function(){
		$(this).css({
			'display':'none'
		});
	});


	
	var slider_3 = $('#slider_3').bxSlider({
		slideMargin: 0,
		
		infiniteLoop: false,
		adaptiveHeight: true,
		controls: true,
		minSlides: 1,
		maxSlides: 1,
		nextSelector: $('#next_3'),
		prevText: '',
		nextText: '',
		prevSelector: $('#prev_3'),
		swipeThreshold: 50,
		responsive: true,
	});

	var slider_2 = $('#slider_2').bxSlider({
		slideMargin: 0,
		
		infiniteLoop: false,
		adaptiveHeight: true,
		controls: true,
		minSlides: 1,
		maxSlides: 1,
		nextSelector: $('#next_2'),
		prevText: '',
		nextText: '',
		prevSelector: $('#prev_2'),
		swipeThreshold: 50,
		responsive: true,
	});


	function tabs () {

		$(".tab_item").not(":first").hide();
		$(".__tab").click(function() {
			$(".__tab").removeClass("_active").eq($(this).index()).addClass("_active");
			$(".tab_item").hide().eq($(this).index()).fadeIn();
			slider_3.reloadSlider({
				slideMargin: 0,
				
				infiniteLoop: false,
				adaptiveHeight: true,
				controls: true,
				minSlides: 1,
				maxSlides: 1,
				nextSelector: $('#next_3'),
				prevText: '',
				nextText: '',
				prevSelector: $('#prev_3'),
				swipeThreshold: 50,
				responsive: true,
			});
			slider_2.reloadSlider({
				slideMargin: 0,
				
				infiniteLoop: false,
				adaptiveHeight: true,
				controls: true,
				minSlides: 1,
				maxSlides: 1,
				nextSelector: $('#next_2'),
				prevText: '',
				nextText: '',
				prevSelector: $('#prev_2'),
				swipeThreshold: 50,
				responsive: true,
			});
		}).eq(0).addClass("_active");
	}
	tabs();

});


