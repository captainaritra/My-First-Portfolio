const burgerBtn = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav_menu");

burgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

const toggleBtn = document.querySelector(".theme-toggle");
const iconSpan = toggleBtn.querySelector(".icon");

// Function to update icon based on theme
function updateIcon(theme) {
  iconSpan.textContent = theme === "dark" ? "☀️" : "🌙";
}

// Load saved theme or system preference
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

document.documentElement.setAttribute("data-theme", initialTheme);
updateIcon(initialTheme);

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateIcon(newTheme);
  navMenu.classList.remove("open");
});
