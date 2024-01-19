/** @format */

var icon = document.getElementById("toggleDark");

icon.onclick = function () {
	// Toggling the theme on the body
	document.body.classList.toggle("light-theme");
	document.body.transition = "all 0.5s";

	// Toggling the icon itself
	if (document.body.classList.contains("light-theme")) {
        icon.src = "images/moon.svg";
        icon.classList.replace("invert-color-dark","invert-color-light");
	} else {
        icon.src = "images/sun.svg";
        icon.classList.replace("invert-color-light","invert-color-dark");
	}

	// Getting all the images inside the footer-links div
	var footerImages = document.querySelectorAll("#footer-links img");

	// Looping through each image and toggling the class
	footerImages.forEach(function (img) {
		if (document.body.classList.contains("light-theme")) {
			img.classList.replace("invert-color-light", "invert-color-dark");
		} else {
			img.classList.replace("invert-color-dark", "invert-color-light");
		}
	});
};
