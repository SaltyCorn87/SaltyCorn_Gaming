(function () {
  const root = document.documentElement; // <html>
  const btn = document.getElementById("themeToggle");

  if (!btn) return;

  function setTheme(theme) {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
      btn.textContent = "☀️ Light";
    } else {
      root.removeAttribute("data-theme");
      btn.textContent = "🌙 Dark";
    }
    localStorage.setItem("theme", theme);
  }

  // Load saved theme (default dark)
  const saved = localStorage.getItem("theme") || "dark";
  setTheme(saved);

  // Toggle on click
  btn.addEventListener("click", function () {
    const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
    setTheme(current === "light" ? "dark" : "light");
  });
})();
