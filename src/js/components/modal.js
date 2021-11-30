export const modals = () => {
    // действия с модальным окном
    function actionsWithModal(currentModal, isAdd, timeout) {
        // Ищём открытое модальное окно, елементы с фиксированным позиционированием и ищем тег body
        const activeModal = document.querySelector(".modals.show"),
            fixedElems = document.querySelectorAll(".lock__padding-elem"),
        body = document.body;

        // Делаем действия если нужно открыть или же закрыть модальное окно
        if (isAdd === "open") {
            // Открытие модального окна

            // Проверяем есть ли помимо данного модального окна уже открытое модальное окно
            if (activeModal) {
                // Если есть, скрываем его и убираем overflow: hidden у body
                activeModal.classList.remove("show");
                body.classList.remove("lock");
            }

            // Вычисляем ширину скролла
            let paddingScroll =
                window.innerWidth - document.documentElement.clientWidth;

            // Открываем нужное модальное окно, убираем прокрутку у страницы,
            // задаем отступ body для того, чтобы не было визуального смещения страницы
            currentModal.classList.add("show");
            body.classList.add("lock");
            body.style.marginRight = `${paddingScroll}px`;

            // Проверяем есть ли элементы с фиксированной позицией
            if (fixedElems.length > 0) {
                // Добавляем фиксированным элементам отступ как для body
                fixedElems.forEach((fixedElem) => {
                    fixedElem.style.marginRight = `${paddingScroll}px`;
                });
            }
        } else if (isAdd === "close") {
            // Убираем класс активноси у модального окна
            currentModal.classList.remove("show");

            // Запускаем таймер, который ждет окончание анимации скрытия
            // модального окна, чтобы не было прыжка страницы при закрытии
            setTimeout(() => {
                // Как только закончилась анимация закрытия, возвращаем прокрутку и убираем отступ
                body.classList.remove("lock");
                body.style.marginRight = "";

                // Проверяем есть ли элементы с фиксированной позицией
                if (fixedElems.length > 0) {
                    // Убираем отступ у элементов с фиксированной позицией
                    fixedElems.forEach((fixedElem) => {
                        fixedElem.style.marginRight = "";
                    });
                }
            }, timeout);
        }
    }

    // функция привязки модального окна
    function bindModal(
        triggerSelector,
        modalSelector,
        closeSelector = null,
        timeout = 300,
        closeOverOverlay = true
    ) {
        // Находим все триггеры, которые открывают модальное окно и находим само модальное окно
        const triggers = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector);

        // Перебираем триггеры и добавляем обработчик событий, которые открывает модальное окно
        triggers.forEach((trigger) => {
            trigger.addEventListener("click", () => {
                actionsWithModal(modal, "open");
            });
        });

        // Обработчик клика по крестику
        if (closeSelector) {
            const close = modal.querySelector(closeSelector);

            close.addEventListener("click", () => {
                actionsWithModal(modal, "close", timeout);
            });
        }

        // Обработчик события по клику на черную прослойку
        if (closeOverOverlay) {
            modal.addEventListener("click", (e) => {

                if (!e.target.closest(".modal__window")) {
                    console.log("test");
                    actionsWithModal(modal, "close", timeout);
                } else{
                    console.log("test2")
                }
            });
        }
    }
    bindModal(".switch-btn", ".modal-edit", ".modal-edit .modal__close", "0", ".modal__overlay");
    bindModal(".comment-z", ".modal-comment", ".modal-comment .modal__close", "0", ".modal__overlay");
    // функция для показа модального окна через какое-то определенное время
    function showModalByTime(selector, time) {
        setTimeout(() => {
            const modal = document.querySelector(selector);
            modal.classList.add("show");
            document.body.classList.add("lock");
        }, time);
    }
};