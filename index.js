const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".top-links");

if (menuBtn && navMenu) {
  const toggleMenu = (e) => {
    if (e) {
      e.stopPropagation();
    }

    const isOpen = navMenu.classList.toggle("active");
    menuBtn.classList.toggle("active", isOpen);
    menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  };

  menuBtn.addEventListener("click", toggleMenu);

  // Prevent clicks inside the menu from closing it
  navMenu.addEventListener("click", (e) => e.stopPropagation());

  // Click anywhere outside the button/menu closes it
  document.addEventListener("click", (e) => {
    if (!navMenu.classList.contains("active")) return;
    if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      navMenu.classList.remove("active");
      menuBtn.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Close with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      menuBtn.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
}