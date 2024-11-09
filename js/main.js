document.addEventListener("DOMContentLoaded", function () {
    const themeToggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme") || "dark";
    body.classList.add(savedTheme);
    updateToggleButtonIcon(savedTheme);

    themeToggleButton.addEventListener("click", () => {
        // Toggle between light and dark
        if (body.classList.contains("dark")) {
            body.classList.remove("dark");
            body.classList.add("light");
            localStorage.setItem("theme", "light");
            updateToggleButtonIcon("light");
        } else {
            body.classList.remove("light");
            body.classList.add("dark");
            localStorage.setItem("theme", "dark");
            updateToggleButtonIcon("dark");
        }
    });

    function updateToggleButtonIcon(theme) {
        if (theme === "dark") {
            themeToggleButton.innerHTML = `<img src="images/light-mode.png" alt="Light Mode" width="20" height="20">`;
        } else {
            themeToggleButton.innerHTML = `<img src="images/dark-mode.png" alt="Dark Mode" width="20" height="20">`;
        }
    }
});