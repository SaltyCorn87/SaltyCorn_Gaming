(function () {
  const root = document.documentElement;

  function setTheme(theme) {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }

    const btn = document.getElementById("themeToggle");
    if (btn) {
      btn.textContent = theme === "light" ? "☀️ Light" : "🌙 Dark";
    }

    localStorage.setItem("theme", theme);
  }

  function initThemeToggle() {
    const btn = document.getElementById("themeToggle");
    if (!btn || btn.dataset.bound === "true") return;

    btn.dataset.bound = "true";

    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);

    btn.addEventListener("click", function () {
      const current =
        root.getAttribute("data-theme") === "light" ? "light" : "dark";
      setTheme(current === "light" ? "dark" : "light");
    });
  }

  function injectHeaderText() {
    const titleEl = document.getElementById("page-title");
    const subtitleEl = document.getElementById("page-subtitle");

    if (titleEl) {
      titleEl.textContent = document.body.dataset.title || "";
    }

    if (subtitleEl) {
      subtitleEl.textContent = document.body.dataset.subtitle || "";
    }
  }

  function loadSharedHeader() {
    const placeholder = document.getElementById("header-placeholder");
    const headerType = document.body.dataset.header;

    if (!placeholder || !headerType) {
      initThemeToggle();
      return;
    }

    const headerPath =
      headerType === "subpage"
        ? "../components/header-subpage.html"
        : "components/header-root.html";

    fetch(headerPath)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Header failed to load");
        }
        return response.text();
      })
      .then(function (html) {
        placeholder.innerHTML = html;
        injectHeaderText();
        initThemeToggle();
      })
      .catch(function (error) {
        console.error("Shared header load error:", error);
      });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    loadSharedHeader();
  });
})();
