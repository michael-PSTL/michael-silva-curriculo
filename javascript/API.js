//puchando as technologias do banco

const API_URL = "https://curriculo-api-qirm.onrender.com";

async function fetchTechnologies() {
  try {
    const response = await fetch(`${API_URL}/technologies`);

    const technologies = await response.json();

    const blocoFront = document.querySelector(".bloco-front");
    const blocoBack = document.querySelector(".bloco-back");
    const blocoTools = document.querySelector(".bloco-tools");

    blocoBack.innerHTML = "";
    blocoFront.innerHTML = "";
    blocoTools.innerHTML = "";

    technologies.forEach((tech) => {
      if (tech.category === "frontend" && tech.isActive) {
        criarTechHTML(tech, blocoFront);
      }
      if (tech.category === "backend" && tech.isActive) {
        criarTechHTML(tech, blocoBack);
      }
      if (tech.category === "tool" && tech.isActive) {
        criarTechHTML(tech, blocoTools);
      }
    });

    console.log(technologies);
  } catch (error) {
    console.error("Erro ao buscar technologies:", error);
  }
}
function criarTechHTML(tech, bloco) {
  bloco.innerHTML += `
    <div class="bloco-tecnologia">
      <div class="tecnologia ce">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <use href="assets/icons.svg#${tech.icon}"></use>
        </svg>
      </div>
      <p>${tech.name}</p>
    </div>
  `;
}
fetchTechnologies();

//puchando os links sociais do banco

let socialLinks = [];
async function fetchSocialLinks() {
  try {
    const response = await fetch(`${API_URL}/sociallinks`);
    socialLinks = await response.json();

    const container = document.querySelector("footer");
    container.innerHTML = "";

    socialLinks.forEach((link) => {
      if (link.isActive) {
        container.innerHTML += `
          <a href="${link.url}" target="_blank" class="bloco-contato">
            <div class="contato ce">
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
               <use href="assets/icons.svg#${link.icon}"></use>
              </svg>
            </div>
            <span>${link.nickname}</span>
          </a>
        `;
      }
    });
  } catch (error) {
    console.error("Erro ao buscar social links:", error);
  }
}
fetchSocialLinks();

// puchando os projetos do banco

async function fetchProjects() {
  try {
    const response = await fetch(`${API_URL}/project`);
    const projects = await response.json();

    const container = document.querySelector(".bloco-projetos");
    container.innerHTML = "";

    projects.forEach((project) => {
      if (project.isActive) {
        container.innerHTML += `
          <a class="bloco-projeto" href="${project.url}" target="_blank">
            <div class="tecnologia ce">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <use href="assets/icons.svg#link"></use>
              </svg>
            </div>
            <p data-i18n="${project.titleKey}"></p>
          </a>
        `;
      }
    });

    setLanguage(currentLang);
  } catch (error) {
    console.error("Erro ao buscar projects:", error);
  }
}
fetchProjects();

//puchando formações acadêmicas do banco

async function fetchEducation() {
  try {
    const response = await fetch(`${API_URL}/education`);
    const education = await response.json();

    const container = document.querySelector(".bloco-academico");
    container.innerHTML = "";

    education.forEach((edu) => {
      if (edu.isActive) {
        container.innerHTML += `
          <div class="academico-info">
            <div>
              <h4>
                <span data-i18n="${edu.titleKey}"></span>
                -
                <span data-i18n="${edu.status}"></span>
              </h4>

              <p data-i18n="${edu.institutionKey}"></p>
            </div>

            <button class="btn-academico" style="display: none">
              <p data-i18n="edu_btn">Abrir Comprovante</p>
            </button>

          </div>
        `;
      }
    });

    setLanguage(currentLang);
  } catch (error) {
    console.error("Erro ao buscar education:", error);
  }
}
fetchEducation();

//puchando languagens do banco

async function fetchLanguage() {
  try {
    const response = await fetch(`${API_URL}/language`);
    const languages = await response.json();

    const container = document.querySelector(".bloco-languages");
    container.innerHTML = "";

    languages.forEach((lang) => {
      if (lang.isActive) {
        container.innerHTML += `
          <div class="bloco-tecnologia">
            <p>
              <span data-i18n="${lang.languageKey}"></span>
              -
              <span data-i18n="${lang.levelKey}"></span>
            </p>
          </div>
        `;
      }
    });

    setLanguage(currentLang);
  } catch (error) {
    console.error("Erro ao buscar languages:", error);
  }
}

fetchLanguage();

// puchando as competências do banco

async function fetchSkills() {
  try {
    const response = await fetch(`${API_URL}/competency`);
    const competences = await response.json();

    const container = document.querySelector(".bloco-competencias");
    container.innerHTML = "";

    competences.forEach((comp) => {
      if (comp.isActive) {
        container.innerHTML += `
          <li data-i18n="${comp.contentKey}"></li>`;
      }
    });

    setLanguage(currentLang);
  } catch (error) {
    console.error("Erro ao buscar competences:", error);
  }
}
fetchSkills();

// puchando os textos do banco

async function fetchProfileTexts() {
  try {
    const response = await fetch(`${API_URL}/profiletext`);
    const data = await response.json();
    const text = data[0];

    document.querySelector("#nome").setAttribute("data-i18n", text.nameKey);

    document.querySelector("#role").setAttribute("data-i18n", text.roleKey);

    document.querySelector("#status").setAttribute("data-i18n", text.statusKey);

    document.querySelector("#objetive-title").setAttribute("data-i18n", text.objectiveTitleKey);

    document.querySelector("#objetive-text").setAttribute("data-i18n", text.objectiveTextKey);

    document.querySelector("#readme").setAttribute("data-i18n", text.readmeKey);

    document.querySelector("#printKey").setAttribute("data-i18n", text.printKey);

    document.querySelector("#qrTitleKey")?.setAttribute("data-i18n", text.qrTitleKey);

    document.querySelector("#qrTextKey")?.setAttribute("data-i18n", text.qrTextKey);

    document.querySelector("#lastupdate").textContent = new Date().toLocaleDateString("pt-BR");

    setLanguage(currentLang);
    
  } catch (error) {
    console.error("Erro ao buscar profile texts:", error);
  }
}
fetchProfileTexts();
