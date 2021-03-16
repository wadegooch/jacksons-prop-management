var slideIndex = 1;
var timer;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	clearTimeout(timer);
	var i;
	var slides = document.getElementsByClassName("slides");
	var dots = document.getElementsByClassName("slide-dot");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active-slide", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active-slide";
	timer = setTimeout(cycleSlides, 6000);
}

function cycleSlides() {
	var i;
	var slides = document.getElementsByClassName("slides");
	var dots = document.getElementsByClassName("slide-dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active-slide", "");
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active-slide";
	timer = setTimeout(cycleSlides, 6000);
}