document.addEventListener("DOMContentLoaded", function () {
    const viewButtons = document.querySelectorAll(".view-recipe");
    const modal = document.getElementById("recipe-modal");
    const closeButton = document.querySelector(".close-button");

    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.getElementById("modal-image");
    const modalIngredients = document.getElementById("modal-ingredients");
    const modalProcedure = document.getElementById("modal-procedure");

    viewButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();

            modalTitle.textContent = this.dataset.title;
            modalImage.src = this.dataset.image;

            // Replace \n with <br> for ingredients
            modalIngredients.innerHTML = this.dataset.ingredients.replace(/\n/g, "<br>");

            // Procedure is HTML-safe already
            modalProcedure.innerHTML = this.dataset.procedure;

            modal.style.display = "block";
        });
    });

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", e => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
