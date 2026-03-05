
// ======================================================================= NAVBAR SCROLL BEHAVIOR ===============================================================>

  window.addEventListener('scroll', function() {
  const navbar = document.getElementById("navbar");
  // Store the original margin classes so we can add/remove them easily
  const marginClasses = ['md:-translate-y-6', 'dl:-translate-y-10', 'xs:-translate-y-3'];
  
    if (window.scrollY >50) {
      // 1. Make it fixed
      navbar.classList.remove('fixed');
      navbar.classList.add('fixed', ...marginClasses); 

    } else {
      // 1. Revert to absolute and put original margins back
      navbar.classList.add('fixed');
      navbar.classList.remove('absolute', ...marginClasses);
      
    }
  });
  
  window.addEventListener('scroll', function() {
  const audio = document.querySelectorAll(".navbarThings");
  // Store the original margin classes so we can add/remove them easily
  // const marginClasses = ['md:mt-10', 'dl:mt-12', 'xs:mt-4'];
  
    if (window.scrollY > 50) {
      // 1. Make it fixed
      audio.forEach((section) => {
        section.classList.remove('absolute');
        section.classList.add('fixed', '-top-9'); // top-4 gives it a nice floating gap when stuck
      });
      
      // 2. Add a slight background blur/transparency for a modern look (optional)
 
      
    } else {
      // 1. Revert to absolute and put original margins back
      audio.forEach((section) => {
        section.classList.add('absolute');
        section.classList.remove('fixed', '-top-9');
      });
      
      // 2. Revert background
    
    }
  });