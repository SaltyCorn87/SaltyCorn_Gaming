(function () {
  const root = document.documentElement;
  const btn = document.getElementById("themeToggle");

  // If the button isn't on the page, do nothing.
  if (!btn) return;

  // Load saved preference (default to dark)
  const saved = localStorage.getItem("theme");
  if (saved === "light") root.setAttribute("data-theme", "light");

  // Update button label based on current theme
  function syncLabel() {
    const isLight = root.getAttribute("data-theme") === "light";
    btn.textContent = isLight ? "☀️ Light" : "🌙 Dark";
  }
  syncLabel();

  // Toggle theme
  btn.addEventListener("click", function () {
    const isLight = root.getAttribute("data-theme") === "light";
    if (isLight) {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
    syncLabel();
  });
})();
