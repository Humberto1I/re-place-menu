const CONFIG = { nombre: "Re Place", perfilUrl: "#PERFIL", perfilTexto: "Síguenos" };

// Cada producto: nombre, precio (o variantes), descripción opcional.
const items = (rows) => rows.map(([nombre, precio, descripcion = ""]) => ({ nombre, precio, descripcion }));
const MENU = [
  { id: "hamburguesas", titulo: "Hamburguesas", emoji: "🍔", imagen: "img/hamburguesas.webp", nota: "Todas llevan papas. Sí, todas.", grupos: [{ productos: items([["Clásica",75],["Guacamole",105],["Hawaiana",85],["Beicon Crunch",105],["Texas",85],["Cubana",85],["Boneles",105]]) }], extras: [{ nombre: "Carne extra", precio: 30 }, { nombre: "Ingrediente extra", precio: 15 }] },
  { id: "hot-dogs", titulo: "Hot Dogs", emoji: "🌭", imagen: "img/hot-dogs.webp", nota: "Pan, salchicha y mucha actitud.", grupos: [{ productos: items([["Clásico",40,"Pan, verdura y salchicha"],["Hawaiano",50,"Pan, verdura, salchicha y piña"],["Cubano",50,"Pan, verdura y salchicha"],["Chorizo Español",50],["Texan",50,"Pan, salchicha, aros de cebolla y BBQ"],["Guacamole",75,"Pan, salchicha, guacamole y chistorra"],["Boneles",75,"Pan, salchicha y boneles"]]) }] },
  { id: "tacos", titulo: "Tacos", emoji: "🌮", imagen: "img/tacos.webp", nota: "Orden de 3 piezas, directo de la plancha.", grupos: [{ productos: items([["Chorizo Argentino",90],["Chorizo Español",90],["Chistorra",100],["Combinados",100,"No aplica en arrachera"],["Arrachera",120]]) }] },
  { id: "snacks", titulo: "Snacks", emoji: "🍟", imagen: "img/snacks.webp", nota: "Para compartir… o no.", grupos: [{ productos: [...items([["Papas a la francesa",55],["Salchipulpos",50,"15 pzs"],["Aros de cebolla",70,"10 pzs"],["Papas gajo",70],["Nuggets de pollo",80,"10 pzs"],["Dedos de queso",100,"5 pzs"],["Boneles",100,"250 g"]]), { nombre: "Combinado Snack", precio: 150, descripcion: "Papas gajo, papas a la francesa, 5 nuggets, 5 aros de cebolla y 6 salchipulpos", destacado: true }] }] },
  { id: "alitas", titulo: "Alitas", emoji: "🍗", imagen: "img/alitas.webp", nota: "12 salsas. Tú decides qué tanto pica.", grupos: [{ productos: items([["5 piezas",60],["10 piezas",110],["20 piezas",200]]) }], salsas: ["Crema Habanero","Habanero","Mango Habanero","Tamarindo Habanero","Valentina Hot","Búfalo","BBQ Habanero","Ranch Hot","Parmesano Hot","Pimienta Limón","Parmesano","BBQ"] },
  { id: "nachos", titulo: "Nachos", emoji: "🧀", imagen: "img/nachos.webp", nota: "Crujientes, con queso y sin pena.", grupos: [{ productos: items([["Nachos Especiales",100],["Nachos Clásicos",80],["Guacamole",150]]) }], extrasTitulo: "Dips extra · $15 c/u", extras: ["Aderezo Ranch","Salsa Habanero","Queso de Nachos"].map(nombre => ({ nombre, precio: 15 })) },
  { id: "bebidas", titulo: "Bebidas", emoji: "🥤", imagen: "img/bebidas.webp", nota: "Frías, dulces y sin alcohol.", grupos: [
    { titulo: "Frappés", productos: items([["Moka",50],["Oreo",50],["Gansito",75]]) },
    { titulo: "Sin alcohol", productos: items([["Coca-Cola 1 1/4 L",60],["Coca 1/2",30],["Boing",30],["Refresco",20],["Arizona",30],["Agua mineral",30],["Agua natural",15],["Limonada",[{tamano:"Chica",precio:30},{tamano:"Grande",precio:60}]],["Naranjada",[{tamano:"Chica",precio:30},{tamano:"Grande",precio:60}]],["Ginger Ale",30],["Rusa de refresco",[{tamano:"Chica",precio:30},{tamano:"Grande",precio:60}]]]) }
  ] },
  { id: "cocteleria", titulo: "Coctelería", emoji: "🍹", imagen: "img/cocteleria.webp", nota: "Medio litro o litro completo: tú eliges el tamaño del plan.", adultos: true, grupos: [
    { titulo: "Coctelería", nota: "Medio litro $60 / Litro $110", productos: ["Piña Colada","Moradito","Cantarito","Fresada","Azulito","Pantera Rosa","Tequila Sunrise"].map(nombre => ({ nombre, precio: [{tamano:"Medio litro",precio:60},{tamano:"Litro",precio:110}] })) },
    { titulo: "Mojitos", nota: "Medio $60 / Litro $110", productos: ["Mojito Cubano","Mojito Frutos Rojos","Mojito Piña","Mojito Maracuyá"].map(nombre => ({ nombre, precio: [{tamano:"Medio",precio:60},{tamano:"Litro",precio:110}] })) },
    { titulo: "Litros", productos: items([["Absolut",[{tamano:"Chico",precio:75},{tamano:"Grande",precio:130}],"Piña, uva o mango"],["Etiqueta Roja",[{tamano:"Chico",precio:75},{tamano:"Grande",precio:130}],"Agua mineral"],["Torres X",[{tamano:"Chico",precio:80},{tamano:"Grande",precio:150}],"Coca y agua mineral"]]) },
    { titulo: "Shots", productos: items([["Tequila o Vodka",40]]) }
  ] }
];

document.querySelectorAll("[data-name]").forEach(el => { el.textContent = CONFIG.nombre; });
document.querySelectorAll("[data-profile]").forEach(el => {
  el.setAttribute("href", CONFIG.perfilUrl);
  el.target = "_blank";
  el.rel = "noopener";
});
document.querySelectorAll("[data-profile-text]").forEach(el => { el.textContent = CONFIG.perfilTexto; });
document.title = `${CONFIG.nombre} | Menú`;
document.querySelector('[property="og:title"]').content = document.title;

const normalize = value => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const categories = document.getElementById("categories");
const tabs = document.getElementById("tabs");
function priceHTML(precio) {
  return Array.isArray(precio)
    ? `<div class="variant-prices">${precio.map(v => `<span>${v.tamano} <strong>$${v.precio}</strong></span>`).join("")}</div>`
    : `<span class="price">$${precio}</span>`;
}
// Marcos con tamaño reservado y respaldo visual para fotos no disponibles.
function photoHTML(src, alt, emoji, className) {
 return `<div class="photo-frame ${className}" data-emoji="${emoji}"><img src="${src}" alt="${alt}" width="960" height="720" loading="lazy" decoding="async"></div>`;
}
MENU.forEach((category, index) => {
  const tab = document.createElement("a");
  tab.href = `#${category.id}`;
  tab.textContent = category.titulo;
  tab.dataset.category = category.id;
  tabs.append(tab);
  const section = document.createElement("section");
  section.className = "menu-section";
  section.id = category.id;
  section.setAttribute("aria-labelledby", `${category.id}-title`);
  section.innerHTML = `<header class="section-heading"><div><span class="section-number">${String(index + 1).padStart(2,"0")} /</span><h2 id="${category.id}-title"><span class="brush">${category.titulo}</span>${category.adultos ? '<span class="adult-badge">+18</span>' : ""}</h2><p>${category.nota}</p></div>${photoHTML(category.imagen, `Selección de ${category.titulo.toLowerCase()} de Re Place`, category.emoji, "category-photo")}</header>`;
  category.grupos.forEach(group => {
    const wrapper = document.createElement("div");
    wrapper.className = "menu-group";
    if (group.titulo) wrapper.innerHTML = `<div class="group-heading">${group.titulo === "Mojitos" ? photoHTML("img/mojitos.webp", "Mojitos frescos con hielo y hierbabuena", "🍹", "mojito-photo") : ""}<h3>${group.titulo}</h3>${group.nota ? `<p>${group.nota}</p>` : ""}</div>`;
    const grid = document.createElement("div");
    grid.className = "menu-grid";
    group.productos.forEach((product, i) => {
      const card = document.createElement("article");
      card.className = `menu-card${product.destacado ? " featured" : ""}`;
      card.style.setProperty("--delay", `${(i % 4) * 65}ms`);
      card.dataset.search = normalize(`${category.titulo} ${group.titulo || ""} ${product.nombre} ${product.descripcion || ""} ${(category.salsas || []).join(" ")}`);
      card.innerHTML = `${product.destacado ? '<span class="featured-label">★ PARA COMPARTIR</span>' : ""}<div class="card-top"><h4>${product.nombre}</h4>${!Array.isArray(product.precio) ? priceHTML(product.precio) : ""}</div>${product.descripcion ? `<p>${product.descripcion}</p>` : ""}${Array.isArray(product.precio) ? priceHTML(product.precio) : ""}`;
      grid.append(card);
    });
    wrapper.append(grid);
    section.append(wrapper);
  });
  if (category.extras) {
    const extras = document.createElement("aside");
    extras.className = "extras";
    extras.innerHTML = `<h3>${category.extrasTitulo || "Dale un extra"}</h3><div>${category.extras.map(extra => `<span data-extra-search="${normalize(extra.nombre)}">${extra.nombre} <strong>$${extra.precio}</strong></span>`).join("")}</div>`;
    section.append(extras);
  }
  if (category.salsas) {
    const sauces = document.createElement("aside");
    sauces.className = "sauces";
    sauces.innerHTML = `<h3>12 SALSAS. ¿CUÁL ES LA TUYA? <span aria-hidden="true">🔥</span></h3><div>${category.salsas.map((s,i) => `<span class="sauce sauce-${i % 4}">${s}</span>`).join("")}</div>`;
    section.append(sauces);
  }
  categories.append(section);
});

const sections = [...document.querySelectorAll(".menu-section")];
const cards = [...document.querySelectorAll(".menu-card")];
const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
let revealObserver;
if ("IntersectionObserver" in window) {
  revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); revealObserver.unobserve(entry.target); }
  }), { threshold: 0.08 });
  cards.forEach(card => { card.classList.add("reveal"); revealObserver.observe(card); });
  const sectionObserver = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting && !entry.target.hidden).sort((a,b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (visible.length) activate(visible[0].target.id);
  }, { rootMargin: "-90px 0px -55% 0px", threshold: 0 });
  sections.forEach(section => sectionObserver.observe(section));

  const photoObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("photo-entered");
      photoObserver.unobserve(entry.target);
    }
  }), { threshold: 0.15 });
  sections.forEach(section => photoObserver.observe(section));
}
function activate(id) {
  tabs.querySelectorAll("a").forEach(link => {
    const active = link.dataset.category === id;
    link.classList.toggle("active", active);
    if (active) {
      link.setAttribute("aria-current", "location");
      const left = link.offsetLeft - tabs.clientWidth / 2 + link.offsetWidth / 2;
      tabs.scrollTo({ left, behavior: motion.matches ? "instant" : "smooth" });
    } else link.removeAttribute("aria-current");
  });
}
activate(MENU[0].id);
tabs.addEventListener("click", event => {
  const link = event.target.closest("a");
  if (link) activate(link.dataset.category);
});
document.getElementById("search").addEventListener("input", event => {
  const query = normalize(event.target.value.trim());
  let count = 0;
  sections.forEach(section => {
    const extras = [...section.querySelectorAll("[data-extra-search]")];
    const extraMatch = query && extras.some(el => el.dataset.extraSearch.includes(query));
    section.querySelectorAll(".menu-card").forEach(card => {
      card.hidden = !card.dataset.search.includes(query) && !extraMatch;
      if (!card.hidden) { count++; card.classList.add("visible"); }
    });
    section.querySelectorAll(".menu-group").forEach(group => { group.hidden = !group.querySelector(".menu-card:not([hidden])"); });
    section.hidden = !section.querySelector(".menu-card:not([hidden])");
    tabs.querySelector(`[data-category="${section.id}"]`).hidden = section.hidden;
  });
  document.getElementById("empty-state").hidden = count > 0;
  document.getElementById("search-status").textContent = query ? `${count} opciones para tu antojo` : "";
  const first = sections.find(section => !section.hidden);
  if (first) activate(first.id);
});

let framePending = false;
let mouseX = 0;
let mouseY = 0;
const hero = document.querySelector(".hero");
function updateParallax() {
  framePending = false;
  if (motion.matches) return;
  const scroll = Math.min(window.scrollY, hero.offsetHeight);
  hero.style.setProperty("--px", `${mouseX * 12}px`);
  hero.style.setProperty("--py", `${mouseY * 10 - scroll * 0.08}px`);
}
function queueParallax() { if (!framePending && !motion.matches) { framePending = true; requestAnimationFrame(updateParallax); } }
hero.addEventListener("pointermove", event => {
  if (event.pointerType !== "mouse") return;
  const bounds = hero.getBoundingClientRect();
  mouseX = (event.clientX - bounds.left) / bounds.width - 0.5;
  mouseY = (event.clientY - bounds.top) / bounds.height - 0.5;
  queueParallax();
});
window.addEventListener("scroll", queueParallax, { passive: true });
motion.addEventListener("change", () => {
  hero.style.setProperty("--px", "0px"); hero.style.setProperty("--py", "0px");
});

// Escuchar antes de consultar la caché evita carreras de carga.
document.querySelectorAll(".photo-frame img").forEach(img => {
  const ready = () => {
    const ok = img.naturalWidth > 0;
    img.parentElement.classList.toggle("photo-loaded", ok);
    img.parentElement.classList.toggle("photo-error", !ok);
    if (!ok) {
      img.hidden = true;
      img.parentElement.setAttribute("role", "img");
      img.parentElement.setAttribute("aria-label", img.alt + " (foto no disponible)");
    }
  };
  img.addEventListener("load", ready, { once: true });
  img.addEventListener("error", ready, { once: true });
  if (img.complete) ready();
});
const offlineToast = document.getElementById("offline-toast");
window.addEventListener("offline", () => { offlineToast.hidden = false; });
window.addEventListener("online", () => { offlineToast.hidden = true; });
offlineToast.querySelector("button").addEventListener("click", () => { offlineToast.hidden = true; });
if (navigator.onLine === false) offlineToast.hidden = false;


