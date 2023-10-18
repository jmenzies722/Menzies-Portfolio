document.addEventListener("DOMContentLoaded", function () {

  // Initialize dark mode from localStorage
  initializeDarkMode();

  // Initialize the typing animation
  initTypingAnimation();

  // Attach event listeners
  attachEventListeners();

  function initializeDarkMode() {
    if (localStorage.getItem("dark-mode") === "true") {
      activateDarkMode(true);
    } else {
      activateDarkMode(false);
    }
  }

  function initTypingAnimation() {
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
  }

  function attachEventListeners() {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    hamburgerIcon.addEventListener("click", toggleMenu);

    const profilePic = document.getElementById('darkModeToggle');
    profilePic.addEventListener('click', function() {
      let isDark = !document.body.classList.contains('dark-mode');
      activateDarkMode(isDark);
    });
  }

  function activateDarkMode(isDark) {
    const icons = document.querySelectorAll('#socials-container .icon');

    if (isDark) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("dark-mode", "true");
      icons.forEach(icon => icon.style.color = '#551a8b'); // purple for dark mode
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("dark-mode", "false");
      icons.forEach(icon => icon.style.color = 'black'); // black for light mode
    }
  }

  function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const blurOverlay = document.getElementById('blur-overlay');

    menuLinks.classList.toggle('open');
    hamburgerIcon.classList.toggle('open');
    blurOverlay.classList.toggle('active');
  }

  function closeMenu() {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const blurOverlay = document.getElementById('blur-overlay');
  
    // Remove the classes
    menuLinks.classList.remove('open');
    hamburgerIcon.classList.remove('open');
    blurOverlay.classList.remove('active');
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Apply ScrollReveal to sections and other major containers
    ScrollReveal().reveal('section', { 
        distance: '20px', 
        origin: 'bottom', 
        opacity: 0, 
        duration: 600, 
        reset: true 
    });

    // If you want more specific animations for inner elements, you can target them as well
    ScrollReveal().reveal('.section__text', { 
        distance: '10px', 
        origin: 'right', 
        delay: 300,
        duration: 600, 
        reset: true 
    });
    
    // Add more reveal animations for other elements as required
});



    // New event listeners
    const menuLinksItems = document.querySelectorAll('.menu-links a');
    menuLinksItems.forEach(link => link.addEventListener('click', closeMenu));
  
    const blurOverlay = document.getElementById('blur-overlay');
    blurOverlay.addEventListener('click', closeMenu);
});
