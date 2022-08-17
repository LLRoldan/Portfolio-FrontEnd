// Enable hidden nav bar
{
    const navo = document.querySelector(".navo");
    let lastScrollY = window.scrollY;
  
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        navo.classList.add("nav--hidden");
      } else {
        navo.classList.remove("nav--hidden");
      }
  
      lastScrollY = window.scrollY;
    });
  }