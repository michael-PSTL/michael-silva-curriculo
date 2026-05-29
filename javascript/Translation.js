let translations = {
  edu_btn: {
    pt: "Abrir comprovante",
    en: "Open Certificate"
  },

  update_text: {
    pt: "Última Atualização:",
    en: "Last Update:"
  },
  tools_title: {
    pt: "Ferramentas",
    en: "Tools"
  },
  languages_title: {
    pt: "Idiomas",
    en: "Languages" 
  }
};

let currentLang = "pt";

async function fetchTranslations() {
  try {
    const response = await fetch(`${API_URL}/translations`);

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const data = await response.json();

    return data.reduce((acc, item) => {
      acc[item.contentKey] = {
        pt: item.pt,
        en: item.en
      };

      return acc;
    }, translations);

  } catch (error) {
    console.error("Erro ao buscar translations:", error);
    return translations;
  }
}

function setLanguage(lang) {
  currentLang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");

    if (translations[key]) {
      el.textContent = translations[key][lang];
    }
  });

  localStorage.setItem("lang", lang);
}

window.addEventListener("DOMContentLoaded", async () => {
  
  translations = await fetchTranslations();

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