//@prepros-append jq-start.js
//@prepros-append responsive.js
//@prepros-append script.js
//@prepros-append jq-end.js
$(document).ready(function() {
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE ");
		var isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},Windows: function() {return navigator.userAgent.match(/IEMobile/i);},any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};
	function isIE() {
		ua = navigator.userAgent;
		var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
		return is_ie; 
	}
	if(isIE()){
		$('body').addClass('ie');
	}
	if(isMobile.any()){
		$('body').addClass('touch');
	}
//Adaptive functions
$(window).resize(function(event) {
	adaptive_function();
});
function adaptive_header(w,h) {
		var headerMenu=$('.header-menu');
		var navigationH=$('.navigation-header');
	if(w<767){
		if(!navigationH.hasClass('done')){
			navigationH.addClass('done').appendTo(headerMenu);
		}
	}else{
		if(navigationH.hasClass('done')){
			navigationH.removeClass('done').appendTo($('.header-navigation'));
		}
	}
}
function adaptive_function() {
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
	adaptive_header(w,h);
}
	adaptive_function();
	var isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},Windows: function() {return navigator.userAgent.match(/IEMobile/i);},any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};if(isMobile.any()){}	if(location.hash){		var hsh=location.hash.replace('#','');	if($('.popup-'+hsh).length>0){		popupOpen(hsh);	}else if($('div.'+hsh).length>0){		$('body,html').animate({scrollTop:$('div.'+hsh).offset().top,},500, function(){});	}}$('.wrapper').addClass('loaded');	var act="click";if(isMobile.iOS()){	var act="touchstart";}$('.header-menu__icon').click(function(event) {	$(this).toggleClass('active');	$('.header-menu').toggleClass('active');	if($(this).hasClass('active')){		$('body').data('scroll',$(window).scrollTop());	}		$('body').toggleClass('lock');	if(!$(this).hasClass('active')){		$('body,html').scrollTop(parseInt($('body').data('scroll')));	}});$('.goto').click(function() {		var el=$(this).attr('href').replace('#','');		var offset=0;	$('body,html').animate({scrollTop:$('.'+el).offset().top+offset},500, function() {});	if($('.header-menu').hasClass('active')){		$('.header-menu,.header-menu__icon').removeClass('active');		$('body').removeClass('lock');	}	return false;});function ibg(){	$.each($('.ibg'), function(index, val) {		if($(this).find('img').length>0){			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');		}	});}ibg();function scrolloptions(){		var scs=100;		var mss=50;		var bns=false;	if(isMobile.any()){		scs=10;		mss=1;		bns=true;	}	var opt={		cursorcolor:"#fff",		cursorwidth: "4px",		background: "",		autohidemode:true,		cursoropacitymax: 0.4,		bouncescroll:bns,		cursorborderradius: "0px",		scrollspeed:scs,		mousescrollstep:mss,		directionlockdeadzone:0,		cursorborder: "0px solid #fff",	};	return opt;}function scroll(){	$('.scroll-body').niceScroll('.scroll-list',scrolloptions());}if(navigator.appVersion.indexOf("Mac")!=-1){}else{	if($('.scroll-body').length>0){scroll();}}$('.filter__item').click(function(event) {	var i = $(this).data('filter');	if (i=='all') {		$('.news__column').show();	} else {		$('.news__column').hide();		$('.news__column.f_'+i).show();	}	$('.filter__item').removeClass('active');	$(this).addClass('active');		return false;});
});
