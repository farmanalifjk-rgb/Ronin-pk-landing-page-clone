
// ======================================================= HERO BACKGROUND IMAGE SECTION ================================================================>

let desktopImages = [];
let mobileImages = [];
  
fetch("https://ronin-pk-landing-page-clone-production.up.railway.app/api/products/bannerImages/")
  .then(res => res.json())
  .then(data => {
    const desktopImages = data.desktopImages;
    const mobileImages = data.mobileImages;

    console.log(desktopImages, mobileImages);
  });


document.addEventListener("DOMContentLoaded", () => {

  const layer1 = document.getElementById("sliderLayer1");
  const layer2 = document.getElementById("sliderLayer2");
  const prevBtn = document.getElementById("prevButton");
  const nextBtn = document.getElementById("nextButton");

  const sliderContainer = layer1.parentElement;

  /* ---------- STATE ---------- */

  let images = [];
  let index = 0;
  let autoSlide = null;
  let activeLayer = 1;
  let isAnimating = false;
  let currentMode = null;

  /* ---------- FUNCTIONS ---------- */

  function setImages(isMobile) {

    const mode = isMobile ? "mobile" : "desktop";

    if (mode === currentMode) return;

    currentMode = mode;

    images = isMobile ? mobileImages : desktopImages;
    index = 0;

    if (activeLayer === 1) {
      layer1.src = images[0];
      layer1.classList.remove("opacity-0");
      layer2.classList.add("opacity-0");
    } else {
      layer2.src = images[0];
      layer2.classList.remove("opacity-0");
      layer1.classList.add("opacity-0");
    }

    resetAutoSlide();
  }

  function showImage() {

    if (isAnimating) return;

    isAnimating = true;

    const nextUrl = images[index];

    const tempImg = new Image();
    tempImg.src = nextUrl;

    tempImg.onload = () => {

      if (activeLayer === 1) {

        layer2.src = nextUrl;
        layer2.classList.remove("opacity-0");
        layer1.classList.add("opacity-0");
        activeLayer = 2;

      } else {

        layer1.src = nextUrl;
        layer1.classList.remove("opacity-0");
        layer2.classList.add("opacity-0");
        activeLayer = 1;

      }

      setTimeout(() => {
        isAnimating = false;
      }, 1000);
    };
  }

  function next() {

    if (isAnimating) return;

    index = (index + 1) % images.length;

    showImage();

    resetAutoSlide();
  }

  function prev() {

    if (isAnimating) return;

    index = (index - 1 + images.length) % images.length;

    showImage();

    resetAutoSlide();
  }

  function startAutoSlide() {

    clearInterval(autoSlide);

    autoSlide = setInterval(next, 4500);
  }

  function resetAutoSlide() {

    clearInterval(autoSlide);

    autoSlide = setInterval(next, 4500);
  }

  function stopAutoSlide() {

    clearInterval(autoSlide);
  }

  /* ---------- INIT ---------- */

  setImages(window.innerWidth <= 748);

  startAutoSlide();

  window.addEventListener("resize", () => {

    setImages(window.innerWidth <= 748);

  });

  if (prevBtn) prevBtn.addEventListener("click", prev);

  if (nextBtn) nextBtn.addEventListener("click", next);

  [sliderContainer, prevBtn, nextBtn].forEach(el => {

    if (!el) return;

    el.addEventListener("mouseenter", stopAutoSlide);

    el.addEventListener("mouseleave", startAutoSlide);

  });

});



// ================================================================== SLIDING IMAGES SECTION ================================================================>

const slider = document.getElementById("slidingimages");

(() => {
  let isDown = false;
  let startX;
  let scrollLeft;
  let autoSlide;

  // ---------- DRAG SCROLL ----------
  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("cursor-grabbing");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    stopAutoSlide();
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("cursor-grabbing");
    startAutoSlide();
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("cursor-grabbing");
    startAutoSlide();
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    
    // Ensure smooth behavior is off while dragging to prevent lag
    slider.style.scrollBehavior = "auto";
    slider.scrollLeft = scrollLeft - walk;
  });

  // ---------- AUTO SLIDE (STEP BY STEP, INFINITE) ----------
  function startAutoSlide() {
    stopAutoSlide();

    autoSlide = setInterval(() => {
      if (slider.children.length === 0) return;

      const first = slider.children[0];
      
      // CRITICAL FIX: Calculate the width of the slide PLUS the Tailwind gap
      const gap = parseFloat(window.getComputedStyle(slider).gap) || 0;
      const slideWidth = first.offsetWidth + gap;

      // Ensure smooth behavior is ON for the automated slide step
      slider.style.scrollBehavior = "smooth";
      slider.scrollLeft += slideWidth;

      // Recycle the element after the smooth scroll finishes
      setTimeout(() => {
        // Turn OFF smooth scrolling to snap elements instantly behind the scenes
        slider.style.scrollBehavior = "auto";

        // Move the first element to the end of the line
        slider.appendChild(first);

        // Instantly offset the scroll position back by the exact width we just appended
        slider.scrollLeft -= slideWidth;

      }, 600); // 600ms is standard to allow native smooth scrolling to finish

    }, 2500); // Trigger a slide every 2.5 seconds
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  // Start the slider initially
  startAutoSlide();
})();





// =================================================================== SLIDING NEWSCHANNELS SECTION ========================================================>

const ChannelSlider = document.getElementById("slidingChannels");

(() => {
  let isDown = false;
  let startX;
  let scrollLeft;
  let autoSlide;
  let isAnimating = false;
  let scrollAnimationId;

  // Helper to get the total width of a slide including the gap
  function getFullSlideWidth() {
    if (ChannelSlider.children.length === 0) return 0;
    const first = ChannelSlider.children[0];
    const gap = parseFloat(window.getComputedStyle(ChannelSlider).gap) || 0;
    return first.offsetWidth + gap;
  }

  // ---------- DRAG SCROLL ----------
  ChannelSlider.addEventListener("mousedown", (e) => {
    isDown = true;
    ChannelSlider.classList.add("cursor-grabbing");
    startX = e.pageX - ChannelSlider.offsetLeft;
    scrollLeft = ChannelSlider.scrollLeft;
    stopAutoSlideSmooth();
    cancelAnimationFrame(scrollAnimationId);
  });

  ChannelSlider.addEventListener("mouseup", endDrag);
  ChannelSlider.addEventListener("mouseleave", endDrag);

  function endDrag() {
    if (!isDown) return;
    isDown = false;
    ChannelSlider.classList.remove("cursor-grabbing");
    startAutoSlide();
  }

  ChannelSlider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - ChannelSlider.offsetLeft;
    const walk = (x - startX) * 1.5; // Lowered sensitivity slightly for smoother dragging
    ChannelSlider.scrollLeft = scrollLeft - walk;
  });

  // ---------- AUTO SLIDE ----------
  function startAutoSlide() {
    stopAutoSlideSmooth();
    autoSlide = setInterval(() => {
      if (!isAnimating && !isDown) performSlide();
    }, 2500);
  }

  // ---------- SMOOTH STOP ----------
  function stopAutoSlideSmooth() {
    if (!autoSlide) return;
    clearInterval(autoSlide);
    autoSlide = null;

    if (isAnimating) {
      cancelAnimationFrame(scrollAnimationId);
      isAnimating = false;
    }
  }

  // ---------- PERFORM SLIDE ----------
  function performSlide() {
    if (isAnimating || isDown || ChannelSlider.children.length === 0) return;
    isAnimating = true;

    const first = ChannelSlider.children[0];
    const slideWidth = getFullSlideWidth();
    const startScroll = ChannelSlider.scrollLeft;
    const duration = 600;
    let startTime = null;

    function animateSlide(currentTime) {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);

      ChannelSlider.scrollLeft = startScroll + (slideWidth * easeProgress);

      if (progress < 1) {
        scrollAnimationId = requestAnimationFrame(animateSlide);
      } else {
        // Animation finished, instantly recycle the element
        ChannelSlider.appendChild(first);
        // Offset the scroll position so it doesn't jump
        ChannelSlider.scrollLeft -= slideWidth;
        isAnimating = false;
      }
    }

    scrollAnimationId = requestAnimationFrame(animateSlide);
  }

  // ---------- EASING ----------
  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  // ---------- INITIALIZE ----------
  setTimeout(() => startAutoSlide(), 1000);

  ChannelSlider.addEventListener("mouseenter", stopAutoSlideSmooth);
  ChannelSlider.addEventListener("mouseleave", () => {
    if (!isDown) startAutoSlide();
  });
})();


// ==================================================================== NAVBAR SCROLL BEHAVIOR ===============================================================>

  const dot = document.getElementById('cursor-dot');
  const circle = document.getElementById('cursor-circle');
  
  // Real mouse position
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  
  // Circle position
  let circleX = mouseX;
  let circleY = mouseY;
  
  // Dot position
  let dotX = mouseX;
  let dotY = mouseY;

  // 1. Update actual mouse position instantly
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // 2. The super smooth animation loop
  function animate() {
    // Circle follows the actual mouse (0.15 is the speed/stiffness)
    circleX += (mouseX - circleX) * 0.15;
    circleY += (mouseY - circleY) * 0.15;

    // Dot follows the CIRCLE (not the mouse). 
    // A slightly higher number (0.2) makes it catch up nicely but still trail.
    dotX += (circleX - dotX) * 0.2;
    dotY += (circleY - dotY) * 0.2;

    // Apply positions
    // Subtract 6 to center the w-3/h-3 (12px) dot
    dot.style.transform = `translate(${dotX - 6}px, ${dotY - 6}px)`;
    
    // Subtract 20 to center the w-10/h-10 (40px) circle
    circle.style.transform = `translate(${circleX - 20}px, ${circleY - 20}px)`;

    // Loop continuously for maximum smoothness
    requestAnimationFrame(animate);
  }

  // Start the engine
  animate();



  