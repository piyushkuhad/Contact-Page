$(document).ready(function(){

	$('.menu-trigger .menu-trigger-inner').click(function(){
		$('body').toggleClass('side-open');
		if($(window).width() < 768) {
			$('.header-container .menu-primary > ul').slideUp();
			$('body').removeClass('mobile-open');
			$('.header-container .menu-primary ul.menu-children-wrapper').slideUp();
			$('.child-trigger').removeClass('child-open');
		}
	});
	
	$('.cm-sidebar-menu span.cm-close').click(function(){
		$('body').removeClass('side-open');
	});	
	
	$('.menu-secondary > ul ul li a').wrapInner('<span></span>');
	
	
	
	$('.header-container .menu-primary > ul').after('<div class="cm-arrow-trigger">Menu</div>');
	
	$('.header-container .menu-primary > ul li.has-child > a').after('<div class="child-trigger"></div>');
	
	$('.menu-primary .cm-arrow-trigger').click(function(){
		$('.header-container .menu-primary > ul').slideToggle();
		$('body').toggleClass('mobile-open');
		$('.header-container .menu-primary ul.menu-children-wrapper').slideUp();
		$('.child-trigger').removeClass('child-open');
		$('body').removeClass('side-open');
		return false;
	});
	
	$('.child-trigger').click(function(){
		$(this).next('ul').slideToggle();
		$(this).toggleClass('child-open');
		$(this).parent('li').siblings().find('.menu-children-wrapper').slideUp();
		$(this).parent('li').siblings().find('.child-trigger').removeClass('child-open');
	});
	
	//LOADER
	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 2000);
	
	
});