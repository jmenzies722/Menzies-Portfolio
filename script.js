// Function to hide/show navbar when scrolling
function navbarScrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("navbar").style.display = "none";
    } else {
      document.getElementById("navbar").style.display = "block";
    }
  }
  
  // Function to show/hide "back to top" button when scrolling
  function buttonScrollFunction() {
    let mybutton = document.getElementById("scrollToTop");
  
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // Function to scroll back to the top
  function backToTop() {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
  
  // Get the button and add event listener
  let mybutton = document.getElementById("scrollToTop");
  mybutton.addEventListener('click', backToTop);
  
  // Call both functions when window is scrolled
  window.onscroll = function() {
    navbarScrollFunction();
    buttonScrollFunction();
  };
  
  // Select all links with hashes
const links = document.querySelectorAll(".nav a[href*='#']");

for (const link of links) {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const blockID = link.getAttribute('href');
        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

const targets = document.querySelectorAll('.animated');

window.addEventListener('scroll', () => {
    targets.forEach(target => {
        const visible = elementVisible(target);
        if (visible) {
            target.classList.add('fade-in');
        }
    });
});

function elementVisible(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    return (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
}
// ... Your existing JS code ...

document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.hero-title');
  title.textContent = '';  // Start with an empty title
  title.classList.add('blinking');  // Start with blinking cursor
  
  const intro = 'Welcome Everyone 👋';
  const name = 'DOSE OF JOSH';
  let index = 0;
  let currentText = intro;
  let isBackspacing = false;

  function typeLetter() {
      if (!isBackspacing) {
          if (index < currentText.length) {
              title.textContent += currentText[index];
              index++;
              setTimeout(typeLetter, 170);
          } else if (currentText === intro) {
              setTimeout(() => {
                  isBackspacing = true;
                  typeLetter();
              }, 1000);
          } else {
              title.classList.remove('blinking');  // Stop blinking
              title.classList.add('done-typing');  // Indicate that typing is done
          }
      } else {
          if (title.textContent.length > 0) {
              title.textContent = title.textContent.slice(0, -1);
              setTimeout(typeLetter, 100);
          } else if (currentText === intro) {
              isBackspacing = false;
              currentText = name;
              index = 0;
              typeLetter();
          }
      }
  }

  typeLetter();
});

const description = document.querySelector('.hero-description');

window.addEventListener('scroll', function() {
    if (elementInView(description, 0.6)) {  // 0.6 means 60% visible
        description.style.opacity = "1";
        description.style.transform = "translateY(0)";
    }
});

function elementInView(el, visibilityThreshold = 1) {
    const rect = el.getBoundingClientRect();
    return (rect.top <= (window.innerHeight || document.documentElement.clientHeight) * visibilityThreshold) &&
           ((rect.top + rect.height) >= 0);
}

const spaceButton = document.getElementById('spaceButton');

spaceButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        spaceButton.textContent = "Back to Earth";
    } else {
        spaceButton.textContent = "Go to Space";
    }
});

document.addEventListener("DOMContentLoaded", function() {
  const planetCont = document.querySelector('.planetCont');
  const spotify = document.querySelector('.spotify');
  
  planetCont.classList.add('slide-in');
  spotify.classList.add('fade-in');
});
