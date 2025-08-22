// Data model for bilingual content and resume details
const DATA = {
  person: {
    name: "Márlon Medeiros Brum",
    role: { pt: "Engenheiro de Software", en: "Software Engineer" },
    location: "Guarulhos - SP",
    email: "marlon.brum@gmail.com",
    phone: "+55 (11) 9 7649-6027",
  },
  hero: {
    greeting: { pt: "Olá, sou ", en: "Hello, I'm " },
    subtitle: {
      pt: "Engenheiro de Software com 27 anos de experiência em desenvolvimento, liderança técnica e entrega de soluções robustas.",
      en: "Software engineer with 27 years of experience in development, technical leadership, and delivering robust solutions.",
    }
  },
  about: {
    title: { pt: "Apresentação", en: "Presentation" },
    text: {
      pt: "Profissional com 27 anos de experiência em desenvolvimento de software, atuando em .NET, PHP, Python e Inteligência Artificial. Trabalhei com SQL Server e MySQL, análise de sistemas e relacionamento com clientes. Minha vivência de longo prazo me permite aprender rapidamente qualquer nova tecnologia e entregar valor com consistência, seja em projetos freelance, contratos parciais ou posições em tempo integral.",
      en: "Professional with 27 years of experience in software development, working with .NET, PHP, Python and Artificial Intelligence. I have worked with SQL Server and MySQL, systems analysis and client engagement. My long-term experience enables me to quickly learn any new technology and consistently deliver value, whether in freelance projects, part-time contracts or full-time positions.",
    },
  },
  nav: {
    about: { pt: "Sobre", en: "About" },
    experience: { pt: "Experiência", en: "Experience" },
    skills: { pt: "Habilidades", en: "Skills" },
    education: { pt: "Formação", en: "Education" },
    languages: { pt: "Idiomas", en: "Languages" },
    contact: { pt: "Contato", en: "Contact" },
  },
  cta: {
    hire: { pt: "Contratar", en: "Hire me" },
    contact: { pt: "Entrar em contato", en: "Get in touch" },
    cv: { pt: "Ver currículo (PT-BR)", en: "View resume (PT-BR)" },
  },
  experience: [
    {
      company: { pt: "Profissional Autônomo", en: "Independent Professional" },
      period: { pt: "Maio/2018 – Atual", en: "May/2018 – Present" },
      bullets: {
        pt: [
          "Consultoria e desenvolvimento independente para diversos clientes (ex.: Instituto de Engenharia de São Paulo)",
          ".NET, PHP, Python e IA conforme necessidade do projeto",
          "Atuação ponta a ponta: levantamento, desenvolvimento, entrega e suporte",
        ],
        en: [
          "Independent consulting and development for multiple clients (e.g., São Paulo Engineering Institute)",
          ".NET, PHP, Python and AI as required per project",
          "End-to-end responsibility: discovery, development, delivery and support",
        ],
      },
    },
    {
      company: { pt: "BASE Optimization Consulting / K12 Educação", en: "BASE Optimization Consulting / K12 Educação" },
      period: { pt: "Agosto/2011 – Maio/2018", en: "Aug/2011 – May/2018" },
      bullets: {
        pt: [
          "Sócio e desenvolvedor do sistema de geração de grades horárias em .NET",
          "Algoritmo de otimização para melhores combinações de horários",
          "Administração e manutenção do sistema no Azure",
        ],
        en: [
          "Partner and developer of the class scheduling system on .NET",
          "Optimization algorithm for best timetable combinations",
          "System administration and maintenance on Azure",
        ],
      },
    },
    {
      company: { pt: "PRODESP – Processamento de Dados do Estado de São Paulo", en: "PRODESP – Data Processing Company of the State of São Paulo" },
      period: { pt: "Outubro/2005 – Julho/2011 (Terceirizado pela B2Br)", en: "Oct/2005 – Jul/2011 (Contracted via B2Br)" },
      bullets: {
        pt: [
          "Desenvolvimento e manutenção de sistema de controle de processos dos tribunais de justiça",
          "Atuação como desenvolvedor e coordenador de equipe",
          "Ponte entre programadores e analistas de negócio",
        ],
        en: [
          "Development and maintenance of the judicial case management system",
          "Worked as developer and team coordinator",
          "Bridge between developers and business analysts",
        ],
      },
    },
  ],
  skills: [
    { icon: "fa-solid fa-server", label: { pt: "Backend: ASP.NET, C#, PHP, Python", en: "Backend: ASP.NET, C#, PHP, Python" } },
    { icon: "fa-solid fa-code", label: { pt: "Frontend: HTML5, JavaScript ES6, CSS3, Responsivo", en: "Frontend: HTML5, JavaScript ES6, CSS3, Responsive" } },
    { icon: "fa-solid fa-mobile-screen", label: { pt: "Mobile: React Native, Ionic", en: "Mobile: React Native, Ionic" } },
    { icon: "fa-solid fa-database", label: { pt: "Banco de Dados: SQL Server, MySQL, SQL", en: "Databases: SQL Server, MySQL, SQL" } },
    { icon: "fa-solid fa-robot", label: { pt: "IA e Otimização: Algoritmos, Heurísticas", en: "AI & Optimization: Algorithms, Heuristics" } },
    { icon: "fa-solid fa-diagram-project", label: { pt: "Análise de Sistemas", en: "Systems Analysis" } },
  ],
  education: [
    { degree: { pt: "Pós-Graduação (MBA) em Tecnologia de Software – PECE / Poli-USP", en: "Postgraduate (MBA) in Software Technology – PECE / Poli-USP" }, when: { pt: "Concluído em 2006", en: "Completed in 2006" } },
    { degree: { pt: "Bacharelado em Ciências da Computação – FASP", en: "B.Sc. in Computer Science – FASP" }, when: { pt: "Concluído em 2003", en: "Completed in 2003" } },
    { degree: { pt: "Técnico em Processamento de Dados – ETFSP", en: "Technical Degree in Data Processing – ETFSP" }, when: { pt: "Concluído em 1999", en: "Completed in 1999" } },
  ],
  languages: [
    { label: { pt: "Inglês: Fluente", en: "English: Fluent" } },
  ],
  ui: {
    phone: { pt: "Telefone", en: "Phone" },
    locationLabel: { pt: "Localização", en: "Location" },
    usernamePlaceholder: { pt: "adicionar depois", en: "add later" },
    footerAvailability: {
      pt: "Disponível para freelance, meio período ou tempo integral",
      en: "Available for freelance, part-time or full-time",
    },
  },
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const state = {
  lang: localStorage.getItem("lang") || (navigator.language?.startsWith("pt") ? "pt" : "en"),
};

function applyI18n() {
  document.documentElement.lang = state.lang === "pt" ? "pt-BR" : "en";

  // Header brand role
  $('[data-i18n="role"]').textContent = DATA.person.role[state.lang];

  // Nav
  $('[data-i18n="nav_about"]').textContent = DATA.nav.about[state.lang];
  $('[data-i18n="nav_experience"]').textContent = DATA.nav.experience[state.lang];
  $('[data-i18n="nav_skills"]').textContent = DATA.nav.skills[state.lang];
  $('[data-i18n="nav_education"]').textContent = DATA.nav.education[state.lang];
  $('[data-i18n="nav_languages"]').textContent = DATA.nav.languages[state.lang];
  $('[data-i18n="nav_contact"]').textContent = DATA.nav.contact[state.lang];

  // CTAs
  $('[data-i18n="cta_hire"]').textContent = DATA.cta.hire[state.lang];
  $('[data-i18n="cta_contact"]').textContent = DATA.cta.contact[state.lang];
  $('[data-i18n="cta_cv"]').textContent = DATA.cta.cv[state.lang];

  // Hero
  $('[data-i18n="hero_greeting"]').textContent = DATA.hero.greeting[state.lang];
  $('[data-i18n="hero_subtitle"]').textContent = DATA.hero.subtitle[state.lang];

  // About
  $('[data-i18n="about_title"]').textContent = DATA.about.title[state.lang];
  $('[data-i18n="about_text"]').textContent = DATA.about.text[state.lang];

  // Footer availability
  $('[data-i18n="footer_availability"]').textContent = DATA.ui.footerAvailability[state.lang];

  // Contact labels
  $('[data-i18n="phone"]').textContent = DATA.ui.phone[state.lang];
  $('[data-i18n="location_label"]').textContent = DATA.ui.locationLabel[state.lang];
  $$('#contact .contact-card span[data-i18n="username_placeholder"]').forEach(el => {
    el.textContent = DATA.ui.usernamePlaceholder[state.lang];
  });

  // Switch buttons aria state
  $$('.lang-btn').forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.lang === state.lang)));
}

function renderExperience() {
  const wrap = $('#exp-list');
  wrap.innerHTML = '';
  DATA.experience.forEach(item => {
    const root = document.createElement('article');
    root.className = 'timeline-item';
    root.innerHTML = `
      <div class="header">
        <span class="role">${DATA.person.role[state.lang]}</span>
        <span class="period">· ${item.period[state.lang]}</span>
      </div>
      <div class="company">${item.company[state.lang]}</div>
      <ul class="bullets"></ul>
    `;
    const ul = root.querySelector('.bullets');
    item.bullets[state.lang].forEach(b => {
      const li = document.createElement('li');
      li.textContent = b;
      ul.appendChild(li);
    });
    wrap.appendChild(root);
  });
}

function renderSkills() {
  const grid = $('#skills-grid');
  grid.innerHTML = '';
  DATA.skills.forEach(s => {
    const el = document.createElement('div');
    el.className = 'skill';
    el.innerHTML = `<i class="${s.icon}"></i><span>${s.label[state.lang]}</span>`;
    grid.appendChild(el);
  });
}

function renderEducation() {
  const list = $('#edu-list');
  list.innerHTML = '';
  DATA.education.forEach(e => {
    const el = document.createElement('div');
    el.className = 'list-item';
    el.innerHTML = `<strong>${e.degree[state.lang]}</strong><span class="muted">${e.when[state.lang]}</span>`;
    list.appendChild(el);
  });
}

function renderLanguages() {
  const list = $('#lang-list');
  list.innerHTML = '';
  DATA.languages.forEach(l => {
    const li = document.createElement('li');
    li.className = 'chip';
    li.textContent = l.label[state.lang];
    list.appendChild(li);
  });
}

function initLangSwitcher() {
  $$('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.lang = btn.dataset.lang;
      localStorage.setItem('lang', state.lang);
      // re-render dynamic sections first
      renderExperience();
      renderSkills();
      renderEducation();
      renderLanguages();
      // then reapply i18n labels
      applyI18n();
    });
  });
}

function initYear() {
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if (el) el.textContent = y;
}

function boot() {
  // initial render
  renderExperience();
  renderSkills();
  renderEducation();
  renderLanguages();
  applyI18n();
  initLangSwitcher();
  initYear();
}

// Run
boot();
