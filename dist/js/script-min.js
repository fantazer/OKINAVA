$(document).ready(function(){$(".login-toggle").click(function(){$(".login-toggle").removeClass("login-toggle--active"),$(this).addClass("login-toggle--active")}),$(".login-enter").click(function(){$(this).toggleClass("login-enter--active")}),$(".login-drop-toggle").click(function(i){i.stopPropagation(),$(".login-drop").slideToggle()}),$(".login-drop").click(function(i){i.stopPropagation()}),$(document).click(function(){$(".login-enter").removeClass("login-enter--active"),$(".login-drop").slideUp(),console.log(11)}),$(".login-switch").click(function(){var i=$(this).data("switch");console.log(i),$(".login-wrap").each(function(){$(this).data("cont")===i?$(this).addClass("login-wrap--active"):$(this).removeClass("login-wrap--active")})}),$(".slider").slick({slidesToShow:1,speed:500,arrows:!1}),$(".review__el-img").slick({slidesToShow:1,arrows:!1,speed:500,dots:!0}),$(".position-slider").slick({slidesToShow:1,arrows:!1,speed:500,dots:!0}),$(".slider-control--right").click(function(){$(this).closest(".slider-wrap").find(".slider-item").slick("slickNext")}),$(".slider-control--left").click(function(){$(this).closest(".slider-wrap").find(".slider-item").slick("slickPrev")}),$(".icr-btn").click(function(){$(this).addClass("hidden"),$(this).next(".elements-icr-block").removeClass("hidden"),$(this).closest(".item").addClass("item--add")}),$(".incr__minus").click(function(){var i=$(this).parent().find(".incr__val span"),s=parseInt(i.html())-1;s=s<1?0:s,i.html(s),s<1&&($(this).closest(".basket-list__el").slideUp(),$(this).closest(".elements-icr-block").addClass("hidden"),$(this).closest(".item__content").find(".icr-btn").removeClass("hidden"),$(this).closest(".item").removeClass("item--add"),s=1,i.html(s))}),$(".incr__plus").click(function(){var i=$(this).parent().find(".incr__val span"),s=parseInt(i.html())+1;s=s>100?100:s,i.html(s)}),$(".position-list__el").click(function(){var i=$(this).index();$(".position-list__el").not(this).removeClass("position-list__el--active"),$(this).addClass("position-list__el--active"),$(".position-img .slider-wrap").each(function(){$(this).index()===i?(console.log($(this).index()),$(this).addClass("position-slider-wrap--active")):$(this).removeClass("position-slider-wrap--active")})}),$(".contact-list__el").click(function(){var i=$(this).index();$(".contact-list__el").not(this).removeClass("contact-list__el--active"),$(this).addClass("contact-list__el--active"),$(".contact-map__el").each(function(){$(this).index()===i?(console.log($(this).index()),$(this).addClass("contact-map__el--active")):$(this).removeClass("contact-map__el--active")})})});