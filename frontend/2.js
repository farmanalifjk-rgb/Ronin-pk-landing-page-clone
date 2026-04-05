// ==========================================
// 1. MAP CATEGORIES TO HTML CONTAINERS
// ==========================================
const categoryContainerMap = {
  "Earbuds": "itemsPerOption1",
  "Handsfree": "itemsPerOption2",
  "Neckbands": "itemsPerOption3",
  "Speakers": "itemsPerOption4",
  "Headphones": "itemsPerOption5",
  "Men": "itemsPerOption6",                 
  "Women": "itemsPerOption7",               
  "Cables": "itemsPerOption8",              
  "Power Banks": "itemsPerOption9",
  "Mobile Chargers": "itemsPerOption10",
  "Accessory Cables": "itemsPerOption11",   
  "Smart Watch Charging Cables": "itemsPerOption12",
  "Live Tracker": "itemsPerOption13",
  "Smart Watch Straps": "itemsPerOption14"
};

// ==========================================
// 2. RENDER HTML CARDS DYNAMICALLY
// ==========================================
function renderCards(dataArray, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.warn(`❌ Container with id "${containerId}" not found!`);
    return;
  }

  if (!dataArray || dataArray.length === 0) {
    console.warn(`⚠️ No data to render for container "${containerId}"`);
    return;
  }

  // Clear previous content
  container.innerHTML = '';

  // Render each card
  dataArray.forEach((item, index) => {
    const imageUrl = item.img || item.image_url || item.image || '/static/img/placeholder.webp';
    const itemName = item.name || item.title || item.product_name || 'Product';
    
    // Use provided values or defaults
    const peding = item.peding1 || 'pt-16';
    const width = item.width1 || 'w-36';
    const height = item.height1 || 'h-24';
    const width2 = item.width2 || 'w-24';
    const top = item.top1 || '-top-14';
    const left = item.left1 || 'left-7';
    const left2 = item.left2 || 'left-7';
    const top2 = item.top2 || 'top-12';

    const cardHTML = `
      <div class="h-fit ${peding} group cursor-pointer transition-all duration-300 hover:scale-105">
        <div class="relative rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg hover:shadow-xl hover:bg-white/30 transition-all duration-300 ${width} ${height}">
          <img 
            class="absolute ${width2} ${top} ${left} transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:scale-110" 
            src="${imageUrl}" 
            alt="${itemName}"
            loading="lazy"
            onload="console.log('✅ Image loaded: ${itemName}')"
            onerror="this.src='/static/img/placeholder.webp'; console.log('❌ Image failed: ${itemName}')"
          >
          <p class="absolute ${left2} ${top2} font-inter font-semibold text-xs text-center text-gray-800 group-hover:text-gray-900 transition-colors duration-300 px-2">
            ${itemName}
          </p>
        </div>
      </div>
    `;

    const cardDiv = document.createElement('div');
    cardDiv.innerHTML = cardHTML;
    container.appendChild(cardDiv.firstElementChild);
  });

  console.log(`✅ Rendered ${dataArray.length} cards in container "${containerId}"`);
}

// ==========================================
// 3. FETCH DATA FROM DJANGO AND ORGANIZE
// ==========================================
async function fetchAndOrganizeNavbarData() {
  try {
    console.log("📡 Fetching navbar data from API...");
    
    const response = await fetch('https://ronin-pk-landing-page-clone-production.up.railway.app/api/products/navbardata/');
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const rawData = await response.json();
    console.log("📦 Raw API Response:", rawData);

    let groupedData = {};

    // Handle if data is an array
    if (Array.isArray(rawData)) {
      console.log(`📊 Processing ${rawData.length} items from array...`);
      
      rawData.forEach(item => {
        // Try different field names for category - IMPORTANT: Match your API response
        const category = item.category 
          || item.category_name 
          || item.categoryName
          || item.type 
          || 'Uncategorized';
        
        if (!groupedData[category]) {
          groupedData[category] = [];
        }
        groupedData[category].push(item);
      });
    } 
    // Handle if data is already grouped by category
    else if (typeof rawData === 'object') {
      console.log("📊 Data is already grouped by category");
      groupedData = rawData;
    }

    console.log("🗂️ Grouped Data Structure:", groupedData);
    console.log("📋 Available Categories:", Object.keys(groupedData));

    // Count total items
    let totalItems = 0;
    for (let cat of Object.values(groupedData)) {
      if (Array.isArray(cat)) totalItems += cat.length;
    }
    console.log(`📈 Total items to render: ${totalItems}`);

    // Render cards into their respective containers based on the map
    let renderedCount = 0;
    for (const [categoryName, containerId] of Object.entries(categoryContainerMap)) {
      if (groupedData[categoryName]) {
        console.log(`🎨 "${categoryName}" → "${containerId}" (${groupedData[categoryName].length} items)`);
        renderCards(groupedData[categoryName], containerId);
        renderedCount++;
      } else {
        console.warn(`⚠️ Category "${categoryName}" not found in API response`);
      }
    }

    console.log(`✅ Successfully rendered ${renderedCount} categories`);

  } catch (error) {
    console.error("❌ Failed to fetch navbar data:", error);
    console.error("Error details:", error.message);
  }
}

// ==========================================
// 4. MAIN MENU DROP-DOWNS (Show/Hide Parent Sections)
// ==========================================
function setupMegaMenu(triggerId, sectionId) {
  const trigger = document.getElementById(triggerId);
  const section = document.getElementById(sectionId);
  
  if (!trigger || !section) {
    console.warn(`⚠️ Menu setup failed: trigger="${triggerId}" or section="${sectionId}"`);
    return;
  }

  let timeout;

  const show = () => {
    clearTimeout(timeout);
    section.classList.remove("hidden", "opacity-0", "pointer-events-none");
    section.classList.add("opacity-100");
  };

  const hide = () => {
    timeout = setTimeout(() => {
      section.classList.add("hidden", "opacity-0", "pointer-events-none");
      section.classList.remove("opacity-100");
    }, 200);
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

console.log("✅ Mega menus initialized");

// ==========================================
// 5. SUB-MENU TABS HOVER LOGIC
// ==========================================
function setupMenuTabs(tabPairs) {
  let activeTimeout;

  tabPairs.forEach(({ triggerId, targetId }) => {
    const trigger = document.getElementById(triggerId);
    const target = document.getElementById(targetId);
    
    if (!trigger || !target) {
      console.warn(`⚠️ Tab setup failed: trigger="${triggerId}" or target="${targetId}"`);
      return;
    }

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

console.log("✅ All menu tabs initialized");

// ==========================================
// 6. INITIALIZE WHEN DOM IS READY
// ==========================================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', fetchAndOrganizeNavbarData);
} else {
  // DOM is already ready
  fetchAndOrganizeNavbarData();
}

console.log("✅ Navbar initialization script loaded");