window.addEventListener("DOMContentLoaded", (e) => {
	const navContainer = document.getElementById("navContainer");
	const navParent = document.getElementById("navParent");
	const navLogo = document.querySelector(".navbar-brand img");

	const handleScroll = () => {
		if (!navContainer) return;
		if (window.scrollY === 0) {
			navContainer.classList.remove("navShrink");
			navParent.classList.remove("navParentShrink");
			// navLogo.classList.add("navbar-brand-grow");
			navLogo.classList.remove("navbar-brand-shrink");
		} else {
			navContainer.classList.add("navShrink");
			navParent.classList.add("navParentShrink");
			// navLogo.classList.remove("navbar-brand-grow");
			navLogo.classList.add("navbar-brand-shrink");
		}
	};
	handleScroll();
	document.addEventListener("scroll", handleScroll);
});
