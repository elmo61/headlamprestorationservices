document.addEventListener("DOMContentLoaded", () => {
    let pull        = document.getElementById("pull");
        menu        = document.querySelectorAll(".nav ul")[0];
 
    pull.addEventListener('click', (e) => {
        e.preventDefault();
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    });
});