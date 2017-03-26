// idk how to javascript so i wrote out like so

$(document).ready(function() {
	$(".toTop").click(function() {
		$('html, body').animate({
			scrollTop: $("#top").offset().top
		}, 500);
	});
	$(".navServices").click(function() {
		$('html, body').animate({
			scrollTop: $("#services").offset().top
		}, 500);
	});
	$(".navPortfolio").click(function() {
		$('html, body').animate({
			scrollTop: $("#portfolio").offset().top
		}, 500);
	});
	$(".navAbout").click(function() {
		$('html, body').animate({
			scrollTop: $("#about").offset().top
		}, 500);
	});
	$(".navContact").click(function() {
		$('html, body').animate({
			scrollTop: $("#contact").offset().top
		}, 500);
	});
});