// ======================================================= HERO BACKGROUND IMAGE SECTION ================================================================>

let desktopImages = [];
let mobileImages = [];

// Fetch images FIRST, then initialize slider
fetch("https://ronin-pk-landing-page-clone-production.up.railway.app/api/products/bannerImages/")
  .then(res => res.json())
  .then(data => {
    desktopImages = data.desktopImages;   // ✅ FIX: removed const
    mobileImages = data.mobileImages;

    console.log(desktopImages, mobileImages);

    initSlider(); // ✅ start only after data is ready
  });

function initSlider() {

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

    if (!images.length) return; // ✅ safety fix

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

    if (isAnimating || !images.length) return;

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

    if (isAnimating || !images.length) return;

    index = (index + 1) % images.length;

    showImage();

    resetAutoSlide();
  }

  function prev() {

    if (isAnimating || !images.length) return;

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
}


// ================================================================== SLIDING IMAGES SECTION ================================================================>

const slider = document.getElementById("slidingimages");

(() => {
  let isDown = false;
  let startX;
  let scrollLeft;
  let autoSlide;

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

    slider.style.scrollBehavior = "auto";
    slider.scrollLeft = scrollLeft - walk;
  });

  function startAutoSlide() {
    stopAutoSlide();

    autoSlide = setInterval(() => {
      if (slider.children.length === 0) return;

      const first = slider.children[0];
      const gap = parseFloat(window.getComputedStyle(slider).gap) || 0;
      const slideWidth = first.offsetWidth + gap;

      slider.style.scrollBehavior = "smooth";
      slider.scrollLeft += slideWidth;

      setTimeout(() => {
        slider.style.scrollBehavior = "auto";
        slider.appendChild(first);
        slider.scrollLeft -= slideWidth;
      }, 600);

    }, 2500);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  startAutoSlide();
})();


// ==================================================================== NAVBAR CURSOR ===============================================================>

const dot = document.getElementById('cursor-dot');
const circle = document.getElementById('cursor-circle');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let circleX = mouseX;
let circleY = mouseY;

let dotX = mouseX;
let dotY = mouseY;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  circleX += (mouseX - circleX) * 0.15;
  circleY += (mouseY - circleY) * 0.15;

  dotX += (circleX - dotX) * 0.2;
  dotY += (circleY - dotY) * 0.2;

  dot.style.transform = `translate(${dotX - 6}px, ${dotY - 6}px)`;
  circle.style.transform = `translate(${circleX - 20}px, ${circleY - 20}px)`;

  requestAnimationFrame(animate);
}

animate();