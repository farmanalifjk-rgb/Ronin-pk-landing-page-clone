
// =============================================================== NEW ARRIVAL SECTION ====================================================================>

const products = [
  {
    category: "Software Based Headphones",
    title: "Magnitude Headphones",
    desc: "Mood Tuned Sound | Massive Bass | Soft...",
    img: "/img/new arrival1.webp",
    imgVariant1: "/img/new arrival1.webp",       // Orange button image
    imgVariant2: "/img/new arrival1.1.webp",     // Black button image
    oldPrice: "Rs.8,995",
    newPrice: "Rs.6,595",
    button: "Pre-Order",
  },
  {
    category: "Software Based Headphones",
    title: "Bang Headphones",
    desc: "25ms Ultra-Low Latency | Play Station...",
    img: "/img/new arrival2.webp",
    imgVariant1: "/img/new arrival2.webp",       
    imgVariant2: "/img/new arrival2.2.webp",     
    oldPrice: "Rs.7,995",
    newPrice: "Rs.5,695",
    button: "Pre-Order",
  },
  {
    category: "Software Based Headphones",
    title: "Hurricane Headphones",
    desc: "Dedicated Active Voice Cancellation | Mood...",
    img: "/img/new arrival3.webp", // Changed default to normal webp
    imgVariant1: "/img/new arrival3.3.webp",     
    imgVariant2: "/img/new arrival3.webp",       
    oldPrice: "Rs.9,995",
    newPrice: "Rs.6,995",
    button: "Notify Me",
  },
  {
    category: "Newly Launched",
    title: "Cord Neckband",
    desc: "25ms Ultra-Low Latency | Play Station | laptop...",
    img: "/img/new arrival4.webp", // Changed default
    imgVariant1: "/img/new arrival4.4webp.webp", 
    imgVariant2: "/img/new arrival4.webp",       
    oldPrice: "Rs.11,995",
    newPrice: "Rs.8,995",
    button: "Pre-order",
  },
  {
    category: "Newly Launched",
    title: "Momentum Headphones",
    desc: "Feather light Weight | Immersive Sound",
    img: "/img/new arrival5.webp",
    imgVariant1: "/img/new arrival5.webp",
    imgVariant2: "/img/new arrival5.webp",
    oldPrice: "Rs.6,995",
    newPrice: "Rs.6,995",
    button: "Pre-order",
  },
   {
    category: "Newly Launched",
    title: "Multivolt Charger",
    desc: "PD + QC 65 Watt Max",
    img: "/img/new arrival6.webp",
    imgVariant1: "/img/new arrival6.webp",
    imgVariant2: "/img/new arrival6.2.webp",
    oldPrice: "",
    newPrice: "Rs.3,995",
    button: "Pre-order",
  },
  {
    category: "Newly Launched",
    title: "Reverb Speaker",
    desc: "Portable Speaker | Dynamic LED",
    img: "/img/new arrival7.webp",
    imgVariant1: "/img/new arrival7.webp",
    imgVariant2: "/img/new arrival7.2.webp",
    oldPrice: "Rs.5,995",
    newPrice: "Rs.4,995",
    button: "Pre-order",
  },
  {
    category: "Newly Launched",
    title: "Retro Speaker",
    desc: "Architectural Speaker | Fibre textured built",
    img: "/img/new arrival8.webp",
    imgVariant1: "/img/new arrival8.webp",
    imgVariant2: "/img/new arrival8.2.webp",
    oldPrice: "Rs.6,995",
    newPrice: "Rs.5,995",
    button: "Pre-order",
  },
  {
    category: "Newly Launched",
    title: "Nox Earbuds",
    desc: "Dual Connectivity | ANC & ENC",
    img: "/img/new arrival9.webp",
    imgVariant1: "/img/new arrival9.webp",
    imgVariant2: "/img/new arrival9.2.webp",
    oldPrice: "Rs.6,995",
    newPrice: "Rs.6,295",
    button: "Pre-order",
  },
  {
    category: "SOFTWARE EARBUDS",
    title: "Vesper Earbuds",
    desc: "Dual Connectivity | Gaming | ANC & ENC",
    img: "/img/new arrival10.webp",
    imgVariant1: "/img/new arrival10.webp",
    imgVariant2: "/img/new arrival10.2.webp",
    oldPrice: "Rs.7,595",
    newPrice: "Rs.6,595",
    button: "Pre-order",
  },
  {
    category: "SOFTWARE EARBUDS",
    title: "Deminator | R-7035",
    desc: "45ms Ultra Low Latency Gaming",
    img: "/img/new arrival11.webp",
    imgVariant1: "/img/new arrival11.webp",
    imgVariant2: "/img/new arrival11.2.webp",
    oldPrice: "Rs.7,095",
    newPrice: "Rs.6,995",
    button: "Pre-order",
  },
  {
    category: "Software EARBUDS",
    title: "Vox Earbuds",
    desc: "25ms Ultra-Low Latency | Play Station | laptop...",
    img: "/img/new arrival12.webp",
    imgVariant1: "/img/new arrival12.webp",
    imgVariant2: "/img/new arrival12.2.webp",
    oldPrice: "Rs.11,995",
    newPrice: "Rs.8,995",
    button: "Pre-order",
  },
  {
    category: "SOFTWARE EARBUDS",
    title: "Eclipse Earbuds",
    desc: "Hyper ANC | Ai ENC-(QnX) | Upto 80 Hr",
    img: "/img/new arrival13.png",
    imgVariant1: "/img/new arrival13.webp",
    imgVariant2: "/img/new arrival13.2.webp",
    oldPrice: "Rs.8,995",
    newPrice: "Rs.6,995",
    button: "Pre-order",
  },
  {
    category: "SOFTWARE EARBUDS",
    title: "Mystique Earbuds",
    desc: "Active + Environmental Noise Cancelletion",
    img: "/img/new arrival14.webp",
    imgVariant1: "/img/new arrival14.webp",
    imgVariant2: "/img/new arrival14.2.webp",
    oldPrice: "Rs.5,795",
    newPrice: "Rs.5,695",
    button: "Pre-order",
  },
  {
    category: "Newly Launched",
    title: "Cord Neckband",
    desc: "25ms Ultra-Low Latency | Play Station | laptop...",
    img: "/img/new arrival15.webp",
    imgVariant1: "/img/new arrival15.webp",
    imgVariant2: "/img/new arrival15.2.webp",
    oldPrice: "Rs.11,995",
    newPrice: "Rs.8,995",
    button: "Pre-order",
  },
  {
    category: "LIMITED EDITION EARBUDS BY HR",
    title: "Hasan Raheem's Earbuds",
    desc: "Glaciers Earbuds | Co-tuned & C...",
    img: "/img/new arrival19.webp",
    imgVariant1: "/img/new arrival19.webp",
    imgVariant2: "/img/new arrival19.2.webp",
    oldPrice: "Rs.12,995",
    newPrice: "Rs.8,995",
    button: "Sold Out",
  }
];

// 2. RENDER THE HTML
const container = document.querySelectorAll(".cards");

// 1. Generate the HTML string ONCE
const productsHTML = products.map(p => `
  <div class="product-card bg-white rounded-2xl py-2 flex flex-col w-[75vw] gap-2 shadow-black/40 shadow transition-transform duration-300 ease-in-out hover:-translate-y-2 group xs:px-2 xs:gap-2 md:w-[42vw] lg:w-[30vw] lg:py-2 xl:w-[21vw] lg:gap-3">
      <span class="text-sm font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">${p.category}</span>
      <img class="main-product-img transition-transform duration-300 ease-in-out group-hover:scale-110 cursor-pointer xs:w-11/12 sm:w-72 xs:flex xs:self-center xs:h-60 lg:w-64" src="${p.img}" alt="${p.title}">
      <span class="font-bold text-xl text-left xs:text-lg ">${p.title}</span>
      <span class="font-normal text-xs text-left">${p.desc}</span>
      <span class="h-0 border-2 border-gray-500"></span>
      <div class="h-7 flex justify-between">
          <img class="w-20 -my-6" src="/img/rating.png" alt="">
          <div>
            <button class="variant-btn border-2 border-black bg-orange-200 w-4 h-4 rounded-full" data-image="${p.imgVariant1}"></button>
            <button class="variant-btn border-2 border-black bg-black w-4 h-4 rounded-full" data-image="${p.imgVariant2}"></button>
        </div>
      </div>
      <div class="flex justify-between">
          <div class="xs:flex xs:flex-col sm:flex-row sm:w-[22vw] sm:justify-between lg:justify-start xl:w-[12vw] lg:gap-1">
              <span class="line-through text-gray-500 sm:self-center md:text-xl lg:text-[16px]">${p.oldPrice}</span>
              <span class="font-semibold xs:text-lg sm:self-center md:text-xl lg:text-[16px]">${p.newPrice}</span>
          </div>
          <button class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-2 rounded-full font-normal tracking-wide text-sm hover:opacity-90 transition -mt-1 xs:h-9 xs:self-center xs:m-0 lg:text-xs lg:w-24">${p.button}</button>
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