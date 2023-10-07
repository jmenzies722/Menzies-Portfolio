document.addEventListener("DOMContentLoaded", function() {
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
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.getElementById('darkModeToggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');

  document.getElementById('darkModeToggle').addEventListener('click', function() {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
    } else {
        document.body.classList.add('dark-mode');
    }
});

});
