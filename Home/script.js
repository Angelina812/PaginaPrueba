const dropdown = document.getElementById("dropdown-menu");

let menuOpen = false;

function toggleMenu() {
    menuOpen = !menuOpen;
    dropdown.classList.toggle("hidden", !menuOpen);
}

function closeMenu () {
    menuOpen = false;
    dropdown.classList.add("hidden");
}

    document.addEventListener("click",function (e) {
        const menu = document.getElementById("menu-container");
        if (!menu.contains(e.target)) {
            dropdown.classList.add("hidden");
            menuOpen = false;
        }
    });