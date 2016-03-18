$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
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
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


		//all images loaded
	$(window).on('load', function(){	
			if($().parallax) $('.parallax').parallax();
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
	$('.lang-switch .lang').click(function() {	
		$(this).parent().toggleClass('open');
		$(this).next().slideToggle('fust');
	});

	$('.lang-select a').on('click',function(){
		var selectLeng = $(this).text();
		$('.lang').find('span').text($(this).text());
	});

//tabs
	$('.tabs-link a').on('click', function(event){
		event.preventDefault();        
	  var link  = $(this).parent('li'),
	      index = link.index(),
	    	tab   = $('.tabs-wrap .tab');
	    	$('.tabs-link li').removeClass('active');
      link.addClass('active');
	    tab.css('display','none');
	    tab.eq(index)
	    	.fadeIn('slow')
	    	.find('.descr:first')
	    	.addClass('fadeInUp');

    });

	function tabs(){
	var but = jQuery('.uslugi li'),
		tabsCont = jQuery('.tab_container .tab_item'),
		img	 = jQuery('.img-wrap img');

	but.on('click',function(){
		but.removeClass('activ_ser');
		jQuery(this).addClass('activ_ser');
		tabsCont.css('display','none');
		jQuery('.'+jQuery(this).attr('data-tabs')).fadeIn('fast');

		img.addClass('fadeInRight');

		jQuery('.phase').addClass('fadeInUp');
		
	});
}

// countdown
	$('#clock').countdown('2016/5/17', function(event) {
		$(this).html(event.strftime(''
			 +'<div><p> %D </p><span>дней</span></div>'
			 +'<div><p> %H </p><span>часов</span></div>'
			 +'<div><p> %M </p><span>минут</span></div> '
			 +'<div><p> %S </p><span>секунд</span></div> '
		 ));
	});

	//owl slider
	$("#slider-owl").owlCarousel({ 
			navigation : true, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			 autoPlay: false,
			 pagination: true,
			 singleItem:true,		
			 navigationText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">']
			});
	
	langSwitch('.lang');

});

 

function langSwitch(block){
	var pathname = window.location.pathname;
	if(pathname.charAt(3) == '/'){
		var	locString = pathname.toString(),
		    lang = locString.substring(1, 3);
		$(block).text(lang.toUpperCase());
	}
};



function tabs(link,tab){
	var but = jQuery('.uslugi li'),
		tabsCont = jQuery('.tab_container .tab_item'),
		img	 = jQuery('.img-wrap img');

	link.on('click',function(){
		link.removeClass('activ_ser');
		jQuery(this).addClass('activ_ser');
		tab.css('display','none');
		jQuery('.'+jQuery(this).attr('data-tabs')).fadeIn('fast');

		img.addClass('fadeInRight');

		jQuery('.phase').addClass('fadeInUp');
		
	});
}

