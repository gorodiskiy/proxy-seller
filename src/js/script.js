'use strict';
import { activeServices } from "./components/activeServices";
import { profileChanges } from "./components/profileChanges";
import { tabs } from "./components/tabs";
import { modals } from "./components/modal";
import { windowListener } from "./components/windowListener";
import { checkedModal } from "./components/allChecked";


window.addEventListener('DOMContentLoaded', () => {
    tabs(".cabinet__global-list", ".cabinet__global-tab", ".cabinet__content-item", ".cabinet__global-tab--active");
    tabs(".profile .cabinet__content-tabs", ".cabinet__content-tab", ".profile .profile__content-item", ".cabinet__content-tab--active");
    tabs(".current-orders .cabinet__content-tabs", ".cabinet__content-tab", ".current-orders .current-orders__content-item", ".cabinet__content-tab--active");
    activeServices();
    profileChanges();
    windowListener();
    modals();
    checkedModal();
});



// function detailFormatter(index, row) {
//     var html = []
//     $.each(row, function (key, value) {
//       html.push('<p><b>' + key + ':</b> ' + value + '</p>')
//     })
//     return html.join('')
//   }