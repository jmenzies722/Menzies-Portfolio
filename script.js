document.addEventListener("DOMContentLoaded", function() {
  // Check for the dark mode preference in localStorage when the page loads
  if (localStorage.getItem('dark-mode') === 'true') {
      document.body.classList.add('dark-mode');
  } else {
      document.body.classList.remove('dark-mode');
  }

  // ... Your existing code for typing animation ...
  let elements = document.querySelectorAll('.section__text__animated');
  let delay = 0;

  elements.forEach((element) => {
      let text = element.getAttribute('data-text');
      let index = 0;

      setTimeout(function type() {
          element.style.visibility = 'visible';
          if (index < text.length) {
              element.textContent += text.charAt(index);
              index++;
              setTimeout(type, 150);  // typing speed
          } else {
              delay = 2000;  // wait for 2 seconds before starting the next text
          }
      }, delay);

      delay += text.length * 150;  // calculate delay based on the current text length
  });

  // Event listener for hamburger menu
  document.querySelector(".hamburger-icon").addEventListener('click', toggleMenu);

  let isDragging = false;
  let startX;

  document.getElementById('darkModeToggle').addEventListener('mousedown', function(e) {
      if (e.target.classList.contains('circle')) {
          isDragging = true;
          startX = e.clientX;
      }
  });

  document.addEventListener('mousemove', function(e) {
      if (isDragging) {
          let movementX = e.clientX - startX;
          if (movementX > 10) {  // dragged to the right
              setDarkMode(true);
          } else if (movementX < -10) {  // dragged to the left
              setDarkMode(false);
          }
      }
  });

  document.addEventListener('mouseup', function(e) {
      if (isDragging) {
          let movementX = e.clientX - startX;
          if (Math.abs(movementX) < 10) {
              toggleDarkMode();
          }
          isDragging = false;
      }
  });


  function toggleDarkMode() {
      if (document.body.classList.contains('dark-mode')) {
          setDarkMode(false);
      } else {
          setDarkMode(true);
      }
  }

  function setDarkMode(isDark) {
      if (isDark) {
          document.body.classList.add('dark-mode');
          localStorage.setItem('dark-mode', 'true');
      } else {
          document.body.classList.remove('dark-mode');
          localStorage.setItem('dark-mode', 'false');
      }
  }

  function toggleMenu() {
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger-icon");
      menu.classList.toggle("open");
      icon.classList.toggle("open");
  }

  document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.animate__animated', { 
      delay: 300, 
      distance: '50px', 
      origin: 'bottom' 
    });
});
});
