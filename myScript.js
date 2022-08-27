// JavaScript source code
$(document).ready(function () {
	// Tạo hiệu ứng cho trang Review
	$(".review-link").mouseover(function () {
		$(this).css("text-decoration", "none");
		$(".review-link-title", this).css("color", "#e0a80d");
		$(".review-link-img", this).css("transform", "scale(1.1)");
	});
	$(".review-link").mouseleave(function () {
		$(".review-link-title", this).css("color", "#979899");
		$(".review-link-img", this).css("transform", "scale(1)");
	});

	// Tạo hiệu ứng cho những link ở phần header và footer
	$(".link-yellow").mouseover(function () {
		$(this).css("text-decoration", "none");
		$(".link-yellow-text", this).css("color", "#e0a80d");
	});
	$(".link-yellow").mouseleave(function () {
		$(".link-yellow-text", this).css("color", "#979899");
	});

	// Tạo hiệu ứng cho phần Portfolio
	$(".portfolio-link").mouseover(function () {
		$(".portfolio-link-img", this).css({ "opacity": "0.5", "transform": "scale(1.1)" });
		$(".portfolio-link-content", this).fadeIn();
		$(".portfolio-link-decoline", this).css({ "width": "50px", "transition": "width .65s ease-out" });
	});
	$(".portfolio-link").mouseleave(function () {
		$(".portfolio-link-img", this).css({ "opacity": "1", "transform": "scale(1)" });
		$(".portfolio-link-content", this).fadeOut("fast");
		$(".portfolio-link-decoline", this).css({ "width": "0", "transition": "width .65s ease-out" });
	});

	// Tạo hiệu ứng cho phần Clients
	$(".clients-logo").mouseover(function () {
		$(this).css("opacity", "1");
	});
	$(".clients-logo").mouseleave(function () {
		$(this).css("opacity", "0.6");
	});
});