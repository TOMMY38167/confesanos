function openModal() {
    document.getElementById("modal-background").style.display = "flex";
    document.querySelector("body").style.overflow = "hidden";
}
function closeModal() {
    document.getElementById("modal-background").style.display = "none";
    document.querySelector("body").style.overflow = "auto"; 
}
