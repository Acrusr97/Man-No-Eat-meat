"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.outButton = exports.logoutButton = exports.submitButton = void 0;
function submitButton(data) {
    var subB = {
        type: 'submit',
        textContent: 'Valider',
        id: 'login-submit-button',
    };
    return ("\n    <button id=\"".concat(data.id, "\" type =\"").concat(data.type, "\"> ").concat(data.textContent, " </button>\n     "));
}
exports.submitButton = submitButton;
function logoutButton(data) {
    var lgoB = {
        type: 'logout',
        textContent: 'Quitter',
        id: 'log-out-button',
    };
    return ("\n        <button id=\"".concat(data.id, "\" type =\"").concat(data.type, "\"> ").concat(data.textcontent, " </button>\n        "));
}
exports.logoutButton = logoutButton;
function outButton(data) {
    var oB = {
        type: 'logoff',
        textContent: 'Fermer',
        id: 'log-off-button',
    };
    return ("\n        <button id=\"".concat(data.id, "\" type =\"").concat(data.type, "\"> ").concat(data.textcontent, " </button>\n        "));
}
exports.outButton = outButton;
