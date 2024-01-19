/** @format */

document.addEventListener("DOMContentLoaded", function () {
	var icon = document.getElementById("toggleDark");

	// Function to update the icon and image classes
	function updateTheme() {
		if (document.body.classList.contains("light-theme")) {
			icon.src = "images/moon.svg";
			icon.classList.replace("invert-color-dark", "invert-color-light");
			footerImages.forEach(function (img) {
				img.classList.replace(
					"invert-color-light",
					"invert-color-dark"
				);
			});
		} else {
			icon.src = "images/sun.svg";
			icon.classList.replace("invert-color-light", "invert-color-dark");
			footerImages.forEach(function (img) {
				img.classList.replace(
					"invert-color-dark",
					"invert-color-light"
				);
			});
		}
	}

	icon.onclick = function () {
		// Toggling the theme on the body
		document.body.classList.toggle("light-theme");
		document.body.style.transition = "all 0.5s";

		// Update theme and store the preference
		updateTheme();
		localStorage.setItem(
			"theme",
			document.body.classList.contains("light-theme") ? "light" : "dark"
		);
	};

	// Getting all the images inside the footer-links div
	var footerImages = document.querySelectorAll("#footer-links img");

	// Initialize theme from stored preference
	var storedTheme = localStorage.getItem("theme") || "dark"; // Default to dark mode
	if (storedTheme === "light") {
		document.body.classList.add("light-theme");
	} else {
		document.body.classList.remove("light-theme");
	}
	updateTheme();
});
