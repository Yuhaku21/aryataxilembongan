
function kirimWhatsApp() {
    let pesan = document.getElementById("pesan").value;
    let nomor = "6287779243533"; // GANTI KE NOMOR KAMU

    if (pesan.trim() === "") {
        alert("Input messages here");
        return;
    }

    let url = "https://wa.me/" + nomor + "?text=" + encodeURIComponent(pesan);

    window.open(url, "_blank");
}

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menuPanel = document.getElementById("menuPanel");
const menuOverlay = document.getElementById("menuOverlay");

openMenu.addEventListener("click", () => {
    menuPanel.style.right = "0";
    menuOverlay.style.display = "block";
});

closeMenu.addEventListener("click", () => {
    menuPanel.style.right = "-330px";
    menuOverlay.style.display = "none";
});

menuOverlay.addEventListener("click", () => {
    menuPanel.style.right = "-330px";
    menuOverlay.style.display = "none";
});





