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
  