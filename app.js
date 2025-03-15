function openModal(imgElement) {
    document.getElementById("certificateModal").style.display = "flex";
    document.getElementById("modalImg").src = imgElement.src;
}
function closeModal() {
    document.getElementById("certificateModal").style.display = "none";
}