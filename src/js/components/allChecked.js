export const checkedModal = () => {
    function autoChecker(e) {
        const currentChecked = e.target.checked;
        const parentEl = e.target.parentElement.parentElement.parentElement;
        console.log(parentEl);
        const allInputs = parentEl.querySelectorAll('input[type="checkbox"]');
        allInputs.forEach((input) => {
            input.checked = currentChecked
        })
        }
}
