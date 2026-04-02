
// =============================================================== NEW ARRIVAL SECTION ====================================================================>

fetch("https://ronin-pk-landing-page-clone-production.up.railway.app/api/products/new_arrival_products/")
  .then(response => response.json())
  .then(products => {

// 2. RENDER THE HTML
// 1. Generate the HTML string ONCE
const productsHTML = products.map(p =>`
  <div class="product-card bg-white rounded-2xl py-2 flex flex-col w-[75vw] gap-2 shadow-black/40 shadow transition-transform duration-300 ease-in-out hover:-translate-y-2 group xs:px-2 xs:gap-2 md:w-[42vw] lg:w-[30vw] lg:py-2 xl:w-[21vw] lg:gap-3">
      <span class="text-sm font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">${p.category}</span>
      <img class="main-product-img transition-transform duration-300 ease-in-out group-hover:scale-110 cursor-pointer xs:w-11/12 sm:w-72 xs:flex xs:self-center xs:h-60 lg:w-64" src="https://ronin-pk-landing-page-clone-production.up.railway.app/media/${p.image_url}" alt="">
      <span class="font-bold text-xl text-left xs:text-lg ">${p.title}</span>
      <span class="font-normal text-xs text-left">${p.description}</span>
      <span class="h-0 border-2 border-gray-500"></span>
      <div class="h-7 flex justify-between">
          <img class="w-20 -my-6" src="/img/rating.png" alt="">
          <div>
            <button class="variant-btn border-2 border-black bg-orange-200 w-4 h-4 rounded-full" data-image="https://ronin-pk-landing-page-clone-production.up.railway.app/media/${p.imgVariant1}"></button>
            <button class="variant-btn border-2 border-black bg-black w-4 h-4 rounded-full" data-image="https://ronin-pk-landing-page-clone-production.up.railway.app/media/${p.imgVariant2}"></button>
        </div>
      </div>
      <div class="flex justify-between">
          <div class="xs:flex xs:flex-col sm:flex-row sm:w-[22vw] sm:justify-between lg:justify-start xl:w-[12vw] lg:gap-1">
              <span class="line-through text-gray-500 sm:self-center md:text-xl lg:text-[16px]">${p.oldPrice}</span>
              <span class="font-semibold xs:text-lg sm:self-center md:text-xl lg:text-[16px]">${p.newPrice}</span>
          </div>
          <button class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-2 rounded-full font-normal tracking-wide text-sm hover:opacity-90 transition -mt-1 xs:h-9 xs:self-center xs:m-0 lg:text-xs lg:w-24">Add To Cart</button>
      </div> 
  </div>


`).join('');




// 2. Select ALL containers with the class ".cards"
const containers = document.querySelectorAll(".cards");

// 3. Loop through EACH container and inject the HTML
containers.forEach(container => {
  container.innerHTML = productsHTML;
});

// 4. Run the image variant script AFTER the HTML is injected
const allCards = document.querySelectorAll(".product-card");

allCards.forEach(card => {
  const mainImg = card.querySelector(".main-product-img");
  const buttons = card.querySelectorAll(".variant-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const newSrc = btn.getAttribute("data-image");
      if(newSrc) {
        mainImg.src = newSrc;
      }
    });
  });
});
})

