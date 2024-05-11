window.addEventListener("DOMContentLoaded", (e) => {
	const toggleSwitch = document.getElementById("toggleSwitch");
	toggleSwitch.addEventListener("click", () => toggleDarkMode());
});

const toggleDarkMode = () => {
	const titleText = document.querySelector(".titleText");
	const sectionTitle = document.querySelectorAll(".sectionTitle");
	const copyText = document.querySelectorAll(".copyText");
	const serviceCards = document.querySelectorAll("#services ul > li");
	const blogCards = document.querySelectorAll("#blog ul > li");
	const archiveCards = document.querySelectorAll("#archive ul > li");
	const priceCards = document.querySelectorAll("#pricing ul > li");
	const contactFormContainer = document.querySelector("#contactFormContainer");
	const overlay = document.querySelector(".overlay");
	const footer = document.querySelector("#footer");
	const scrollUpButton = document.querySelector("#scrollUpButton");
	const blogListItems = document.querySelectorAll("article section ul > li");

	document.body.classList.toggle("darkMode");
	if (titleText) titleText.classList.toggle("darkMode");
	if (overlay) overlay.classList.toggle("darkMode");
	if (contactFormContainer) contactFormContainer.classList.toggle("darkMode");
	if (footer) footer.classList.toggle("darkMode");
	if (scrollUpButton) scrollUpButton.classList.toggle("darkMode");
	if (sectionTitle)
		sectionTitle.forEach((element) => element.classList.toggle("darkMode"));
	if (copyText)
		copyText.forEach((element) => element.classList.toggle("darkMode"));
	if (serviceCards)
		serviceCards.forEach((element) => element.classList.toggle("darkMode"));
	if (blogCards)
		blogCards.forEach((element) => element.classList.toggle("darkMode"));
	if (archiveCards)
		archiveCards.forEach((element) => element.classList.toggle("darkMode"));
	if (priceCards)
		priceCards.forEach((element) => element.classList.toggle("darkMode"));
	if (blogListItems)
		blogListItems.forEach((element) => element.classList.toggle("darkMode"));
};
