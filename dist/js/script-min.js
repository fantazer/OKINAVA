$(document).ready(function(){$(".login-toggle").click(function(){$(".login-toggle").removeClass("login-toggle--active"),$(this).addClass("login-toggle--active")}),$(".login-enter").click(function(){$(this).toggleClass("login-enter--active")}),$(".login-drop-toggle").click(function(e){e.stopPropagation(),$(".login-drop").slideToggle()}),$(".login-drop").click(function(e){e.stopPropagation()}),$(document).click(function(){$(".login-enter").removeClass("login-enter--active"),$(".login-drop").slideUp()}),$(".login-switch").click(function(){var e=$(this).data("switch");console.log(e),$(".login-wrap").each(function(){$(this).data("cont")===e?$(this).addClass("login-wrap--active"):$(this).removeClass("login-wrap--active")})}),$(".slider").slick({slidesToShow:1,speed:500,arrows:!1});var e=$(window).width(),i=function(){e<641&&$(".slider-mobile").not(".slick-initialized").slick({responsive:[{breakpoint:9999,settings:"unslick"},{breakpoint:640,settings:{slidesToShow:1,slidesToScroll:1,infinite:!1,prevArrow:!1,nextArrow:!1,dots:!1,swipe:!1}}]})};i(),$(window).resize(function(){return e=$(window).width(),i(),e}),$(".review__el-img").slick({slidesToShow:1,arrows:!1,speed:500,dots:!0,infinite:!1}),$(".review-slider__control-el--right").click(function(){$(".review").slick("slickNext")}),$(".review-slider__control-el--left").click(function(){$(".review").slick("slickPrev")}),$(".position-slider").slick({slidesToShow:1,arrows:!1,speed:500,dots:!0}),$(".slider-control--right").click(function(){$(this).closest(".slider-wrap").find(".slider-item").slick("slickNext")}),$(".slider-control--left").click(function(){$(this).closest(".slider-wrap").find(".slider-item").slick("slickPrev")}),$(".icr-btn").click(function(){$(this).addClass("hidden"),$(this).next(".elements-icr-block").removeClass("hidden"),$(this).closest(".item").addClass("item--add")}),$(".incr__minus").click(function(e){var i=$(this).parent().find(".incr__val span"),s=parseInt(i.html())-1;s=s<1?0:s,i.html(s),s<1&&($(this).closest(".basket-list__el").slideUp(),$(this).closest(".elements-icr-block").addClass("hidden"),$(this).closest(".item__content").find(".icr-btn").removeClass("hidden"),$(this).closest(".item").removeClass("item--add"),$(this).closest(".basket-el").slideUp(function(){$(this).remove(),$(".basket-el").length<1&&($(".basket-empty").removeClass("basket-empty--hidden"),$(".snacks").remove())}),$(this).closest(".add-ingr__el").removeClass("add-ingr__el--active"),s=1,console.log("minus"),i.html(s),e.stopPropagation())}),$(".incr__plus").click(function(){var e=$(this).parent().find(".incr__val span"),i=parseInt(e.html())+1;i=i>100?100:i,e.html(i)}),$(".contact-list__el").click(function(){var e=$(this).index();$(".contact-list__el").not(this).removeClass("contact-list__el--active"),$(this).addClass("contact-list__el--active"),$(".contact-map__el").each(function(){$(this).index()===e?(console.log($(this).index()),$(this).addClass("contact-map__el--active")):$(this).removeClass("contact-map__el--active")})});var s=250,t=$(".head-main-wrap").height();$(window).scroll(function(){var e=$(this).scrollTop();e>=s?($("body").css("paddingTop",t),$(".head-main-wrap").addClass("shrink")):($("body").css("paddingTop",0),$(".head-main-wrap").removeClass("shrink"))}),$(window).resize(function(){t=$(".head-main-wrap").height()}),$(".tag__el-drop").click(function(){$(this).toggleClass("tag__el-drop--active"),$(".tag__el-sub-wrap").slideToggle()}),$(".slide-trigger").click(function(){$(this).toggleClass("slide-trigger--active")}),$(".slide-trigger--position").click(function(){$(".position-list").toggleClass("position-list--active")}),$(".slide-trigger--add-text").click(function(){$(".add-text__col--more").slideToggle()}),$(".review-toggle").click(function(){$(this).toggleClass("review-toggle--active"),$(".review__el-content").toggleClass("review__el-content--answer"),$(this).closest(".review__el-content").find(".review-answer").slideToggle(),$(this).closest(".review__el-content").find(".review__el-user").slideToggle()}),$(".fancybox").fancybox({thumbs:{autoStart:!0},buttons:["zoom","close"]});var o={isModalShow:!1,scrollPos:0};$(".modal-content").click(function(e){e.stopPropagation()});var l=function(){$(".modal-layer").hasClass("modal-layer-show")||($(".modal-layer").addClass("modal-layer-show"),o.scrollPos=$(window).scrollTop(),$("body").css({overflow:"hidden",position:"fixed",overflowY:"scroll",top:-o.scrollPos,width:"100%"})),o.isModalShow=!0},a=function(){$(".modal-layer").removeClass("modal-layer-show"),$("body").css({overflow:"",position:"",top:o.scrollPos}),$(window).scrollTop(o.scrollPos),$(".modal").removeClass("modal__show"),o.isModalShow=!1},n=function(e){l(),$(".modal").each(function(){$(this).data("modal")===e?$(this).addClass("modal__show"):$(this).removeClass("modal__show")});var i=$(window).height();$(".modal-filter").height(i)};$(".modal-get").click(function(){var e=$(this).data("modal");n(e)}),$(".modal-layer , .modal-close , .hide-modal").click(function(){a()}),$(".upload-btn").change(function(){if(console.log("img"),this.files&&this.files[0]){$(".upload-img").append('<div class="upload-img__el" onclick="this.parentNode.removeChild(this);"></div>');var e=$(".upload-img .upload-img__el:last"),i=new FileReader;i.onload=function(){e.attr("style"," background-image:url( "+i.result+") ")},i.readAsDataURL(this.files[0])}}),$(".upload-img__el").click(function(){console.log("remove"),$(this).remove()}),$(".get-rating .star-row__el").hover(function(){$(this).parent().hasClass("fix-rating")||($(".get-rating .star-row__el").removeClass("star--active"),$(this).addClass("star--active"),$(this).prevAll(".star-row__el").addClass("star--active"))}),$(".get-rating .star-row__el").click(function(){$(this).parent().toggleClass("fix-rating"),$(this).addClass("star--active"),$(this).prevAll(".star-row__el").addClass("star--active")});var c=function(){$(".item__btn").click(function(e){var i=$(e.target).closest(".item ");console.log(i),$(".cart").removeClass("shake");var s=$(".cart").offset(),t=s.top+"px",o=s.left+$(".cart").width()+"px",l=i.offset().top,a=i.offset().left;i.clone().appendTo("body").addClass("item--clone").css({position:"absolute","z-index":"1001",left:a,top:l}).animate({opacity:.1,top:t,left:o,width:20,height:20},700,function(){$(this).remove()}),setTimeout(function(){$(".cart").addClass("shake")},700)})};c(),$(".history-card").click(function(){var e=$(this);e.toggleClass("history-card--active"),e.find(".history-info").slideToggle(600)}),$(".head-toggle--open").click(function(){$("body").css({overflow:"",position:"",top:""})}),$(".head-toggle").click(function(e){e.stopPropagation(),$(this).toggleClass("head-toggle--open"),$(".slide-menu").toggleClass("slide-menu--open"),$("body").toggleClass("body-fix")}),$(".slide-menu").on("click",function(e){e.stopPropagation()}),$(document).on("click",function(){$(".head-wrap").removeClass("head--up"),$(".head-toggle").removeClass("head-toggle--open"),$(".slide-menu").removeClass("slide-menu--open"),console.log(o.isModalShow),0==o.isModalShow&&$("body").removeClass("body-fix")}),$(".slide-el--sub").click(function(){var e=$(this).data("menu");$(".slide-menu__list").each(function(){$(this).data("menu")==e?$(this).addClass("slide-menu__list--active"):$(this).removeClass("slide-menu__list--active")})}),$(".ingr").click(function(){$(this).remove()}),$(".snacks-row__remove").click(function(){$(this).closest(".snacks-row").slideUp(function(){$(this).remove()})}),$(".basket-el__remove").click(function(){$(this).closest(".basket-el").slideUp(function(){$(this).remove(),$(".basket-el").length<1&&($(".basket-empty").removeClass("basket-empty--hidden"),$(".snacks").remove())})}),$(".add-ingr__el").click(function(){$(this).hasClass("add-ingr__el--active")||$(this).addClass("add-ingr__el--active"),console.log("move")}),$(".add-ingr-clear").click(function(){$(".add-ingr__el").removeClass("add-ingr__el--active")}),$(".select-beauty").niceSelect(),$(".cafe-tab__el").click(function(){$(".cafe-tab__el").removeClass("cafe-tab__el--active"),$(this).addClass("cafe-tab__el--active");var e=$(this).index();console.log(e),$(".cafe-tab-info").each(function(){$(this).index()===e+1?(console.log($(this).index()),$(this).addClass("cafe-tab-info--active")):$(this).removeClass("cafe-tab-info--active")})})});