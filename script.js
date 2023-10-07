document.addEventListener("DOMContentLoaded", function() {
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
  // Event listener for hamburger menu
  document.querySelector(".hamburger-icon").addEventListener('click', toggleMenu);
});

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
      // You can add more sophisticated logic here to move the circle
      // while dragging, but for simplicity:
      let movementX = e.clientX - startX;
      if (movementX > 10) {  // dragged to the right
          document.body.classList.add('dark-mode');
      } else if (movementX < -10) {  // dragged to the left
          document.body.classList.remove('dark-mode');
      }
  }
});

document.addEventListener('mouseup', function() {
  if (isDragging) {
      // If it's a simple click without much dragging, toggle the mode
      let movementX = event.clientX - startX;
      if (Math.abs(movementX) < 10) {
          if (document.body.classList.contains('dark-mode')) {
              document.body.classList.remove('dark-mode');
          } else {
              document.body.classList.add('dark-mode');
          }
      }
      isDragging = false;
  }
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
});

document.querySelector('spline-viewer').addEventListener('mousedown', function(e) {
  e.preventDefault();
}, { passive: false });

document.querySelector('spline-viewer').addEventListener('touchstart', function(e) {
  e.preventDefault();
}, { passive: false });
