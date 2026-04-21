/*logíca de idioma*/

const translations = {
  pt: {
    print: "imprimir",
    role: "Engenheiro de Software",

    about_title: "Objetivo",
    about_text:
      "Atuar na área de tecnologia/desenvolvimento, aplicando uma visão criativa e analítica para transformar ideias em soluções práticas e bem estruturadas. Busco constante evolução profissional, com foco em organização, autonomia e entrega de resultados com qualidade e propósito.",

    skills_title: "Competências",

    skill_1: "Pensamento Analítico",
    skill_2: "Código Limpo & Qualidade",
    skill_3: "Metodologias Ágeis",
    skill_4: "Resiliência Técnica",
    skill_5: "Comunicação objetiva",
    skill_6: "Aprendizado Autônomo",

    projects_title: "Projetos",

    proj_1: "Meu Próprio Portfólio[desenvolvimento]",
    proj_2: "Fluxo de Compra[desenvolvimento]",
    proj_3: "Fluxo de segurança[desenvolvimento]",
    proj_4: "DevelCraft - Meu Produto[desenvolvimento]",
    proj_5: "Blog - Por que ter um site?[desenvolvimento]",

    education_title: "Formação Acadêmica",

    edu_1_title: "Engenharia de Software - Cursando",
    edu_1_inst: "Instituição: Faculdade Anhanguera",

    edu_2_title: "Inglês - Cursando",
    edu_2_inst: "Instituição: IFP (Instituto de Formação Profissional)",

    qr_title: "Portfólio Interativo",
    qr_text:
      "Escaneie o QR Code para acessar meu portfólio online com projetos, experiências e detalhes interativos.",

    edu_btn: "abrir comprovante",

    tools_title: "Ferramentas",
    languages_title: "Idiomas",

    lang_en: "Inglês - A2",
    lang_pt: "Português - Nativo",

    update_text: "Última Atualização:",

    readme_text:
      "README: Este projeto é um currículo interativo desenvolvido como base para uma aplicação Full-Stack. Além da interface responsiva, ele conta com um sistema de tradução dinâmica (PT-BR/EN) e um modo de visualização otimizado para impressão com QR Code. A arquitetura foi pensada de forma modular utilizando JavaScript puro para garantir performance e facilidade de manutenção. O próximo objetivo é integrar este front-end a uma API Java com Spring Boot e banco de dados MySQL. Também será desenvolvido um painel administrativo em React, permitindo que todo o conteúdo do currículo seja gerenciado dinamicamente através de uma interface de usuário, sem a necessidade de alterar o código-fonte.",
  },

  en: {
    print: "print",
    role: "Software Engineer",

    about_title: "Objective",
    about_text:
      "To work in the technology/development field, applying a creative and analytical mindset to transform ideas into practical, well-structured solutions. Seeking continuous professional growth, with a focus on organization, autonomy, and delivering high-quality, purposeful results.",

    skills_title: "Skills",

    skill_1: "Analytical Thinking",
    skill_2: "Clean Code & Quality",
    skill_3: "Agile Methodologies",
    skill_4: "Technical Resilience",
    skill_5: "Objective communication",
    skill_6: "Autonomous Learning",

    projects_title: "Projects",

    proj_1: "My Own Portfolio[development]",
    proj_2: "Purchase Flow[development]",
    proj_3: "Security Flow[development]",
    proj_4: "DevelCraft - My Product[development]",
    proj_5: "Blog - Why have a website?[development]",

    education_title: "Academic Background",

    edu_1_title: "Software Engineering - In progress",
    edu_1_inst: "Institution: Anhanguera College",

    edu_2_title: "English - In progress",
    edu_2_inst: "Institution: IFP (Professional Training Institute)",

    qr_title: "Interactive Portfolio",
    qr_text:
      "Scan the QR Code to access my online portfolio with projects, experiences and interactive details.",

    edu_btn: "Open Certificate",

    tools_title: "Tools",
    languages_title: "Languages",

    lang_en: "English - A2",
    lang_pt: "Portuguese - Native",

    update_text: "Last Updated:",

    readme_text:
      "README: This project is an interactive web resume that works as a complete application, going beyond a simple static page. It centralizes professional information in a dynamic, responsive and updatable way, with print support and multiple languages. The structure is divided into front-end, back-end and an admin panel, allowing content management without editing the interface code directly. The back-end connects to a database to store and serve information in an organized and consistent way, making the system more scalable and closer to a real-world application.",
  },
};
let currentLang = "pt";

function setLanguage(lang) {
  currentLang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");

    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem("lang", lang);
}

window.addEventListener("DOMContentLoaded", () => {
  const langButtons = document.querySelectorAll("[data-lang]");

  langButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const lang = e.target.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  const saved = localStorage.getItem("lang") || "pt";
  setLanguage(saved);
});

/*preview*/

const preview = document.querySelector(".preview");

function renderHeader() {
  return `
      <header>
        <h1>Michael Silva Soares</h1>
        <h2 data-i18n="role">Engenheiro de Software</h2>
      </header>
    `;
}
function renderMain() {
  return `
      <main>
        <h3 data-i18n="about_title">Objetivo</h3>
          <p data-i18n="about_text">
            Atuar na área de tecnologia/desenvolvimento, aplicando uma visão
            criativa e analítica para transformar ideias em soluções práticas
            e bem estruturadas. Busco constante evolução profissional, com
            foco em organização, autonomia e entrega de resultados com
            qualidade e propósito.
          </p>
          <h3 data-i18n="skills_title">Competências</h3>
          <ul>
            <li data-i18n="skill_1">Pensamento Analítico</li>
            <li data-i18n="skill_2">Código Limpo & Qualidade</li>
            <li data-i18n="skill_3">Metodologias Ágeis</li>
            <li data-i18n="skill_4">Resiliência Técnica</li>
            <li data-i18n="skill_5">Comunicação objetiva</li>
            <li data-i18n="skill_6">Aprendizado Autônomo</li>
            <li data-i18n="lang_en">Inglês - A2</li>
          </ul>

          <h3 data-i18n="education_title">Formação Acadêmica</h3>
          <div class="bloco-academico">
            <div>
              <h4 data-i18n="edu_1_title">
                Engenharia de Software - Cursando
              </h4>
              <p data-i18n="edu_1_inst">Instituição: Faculdade Anhanguera</p>
            </div>
          </div>
          <div class="bloco-academico">
            <div>
              <h4 data-i18n="edu_2_title">Inglês - Cursando</h4>
              <p data-i18n="edu_2_inst">
                Instituição: IFP(Instituto de Formação Profissional)
              </p>
            </div>
          </div>
          ${renderQR()}
      </main>
    `;
}
function renderQR() {
  return `
      <div class="bloco-qr">
        <div class="texto-qr">
          <h3 data-i18n="qr_title">Portfólio Interativo</h3>
          <p data-i18n="qr_text">
            Escaneie o QR Code para acessar meu portfólio online com
            projetos, experiências e detalhes interativos.
          </p>
        </div>

        <div class="qr-image">
          <img
            src="qrcode_michael-curriculo.netlify.app.png"
            alt="QR Code do portfólio"
            width="132"
            height="132"
          />
        </div>
      </div>
    `;
}
function renderAside() {
  return `
      <aside>
        <h3>Front-End</h3>
          <div class="bloco-tecnologia">
            <div class="tecnologia ce">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <use href="assets.svg#HTML"></use>
              </svg>
            </div>
            <p>HTML5</p>
          </div>
          <div class="bloco-tecnologia">
            <div class="tecnologia ce">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <use href="assets.svg#CSS"></use>
              </svg>
            </div>
            <p>CSS3</p>
          </div>
          <div class="bloco-tecnologia">
            <div class="tecnologia ce">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <use href="assets.svg#JavaScript"></use>
              </svg>
            </div>
            <p>JavaScript</p>
          </div>
          <div class="bloco-tecnologia" style="display: none;">
            <div class="tecnologia ce">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <use href="assets.svg#TypeScript"></use>
              </svg>
            </div>
            <p>TypeScript</p>
          </div>
          <div class="bloco-tecnologia">
            <div class="tecnologia ce">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <use href="assets.svg#React"></use>
              </svg>
            </div>
            <p>React</p>
          </div>
          <div class="bloco-tecnologia" style="display: none;">
            <div class="tecnologia ce">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <use href="assets.svg#Next.js"></use>
              </svg>
            </div>
            <p>Next.js</p>
          </div>
          <h3>Back-End</h3>
          <div class="bloco-tecnologia">
            <div class="tecnologia ce">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <use href="assets.svg#Java"></use>
              </svg>
            </div>
            <p>Java</p>
          </div>
          <div class="bloco-tecnologia" style="display: none;">
            <div class="tecnologia ce">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <use href="assets.svg#Spring"></use>
              </svg>
            </div>
            <p>Spring Boot</p>
          </div>
          <div class="bloco-tecnologia">
            <div class="tecnologia ce">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <use href="assets.svg#MySql"></use>
              </svg>
            </div>
            <p>MySQL</p>
          </div>
          <div class="bloco-tecnologia">
            <div class="tecnologia ce">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <use href="assets.svg#python"></use>
              </svg>
            </div>
            <p>Python</p>
          </div>
          <h3 data-i18n="tools_title">Ferramentas</h3>
          <div class="bloco-tecnologia">
            <div class="tecnologia ce">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <use href="assets.svg#Git"></use>
              </svg>
            </div>
            <p>Git</p>
          </div>
          <div class="bloco-tecnologia">
            <div class="tecnologia ce">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <use href="assets.svg#VsCode"></use>
              </svg>
            </div>
            <p>VsCode</p>
          </div>
          <div class="bloco-tecnologia">
            <div class="tecnologia ce">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <use href="assets.svg#Intellij"></use>
              </svg>
            </div>
            <p>IntelliJ</p>
          </div>
          <div class="bloco-tecnologia">
            <div class="tecnologia ce">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <use href="assets.svg#PyCharm"></use>
              </svg>
            </div>
            <p>PyCharm</p>
          </div>
      </aside>
    `;
}

function renderLayout() {
  return `
      <div class="layout-print">
        ${renderMain()}
        ${renderAside()}
      </div>
    `;
}
function renderFooter() {
  return `
    <footer>
      <div class="bloco-contato">
        <div class="contato ce">
          <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
            <use href="assets.svg#phone"></use>
          </svg>
        </div>
        <p>+55 (98) 98497-5025</p>
      </div>
      <div class="bloco-contato">
        <div class="contato ce">
          <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
            <use href="assets.svg#github"></use>
          </svg>
        </div>
        <p>michael-PSTL</p>
      </div>
      <div class="bloco-contato">
        <div class="contato ce">
          <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
            <use href="assets.svg#email"></use>
          </svg>
        </div>
      <p>michael.s11.soares@gmail.com</p>
      </div>
      <div class="bloco-contato">
        <div class="contato ce">
          <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
            <use href="assets.svg#addrres"></use>
          </svg>
        </div>
        <p>São Luís - MA</p>
      </div>
    </footer>
  `;
}

function openPreview() {
  document.querySelector(".overlay").classList.add("open");
  document.body.style.overflow = "hidden";

  preview.innerHTML = `
    ${renderHeader()}
    ${renderLayout()}
    ${renderFooter()}
  `;

  setLanguage(currentLang);
}

function closePreview() {
  document.querySelector(".overlay").classList.remove("open");
  document.body.style.overflow = "";
}

document.querySelector(".dwn").addEventListener("click", function () {
  window.print();
});
