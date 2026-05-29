/*preview*/

const preview = document.querySelector(".preview");

function renderHeader() {
  return `
      <header>
          <h1 id="nome">Michael Silva Soares</h1>
          <h2 id="role">Engenheiro de Software</h2>
      </header>
    `;
}
function renderMain() {
  return `
      <main>
        <h3 id="objetive-title" data-i18n="about_title">Objetivo</h3>
        <p id="objetive-text" data-i18n="about_text">
          Erro ao conectar à API.
          <!-- Contatos serão carregados dinamicamente via API -->
        </p>

        <h3 data-i18n="skills_title">Competências</h3>
        <ul class="bloco-competencias">
          Erro ao conectar à API.
          <!-- Competências serão carregadas dinamicamente via API -->
        </ul>

        <h3 data-i18n="education_title">Formação Acadêmica</h3>

        <div class="bloco-academico">
          Erro ao conectar à API.
          <!-- Formação acadêmica será carregada dinamicamente via API -->
        </div>
        ${renderQR()}
      </main>
    `;
}
function renderQR() {
  return `
    <div class="bloco-qr">
      <div class="texto-qr">
        <h3 id="qrTitleKey"></h3>
        <p id="qrTextKey"></p>
      </div>

      <div class="qr-image">
        <img
          src="assets/img/qrcode_michael-curriculo.netlify.app.png"
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

        <div class="bloco-front">
          <!-- Tecnologias de front-end serão carregadas dinamicamente via API -->
        </div>

        <h3>Back-End</h3>

        <div class="bloco-back">
          <!-- Tecnologias de back-end serão carregadas dinamicamente via API -->
        </div>

        <h3 data-i18n="tools_title">Ferramentas</h3>

        <div class="bloco-tools">
          <!-- Ferramentas e metodologias serão carregadas dinamicamente via API -->
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
  const allowedIcons = ["github", "phone", "email", "addrres"];

  const footerLinks = socialLinks
    .filter(
      (link) =>
        link.isActive &&
        allowedIcons.includes(link.icon)
    )
    .map(
      (link) => `
        <a href="${link.url}" target="_blank" class="bloco-contato">
          <div class="contato ce">
            <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
              <use href="assets/icons.svg#${link.icon}"></use>
            </svg>
          </div>
          <span>${link.nickname}</span>
        </a>
      `
    )
    .join("");

  return `
    <footer>
      ${footerLinks}
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

  fetchTechnologies();
  fetchEducation();
  fetchSkills();
  fetchProfileTexts();

  setLanguage(currentLang);
}

function closePreview() {
  document.querySelector(".overlay").classList.remove("open");
  document.body.style.overflow = "";
}

document.querySelector(".dwn").addEventListener("click", function () {
  window.print();
});

