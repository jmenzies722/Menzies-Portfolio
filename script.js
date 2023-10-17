document.addEventListener("DOMContentLoaded", function () {

  // Check for the dark mode preference in localStorage when the page loads
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  // Code for typing animation
  let elements = document.querySelectorAll(".section__text__animated");
  let delay = 0;

  elements.forEach((element) => {
    let text = element.getAttribute("data-text");
    let index = 0;

    setTimeout(function type() {
      element.style.visibility = "visible";
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, 150); // typing speed
      } else {
        delay = 2000; // wait for 2 seconds before starting the next text
      }
    }, delay);

    delay += text.length * 150; // calculate delay based on the current text length
  });

  // Event listener for hamburger menu
  document.querySelector(".hamburger-icon").addEventListener("click", toggleMenu);

  // Toggle dark mode when profile picture is clicked
  const profilePic = document.getElementById('darkModeToggle');
  profilePic.addEventListener('click', toggleDarkMode);

  function toggleDarkMode() {
    let isDark = !document.body.classList.contains('dark-mode');
    setDarkMode(isDark);
  }

  function setDarkMode(isDark) {
    if (isDark) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("dark-mode", "true");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("dark-mode", "false");
    }
  }

  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function setDarkMode(isDark) {
    const icons = document.querySelectorAll('#socials-container .icon');

    if (isDark) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "true");

        // Set icon colors to purple for dark mode
        icons.forEach(icon => {
            icon.style.color = '#551a8b';
        });
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "false");

        // Set icon colors to black for light mode
        icons.forEach(icon => {
            icon.style.color = 'black';
        });
    }
}
});
