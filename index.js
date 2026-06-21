const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".top-links");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", () => {
	navMenu.classList.toggle("active");
	overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
	navMenu.classList.remove("active");
	overlay.classList.remove("show");
});
