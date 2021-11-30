import Choices from "choices.js";


export const activeServices = () => {
    const servicesList = document.querySelector(".services__list");

    if (servicesList) {
        const servicesSelects = servicesList.querySelectorAll(".services__renew-input select");

        servicesList.addEventListener("click", (e) => {
            if (e.target && e.target.classList.contains("services__body-show")) {
                const parent = e.target.closest(".services__body");
                const body = parent.querySelector(".services__body-bottom");

                parent.classList.toggle("services__body--active");

                if (body.style.maxHeight) {
                    body.style.maxHeight = "";
                    body.style.overflow = "hidden";
                } else {
                    body.style.maxHeight = body.scrollHeight + "px";

                    setTimeout(() => {
                        body.style.overflow = "visible";
                    }, 300);
                }
            }

            if (e.target && e.target.classList.contains("services__renew-promocode")) {
                const parent = e.target.closest(".services__renew-input");

                parent.classList.toggle("services__renew-input--active");
            }
        });

        servicesSelects.forEach((select) => {
            if (select) {
                const choices = new Choices(select, {
                    shouldSort: false,
                    itemSelectText: "",
                    searchEnabled: false,
                    placeholder: true
                });
            }
        });
    }
}
