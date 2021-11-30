export const profileChanges = () => {
    const inputs = document.querySelectorAll(".user__input input");
    const changeBtn = document.querySelector(".user__btn--change");
    const saveBtn = document.querySelector(".user__btn--save");

    if (inputs.length > 0 && changeBtn) {
        changeBtn.addEventListener("click", (e) => {
            if (e.target) {
                inputs.forEach((input) => {
                    input.disabled = false;
                });

                saveBtn.disabled = false;
            }
        });
    }
};