$(document).ready(function (){



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

		//mobile
			//init only in mobile
			var currentSize = $(window).width();
			var sliderMobile = function () {
				if (currentSize < 641) {
					$('.slider-mobile').not('.slick-initialized').slick({
						responsive: [
							{
								breakpoint: 9999,
								settings: "unslick"
							},
							{
								breakpoint: 640,
								settings: {
									slidesToShow: 1,
									slidesToScroll: 1,
									infinite: false,
									prevArrow: false,
									nextArrow: false,
									dots: false,
									swipe: false
								}
							}
						]
					});
				}
			};
			sliderMobile();
			$(window).resize(function () {
				currentSize = $(window).width();
				sliderMobile();
				return currentSize;
			});

		$('.review__el-img').slick({
			slidesToShow: 1,
			arrows: false,
			speed: 500,
			//autoplay: true,
			dots:true,
			infinite: false,
			//fade: true
			//autoplaySpeed: 8000, time between
		});
		//mobile===end
		$('.review-slider__control-el--right').click(function(){
			$(".review").slick('slickNext');
		});
		$('.review-slider__control-el--left').click(function(){
			$(".review").slick('slickPrev');
		});

	//review slider===end

	//position slider
	$('.position-slider').slick({
		slidesToShow: 1,
		arrows: false,
		speed: 500,
		dots:true
	});

	//position slider===end

	//slider custom control
	$('.slider-control--right').click(function(){
		$(this).closest(".slider-wrap").find(".slider-item").slick('slickNext');
	});

	$('.slider-control--left').click(function(){
		$(this).closest(".slider-wrap").find(".slider-item").slick('slickPrev');
	});
	//slider custom control===end

	//restaurant slider
	$('.cafe-item__img').slick({
		slidesToShow: 1,
		arrows: false,
		speed: 500,
		dots:true
	});
	//restaurant slider===end

	//increment field
	$('.icr-btn').click(function(){
		$(this).addClass('hidden');
		$(this).next('.elements-icr-block').removeClass('hidden');
		$(this).closest('.item').addClass('item--add');
	});
	$('.incr__minus').click(function (e) {
		var $input = $(this).parent().find('.incr__val span');
		var count = parseInt($input.html()) - 1;
		count = count < 1 ? 0 : count;
		$input.html(count);
		if(count < 1 ){
			$(this).closest('.basket-list__el').slideUp();
			$(this).closest('.elements-icr-block').addClass('hidden');
			$(this).closest('.item__content').find('.icr-btn').removeClass('hidden');
			$(this).closest('.item').removeClass('item--add');
			//basket show empty state
			$(this).closest('.basket-el').slideUp(function(){
				$(this).remove();
				if($('.basket-el').length < 1){
					$('.basket-empty').removeClass('basket-empty--hidden');
					$('.snacks').remove();
				}
			});
			//basket show empte state === end
			//ingr toggle
			$(this).closest('.add-ingr__el').removeClass('add-ingr__el--active');
			//ingr toggle === end
			count = 1;
			console.log('minus');
			$input.html(count);
			e.stopPropagation();
		}
	});

	$('.incr__plus').click(function () {
		var $input = $(this).parent().find('.incr__val span');
		var count = parseInt($input.html()) + 1;
		count = count > 100 ? 100 : count;
		$input.html(count);
	});
	//increment field end

/*	//position tab
	$('.position-list__el').click(function(){
		var current = $(this).index();
		$('.position-list__el').not(this).removeClass('position-list__el--active');
		$(this).addClass('position-list__el--active');

		//console.log(current);
		$('.position-img .slider-wrap').each(function(){
			if($(this).index()===current){
				console.log($(this).index());
				$(this).addClass('position-slider-wrap--active');
			}else{
				$(this).removeClass('position-slider-wrap--active');
			}
		})
	});
	//position tab===end*/

	//map tab
	$('.contact-list__el').click(function(){
		var current = $(this).index();
		$('.contact-list__el').not(this).removeClass('contact-list__el--active');
		$(this).addClass('contact-list__el--active');

		//console.log(current);
		$('.contact-map__el').each(function(){
			if($(this).index()===current){
				console.log($(this).index());
				$(this).addClass('contact-map__el--active');
			}else{
				$(this).removeClass('contact-map__el--active');
			}
		})
	});
	//map tab===end

	//animate header
	var shrinkHeader = 250;
	var heightHeader=$('.head-main-wrap').height();
	$(window).scroll(function() {
		var scroll = $(this).scrollTop();
		if ( scroll >= shrinkHeader ) {
				$('body').css('paddingTop',heightHeader);
				$('.head-main-wrap').addClass('shrink');
			}
			else {
					$('body').css('paddingTop',0);
					$('.head-main-wrap').removeClass('shrink');
			}
	});

	$(window).resize(function(){
		heightHeader=$('.head-main-wrap').height();
	});

	//animate header===end


	//tag mobile drop
	$('.tag__el-drop').click(function(){
		$(this).toggleClass('tag__el-drop--active');
		$('.tag__el-sub-wrap').slideToggle();
	});
	//tag mobile drop===end


	//mobile slide more
	$('.slide-trigger').click(function(){
		$(this).toggleClass('slide-trigger--active');
	});
	$('.slide-trigger--position').click(function(){
		$('.position-list').toggleClass('position-list--active');
	});

	$('.slide-trigger--add-text').click(function(){
		$('.add-text__col--more').slideToggle();
	});
	//mobile slide more ===end

	//review toggle
	$('.review-toggle').click(function(){
		$(this).toggleClass('review-toggle--active');
		$('.review__el-content').toggleClass('review__el-content--answer');
		$(this).closest('.review__el-content').find('.review-answer').slideToggle();
		$(this).closest('.review__el-content').find('.review__el-user').slideToggle();
	});
	//review toggle ===end

	//init fancybox
	$('.fancybox').fancybox({
		thumbs : {
			autoStart : true
		},
		buttons : [
			'zoom',
			'close'
		]
	});
	//init fancybox===end

	//modals
	var modalState = {
		"isModalShow": false, //state show modal
		"scrollPos": 0
	};
	/*$('.modal-content').click(function (event) {
		event.stopPropagation();
	});*/

	var openModal = function () {
		if (!$('.modal-layer').hasClass('modal-layer-show')) {
			$('.modal-layer').addClass('modal-layer-show');
			modalState.scrollPos = $(window).scrollTop();
			$('body').css({
				overflow: 'hidden',
				position: 'fixed',
				overflowY: 'scroll',
				top: -modalState.scrollPos,
				width: '100%'
			});
		}
		modalState.isModalShow = true;
	};
	var closeModal = function () {
		$('.modal-layer').removeClass('modal-layer-show');
		$('body').css({
			overflow: '',
			position: '',
			top: modalState.scrollPos
		});
		$(window).scrollTop(modalState.scrollPos);
		$('.modal').removeClass('modal__show');
		modalState.isModalShow = false;
	};

	var initModal = function (el) {
		openModal();
		$('.modal').each(function () {
			if ($(this).data('modal') === el) {
				$(this).addClass('modal__show')
			} else {
				$(this).removeClass('modal__show')
			}
		});
		var modalHeightCont = $(window).height();
		$('.modal-filter').height(modalHeightCont);

	};

	$('.modal-get').click(function () {
		var currentModal = $(this).data("modal");
		initModal(currentModal);
	});

	$('.modal-close , .hide-modal').click(function () {
		closeModal();
	});
	//modals===end

	//upload-btn
	$(".upload-btn").change(function () { //Если выбрал файл
		console.log('img');
		if (this.files && this.files[0]) {
			$('.upload-img').append('<div class="upload-img__el" onclick="this.parentNode.removeChild(this);"></div>');
			var currentUpload = $('.upload-img .upload-img__el:last'); //выбираем куда
			var reader = new FileReader();
			reader.onload = function(){
				currentUpload.attr('style', " background-image:url( "+reader.result+ ") ");
			}
			reader.readAsDataURL(this.files[0]);
		}
	});
	$('.upload-img__el').click(function(){
		console.log('remove');
		$(this).remove();
	});
	//upload-btn

	//stars
	$('.get-rating .star-row__el').hover(function () {
		if (!$(this).parent().hasClass('fix-rating')) {
			$('.get-rating .star-row__el').removeClass('star--active');
			$(this).addClass('star--active');
			$(this).prevAll('.star-row__el').addClass('star--active')
		}
	});
	$('.get-rating .star-row__el').click(function () {
		$(this).parent().toggleClass('fix-rating');
		$(this).addClass('star--active');
		$(this).prevAll('.star-row__el').addClass('star--active')
	});
	//stars==end


	//animate basket
	var flyBasket = function () {
	 $(".item__btn").click(function (e) { //click on btn
		 var imgBasket = $(e.target).closest(".item ");//find fly img
		 console.log(imgBasket);
		 $('.cart').removeClass('shake');
		 var locationBasket = $('.cart').offset();//find basket
		 var basketY = locationBasket.top + 'px';
		 var basketX = locationBasket.left + $('.cart').width()  + 'px';
		 var imgY = imgBasket.offset().top;
		 var imgX = imgBasket.offset().left;
		 imgBasket
			 .clone()
			 .appendTo("body")
			 .addClass("item--clone")
			 .css({
			 	'position': 'absolute',
			 	'z-index': '1001',
			 	'left': imgX,
			 	'top': imgY,

			 	})
			 .animate({
				 opacity: 0.1,
				 top: basketY,
				 left: basketX,
				 width: 20,
				 height: 20
			 }, 700, function () {
				 $(this).remove();
			 });
			  setTimeout(function () {
                $('.cart').addClass('shake');
         }, 700)
	 });
	};

	flyBasket();
	//animate basket === end

		//history accord
	$('.history-card').click(function(){
		var current = $(this);
		current.toggleClass('history-card--active');
		//current.find('.history-card__wrap').slideUp(600);
		//current.find('.history-card__wrap').addClass('history-card__wrap--active');
		current.find('.history-info').slideToggle(600);
	});
	//history accord===end


	//mobile menu
	//Фиксируем скрол
	$('.head-toggle--open').click(function(){
		$('body').css({
			overflow: '',
			position: '',
			top: ''
		})
	});

	$('.head-toggle').click(function(event){
		event.stopPropagation();
		$(this).toggleClass('head-toggle--open');
		$('.slide-menu').toggleClass('slide-menu--open');
		$('body').toggleClass('body-fix')
	});

	$('.slide-menu').on("click", function (event) {
		event.stopPropagation();
	});

	$(document).on("click", function () {
			$('.head-wrap').removeClass('head--up');
			$('.head-toggle').removeClass('head-toggle--open');
			$('.slide-menu').removeClass('slide-menu--open');
			console.log(modalState.isModalShow);
			if(modalState.isModalShow == false){
				$('body').removeClass('body-fix')
		}
	});

	$('.slide-el--sub').click(function(){
		var current = $(this).data('menu');
		$('.slide-menu__list').each(function(){
			if($(this).data('menu') == current){
				$(this).addClass('slide-menu__list--active')
			}else{
				$(this).removeClass('slide-menu__list--active')
			}
		})
	});
	//mobile menu===end


	//remove tag
	$('.ingr').click(function(){
		$(this).remove();
	});
	//remove tag===end

	//remove snacks
	$('.snacks-row__remove').click(function(){
		$(this).closest('.snacks-row').slideUp(function(){
			$(this).remove();
		});
	});
	//remove snacks === end

	//remove cart el
	$('.basket-el__remove').click(function(){
		$(this).closest('.basket-el').slideUp(function(){
			$(this).remove();
			if($('.basket-el').length < 1){
				$('.basket-empty').removeClass('basket-empty--hidden');
				$('.snacks').remove();
			}
		});
	});
	//remove cart el ===end

	//modal ingr toggle
	$('.add-ingr__el').click(function(){
		if(!$(this).hasClass('add-ingr__el--active')){
			$(this).addClass('add-ingr__el--active');
		}
		console.log('move');
	});

	$('.add-ingr-clear').click(function(){
		$('.add-ingr__el').removeClass('add-ingr__el--active');
	});
	//modal ingr toggle ===end

	$('.select-beauty').niceSelect();


	//toggle tab restaurant
	$('.cafe-tab__el').click(function(){
		$('.cafe-tab__el').removeClass('cafe-tab__el--active');
		$(this).addClass('cafe-tab__el--active');
		var current = $(this).index();
		console.log(current);
		$('.cafe-tab-info').each(function(){
			if($(this).index()===current + 1){
				console.log($(this).index());
				$(this).addClass('cafe-tab-info--active');
			}else{
				$(this).removeClass('cafe-tab-info--active');
			}
		})
	});
	//toggle tab restaurant === end

	//order-tabs
	$('.order-tab__el').click(function(){
		if(!$(this).hasClass('order-tab__el--active')){
			$('.order-tab__el').removeClass('order-tab__el--active');
			$(this).addClass('order-tab__el--active');
		}
		var current = $(this).data('tab');
		$('.order-cont__el').each(function(){
			if($(this).data('tab')===current){
				$(this).removeClass('hidden');
			}else{
				$(this).addClass('hidden');
			}
		})
	});

	$('.payment-card__el').click(function(){
		$('.payment-card__el').removeClass('payment-card__el--active')
		$(this).addClass('payment-card__el--active')
	});

	$('.payment__type__el ').click(function(){
		if($(this).data('tab')==='card'){
				$('.payment__type-cont').removeClass('hidden');
			}else{
				$('.payment__type-cont').addClass('hidden');
		}
	});
	//order-tabs===end

	//range-slider
	$(".range").ionRangeSlider({
 		min:10,
 		max:100,
 		postfix: " баллов",
 		prefix: "Списать "
 	});

	$(".catalog-range").ionRangeSlider({
        type: "double",
        grid: false,
        min: 0,
        max: 1000,
        from: 200,
        to: 800,
        postfix: " руб"
    });

	//range-slider===end

	//check agree
	$('.check-el--agree').click(function(){
		if($(this).find('input').is(':checked')){
			$('.panel-get').removeClass('btn--disable');
		}else {
			$('.panel-get').addClass('btn--disable');
		}
	});
	//check agree===end

	//catalog item toggle
	$('.catalog-tool-item').click(function(){
		$(this).toggleClass('catalog-tool-item--active');
	});

	$('.catalog-tool__clear').click(function(){
		$('.catalog-tool-item').removeClass('catalog-tool-item--active');
	});

	$('.catalog-sort__el').click(function(){
		$('.catalog-sort__el').removeClass('catalog-sort__el--active');
		$(this).addClass('catalog-sort__el--active');
	});


	//catalog item toggle===end

	//toggle size item
	$('.item-toggle__el').click(function(){
		$(this).closest('.item-toggle').find('.item-toggle__el').removeClass('item-toggle__el--active');
		$(this).addClass('item-toggle__el--active');
	});
	//toggle size item ===end

	//3d effect
	$('.item').tilt({
		maxTilt:25,
		perspective:1200,
		scale: 1.05
	});
	//3d effect===end

	//toggle tags-submenu
	$('.catalog-filter').click(function(){
		$('.catalog-tool').slideToggle();
		$('.tag-mobile-wrap').slideToggle();
		$(this).toggleClass('catalog-filter--active');
	});
	$('.tag-mobile__el--toggle').click(function(){
		$('.tag-mobile__drop').slideToggle();
	});
	//toggle tags-submenu===end
});
