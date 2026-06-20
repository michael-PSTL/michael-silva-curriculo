const Storage = {
  save(key, data) {
    localStorage.setItem(
      key,
      JSON.stringify({
        data,
        timestamp: Date.now(),
      })
    );
  },

  load(key) {
    const item = localStorage.getItem(key);

    if (!item) return null;

    return JSON.parse(item);
  },

  remove(key) {
    localStorage.removeItem(key);
  },

  clearAll() {
    localStorage.clear();
  },

  getLastUpdate(key) {
    const item = this.load(key);

    if (!item) return null;

    return new Date(item.timestamp).toLocaleString("pt-BR");
  },

  showWarning(message = null) {
    const warning = document.querySelector("#api-warning");

    if (!warning) return;

    warning.innerHTML =
      message ||
      "⚠️ Alguns dados foram carregados da memória local e podem estar desatualizados.";

    warning.style.display = "flex";
  },

  hideWarning() {
    const warning = document.querySelector("#api-warning");

    if (!warning) return;

    warning.style.display = "none";
  },
};