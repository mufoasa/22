// Multilingual content (same as main script but with menu page specific translations)
const translations = {
  sq: {
    // Navigation
    "nav-home": "Ballina",
    "nav-about": "Rreth Nesh",
    "nav-menu": "Menyja",
    "nav-events": "Eventet",
    "nav-contact": "Kontakt",

    // Menu Hero
    "menu-hero-title": "Menyja Jonë",
    "menu-hero-subtitle": "Zbuloni përzierjen tonë të përsosur të pijeve dhe shijeve",

    // Menu Filters
    "filter-all": "Të Gjitha",
    "filter-hot": "Pije të Ngrohta",
    "filter-cold": "Pije të Ftohta",
    "filter-cocktails": "Cocktails",
    "filter-shisha": "Shisha",
    "filter-ice-cream": "Akullore",

    // CTA
    "cta-title": "Gati për të na vizituar?",
    "cta-subtitle": "Rezervoni tavolinën tuaj ose na kontaktoni për më shumë informacione",
    "whatsapp-btn": "WhatsApp",
    "btn-location": "Na Gjej",

    // Footer
    "footer-rights": "Të gjitha të drejtat e rezervuara.",
  },
  en: {
    // Navigation
    "nav-home": "Home",
    "nav-about": "About Us",
    "nav-menu": "Menu",
    "nav-events": "Events",
    "nav-contact": "Contact",

    // Menu Hero
    "menu-hero-title": "Our Menu",
    "menu-hero-subtitle": "Discover our perfect blend of drinks and flavors",

    // Menu Filters
    "filter-all": "All",
    "filter-hot": "Hot Drinks",
    "filter-cold": "Cold Drinks",
    "filter-cocktails": "Cocktails",
    "filter-shisha": "Shisha",
    "filter-ice-cream": "Ice Cream",

    // CTA
    "cta-title": "Ready to visit us?",
    "cta-subtitle": "Reserve your table or contact us for more information",
    "whatsapp-btn": "WhatsApp",
    "btn-location": "Find Us",

    // Footer
    "footer-rights": "All rights reserved.",
  },
  mk: {
    // Navigation
    "nav-home": "Дома",
    "nav-about": "За Нас",
    "nav-menu": "Мени",
    "nav-events": "Настани",
    "nav-contact": "Контакт",

    // Menu Hero
    "menu-hero-title": "Нашето Мени",
    "menu-hero-subtitle": "Откријте ја нашата совршена комбинација од пијалаци и вкусови",

    // Menu Filters
    "filter-all": "Сите",
    "filter-hot": "Топли Пијалаци",
    "filter-cold": "Ладни Пијалаци",
    "filter-cocktails": "Коктели",
    "filter-shisha": "Наргиле",
    "filter-ice-cream": "Сладолед",

    // CTA
    "cta-title": "Спремни да не посетите?",
    "cta-subtitle": "Резервирајте ја вашата маса или контактирајте не за повеќе информации",
    "whatsapp-btn": "WhatsApp",
    "btn-location": "Најди Не",

    // Footer
    "footer-rights": "Сите права се задржани.",
  },
}

// Menu items data (same as main script)
const menuItems = {
  "hot-drinks": [
    {
      name: { sq: "Espresso", en: "Espresso", mk: "Еспресо" },
      description: {
        sq: "Kafe espresso klasike e koncentruar",
        en: "Classic concentrated espresso coffee",
        mk: "Класично концентрирано еспресо кафе",
      },
      price: "60 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Macchiato", en: "Macchiato", mk: "Макијато" },
      description: {
        sq: "Espresso me një pikë qumësht të shkumëzuar",
        en: "Espresso with a dollop of foamed milk",
        mk: "Еспресо со капка пенливо млеко",
      },
      price: "60 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Macchiato i Madh", en: "Large Macchiato", mk: "Голем Макијато" },
      description: {
        sq: "Macchiato në version të madh",
        en: "Macchiato in large size",
        mk: "Макијато во голема големина",
      },
      price: "100 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Cappuccino i Madh", en: "Large Cappuccino", mk: "Голем Капучино" },
      description: {
        sq: "Cappuccino në version të madh",
        en: "Cappuccino in large size",
        mk: "Капучино во голема големина",
      },
      price: "100 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Cappuccino", en: "Cappuccino", mk: "Капучино" },
      description: {
        sq: "Kafe espresso me qumësht të shkumëzuar",
        en: "Espresso coffee with foamed milk",
        mk: "Еспресо кафе со пенливо млеко",
      },
      price: "60 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Latte Macchiato", en: "Latte Macchiato", mk: "Лате Макијато" },
      description: {
        sq: "Qumësht i nxehtë me espresso dhe shkumë",
        en: "Hot milk with espresso and foam",
        mk: "Топло млеко со еспресо и пена",
      },
      price: "70 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Nescafe", en: "Nescafe", mk: "Нескафе" },
      description: { sq: "Kafe instant klasik", en: "Classic instant coffee", mk: "Класично инстант кафе" },
      price: "90 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Kafe Amerikane", en: "American Coffee", mk: "Американско Кафе" },
      description: {
        sq: "Espresso i holluar me ujë të nxehtë",
        en: "Espresso diluted with hot water",
        mk: "Еспресо разредено со топла вода",
      },
      price: "80 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Çaj", en: "Tea", mk: "Чај" },
      description: {
        sq: "Çaj i nxehtë në variante të ndryshme",
        en: "Hot tea in various varieties",
        mk: "Топол чај во различни варијанти",
      },
      price: "70 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Çokollatë e Nxehtë", en: "Hot Chocolate", mk: "Топла Чоколада" },
      description: {
        sq: "Çokollatë e nxehtë me shkumë",
        en: "Hot chocolate with whipped cream",
        mk: "Топла чоколада со шлаг",
      },
      price: "110 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Nesquik", en: "Nesquik", mk: "Несквик" },
      description: {
        sq: "Pije e nxehtë me çokollatë Nesquik",
        en: "Hot drink with Nesquik chocolate",
        mk: "Топла пијалак со Несквик чоколадо",
      },
      price: "90 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
  ],
  "cold-drinks": [
    {
      name: { sq: "Kafe me Akull", en: "Ice Coffee", mk: "Ладно Кафе" },
      description: { sq: "Kafe e ftohur me akull", en: "Chilled coffee with ice", mk: "Ладено кафе со мраз" },
      price: "80 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Nescafe me Akull", en: "Nescafe Ice", mk: "Нескафе Ладно" },
      description: { sq: "Nescafe i ftohur me akull", en: "Chilled Nescafe with ice", mk: "Ладен Нескафе со мраз" },
      price: "100 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Frappe", en: "Frappe", mk: "Фрапе" },
      description: { sq: "Kafe e shkumëzuar me akull", en: "Foamed coffee with ice", mk: "Пенливо кафе со мраз" },
      price: "110 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Ujë", en: "Water", mk: "Вода" },
      description: { sq: "Ujë i pastër natyral", en: "Pure natural water", mk: "Чиста природна вода" },
      price: "60 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Ujë me Gaz", en: "Sparkling Water", mk: "Газирана Вода" },
      description: { sq: "Ujë mineral me gaz", en: "Mineral water with gas", mk: "Минерална вода со гас" },
      price: "70 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Coca Cola", en: "Coca Cola", mk: "Кока Кола" },
      description: { sq: "Pije gazuese klasike", en: "Classic carbonated drink", mk: "Класична газирана пијалак" },
      price: "90 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Coca Cola Zero", en: "Coca Cola Zero", mk: "Кока Кола Зеро" },
      description: { sq: "Coca Cola pa sheqer", en: "Sugar-free Coca Cola", mk: "Кока Кола без шеќер" },
      price: "90 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Fanta Portokall", en: "Fanta Orange", mk: "Фанта Портокал" },
      description: {
        sq: "Pije gazuese me shije portokalli",
        en: "Carbonated drink with orange flavor",
        mk: "Газирана пијалак со вкус на портокал",
      },
      price: "90 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Schweppes", en: "Schweppes", mk: "Швепс" },
      description: { sq: "Pije gazuese premium", en: "Premium carbonated drink", mk: "Премиум газирана пијалак" },
      price: "90 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Schweppes Tonic", en: "Schweppes Tonic", mk: "Швепс Тоник" },
      description: { sq: "Ujë tonik premium", en: "Premium tonic water", mk: "Премиум тоник вода" },
      price: "90 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Schweppes Mandarin", en: "Schweppes Tangerine", mk: "Швепс Мандарина" },
      description: {
        sq: "Schweppes me shije mandarine",
        en: "Schweppes with tangerine flavor",
        mk: "Швепс со вкус на мандарина",
      },
      price: "90 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Sprite", en: "Sprite", mk: "Спрајт" },
      description: {
        sq: "Pije gazuese me shije limoni",
        en: "Carbonated drink with lemon flavor",
        mk: "Газирана пијалак со вкус на лимон",
      },
      price: "90 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Red Bull", en: "Red Bull", mk: "Ред Бул" },
      description: { sq: "Pije energjike klasike", en: "Classic energy drink", mk: "Класична енергетска пијалак" },
      price: "200 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Red Bull Portokall", en: "Red Bull Orange", mk: "Ред Бул Портокал" },
      description: {
        sq: "Red Bull me shije portokalli",
        en: "Red Bull with orange flavor",
        mk: "Ред Бул со вкус на портокал",
      },
      price: "200 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Red Bull Pjeshkë e Bardhë", en: "Red Bull White Peach", mk: "Ред Бул Бела Праска" },
      description: {
        sq: "Red Bull me shije pjeshke të bardhë",
        en: "Red Bull with white peach flavor",
        mk: "Ред Бул со вкус на бела праска",
      },
      price: "200 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Red Bull i Kuq", en: "Red Bull Red", mk: "Ред Бул Црвен" },
      description: { sq: "Red Bull me shije të kuqe", en: "Red Bull with red flavor", mk: "Ред Бул со црвен вкус" },
      price: "200 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Red Bull pa Sheqer", en: "Red Bull Sugarfree", mk: "Ред Бул без Шеќер" },
      description: { sq: "Red Bull pa sheqer", en: "Sugar-free Red Bull", mk: "Ред Бул без шеќер" },
      price: "200 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Golden Eagle", en: "Golden Eagle", mk: "Голден Игл" },
      description: { sq: "Pije energjike premium", en: "Premium energy drink", mk: "Премиум енергетска пијалак" },
      price: "110 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Leng Molle", en: "Apple Juice", mk: "Сок од Јаболко" },
      description: { sq: "Lëng i freskët molle", en: "Fresh apple juice", mk: "Свеж сок од јаболко" },
      price: "100 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Lëng Pjeshke", en: "Peach Juice", mk: "Сок од Праска" },
      description: { sq: "Lëng i freskët pjeshke", en: "Fresh peach juice", mk: "Свеж сок од праска" },
      price: "100 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Çaj me Akull", en: "Ice Tea", mk: "Ладен Чај" },
      description: { sq: "Çaj i ftohur me akull", en: "Chilled tea with ice", mk: "Ладен чај со мраз" },
      price: "100 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Lëng Luleshtrydhe", en: "Strawberry Juice", mk: "Сок од Јагоди" },
      description: { sq: "Lëng i freskët luleshtrydhe", en: "Fresh strawberry juice", mk: "Свеж сок од јагоди" },
      price: "100 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Lëng Vishnje", en: "Sour Cherry Juice", mk: "Сок од Вишни" },
      description: { sq: "Lëng i freskët vishnje", en: "Fresh sour cherry juice", mk: "Свеж сок од вишни" },
      price: "100 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Lëng Ananas", en: "Pineapple Juice", mk: "Сок од Ананас" },
      description: { sq: "Lëng i freskët ananas", en: "Fresh pineapple juice", mk: "Свеж сок од ананас" },
      price: "100 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
  ],
  cocktails: [
    {
      name: { sq: "Mojito Klasik", en: "Classic Mojito", mk: "Класично Мохито" },
      description: {
        sq: "Rum i bardhë, lime, mentë e freskët dhe soda",
        en: "White rum, lime, fresh mint and soda",
        mk: "Бел рум, лајм, свежа мента и сода",
      },
      price: "350 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Cosmopolitan", en: "Cosmopolitan", mk: "Космополитан" },
      description: {
        sq: "Vodka, likör cranberry, lime dhe triple sec",
        en: "Vodka, cranberry liqueur, lime and triple sec",
        mk: "Водка, ликер од брусница, лајм и трипл сек",
      },
      price: "380 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Long Island", en: "Long Island Iced Tea", mk: "Лонг Ајленд" },
      description: {
        sq: "Përzierje e alkoolit premium me shije të veçantë",
        en: "Premium alcohol blend with special taste",
        mk: "Премиум мешавина алкохол со посебен вкус",
      },
      price: "420 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
  ],
  shisha: [
    {
      name: { sq: "Shisha Frutash", en: "Fruit Shisha", mk: "Овошен Наргиле" },
      description: {
        sq: "Përzierje e shijes së frutave tropikale",
        en: "Tropical fruit flavor blend",
        mk: "Мешавина од тропски овошни вкусови",
      },
      price: "400 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Shisha Mentë", en: "Mint Shisha", mk: "Ментов Наргиле" },
      description: {
        sq: "Shije e freskët mentë për relaksim të plotë",
        en: "Fresh mint flavor for complete relaxation",
        mk: "Свеж ментов вкус за целосна релаксација",
      },
      price: "380 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Shisha Mix", en: "Mixed Shisha", mk: "Мешан Наргиле" },
      description: {
        sq: "Kombinim i shijes së duhur për eksperiencë unike",
        en: "Perfect flavor combination for unique experience",
        mk: "Совршена комбинација вкусови за уникатно искуство",
      },
      price: "450 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
  ],
  "ice-cream": [
    {
      name: { sq: "Akullore Vanilje", en: "Vanilla Ice Cream", mk: "Ванила Сладолед" },
      description: {
        sq: "Akullore klasike vanilje me shije të pasur",
        en: "Classic vanilla ice cream with rich taste",
        mk: "Класичен ванила сладолед со богат вкус",
      },
      price: "180 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Akullore Çokollatë", en: "Chocolate Ice Cream", mk: "Чоколаден Сладолед" },
      description: {
        sq: "Akullore çokollate e bërë me çokollatë premium",
        en: "Chocolate ice cream made with premium chocolate",
        mk: "Чоколаден сладолед направен со премиум чоколадо",
      },
      price: "200 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: { sq: "Akullore Frutash", en: "Fruit Ice Cream", mk: "Овошен Сладолед" },
      description: {
        sq: "Akullore me fruta të freskëta sezonale",
        en: "Ice cream with fresh seasonal fruits",
        mk: "Сладолед со свежо сезонско овошје",
      },
      price: "220 MKD",
      image: "/placeholder.svg?height=200&width=300",
    },
  ],
}

// Current language
let currentLang = "sq"

// DOM elements
const langButtons = document.querySelectorAll(".lang-btn")
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const filterButtons = document.querySelectorAll(".filter-btn")
const menuGrid = document.getElementById("menuGrid")

// Initialize the menu page
document.addEventListener("DOMContentLoaded", () => {
  initializeLanguage()
  initializeMenu()
  initializeAnimations()
  initializeNavigation()
  initializeEventHandlers()
})

// Language functionality
function initializeLanguage() {
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang")
      switchLanguage(lang)
    })
  })
}

function switchLanguage(lang) {
  currentLang = lang

  // Update active language button
  langButtons.forEach((btn) => {
    btn.classList.remove("active")
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active")
    }
  })

  // Update all translatable elements
  const elements = document.querySelectorAll("[data-key]")
  elements.forEach((element) => {
    const key = element.getAttribute("data-key")
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key]
    }
  })

  // Update HTML lang attribute
  document.documentElement.lang = lang

  // Refresh menu with new language
  displayMenuItems("all")
}

// Menu functionality
function initializeMenu() {
  displayMenuItems("all")

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter")

      // Update active filter button
      filterButtons.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")

      // Display filtered items
      displayMenuItems(filter)
    })
  })
}

function displayMenuItems(filter) {
  menuGrid.innerHTML = ""

  let itemsToShow = []

  if (filter === "all") {
    // Show all items
    Object.keys(menuItems).forEach((category) => {
      itemsToShow = itemsToShow.concat(menuItems[category].map((item) => ({ ...item, category })))
    })
  } else {
    // Show specific category
    if (menuItems[filter]) {
      itemsToShow = menuItems[filter].map((item) => ({ ...item, category: filter }))
    }
  }

  itemsToShow.forEach((item, index) => {
    const menuItem = createMenuItemElement(item, index)
    menuGrid.appendChild(menuItem)
  })
}

function createMenuItemElement(item, index) {
  const div = document.createElement("div")
  div.className = "menu-item"
  div.style.animationDelay = `${index * 0.1}s`

  const name = item.name[currentLang] || item.name.sq
  const description = item.description[currentLang] || item.description.sq

  div.innerHTML = `
        <div class="menu-item-image">
            <img src="${item.image}" alt="${name}" loading="lazy">
        </div>
        <div class="menu-item-content">
            <h3 class="menu-item-name">${name}</h3>
            <p class="menu-item-description">${description}</p>
            <div class="menu-item-price">${item.price}</div>
        </div>
    `

  return div
}

// Navigation functionality
function initializeNavigation() {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    hamburger.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      hamburger.classList.remove("active")
    })
  })
}

// Animation functionality
function initializeAnimations() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe all sections
  document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(30px)"
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(section)
  })

  // Navbar background on scroll
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")
    if (window.scrollY > 100) {
      navbar.style.background = "rgba(10, 10, 10, 0.98)"
    } else {
      navbar.style.background = "rgba(10, 10, 10, 0.95)"
    }
  })
}

// Event handlers
function initializeEventHandlers() {
  // WhatsApp button
  document.querySelector(".whatsapp-btn").addEventListener("click", () => {
    window.open("https://wa.me/38970123456", "_blank")
  })
}

// Performance optimization: Lazy loading for images
function initializeLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]')

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src || img.src
          img.classList.remove("lazy")
          imageObserver.unobserve(img)
        }
      })
    })

    images.forEach((img) => imageObserver.observe(img))
  }
}

// Initialize lazy loading
initializeLazyLoading()
