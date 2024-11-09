document.addEventListener("DOMContentLoaded", function() {
    checkAdminAccess();
    loadCategories();
    loadUsers();
});

async function checkAdminAccess() {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:8081/api/users/me", {
        headers: { "Authorization": `Bearer ${token}` }
    });
    const user = await response.json();
    if (user.role !== "ADMIN") {
        alert("Access restricted. Only admins allowed.");
        window.location.href = "login.html";
    }
}

// More admin functions for handling the marketplace