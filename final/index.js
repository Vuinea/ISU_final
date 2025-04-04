// Get modal elements
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModal = document.querySelector(".close");

// Open modal when button is clicked
openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Close modal when (X) button is clicked
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside of it
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
