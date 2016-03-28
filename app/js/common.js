jQuery(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		jQuery("img[src*='svg']").attr("src", function() {
			return jQuery(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	jQuery("form").submit(function() { //Change
		var th = jQuery(this),
				redirect = th.data('redirect');
		jQuery.ajax({
			type: "POST",
			url: this.action, //Change
			data: th.serialize()
		}).done(function() {
			location.href= redirect;
			// alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		jQuery.browserSelector();
		if(jQuery("html").hasClass("chrome")) {
			jQuery.smoothScroll();
		}
	} catch(err) {

	};
	jQuery("img, a").on("dragstart", function(event) { event.preventDefault(); });


		//all images loaded
	jQuery(window).on('load', function(){	
			if(jQuery().parallax) jQuery('.parallax').parallax();
	});
		
	jQuery('#thank-you').height(jQuery(window).height() - (jQuery('header').height()+jQuery('footer').height()));

	//mobile button
	jQuery('.btn-menu').on('click',function(){
		jQuery(this).toggleClass('open-menu');
		jQuery('.navigation ul').slideToggle('fast');
	});

	//lang-switch
	jQuery('.lang-switch .lang').click(function() {	
		jQuery(this).parent().toggleClass('open');
		jQuery(this).next().slideToggle('fust');
	});
	// langSwitch('.lang');
	// jQuery('.lang-select a').on('click',function(){
	// 	var selectLeng = jQuery(this).text();
	// 	jQuery('.lang').find('span').text(jQuery(this).text());
	// });

	

	

	//owl slider
	jQuery("#slider-owl").owlCarousel({ 
			navigation : true, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			 autoPlay: false,
			 pagination: true,
			 singleItem:true,		
			 navigationText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">']
			});	
	countdown('#clock');
	tabs();
	smoofScroll();

	// particlesJS Json config http://www.jqueryrain.com/?BwjN6Dnf
particlesJS('particles-js',		
{
	"particles": {
		"number": {
			"value": 100,
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color": {
			"value": "#8DAAB8"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": 0.5,
			"random": false,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 8.8,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 150,
			"color": "#8DAAB8",
			"opacity": 0.4,
			"width": 2
		},
		"move": {
			"enable": true,
			"speed": 4,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": false,
				"mode": "repulse"
			},
			"onclick": {
				"enable": false,
				"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 400,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			},
			"repulse": {
				"distance": 200,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
});

jQuery(window).scroll(function(){
	var scr  = jQuery(this).scrollTop(),
			tabs = jQuery('#tabs'),
			tabsOffset = tabs.offset().top;

	if (scr > tabsOffset & winWidth() > 768) {	
		tabs.addClass('fixed-tabs');			
		}else{
			tabs.removeClass('fixed-tabs');
		};
});

$('.navigation ul li:last a').on('click',function(event){	
	event.preventDefault();
	$('.popup').append('<span class="fade_out">&#9587;</span>').fadeIn('slow');

	$('.fade_out').click(function(){
		$('.popup').fadeOut('slow');
		$(this).detach();
	});
});

});
function winWidth(){
	return jQuery(window).width();
};
 // countdown
var countdown = function(block){
	var time = jQuery(block).data('time');
	jQuery(block).countdown( time , function(event) {
		jQuery(this).html(event.strftime(''
			 +'<div><p> %D </p><span>дней</span></div>'
			 +'<div><p> %H </p><span>часов</span></div>'
			 +'<div><p> %M </p><span>минут</span></div> '
			 +'<div><p> %S </p><span>секунд</span></div> '
		 ));
	});
};

// smoof-scroll
function smoofScroll(){
	var btnPopup = jQuery('.navigation ul li:last-child a'),
	    navigation_links = jQuery(".navigation ul li a, .top-image a").not(btnPopup);


	navigation_links.click( function(event) {
		event.preventDefault();
	   var   blocks = jQuery(this).attr('href'),
	    		 positionBlock = jQuery(blocks).offset();
	    		 jQuery('html,body').animate({scrollTop: positionBlock.top}, 1000);		
			});		
};

function langSwitch(block){
	var pathname = window.location.pathname;
	if(pathname.charAt(3) == '/'){
		var	locString = pathname.toString(),
		    lang = locString.substring(1, 3);
		jQuery(block).text(lang.toUpperCase());
	}
};


function tabs(){	
	var tabsLi   = jQuery('.tabs-link li'),
			tabsLink = tabsLi.find('a'),
			tab      = jQuery('.tabs-wrap .tab'),
	    loc      = window.location.hash,
	    loca     = loc.substr(1),
	    tabsOffset = jQuery('#tabs').offset();

		if(loc){
			jQuery('.tabs-link li.'+ loca +'').addClass('active');
			tab.css('display','none');
			jQuery('.tab#'+ loca +'').css('display','block');
		}else{
			tabsLi.first().addClass('active');
			jQuery('#ip-phone').css('display','block');
		};

		jQuery('.mob-b').on('click', function(){
			// jQuery('.tab').not(jQuery(this).next()).slideUp('slow');
			jQuery(this).toggleClass('open').next().slideToggle('slow');
		});

	tabsLink.on('click', function(event){
		event.preventDefault();      
		var link  = jQuery(this).parent('li'),
				index = link.index();	

		jQuery('html,body').animate({scrollTop: tabsOffset.top}, 1000);	
		tabsLi.removeClass('active');
		link.addClass('active');
		tab.css('display','none');
		tab.eq(index)
		.fadeIn('slow');
		// .find('.descr:first')
		// .addClass('fadeInUp');
	});
};



