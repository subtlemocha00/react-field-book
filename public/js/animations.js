document.addEventListener("DOMContentLoaded", () => {
	const observerA = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("fade-in-element");
					entry.target.style.animationName = "fadeIn";
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.35 }
	);

	document.querySelectorAll("#services ul li").forEach((li) => {
		observerA.observe(li);
	});
	const observerB = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry, index) => {
				if (entry.isIntersecting) {
					const li = entry.target;
					const delay = entry.target.dataset.index * 0.25; // 0.2s delay between each li, based on reverse index order

					li.style.animationDelay = `${delay}s`;
					li.style.animationDuration = "1s"; // Duration of each slide animation
					li.style.animationName = "slideInFromLeft"; // Apply our keyframe animation
					li.classList.add("slide-in");

					observerB.unobserve(li); // Stop observing the li after it animates
				}
			});
		},
		{
			rootMargin: "0px",
			threshold: 0.1, // Adjust if you want the animation to start earlier or later
		}
	);

	// Reverse the list of li elements and set a data-index attribute for delay calculation
	const lis = Array.from(document.querySelectorAll("#blog ul li")).reverse();
	lis.forEach((li, index) => {
		li.dataset.index = index;
		observerB.observe(li);
	});
});
