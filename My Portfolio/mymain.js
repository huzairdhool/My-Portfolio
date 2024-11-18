function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburgericon i");

    if (menu && icon) {
        menu.classList.toggle("open"); // Toggle menu visibility

        // Toggle between hamburger and cross icons
        if (menu.classList.contains("open")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    } else {
        console.error("Menu or Hamburger Icon not found!");
    }
}



