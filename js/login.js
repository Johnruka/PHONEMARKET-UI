document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const response = await fetch("http://localhost:8081/api/users/authenticate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    const result = await response.json();
    const loginMessage = document.getElementById("loginMessage");

    if (response.ok) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("role", result.role); 

        // Redirect based on user role
        if (result.role === "ADMIN") {
            window.location.href = "admin-dashboard.html";
        } else if (result.role === "SELLER") {
            window.location.href = "seller-dashboard.html";
        } else {
            window.location.href = "user-dashboard.html";
        }
    } else {
        loginMessage.textContent = "Login failed: " + result.message;
        loginMessage.style.color = "red";
    }
});