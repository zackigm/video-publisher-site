(function () {
  const config = window.SITE_CONFIG || {};
  const stored = localStorage.getItem("vp-language");
  let language = stored || (navigator.language.toLowerCase().startsWith("es") ? "es" : "en");

  function applyLanguage(next) {
    language = next;
    document.documentElement.lang = next;
    document.querySelectorAll("[data-es][data-en]").forEach((element) => {
      element.innerHTML = element.dataset[next];
    });
    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
      button.textContent = next === "es" ? "EN" : "ES";
      button.setAttribute("aria-label", next === "es" ? "View in English" : "Ver en español");
    });
    document.querySelectorAll("[data-effective-date]").forEach((element) => {
      element.textContent = next === "es" ? config.effectiveDateEs : config.effectiveDateEn;
    });
    localStorage.setItem("vp-language", next);
  }

  document.querySelectorAll("[data-developer-name]").forEach((element) => {
    element.textContent = config.developerName || "Ezequiel Galán";
  });
  document.querySelectorAll("[data-support-email]").forEach((element) => {
    const email = config.supportEmail || "videopublisher.zackigm@gmail.com";
    element.textContent = email;
    element.href = email.includes("@") ? `mailto:${email}` : "#";
  });
  document.querySelectorAll("[data-support-email-button]").forEach((element) => {
    const email = config.supportEmail || "videopublisher.zackigm@gmail.com";
    element.textContent = email;
    element.href = email.includes("@") ? `mailto:${email}?subject=Publicador%20de%20V%C3%ADdeos%20-%20Ayuda` : "#";
  });
  document.querySelectorAll("[data-current-year]").forEach((element) => { element.textContent = new Date().getFullYear(); });
  document.querySelectorAll("[data-language-toggle]").forEach((button) => button.addEventListener("click", () => applyLanguage(language === "es" ? "en" : "es")));
  document.querySelectorAll("[data-menu-toggle]").forEach((button) => button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    document.getElementById(button.getAttribute("aria-controls")).classList.toggle("open", !open);
  }));
  applyLanguage(language);
})();
