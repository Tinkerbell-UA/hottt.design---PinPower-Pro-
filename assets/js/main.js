const katalog = {
  "tractor-tires": [
    {
      title: "Trelleborg TM900 High Power",
      price: "420,00 €",
      description: "Dimenzija 710/70 R42, za visoko vučnu snagu i minimalno zbijanje tla.",
      meta: "Na lageru: 24 kom | Montaža u 24h"
    },
    {
      title: "Mitas AC65",
      price: "315,00 €",
      description: "Dimenzija 600/65 R38, idealna za univerzalne traktore i kombajne.",
      meta: "Na lageru: 32 kom | Besplatna dostava"
    },
    {
      title: "BKT Agrimax RT 657",
      price: "268,00 €",
      description: "Dimenzija 480/70 R30, snažna bočna zaštita za rad na kosim terenima.",
      meta: "Na lageru: 18 kom | Opcija noćne montaže"
    }
  ],
  "industrial-tires": [
    {
      title: "Michelin X Multi Z",
      price: "389,00 €",
      description: "Dimenzija 315/80 R22.5, duga kilometraža za teretne kamione i silose.",
      meta: "Na lageru: 56 kom | Usluga balansiranja"
    },
    {
      title: "Goodyear Wrangler Duratrac",
      price: "249,00 €",
      description: "Dimenzija 265/70 R17, za pick-up vozila i servisne ekipe na terenu.",
      meta: "Na lageru: 40 kom | Ugradnja u servisu"
    },
    {
      title: "Continental HTR2",
      price: "312,00 €",
      description: "Dimenzija 385/65 R22.5, robustna prikolična guma s pojačanim ramenima.",
      meta: "Na lageru: 28 kom | Brza dostava"
    }
  ],
  "engine-oils": [
    {
      title: "Ruralna ProGuard 10W-40",
      price: "32,90 € (20L)",
      description: "Sintetičko ulje za diesel motore s DPF filtrom i SCR sustavom.",
      meta: "Zaliha: 160 kanistara | OEM Claas, Fendt"
    },
    {
      title: "Total Tractagri HDX 15W-40",
      price: "29,50 € (20L)",
      description: "Višenamjensko ulje za traktore s mokrim kočnicama i PTO spojkama.",
      meta: "Zaliha: 240 kanistara | Uzorci analize uključeni"
    },
    {
      title: "Shell Rimula R6 LM 10W-40",
      price: "33,40 € (20L)",
      description: "Za teške kamione i autobuse – stabilna viskoznost pri dugim intervalima.",
      meta: "Zaliha: 190 kanistara | Isporuka isti dan"
    }
  ],
  "hydraulic-oils": [
    {
      title: "Ruralna HydroMax HV 46",
      price: "27,80 € (20L)",
      description: "Visokoviskozno ulje s poboljšanim indeksom viskoznosti za sve sezone.",
      meta: "Zaliha: 210 kanistara | Dostupno i 205L bačve"
    },
    {
      title: "Fuchs Renolin ZAF 68",
      price: "31,60 € (20L)",
      description: "Cink-free hidrauličko ulje s anti-wear aditivima za precizne sustave.",
      meta: "Zaliha: 95 kanistara | Certifikat proizvođača"
    },
    {
      title: "Mobil DTE 25 Ultra",
      price: "29,90 € (20L)",
      description: "Ulje za visokotlačne sustave s produženim vijekom trajanja filtera.",
      meta: "Zaliha: 130 kanistara | Besplatna analiza uzorka"
    }
  ]
};

const recenzije = [
  {
    body:
      "Kad nam je pukla guma na kombajnu usred žetve, Ruralna Mehanizacija je u roku tri sata donijela novu i montirala je na polju.",
    name: "Karla Babić",
    role: "OPG Babić, Virovitica",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80"
  },
  {
    body:
      "Za našu flotu kamiona uvijek imaju Rimulu i X Multi na skladištu. Nema čekanja, a fakturu rješavamo odmah.",
    name: "Željko Novak",
    role: "Agro Novak d.o.o.",
    avatar: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=160&q=80"
  },
  {
    body:
      "Redovito šalju analizu uzoraka ulja i jave kad je vrijeme za zamjenu. Tako nam strojevi rade bez iznenađenja.",
    name: "Lana Horvat",
    role: "Agrocentar Horvat",
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=160&q=80"
  }
];

const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");
const tabButtons = document.querySelectorAll(".tab-btn");
const catalogGrid = document.querySelector(".catalog-grid");
const carousel = document.querySelector(".testimonial-carousel");
const carouselButtons = document.querySelectorAll(".carousel-btn");
const footerYear = document.getElementById("godina");

function renderKatalog(category = "tractor-tires") {
  if (!catalogGrid) return;
  const stavke = katalog[category];
  catalogGrid.innerHTML = stavke
    .map(
      (stavka) => `
      <article class="catalog-item">
        <div class="catalog-item__header">
          <h3 class="catalog-item__title">${stavka.title}</h3>
          <span class="catalog-item__price">${stavka.price}</span>
        </div>
        <p class="catalog-item__body">${stavka.description}</p>
        <p class="catalog-item__meta">${stavka.meta}</p>
        <a class="btn btn--ghost catalog-item__cta" href="tel:+38512345678">Rezerviraj odmah</a>
      </article>
    `
    )
    .join("");
}

function renderRecenzije() {
  if (!carousel) return;
  carousel.innerHTML = recenzije
    .map(
      (item) => `
      <article class="testimonial">
        <p class="testimonial__body">${item.body}</p>
        <div class="testimonial__author">
          <img src="${item.avatar}" alt="${item.name}" loading="lazy" />
          <div>
            <p>${item.name}</p>
            <p class="testimonial__meta">${item.role}</p>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}

function initCarousel() {
  if (!carousel) return;
  let currentIndex = 0;

  const updateCarousel = () => {
    const items = carousel.querySelectorAll(".testimonial");
    items.forEach((item, index) => {
      item.style.display = Math.abs(index - currentIndex) <= 1 ? "block" : "none";
    });
  };

  carouselButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.direction === "next" ? 1 : -1;
      currentIndex = (currentIndex + direction + recenzije.length) % recenzije.length;
      updateCarousel();
    });
  });

  updateCarousel();
}

function initNav() {
  if (!navToggle || !navList) return;
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navList.classList.toggle("is-open");
  });

  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      navList.classList.remove("is-open");
    });
  });
}

function initTabs() {
  if (!tabButtons.length) return;
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => {
        btn.classList.toggle("is-active", btn === button);
        btn.setAttribute("aria-selected", String(btn === button));
      });
      renderKatalog(button.dataset.category);
    });
  });
}

function initScrollLinks() {
  document.querySelectorAll("a[data-scroll]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function initForm() {
  const form = document.querySelector(".cta-form");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const ime = data.get("ime");
    const telefon = data.get("telefon");
    const termin = data.get("termin");
    const paket = data.get("paket");
    const toast = document.createElement("div");
    toast.className = "toast";
    const terminTekst = termin ? ` Termin: <strong>${termin}</strong>.` : " Javit ćemo vam se u najkraćem roku.";
    toast.innerHTML = `Hvala ${ime}! Nazvat ćemo vas na <strong>${telefon}</strong> oko ponude za <strong>${paket}</strong>.${terminTekst}`;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("is-visible"));
    setTimeout(() => {
      toast.classList.remove("is-visible");
      toast.addEventListener("transitionend", () => toast.remove(), { once: true });
    }, 4200);
    form.reset();
  });
}

function setYear() {
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
}

renderKatalog();
renderRecenzije();
initCarousel();
initTabs();
initNav();
initScrollLinks();
initForm();
setYear();
