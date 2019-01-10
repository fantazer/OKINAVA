$(document).ready(function () {
	//login drop head
	$('.login-toggle').click(function(){
		$('.login-toggle').removeClass('login-toggle--active');
		$(this).addClass('login-toggle--active');
	});

	$('.login-enter').click(function(){
		$(this).toggleClass('login-enter--active');
	});
	$('.login-drop-toggle').click(function(e){
		e.stopPropagation();
		$('.login-drop').slideToggle();
	});
	$('.login-drop').click(function(e){
		e.stopPropagation();
	});
	$(document).click(function(){
		$('.login-enter').removeClass('login-enter--active');
		$('.login-drop').slideUp();
		console.log(11);
	});

	$('.login-switch').click(function(){
		var current = $(this).data('switch');
		console.log(current);
		$('.login-wrap').each(function(){
			if($(this).data('cont')===current){
				$(this).addClass('login-wrap--active');
			} else {
				$(this).removeClass('login-wrap--active');
			}
		})
	});
	//login drop head ===end


	//main slider
	$('.slider').slick({
		slidesToShow: 1,
		speed: 500,
		arrows: false,
		//autoplay: true,
		//dots:false,
		//fade: true
		//autoplaySpeed: 8000, time between
	});
	//main slider ===end

	//review slider
	$('.review__el-img').slick({
		slidesToShow: 1,
		arrows: false,
		speed: 500,
		//autoplay: true,
		//dots:true,
		//fade: true
		//autoplaySpeed: 8000, time between
	});
	//review slider===end

	//slider custom control
	$('.slider-control--right').click(function(){
		$(this).closest(".slider-wrap").find(".slider-item").slick('slickNext');
	});

	$('.slider-control--left').click(function(){
		$(this).closest(".slider-wrap").find(".slider-item").slick('slickPrev');
	});
	//slider custom control===end

	//increment field
	$('.icr-btn').click(function(){
		$(this).addClass('hidden');
		$(this).next('.elements-icr-block').removeClass('hidden');
		$(this).closest('.item').addClass('item--add');
	});
	$('.incr__minus').click(function () {
		var $input = $(this).parent().find('.incr__val span');
		var count = parseInt($input.html()) - 1;
		count = count < 1 ? 0 : count;
		$input.html(count);
		if(count < 1 ){
			$(this).closest('.basket-list__el').slideUp();
			$(this).closest('.elements-icr-block').addClass('hidden');
			$(this).closest('.item__content').find('.icr-btn').removeClass('hidden');
			$(this).closest('.item').removeClass('item--add');
			count = 1;
			$input.html(count);
		}
	});

	$('.incr__plus').click(function () {
		var $input = $(this).parent().find('.incr__val span');
		var count = parseInt($input.html()) + 1;
		count = count > 100 ? 100 : count;
		$input.html(count);
	});

	//increment field end
});
