// =============================================================== NAVBAR BUTTONS HOVER SECTION ==========================================================>

// ==========================================
// 1. MAP CATEGORIES TO HTML CONTAINERS
// ==========================================
// This tells the script which container ID belongs to which category from your Django backend
const categoryContainerMap = {
  "Earbuds": "itemsPerOption1",
  "Handsfree": "itemsPerOption2",
  "Neckbands": "itemsPerOption3",
  "Speakers": "itemsPerOption4",
  "Headphones": "itemsPerOption5",
  "Men": "itemsPerOption6",                 // Smart Watches -> Men
  "Women": "itemsPerOption7",               // Smart Watches -> Women
  "Cables": "itemsPerOption8",              // Charging Devices -> Cables
  "Power Bank": "itemsPerOption9",
  "Mobile Chargers": "itemsPerOption10",
  "Accessory Cables": "itemsPerOption11",   // Accessories -> Cables
  "Smart Watch Charging Cables": "itemsPerOption12",
  "Live Tracker": "itemsPerOption13",
  "Smart Watch Straps": "itemsPerOption14"
};

// ==========================================
// 2. RENDER HTML CARDS DYNAMICALLY
// ==========================================
function renderCards(dataArray, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = dataArray.map(item => {
    // We use item.img OR item.image_url, and item.name OR item.title 
    // to match whatever your Django API returns
    const imageUrl = item.img || item.image_url;
    const itemName = item.name || item.title;

    return `
      <div class="h-fit ${item.peding1} group cursor-pointer">
        <div class="relative rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg ${item.width1} ${item.height1}">
          <img class="absolute ${item.width2} ${item.top1} ${item.left1} transition-transform duration-300 ease-in-out group-hover:-translate-y-2" src="${imageUrl}" alt="${itemName}">
          <p class="absolute ${item.left2} ${item.top2} font-inter font-semibold text-xs text-center">${itemName}</p>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================
// 3. FETCH DATA FROM DJANGO AND ORGANIZE
// ==========================================
async function fetchAndOrganizeNavbarData() {
  try {
    // Fetch data from your Django URL
    const response = await fetch('https://ronin-pk-landing-page-clone-production.up.railway.app/api/products/navbardata/'); // Replace 'url' with your actual endpoint (e.g., '/api/navbar-items/')
    const data = await response.json();

    // Organize data by category if the API returns a flat list
    let groupedData = {};
    if (Array.isArray(data)) {
      data.forEach(item => {
        // Assume API returns category name as 'category' or 'category_name'
        const cat = item.category || item.category_name; 
        if (!groupedData[cat]) groupedData[cat] = [];
        groupedData[cat].push(item);
      });
    } else {
      // If API already returns grouped data like: { "Earbuds": [...], "Handsfree": [...] }
      groupedData = data;
    }

    // Render cards into their respective containers based on the map
    for (const [categoryName, containerId] of Object.entries(categoryContainerMap)) {
      if (groupedData[categoryName]) {
        renderCards(groupedData[categoryName], containerId);
      }
    }

  } catch (error) {
    console.error("Failed to fetch navbar data:", error);
  }
}

// Execute the fetch function on page load
fetchAndOrganizeNavbarData();


// ==========================================
// 4. MAIN MENU DROP-DOWNS (Show/Hide Parent Sections)
// ==========================================
function setupMegaMenu(triggerId, sectionId) {
  const trigger = document.getElementById(triggerId);
  const section = document.getElementById(sectionId);
  if (!trigger || !section) return;

  let timeout;

  const show = () => {
    clearTimeout(timeout);
    section.classList.remove("opacity-0", "pointer-events-none", "translate-y-0");
    section.classList.add("opacity-100", "translate-y-2");
  };

  const hide = () => {
    timeout = setTimeout(() => {
      section.classList.add("opacity-0", "pointer-events-none", "translate-y-0");
      section.classList.remove("opacity-100", "translate-y-2");
    }, 200); // delay time
  };

  trigger.addEventListener("mouseenter", show);
  trigger.addEventListener("mouseleave", hide);
  section.addEventListener("mouseenter", show);
  section.addEventListener("mouseleave", hide);
}

// Setup the main dropdowns
setupMegaMenu("Audio", "AudioSection");
setupMegaMenu("SmartWatches", "WatchesSection");
setupMegaMenu("ChargingDevices", "ChargingSection");
setupMegaMenu("Accessories", "AccessoriesSection");


// ==========================================
// 5. SUB-MENU TABS HOVER LOGIC
// ==========================================
function setupMenuTabs(tabPairs) {
  let activeTimeout;

  tabPairs.forEach(({ triggerId, targetId }) => {
    const trigger = document.getElementById(triggerId);
    const target = document.getElementById(targetId);
    if (!trigger || !target) return;

    trigger.addEventListener("mouseenter", () => {
      clearTimeout(activeTimeout);

      // Hide all other sub-menus in this group instantly
      tabPairs.forEach(pair => {
        if (pair.targetId !== targetId) {
          const otherTarget = document.getElementById(pair.targetId);
          if (otherTarget) {
            otherTarget.classList.add("pointer-events-none", "max-h-0", "opacity-0");
            otherTarget.classList.remove("opacity-100", "h-full");
          }
        }
      });

      // Show the targeted sub-menu with a slight delay
      activeTimeout = setTimeout(() => {
        target.classList.remove("pointer-events-none", "max-h-0", "opacity-0");
        target.classList.add("opacity-100", "h-full");
      }, 80);
    });
  });
}

// Group 1: Audio Sub-menus
setupMenuTabs([
  { triggerId: "Earbuds", targetId: "itemsPerOption1" },
  { triggerId: "Handsfree", targetId: "itemsPerOption2" },
  { triggerId: "Neckbands", targetId: "itemsPerOption3" },
  { triggerId: "Speakers", targetId: "itemsPerOption4" },
  { triggerId: "Headphones", targetId: "itemsPerOption5" }
]);

// Group 2: Watches Sub-menus
setupMenuTabs([
  { triggerId: "Men", targetId: "itemsPerOption6" },
  { triggerId: "Women", targetId: "itemsPerOption7" }
]);

// Group 3: Charging Sub-menus
setupMenuTabs([
  { triggerId: "Cables", targetId: "itemsPerOption8" },
  { triggerId: "PowerBank", targetId: "itemsPerOption9" },
  { triggerId: "MobileCharges", targetId: "itemsPerOption10" }
]);

// Group 4: Accessories Sub-menus
setupMenuTabs([
  { triggerId: "Cable", targetId: "itemsPerOption11" },
  { triggerId: "SmartChargingCables", targetId: "itemsPerOption12" },
  { triggerId: "LiveTracker", targetId: "itemsPerOption13" },
  { triggerId: "SmartWatchStraps", targetId: "itemsPerOption14" }
]);