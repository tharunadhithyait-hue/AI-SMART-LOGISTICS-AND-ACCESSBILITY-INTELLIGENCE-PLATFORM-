// Data Store for the 8 Sister States of North East India
const statesData = [
    {
        name: "Arunachal Pradesh",
        capital: "Itanagar",
        tagline: "Land of the Dawn-Lit Mountains",
        badge: "Highland Eco-Trails",
        img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
        giTag: "Idu Mishmi Textiles & Wakro Orange",
        highlights: "Tawang Monastery, Ziro Valley Apatani Homestays, Sela Pass, Namdapha Rainforest.",
        desc: "Arunachal Pradesh is India's easternmost state, offering snow-capped Himalayan peaks, pristine glacial lakes, ancient Buddhist monasteries, and vibrant tribal cultures across 26 major indigenous tribes.",
        bestTime: "October to April",
        airports: "Hollongi Airport (Itanagar), Tezpur (Assam)"
    },
    {
        name: "Assam",
        capital: "Dispur / Guwahati",
        tagline: "Land of the Red River & Blue Hills",
        badge: "UNESCO World Heritage",
        img: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80",
        giTag: "Muga Golden Silk, Joha Rice, Assam Orthodox Tea",
        highlights: "Kaziranga One-Horned Rhinos, Majuli River Island, Kamakhya Temple, Manas Wildlife.",
        desc: "Assam is the gateway to the North East, famous world-over for its golden Muga silk, rolling emerald tea estates along the Brahmaputra, and Kaziranga's endangered single-horned rhinoceroses.",
        bestTime: "November to March",
        airports: "Lokpriya Gopinath Bordoloi Int. Airport (Guwahati)"
    },
    {
        name: "Manipur",
        capital: "Imphal",
        tagline: "Jewel of India",
        badge: "Floating Ecosystem",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        giTag: "Chak-Hao Black Rice, Kachai Lemon, Shaphee Lanphee",
        highlights: "Loktak Lake Floating Phumdis, Keibul Lamjao National Park (Sangai Deer), Kangla Fort.",
        desc: "Manipur boasts the world's only floating national park on Loktak Lake, rich classical Raas Leela dance traditions, traditional martial art (Thang-Ta), and organic black rice cultivation.",
        bestTime: "October to March",
        airports: "Bir Tikendrajit International Airport (Imphal)"
    },
    {
        name: "Meghalaya",
        capital: "Shillong",
        tagline: "Abode of Clouds",
        badge: "Living Root Bridges",
        img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
        giTag: "Lakadong High-Curcumin Turmeric, Khasi Mandarin",
        highlights: "Cherrapunji Double Decker Root Bridge, Dawki Crystal River Kayaking, Mawlynnong village.",
        desc: "Home to the wettest places on earth, Meghalaya features bio-engineered bio-living root bridges grown by Khasi elders over centuries, underground limestone caves, and crystal transparent rivers.",
        bestTime: "September to May",
        airports: "Shillong Airport (Umroi), Guwahati Airport"
    },
    {
        name: "Mizoram",
        capital: "Aizawl",
        tagline: "Land of the Rolling Hills",
        badge: "High Literacy & Bamboo Trails",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        giTag: "Mizo Chilli (Bird's Eye), Pawndum Shawls",
        highlights: "Reiek Peak Trek, Phawngpui Blue Mountain, Tamdil Lake, Cheraw Bamboo Dance.",
        desc: "Mizoram offers cliffside hill cities, dramatic green mountain ridge lines, warm hospitality, and the rhythmic Cheraw bamboo dance during Chapchar Kut celebrations.",
        bestTime: "October to March",
        airports: "Lengpui Airport (Aizawl)"
    },
    {
        name: "Nagaland",
        capital: "Kohima",
        tagline: "Land of Festivals",
        badge: "Hornbill & Tribal Crafts",
        img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
        giTag: "Naga King Chilli (Bhut Jolokia), Chakhesang Shawl",
        highlights: "Hornbill Festival, Dzukou Valley Flower Trek, Khonoma Green Eco-Village.",
        desc: "Nagaland brings together 16 distinct warrior tribes, famous for the annual Hornbill Festival of heritage crafts, folk songs, organic bamboo architecture, and spicy culinary heritage.",
        bestTime: "October to May",
        airports: "Dimapur Airport (Dimapur)"
    },
    {
        name: "Sikkim",
        capital: "Gangtok",
        tagline: "Valley of Peace & 100% Organic State",
        badge: "First 100% Organic State",
        img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
        giTag: "Sikkim Large Cardamom, Temi Organic Black Tea",
        highlights: "Gurudongmar Glacial Lake, Nathula Pass, Yumthang Valley, Rumtek Monastery.",
        desc: "Sikkim is India's premier organic paradise, framed by Mt. Kanchenjunga (3rd highest peak in the world), sacred high-altitude alpine lakes, and Buddhist monastery retreats.",
        bestTime: "March to June, Sept to Dec",
        airports: "Pakyong Airport (Gangtok), Bagdogra Airport"
    },
    {
        name: "Tripura",
        capital: "Agartala",
        tagline: "Queen of Natural Beauty & Palaces",
        badge: "Royal Heritage & Rock Reliefs",
        img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
        giTag: "Tripura Queen Pineapple, Bamboo Mat Crafts",
        highlights: "Unakoti Rock Carvings, Neermahal Water Palace, Ujjayanta Palace, Sepahijala Reserve.",
        desc: "Tripura combines royal Bengali-Tripuri architecture at Neermahal floating palace with ancient 7th-century rock carvings at Unakoti, alongside master bamboo artisan weaving.",
        bestTime: "October to March",
        airports: "Maharaja Bir Bikram Airport (Agartala)"
    }
];

// Marketplace Products Data
const productsData = [
    {
        id: "p1",
        name: "Assam Golden Muga Silk Saree",
        category: "handloom",
        state: "Assam",
        artisan: "Meenakshi Das (Sualkuchi Weavers Guild)",
        price: 18500,
        giTag: "GI Tag Certified #AS-01-MUGA",
        img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
        desc: "Naturally golden silk exclusive to Assam, woven on traditional pit looms. Drapes with unmatched luster that increases with every wash."
    },
    {
        id: "p2",
        name: "Lakadong High-Curcumin Organic Turmeric (500g)",
        category: "organic",
        state: "Meghalaya",
        artisan: "Kong Trinity Jaintia Farmers Co-op",
        price: 650,
        giTag: "GI Tag Certified #ML-04-TURMERIC",
        img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
        desc: "Grown organically in the Jaintia Hills of Meghalaya. Possesses world-record 7.5% to 9% curcumin content for high medicinal potency."
    },
    {
        id: "p3",
        name: "Naga Bhut Jolokia (King Chilli) Organic Pickle",
        category: "food",
        state: "Nagaland",
        artisan: "Ao Women Self Help Group (Kohima)",
        price: 420,
        giTag: "GI Tag Certified #NL-02-CHILLI",
        img: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=600&q=80",
        desc: "Infused with bamboo shoot and smoked garlic. Made from authentic Naga King Chilli rated over 1 Million SHU on Scoville scale."
    },
    {
        id: "p4",
        name: "Handcrafted Tripura Bamboo & Cane Flower Vase",
        category: "craft",
        state: "Tripura",
        artisan: "Subhash Debbarma (Agartala Crafts)",
        price: 1200,
        giTag: "Handicrafts Board Verified",
        img: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80",
        desc: "Finely sliced indigenous Tripura bamboo, treated organically against moisture, hand-woven with smooth rattan finish."
    },
    {
        id: "p5",
        name: "Manipuri Chak-Hao Organic Black Rice (1kg)",
        category: "food",
        state: "Manipur",
        artisan: "Imphal Valley Organic Farmers Federation",
        price: 380,
        giTag: "GI Tag Certified #MN-03-BLACKRICE",
        img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
        desc: "Aromatic purple-black sticky rice packed with anthocyanin antioxidants. Traditional centerpiece for Manipur feasts."
    },
    {
        id: "p6",
        name: "Sikkim Temi Organic First Flush Black Tea",
        category: "organic",
        state: "Sikkim",
        artisan: "Temi Tea Estate Artisanal Processors",
        price: 950,
        giTag: "GI Tag Certified #SK-01-TEMI",
        img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
        desc: "Harvested at 6,000 ft altitude near Mt. Kanchenjunga. Delivers delicate floral notes, bright amber liquoring, and 100% organic purity."
    }
];

// Festivals Data
const festivalsData = [
    {
        name: "Hornbill Festival",
        state: "Nagaland (Kisama Village)",
        date: "Dec 1 - Dec 10, Every Year",
        desc: "The 'Festival of Festivals' showcasing folk dance, indigenous sports, tribal war chants, and rock concerts of 16 Naga tribes."
    },
    {
        name: "Rongali Bihu",
        state: "Assam (Statewide)",
        date: "Mid-April (Spring Festival)",
        desc: "Assam's chief harvest celebration marked by joyful Bihu dance movements, Pepa horn melodies, and traditional festive delicacies."
    },
    {
        name: "Ziro Festival of Music",
        state: "Arunachal Pradesh (Ziro Valley)",
        date: "Late September",
        desc: "India's premier eco-friendly outdoor indie music festival hosted by the hospitable Apatani tribe amidst pine-clad rice fields."
    },
    {
        name: "Wangala 100 Drums Festival",
        state: "Meghalaya (Garo Hills)",
        date: "November",
        desc: "Garo harvest thanksgiving festival where 100 ceremonial drums echo in unison honoring Saljong, the Sun God of fertility."
    }
];

// DOM Load Initializer
document.addEventListener("DOMContentLoaded", () => {
    renderStates(statesData);
    renderProducts(productsData);
    renderFestivals(festivalsData);
});

// Render 8 Sister States
function renderStates(list) {
    const container = document.getElementById("statesGrid");
    if (!container) return;

    container.innerHTML = list.map(s => `
        <div class="state-card" onclick="openStateDetail('${s.name}')">
            <div class="state-img-box">
                <img src="${s.img}" alt="${s.name}" class="state-img" loading="lazy">
                <span class="state-badge">${s.badge}</span>
            </div>
            <div class="state-content">
                <h3 class="state-name">${s.name}</h3>
                <div class="state-capital"><i class="fa-solid fa-city"></i> Capital: ${s.capital}</div>
                <p class="state-highlights">${s.highlights}</p>
                <div class="state-footer">
                    <span class="state-gi-tag"><i class="fa-solid fa-award"></i> ${s.giTag.split(',')[0]}</span>
                    <span class="btn-state-view">Explore <i class="fa-solid fa-arrow-right"></i></span>
                </div>
            </div>
        </div>
    `).join('');
}

// Render Products Grid
function renderProducts(list) {
    const container = document.getElementById("productsGrid");
    if (!container) return;

    container.innerHTML = list.map(p => `
        <div class="product-card">
            <div class="product-img-box">
                <img src="${p.img}" alt="${p.name}" class="product-img" loading="lazy">
                <span class="gi-badge"><i class="fa-solid fa-shield-check"></i> ${p.giTag.split('#')[0]}</span>
            </div>
            <div class="product-content">
                <span class="product-origin"><i class="fa-solid fa-location-dot"></i> ${p.state}</span>
                <h3 class="product-title">${p.name}</h3>
                <div class="product-artisan"><i class="fa-solid fa-user-gear"></i> By ${p.artisan}</div>
                <div class="product-bottom">
                    <span class="product-price">₹${p.price.toLocaleString()}</span>
                    <button class="btn btn-outline" onclick="openProductModal('${p.id}')">
                        <i class="fa-solid fa-eye"></i> Details / Buy
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Render Festivals
function renderFestivals(list) {
    const container = document.getElementById("festivalsGrid");
    if (!container) return;

    container.innerHTML = list.map(f => `
        <div class="fest-card">
            <span class="fest-date-badge"><i class="fa-solid fa-calendar"></i> ${f.date}</span>
            <h3 class="fest-title">${f.name}</h3>
            <div class="fest-state"><i class="fa-solid fa-map-pin"></i> ${f.state}</div>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">${f.desc}</p>
        </div>
    `).join('');
}

// Filter Market Products by Category
function filterMarket(category, btnElement) {
    document.querySelectorAll('#marketCategories .pill').forEach(el => el.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');

    if (category === 'all') {
        renderProducts(productsData);
    } else {
        const filtered = productsData.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

// Search and Filter Handlers
function filterContent() {
    const selectedState = document.getElementById("stateFilter").value;
    if (selectedState === "all") {
        renderStates(statesData);
    } else {
        const filtered = statesData.filter(s => s.name === selectedState);
        renderStates(filtered);
    }
}

function handleSearch() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filteredStates = statesData.filter(s => 
        s.name.toLowerCase().includes(query) || 
        s.highlights.toLowerCase().includes(query) ||
        s.giTag.toLowerCase().includes(query)
    );
    renderStates(filteredStates);
}

function triggerSearch() {
    document.getElementById("states").scrollIntoView({ behavior: "smooth" });
}

// State Modal Detail Handler
function openStateDetail(stateName) {
    const state = statesData.find(s => s.name === stateName);
    if (!state) return;

    const modalBody = document.getElementById("stateModalBody");
    modalBody.innerHTML = `
        <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-bottom: 24px;">
            <div style="flex: 1; min-width: 280px; height: 260px; border-radius: 14px; overflow: hidden;">
                <img src="${state.img}" alt="${state.name}" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <div style="flex: 1.2; min-width: 280px;">
                <span class="state-badge" style="position:static; margin-bottom:8px; display:inline-block;">${state.badge}</span>
                <h2 style="font-size: 2.2rem; color: #fff; margin-bottom: 4px;">${state.name}</h2>
                <div style="color: var(--primary); font-weight: 600; margin-bottom: 14px;">Capital: ${state.capital} | Best Time: ${state.bestTime}</div>
                <p style="color: var(--text-secondary); margin-bottom: 16px;">${state.desc}</p>
                <div style="background: rgba(0,214,143,0.1); border: 1px solid var(--border-color); padding: 12px; border-radius: 10px; font-size: 0.88rem; color: var(--accent-gold);">
                    <i class="fa-solid fa-certificate"></i> <strong>GI Tagged Heritage:</strong> ${state.giTag}
                </div>
            </div>
        </div>

        <h3 style="color: #fff; margin-bottom: 12px;"><i class="fa-solid fa-compass"></i> Eco-Tourism Highlights & Experiences</h3>
        <p style="color: var(--text-secondary); margin-bottom: 20px;">${state.highlights}</p>

        <div style="display: flex; gap: 14px;">
            <button class="btn btn-primary" onclick="launchAudioGuide('${state.name}')">
                <i class="fa-solid fa-volume-high"></i> Listen to Audio Guide
            </button>
            <button class="btn btn-outline" onclick="closeModal('stateModal'); openModal('bookingModal');">
                <i class="fa-solid fa-house"></i> Book Certified Homestay
            </button>
        </div>
    `;

    openModal("stateModal");
}

// Product Detail Modal
function openProductModal(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const modalBody = document.getElementById("productModalBody");
    modalBody.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
            <div style="height: 180px; border-radius: 12px; overflow: hidden; margin-bottom: 16px;">
                <img src="${product.img}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <span class="gi-badge" style="position:static; display:inline-flex; margin-bottom:8px;">${product.giTag}</span>
            <h2 style="color: #fff; font-size: 1.6rem; margin-bottom: 6px;">${product.name}</h2>
            <div style="color: var(--primary); font-size: 0.9rem;"><i class="fa-solid fa-location-dot"></i> Origin: ${product.state}</div>
        </div>

        <p style="color: var(--text-secondary); font-size: 0.92rem; margin-bottom: 16px;">${product.desc}</p>
        
        <div style="background: rgba(255,255,255,0.04); border: 1px solid var(--border-color); padding: 14px; border-radius: 10px; margin-bottom: 20px;">
            <div style="font-size: 0.85rem; color: var(--text-muted);">Direct Artisan Seller:</div>
            <div style="font-weight: 700; color: #fff;"><i class="fa-solid fa-user-check"></i> ${product.artisan}</div>
            <div style="font-size: 0.78rem; color: var(--primary); margin-top: 4px;"><i class="fa-solid fa-check-double"></i> 100% Direct UPI Transfer to Artisan Bank Account</div>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between;">
            <div style="font-size: 1.6rem; font-weight: 800; color: var(--accent-gold);">₹${product.price.toLocaleString()}</div>
            <button class="btn btn-primary" onclick="simulatePurchase('${product.name}')">
                <i class="fa-solid fa-bag-shopping"></i> Order Directly Demo
            </button>
        </div>
    `;

    openModal("productModal");
}

// AI Itinerary Planner Logic
function generateItinerary(e) {
    e.preventDefault();
    const targetState = document.getElementById("planState").value;
    const days = parseInt(document.getElementById("planDays").value);
    const budget = document.getElementById("planBudget").value;
    const interest = document.getElementById("planInterest").value;

    const resultBox = document.getElementById("itineraryResult");
    
    // Generate custom day plans
    let dayPlans = [];
    if (days >= 3) {
        dayPlans.push(`<strong>Day 1:</strong> Arrival & Gateway Orientation in ${targetState.split(' ')[0]}. Check-in to certified Indigenous Eco-Homestay. Welcome traditional dinner.`);
        dayPlans.push(`<strong>Day 2:</strong> Full-day ${interest} trail. Guided walk by local community elder. Direct artisan workshop visit.`);
        dayPlans.push(`<strong>Day 3:</strong> Morning sunrise viewpoint visit & organic culinary breakfast. Local handicraft souvenir shopping. Departure.`);
    }
    if (days >= 5) {
        dayPlans.push(`<strong>Day 4:</strong> High-altitude / River valley trail exploration. Bamboo raft kayaking & bird watching.`);
        dayPlans.push(`<strong>Day 5:</strong> Cultural festival / Folk music session. Farewell organic tea tasting.`);
    }
    if (days >= 7) {
        dayPlans.push(`<strong>Day 6 & 7:</strong> Deep wilderness trek & zero-impact camping. Star-gazing session over Himalayan ridge.`);
    }

    const estCostPerPerson = budget === "Backpacker" ? 2200 * days : budget === "Comfort" ? 4500 * days : 8500 * days;

    resultBox.innerHTML = `
        <div style="width: 100%;">
            <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 12px; margin-bottom: 16px;">
                <div>
                    <span style="font-size: 0.75rem; color: var(--primary); font-weight: 700; text-transform: uppercase;">AI Curated Trail</span>
                    <h3 style="color: #fff; font-size: 1.3rem;">${targetState} (${days} Days)</h3>
                </div>
                <span style="background: rgba(245, 176, 39, 0.2); color: var(--accent-gold); border: 1px solid var(--accent-gold); padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 700;">
                    ${budget} Tier
                </span>
            </div>

            <div style="margin-bottom: 18px;">
                ${dayPlans.map(d => `<div style="background: rgba(255,255,255,0.03); border-left: 3px solid var(--primary); padding: 10px 14px; margin-bottom: 10px; border-radius: 0 8px 8px 0; font-size: 0.88rem; color: var(--text-secondary);">${d}</div>`).join('')}
            </div>

            <div style="background: rgba(0, 214, 143, 0.1); border: 1px solid var(--border-color); padding: 14px; border-radius: 12px; display: flex; align-items: center; justify-content: space-between;">
                <div>
                    <div style="font-size: 0.8rem; color: var(--text-muted);">Est. Eco-Budget / Person</div>
                    <div style="font-size: 1.4rem; font-weight: 800; color: var(--primary);">₹${estCostPerPerson.toLocaleString()}</div>
                </div>
                <button class="btn btn-emerald" onclick="openModal('bookingModal')">Book Homestay</button>
            </div>
        </div>
    `;
}

// Modal Helpers
function openModal(id) {
    document.getElementById(id).classList.add("active");
}
function closeModal(id) {
    document.getElementById(id).classList.remove("active");
}
function closeModalOnOverlay(e, id) {
    if (e.target.id === id) closeModal(id);
}

// Simulated Purchase
function simulatePurchase(productName) {
    closeModal("productModal");
    alert(`🎉 Purchase Demo Successful!\n\nYou ordered: "${productName}"\nA 100% direct payment order has been initiated to the regional artisan co-op. Your Geo-Authenticity Blockchain receipt will be delivered via WhatsApp!`);
}

// Simulated Booking
function handleBookingSubmit(e) {
    e.preventDefault();
    closeModal("bookingModal");
    alert(`🏡 Homestay Booking Confirmed!\n\nYour eco-homestay reservation request has been transmitted directly to the host family. You will receive an SMS confirmation with coordinates and host WhatsApp details.`);
}

// Geo Alert Bar Control
function closeAlert() {
    document.getElementById("geoAlertBar").style.display = "none";
}

// Vernacular Language Switcher
function changeLanguage(langCode) {
    const translations = {
        as: "স্বাগতম! উত্তৰ-পূব ভাৰতৰ ৮ খন ভগ্নী ৰাজ্যৰ ইক'-টুৰিজম আৰু হস্তশিল্প প'ৰ্টেললৈ আপোনাক আদৰণি জনাইছো।",
        mni: "অহাম্বা! ঔতরাঙ অমসুং লাইরিক-লাইশু লাইরাম্বি অৱাং-নোংপোক থংবা ভারতকী স্টেট ৮ গিনী পোর্codeনালদা তরাম্না ওকচরি।",
        bn: "উত্তর-পূর্ব ভারতের ৮টি সিস্টার স্টেট-এর পরিবেশ-বান্ধব পর্যটন ও হস্তশিল্প পোর্টালে আপনাকে স্বাগতম।",
        hi: "उत्तर पूर्व भारत के 8 बहन राज्यों के पर्यावरण-पर्यटन और हस्तशिल्प पोर्टल में आपका स्वागत है।",
        en: "Welcome to the North East India 8 Sister States Eco-Tourism & Cultural Heritage Portal."
    };
    alert(`🌐 Language Switched: ${translations[langCode] || translations['en']}`);
}

// Simulated Audio Guide Player
let audioProgressInterval = null;
function launchAudioGuide(stateName) {
    closeModal("stateModal");
    const bar = document.getElementById("audioBar");
    const title = document.getElementById("audioTitle");
    
    title.innerText = `${stateName} Regional Heritage & Nature Audio Commentary`;
    bar.classList.add("active");

    const playIcon = document.getElementById("audioPlayIcon");
    playIcon.className = "fa-solid fa-pause";
}

function toggleAudio() {
    const playIcon = document.getElementById("audioPlayIcon");
    if (playIcon.className.includes("fa-pause")) {
        playIcon.className = "fa-solid fa-play";
    } else {
        playIcon.className = "fa-solid fa-pause";
    }
}

function stopAudio() {
    document.getElementById("audioBar").classList.remove("active");
}
