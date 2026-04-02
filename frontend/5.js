// ================================================================== LATEST NEWS SECTION ===================================================================>

document.addEventListener("DOMContentLoaded", () => {


  const TrendingNews = document.getElementById("TrendingNews");

 fetch("https://ronin-pk-landing-page-clone-production.up.railway.app/api/products/articles/")
  .then(response => {
    if (!response.ok) {
      throw new Error("API error: " + response.status);
    }
    return response.json();
    })
  .then(Trendingarray => { 
  // Preload images
  Trendingarray.forEach(t => new Image().src = t.TrendingImage);

  // Create cards
  Trendingarray.forEach(t => {
    const div = document.createElement("div");
    div.className = "shrink-0 md:w-96 xs:w-60 rounded-2xl bg-white shadow-[6px_4px_20px_rgba(0,0,0,0.25)] overflow-hidden";
    div.innerHTML = `
      <img class="w-full object-cover" src="https://ronin-pk-landing-page-clone-production.up.railway.app/media/${t.TrendingImage}" alt="${t.TrendingTitle}" loading="lazy">
      <div class="p-4 flex flex-col gap-2">
        <p class="font-bold line-clamp-1">${t.TrendingTitle}</p>
        <p class="text-sm text-gray-600 line-clamp-3">${t.TrendingDescription}</p>
        <button class= "mt-2 border-2 border-white rounded-xl text-xs px-4 py-2 font-bold bg-[#F4F4F4] shadow-md hover:bg-gray-200 transition-colors"> Read More &rarr; </button>
      </div>
    `;
    TrendingNews.appendChild(div);
  });
 })  

// const TrendingNews = document.getElementById("TrendingNews");

// Duplicate cards for seamless scroll
const cards = [...TrendingNews.children];
cards.forEach(card => TrendingNews.appendChild(card.cloneNode(true)));

// Drag & auto-slide state
let isDragging = false;
let dragStartX;
let startScrollLeft;
let autoSlideTimer;
let exactScrollTracker = 0; // Tracks precise sub-pixel values

TrendingNews.addEventListener("mousedown", e => {
  isDragging = true;
  TrendingNews.classList.add("cursor-grabbing");
  dragStartX = e.pageX - TrendingNews.offsetLeft;
  startScrollLeft = TrendingNews.scrollLeft;
  cancelAnimationFrame(autoSlideTimer);
});

function endDrag() {
  if (!isDragging) return;
  isDragging = false;
  TrendingNews.classList.remove("cursor-grabbing");
  startAutoSlide();
}

TrendingNews.addEventListener("mouseup", endDrag);
TrendingNews.addEventListener("mouseleave", endDrag);

TrendingNews.addEventListener("mousemove", e => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - TrendingNews.offsetLeft;
  TrendingNews.scrollLeft = startScrollLeft - (x - dragStartX) * 1.5;
});

function autoSlide() {
  // Add exactly to our high-precision tracker, avoiding browser rounding issues
  exactScrollTracker += 0.8; // Adjust speed here (0.5 is smooth)

  const halfWidth = TrendingNews.scrollWidth / 2;

  // Seamless infinite loop check
  if (exactScrollTracker >= halfWidth) {
    exactScrollTracker -= halfWidth;
  }

  // Apply the tracked value to the actual scrollbar
  TrendingNews.scrollLeft = exactScrollTracker;
  
  autoSlideTimer = requestAnimationFrame(autoSlide);
}

function startAutoSlide() {
  cancelAnimationFrame(autoSlideTimer); // Prevent duplicate loops running at the same time
  
  // Sync the tracker with the current scrollbar position (crucial after dragging)
  exactScrollTracker = TrendingNews.scrollLeft; 
  
  autoSlideTimer = requestAnimationFrame(autoSlide);
}

// Start immediately
startAutoSlide();

});