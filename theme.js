(function () {
  const root = document.documentElement;
  const btn = document.getElementById("themeToggle");

  function setTheme(theme) {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
      if (btn) btn.textContent = "☀️ Light";
    } else {
      root.removeAttribute("data-theme");
      if (btn) btn.textContent = "🌙 Dark";
    }
    localStorage.setItem("theme", theme);
  }

  const saved = localStorage.getItem("theme") || "dark";
  setTheme(saved);

  if (btn) {
    btn.addEventListener("click", function () {
      const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
      setTheme(current === "light" ? "dark" : "light");
    });
  }
})();
