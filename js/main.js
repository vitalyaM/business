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
	var isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},Windows: function() {return navigator.userAgent.match(/IEMobile/i);},any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};
});