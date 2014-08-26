$(window).load(function(){
    var $container = $('.blogContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.blogFilter a').click(function(){
        $('.blogFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });
});

$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
				scrollTop: target.offset().top - 40
				}, 600);
				return false;
			}
		}
	});
});

$.fn.scrollFun = function () {
	$(this).click(function (e) {
		var h = $(this).attr('href'),
			target;

		if (h.charAt(0) == '#') {
			var pos = Math.max(target.offset().top, 0);
			e.preventDefault();
			$('body,html').animate({
				scrollTop: pos
			}, 'slow', 'swing');
		}
	});
};

$('.scroll').scrollFun();

	$(document).on("scroll", function(){
		if($(document).scrollTop() > 80){
			$("header").addClass("shrink");
			updateSliderMargin();
		}
		else
		{
			$("header").removeClass("shrink");
			updateSliderMargin();
		}
	});

var $container = $('.blogContainer')
// initialize Isotope
$container.isotope({
  // options...
  resizable: true, // disable normal resizing
  // set columnWidth to a percentage of container width
  masonry: { columnWidth: $container.width() / 3 }
});

// update columnWidth on window resize
$(window).smartresize(function(){
  $container.isotope({
    // update columnWidth to a percentage of container width
    masonry: { columnWidth: $container.width() / 3 }
  });
});