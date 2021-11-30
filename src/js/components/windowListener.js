import copy from 'copy-text-to-clipboard';


export const windowListener = () => {
    const toastify = document.querySelector('.toastify');

    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("copy") && e.target.dataset.clipboardText) {
            copy(e.target.dataset.clipboardText);
            toastify.classList.add('open');
                setTimeout(() => {
                    toastify.classList.remove('open');
                }, 2000);
        }

        if (e.target.closest(".custom-select__ip")) {
            const dropdown = e.target.closest(".custom-select__ip").querySelector(".custom-select__ip--dropdown");
            dropdown.style.display = "block";
        } else {
            const dropdowns = document.querySelectorAll(".custom-select__ip--dropdown");

            dropdowns.forEach((el) => el.style.display = "");
        }

        if (e.target.hasAttribute("data-ip-value")) {
            console.log("click")
            const select = e.target.closest(".custom-select__ip");
            const selectCurrent = select.querySelector(".custom-select__ip--current");
            const selectDropdown = select.querySelector(".custom-select__ip--dropdown");
            const table = e.target.closest(".current-orders__table");
            const tableRows = table.querySelectorAll("[data-ip-type]");


            selectCurrent.textContent = e.target.textContent;

            select.dataset.selectedValue = e.target.dataset.ipValue;

            selectDropdown.style = "none";
            console.log(e.target.dataset, 'Type')
            tableRows.forEach((row) => {
                if (e.target.dataset.ipValue === "all") {
                    row.style.display = "";
                } else {
                    if (row.dataset.ipType !== e.target.dataset.ipValue) {
                        row.style.display = "none";
                    } else {
                        row.style.display = "";
                    }
                }
            });
        }

        // selectcountry 

        if (e.target.closest(".custom-select__country")) {
            const dropdown = e.target.closest(".custom-select__country").querySelector(".custom-select__country--dropdown");
            dropdown.style.display = "block";
        } else {
            const dropdowns = document.querySelectorAll(".custom-select__country--dropdown");

            dropdowns.forEach((el) => el.style.display = "");
        }
         if (e.target.hasAttribute("data-country-value")) {
             const select = e.target.closest(".custom-select__country");
             console.log(select, 'selecgt test')
             const selectCurrent = select.querySelector(".custom-select__country--current");
             const selectDropdown = select.querySelector(".custom-select__country--dropdown");
            const table = e.target.closest(".current-orders__table");
             const tableRows = table.querySelectorAll("[data-country]");
             console.log(e.target.dataset, 'selectcountry')

             selectCurrent.textContent = e.target.textContent;

             select.dataset.selectedValue = e.target.dataset.countryValue;

             selectDropdown.style = "none";
             console.log(e.target.dataset.countryValue, 'coundy')
             tableRows.forEach((row) => {
                if (e.target.dataset.countryValue === "all") {
                    row.style.display = "";
                } else {
                    if (row.dataset.country !== e.target.dataset.countryValue) {
                        row.style.display = "none";
              } else {
                        row.style.display = "";
                    }
                }
             });
         }
        // selectcountry end

        // condition now 
        if (e.target.closest(".custom-select__condition")) {
            const dropdown = e.target.closest(".custom-select__condition").querySelector(".custom-select__condition--dropdown");
            dropdown.style.display = "block";
        } else {
            const dropdowns = document.querySelectorAll(".custom-select__condition--dropdown");

            dropdowns.forEach((el) => el.style.display = "");
        }
        // condition end 

    });
};