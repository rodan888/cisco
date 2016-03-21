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
		var th = jQuery(this);
		jQuery.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
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
		
	

		// smoof-scroll
	var navigation_links = jQuery("nav a, .top-image a");
	navigation_links.click( function(event) {
		event.preventDefault();
		jQuery.scrollTo(
			jQuery(this).attr("href"),
			{
				duration: 600,
				offset: { 'left':0, 'top':0.0*jQuery(window).height() }
			}
		);
	});		

	// jQuery('section').waypoint({
	// 	handler: function(event, direction) {
	// 		var active_section = jQuery(this);			
	// 		if (direction === "up") active_section = active_section.prev();
	// 		var active_link = jQuery('nav a[href="#' + active_section.attr("id") + '"]');
	// 		navigation_links.removeClass("active_nav");
	// 		active_link.addClass("active_nav");
	// 	},
	// 	offset: '5%'
	// });


	//lang-switch
	jQuery('.lang-switch .lang').click(function() {	
		jQuery(this).parent().toggleClass('open');
		jQuery(this).next().slideToggle('fust');
	});

	jQuery('.lang-select a').on('click',function(){
		var selectLeng = jQuery(this).text();
		jQuery('.lang').find('span').text(jQuery(this).text());
	});

	
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
	countdown('#clock');

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
	
	langSwitch('.lang');

	tabs();

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

});

 

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
			tabsLink = tabsLi.find('a');
	tabsLi.first().addClass('active');

	tabsLink.on('click', function(event){
		event.preventDefault();        
		var link  = jQuery(this).parent('li'),
				index = link.index(),
				tab   = jQuery('.tabs-wrap .tab');

		tabsLi.removeClass('active');
		link.addClass('active');
		tab.css('display','none');
		tab.eq(index)
		.fadeIn('slow');
		// .find('.descr:first')
		// .addClass('fadeInUp');
	});
};

