const ROOT = document.body.dataset.root || "";
const discord = "https://discord.gg/pSgQZWjNen";
const discordBetatest = "https://discord.gg/PkDVKWqe5S";
const twitter = "https://x.com/Multiverso_St";
const mail =
  "mailto:multiversalcontac@gmail.com?subject=Contacto%20desde%20Multiverso%20Studios";

const header = `
<header class="site-header">
  <a class="brand" href="${ROOT}index.html" aria-label="Ir al inicio"><img src="${ROOT}imagenes/Logo.png" alt=""><b>Multiverso<br>Studios</b></a>
  <button class="menu" aria-label="Abrir menú" aria-expanded="false"><i></i><i></i></button>
  <nav>
    <a href="${ROOT}acerca.html">Acerca de</a>
    <a href="${ROOT}minecraft.html">Minecraft</a>
    <a href="${ROOT}esports.html">Vyzen</a>
    <a href="${ROOT}colaboraciones.html">Colaboraciones</a>
    <a href="${ROOT}tienda.html">Tienda</a>
    <a href="${ROOT}contacto.html">Contacto</a>
  </nav>
  <div class="header-actions"><a class="download" href="${ROOT}launcher.html">↓ Descargar cliente</a><a class="social" href="${discord}" target="_blank" rel="noopener" aria-label="Discord">◉</a><a class="social" href="${twitter}" target="_blank" rel="noopener" aria-label="X">𝕏</a></div>
</header>`;
const footer = `
<footer>
  <a class="brand" href="${ROOT}index.html"><img src="${ROOT}imagenes/Logo.png" alt=""><b>Multiverso<br>Studios</b></a>
  <div class="footer-columns">
    <div>
      <b>ESTUDIO</b>
      <a href="${ROOT}acerca.html">Acerca de</a>
      <a href="${ROOT}minecraft.html">Minecraft</a>
      <a href="${ROOT}colaboraciones.html">Colaboraciones</a>
      <a href="${ROOT}contacto.html">Contacto</a>
    </div>
    <div>
      <b>COMUNIDAD</b>
      <a href="${discord}" target="_blank" rel="noopener">Discord</a>
      <a href="${discordBetatest}" target="_blank" rel="noopener">Discord Betatest</a>
      <a href="${twitter}" target="_blank" rel="noopener">X / Twitter</a>
    </div>
    <div>
      <b>LEGAL</b>
      <a href="${ROOT}privacidad.html">Privacidad</a>
      <a href="${ROOT}terminos.html">Términos y condiciones</a>
    </div>
  </div>
  <small>© 2026 Multiverso Studios</small>
</footer>`;
document.querySelector("#header").innerHTML = header;
document.querySelector("#footer").innerHTML = footer;

const menu = document.querySelector(".menu"),
  nav = document.querySelector("nav");
menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", open);
});
const observer = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    }),
  { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const projects = {
  talent: {
    title: "Discord Talent",
    meta: "Junio 2023 · 20 participantes",
    text: "Discord Talent fue el primer evento con el nombre de Multiverso Studios minutos después de crear el nombre del estudio. Tuvo lugar en Junio 2023 con 20 participantes.",
  },
  ksmp1: {
    title: "KSMP",
    meta: "Julio 2023 · 20 participantes",
    text: "La 1er edición de KSMP fue una serie inspirada en TortillaLand y QSMP. Tuvo lugar en Julio 2023 con una duración de 20 días y 20 participantes.",
  },
  dedsafio: {
    title: "Dedsafío Extremo",
    meta: "2024 · 17 participantes",
    text: "Dedsafio Extremo fue una mini serie inspirada en Dedsafio y Minecraft Extremo. Tuvo lugar en 2024 con 17 participantes.",
  },
  multiversal1: {
    title: "Squid Games",
    meta: "2021 · 5 participantes",
    text: "La primera edición de la saga fue una experiencia de tres días inspirada en juegos de supervivencia y eliminación dentro de Minecraft.",
  },
  multiversal2: {
    title: "Squid Craft 2",
    meta: "Agosto 2023 · 17 participantes",
    text: "La segunda edición fue la primera colaboración con Darkness Animation y tuvo una duración de tres días.",
  },
  multiversal3: {
    title: "Squid MC Games 3",
    meta: "Noviembre 2023 · 25 participantes",
    text: "La tercera edición continuó desarrollando la saga con nuevas pruebas y una duración de cuatro días.",
  },
  multiversal4: {
    title: "Squid MC Games 4",
    meta: "2024 · 25 participantes",
    text: "La cuarta edición de la saga tuvo una duración de cinco días y reunió nuevamente a la comunidad en diferentes juegos de eliminación.",
  },
  multiversal5: {
    title: "Multiversal Games 5",
    meta: "Octubre 2025 · 33 participantes",
    text: "Una competencia de varios días creada junto a estudios y colaboradores invitados. Esta quinta edición renovó la organización, las pruebas y la identidad visual de la saga.",
  },
  extremo3: {
    title: "Extremo 3: Recreación",
    meta: "Julio 2026 · Supervivencia",
    text: "Una reinterpretación comunitaria del formato de supervivencia extrema. El evento reunió jugadores durante cuatro días y sirvió para probar nuevas dinámicas de producción.",
  },
  santiago: {
    title: "Extremo by SantiagoMC",
    meta: "Septiembre 2026 · Colaboración",
    text: "Evento realizado junto a SantiagoMC para su comunidad. Durante siete días los participantes avanzaron en un mundo con retos, recursos limitados y peligro constante.",
  },
  ksmp2: {
    title: "KSMP 2",
    meta: "2024 · Serie de supervivencia",
    text: "Segunda temporada de una serie comunitaria de supervivencia. El proyecto se centró en la convivencia, las historias espontáneas y la evolución del servidor.",
  },
  terror: {
    title: "Viernes Terrorífico",
    meta: "Agosto 2026 · Evento original",
    text: "Mini evento original creado para Reorline y su comunidad, con una atmósfera de misterio, retos temáticos y una experiencia compacta.",
  },
  simonDice: {
    title: "Simon Dice",
    meta: "2024 · Evento comunitario",
    text: "Un evento corto realizado en colaboración con Deluxe Studios, basado en seguir instrucciones y superar diferentes pruebas.",
  },
  hardCraft: {
    title: "Hard Craft",
    meta: "Abril 2024 · 20 participantes",
    text: "Una serie de supervivencia de cinco días creada para ofrecer una experiencia más difícil y competitiva a sus participantes.",
  },
};

const detail = document.querySelector("#project-detail");

if (detail) {
  const id = new URLSearchParams(location.search).get("id") || "talent";
  const project = projects[id] || projects.talent;

  document.title = project.title + " — Multiverso Studios";

  detail.innerHTML = `
    <a class="back" href="minecraft.html">
      ← Todos los proyectos
    </a>

    <div class="detail-copy">
      <p class="kicker">PROYECTO MULTIVERSO</p>
      <h1>${project.title}</h1>
      <p class="meta">${project.meta}</p>
      <p>${project.text}</p>

      <a class="btn primary" href="contacto.html">
        Crear un proyecto con nosotros ↗
      </a>
    </div>
  `;
}
