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
  backrooms: {
    title: "The Backrooms Recreation",
    meta: "Septiembre 2026 · 10 participantes",
    text: "Evento organizado por Multiverso Studios y JefferMC. El cual utilizo el mod público y gratuito desarrollado por Eufonia Studio, cuyo equipo merece todos los créditos por su creación. Estas menciones reconocen sus aportaciones y no implican colaboración, patrocinio ni aprobación de nuestro evento.",
  },
  genesischamp: {
    title: "Genesis Championship",
    meta: "Mes Año · ¿? participantes",
    text: "Torneo En Desarrollo.",
  },
  Error404: {
    title: "Evento Desconocido",
    meta: "Mes Año · ¿? participantes",
    text: "Lo sentimos, este apartado fue borrado o esta en desarrollo.",
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

/*
  PERFILES DE COLABORADORES

  Para editar un perfil cambia:
  - name: nombre visible.
  - role: rol o cargo.
  - group: sección a la que pertenece.
  - image: archivo dentro de la carpeta imagenes.
  - bio: descripción completa.
  - socials: pega solamente las redes activas. Si el enlace está vacío,
    el icono no aparecerá en la página.
*/
const collaborators = {
  extrayp: {
    name: "ExtraYP",
    role: "Colaborador creativo",
    group: "Multiverso Studios",
    image: "ExtraYP.png",
    bio: "ExtraYP participo en casi todos los proyectos de Multiverso Studios, aportando ideas, diseño y creatividad. Actualmente es un miembro poco activo, pero sigue siendo parte del equipo y colaborando en algunos proyectos.",
    socials: {
      instagram: "https://www.instagram.com/soyextraa/",
      x: "",
      youtube: "https://www.youtube.com/@extrayp",
    },
  },
  coffee: {
    name: "Coffee Sugar Boy",
    role: "CEO of Darkness Animation and Co-CEO of Multiverso Studio.",
    group: "Multiverso Studios",
    image: "Coffeesugarboy.jpg",
    bio: "Coffee Sugar Boy es una persona que a invertido, apoyado y colaborado tanto el como su equipo para la elaboracion de varios proyectos de Multiverso Studios. Es el CEO de Darkness Animation y Co-CEO de Multiverso Studio.",
    socials: {
      twitch: "https://www.twitch.tv/coffe_sugar_boy",
    },
  },
  Christian: {
    name: "Christian",
    role: "CEO of Multiverso Studio.",
    group: "Multiverso Studios",
    image: "By2008.jpg",
    bio: "Fundador y CEO de Multiverso Studios. Christian es un desarrollador y creador de contenido que ha liderado el estudio desde su inicio, aportando su visión y experiencia en la industria del entretenimiento digital.",
    socials: {
      instagram: "https://www.instagram.com/christian.by08",
      x: "https://x.com/christian_by08",
      youtube: "https://www.youtube.com/@Christian_by08",
      kick: "https://kick.com/christianby08",
      Whatsapp: "https://www.whatsapp.com/channel/0029VaPjTxL2phHGdO1hd62y",
    },    
  },
  nikki: {
    name: "Nikki",
    role: "Actriz de doblaje, Moderadora y Betatester",
    group: "Multiverso Studios",
    image: "Nikki.jpg",
    bio: "Nikki es una actriz de doblaje que ha prestado su voz para la franquisia de Multiversal Games. Tambien a sido moderadora y betatester de varios proyectos del estudio, aportando su experiencia y habilidades en la industria del entretenimiento digital.",
    socials: {
      instagram: "https://www.instagram.com/nnsoortk/",
      x: "https://x.com/nikkiangg",
      tiktok: "https://www.tiktok.com/@ang.nkl",
    },
  },
  limunsimon: {
    name: "LimunSimon",
    role: "Betatester y moderador",
    group: "Multiverso Studios",
    image: "LimunSimon.jpg",
    bio: "Simon es un betatester y moderador que ha participado en varios proyectos de Multiverso Studios, aportando su experiencia y habilidades en la industria del entretenimiento digital.",
    socials: {
      instagram: "https://www.instagram.com/syk0boyfrom_nowhere/",
      x: "",
      twitch: "",
    },
  },
  calebmc: {
    name: "CalebMC",
    role: "Betatester",
    group: "Multiverso Studios",
    image: "CalebMC.jpg",
    bio: "Caleb es un betatester que ha participado en varios proyectos de Multiverso Studios, aportando su experiencia y habilidades en la industria del entretenimiento digital.",
    socials: {
      instagram: "https://www.instagram.com/_andeeer_0/",
      x: "",
      youtube: "",
    },
  },
  miku: {
    name: "Miku",
    role: "Builder",
    group: "Darkness Animation",
    image: "IncognitoH.png",
    bio: "Miku es un builder que ha participado en varios proyectos de Multiverso Studios, es un hombre de pocas palabras pero con gran talento, aportando su experiencia y habilidades en la industria del entretenimiento digital.",
    socials: {
      instagram: "",
      x: "",
    },
  },
  faris: {
    name: "Faris",
    role: "Builder",
    group: "Darkness Animation",
    image: "IncognitoM.png",
    bio: "Faris es un builder que ha participado en varios proyectos de Multiverso Studios, una mujer perfeccionista con lo que hace y con gran talento, aportando su experiencia y habilidades en la industria del entretenimiento digital.",
    socials: {
      instagram: "",
      x: "",
    },
  },
  barb: {
    name: "Barb",
    role: "Builder y moderadora",
    group: "Darkness Animation",
    image: "IncognitoM.png",
    bio: "Barb es una builder y moderadora que ha participado en varios proyectos de Multiverso Studios, aportando su experiencia y habilidades en la industria del entretenimiento digital.",
    socials: {
      instagram: "",
      x: "",
    },
  },
  morrocoy: {
    name: "Morrocoy Studios",
    role: "Desarrollo de juegos",
    group: "Colaboraciones",
    image: "MorrocoyStudios.png",
    bio: "Estudio de desarrollo de juegos que ha colaborado con Multiverso Studios en Multiversal Games 5, aportando en diseño grafico e invitaciones para el evento.",
    socials: {
      instagram: "",
      x: "",
      website: "",
    },
  },
  PixelBlits: {
    name: "PixelBlits",
    role: "Colaborador",
    group: "Colaboraciones",
    image: "PixelBlits.png",
    bio: "Ceo de Deluxe Studios (Estudio que ya no existe) y colaborador temporal de Multiverso Studios en un proyecto (Simon Dice), aportando en desarrollo de juegos.",
    socials: {
      instagram: "",
      x: "",
      website: "",
    },
  },
  notleox: {
    name: "NotLeox",
    role: "Programación",
    group: "Multiverso Studios",
    image: "NotLeox.png",
    bio: "Leo fue un programador de Multiverso Studios que colaboró en KSMP 2.",
    socials: {
      instagram: "",
      x: "",
      youtube: "",
    },
  },
  reorline: {
    name: "Reorline",
    role: "Diseño y colaboración",
    group: "Colaboraciones",
    image: "ReorLine.png",
    bio: "Reorline fue Diseñador para Multiverso Studios para Multiversal Games, despues de un tiempo hizo una colaboaracion para un evento suyo y para su espectadores, creado asi Viernes Terrorífico, un evento original de Multiverso Studios.",
    socials: {
      instagram: "https://www.instagram.com/reorline/",
      x: "https://x.com/reorline",
      youtube: "https://www.youtube.com/@Reorline",
      twitch: "https://www.twitch.tv/reorline",
    },
  },
  marshall: {
    name: "Marshall Panda",
    role: "Programación",
    group: "Colaboraciones",
    image: "MarshallPanda.png",
    bio: "Marshall Panda fue un programador que colaboró con Multiverso Studios mucho antes de su fundación. Fue desarrolador en la 1ra y 2da edicion de Multiversal Games.",
    socials: {
      instagram: "",
      x: "",
      github: "",
    },
  },
  Error505: {
    name: "Error505",
    role: "Desconocido",
    group: "Desconocido",
    image: "logo.png",
    bio: "Informacion Desconocida.",
    socials: {
      instagram: "",
      x: "",
      tiktok: "",
    },
  },
  megan: {
    name: "Megan",
    role: "Actriz de doblaje",
    group: "Multiverso Studios",
    image: "IncognitoM.png",
    bio: "Megan fue una actriz de doblaje para Multiverso Studios que colaboró en Hard Craft y en Multiversal Games.",
    socials: {
      instagram: "",
      x: "",
      tiktok: "",
    },
  },
};

const collaboratorDetail = document.querySelector("#collaborator-detail");

if (collaboratorDetail) {
  const collaboratorId =
    new URLSearchParams(location.search).get("id") || "extrayp";
  const collaborator = collaborators[collaboratorId] || collaborators.extrayp;

  const socialNames = {
    instagram: "Instagram",
    x: "X",
    youtube: "YouTube",
    twitch: "Twitch",
    tiktok: "TikTok",
    discord: "Discord",
    github: "GitHub",
    website: "Sitio web",
  };

  const socialIcons = {
    instagram: "📸",
    x: "𝕏",
    youtube: "▶",
    twitch: "🎮",
    tiktok: "♪",
    discord: "DC",
    github: "⌘",
    website: "↗",
    kick: "K",
    Whatsapp: "WP",
  };

  const activeSocials = Object.entries(collaborator.socials)
    .filter(([, url]) => url && url.trim() !== "")
    .map(
      ([network, url]) => `
        <a
          class="profile-social"
          href="${url}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="${socialNames[network] || network}"
          title="${socialNames[network] || network}"
        >
          ${socialIcons[network] || "↗"}
        </a>
      `,
    )
    .join("");

  document.title = collaborator.name + " — Multiverso Studios";

  collaboratorDetail.innerHTML = `
    <a class="back collaborator-back" href="colaboraciones.html">
      ← Todos los colaboradores
    </a>

    <div class="profile-layout">
      <div class="profile-media">
        <img
          src="imagenes/${collaborator.image}"
          alt="${collaborator.name}"
        />

        <div class="profile-socials">
          ${activeSocials}
        </div>
      </div>

      <div class="profile-copy">
        <p class="kicker">${collaborator.group}</p>
        <h1>${collaborator.name}</h1>
        <p class="profile-role">${collaborator.role}</p>
        <p class="profile-bio">${collaborator.bio}</p>
      </div>
    </div>
  `;
}
