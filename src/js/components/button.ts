"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

export  function submitButton(data) {
    var subB = {
        type: 'submit',
        textContent: 'Valider',
        id: 'login-submit-button',
    };
    return ("\n    <button id=\"".concat(data.id, "\" type =\"").concat(data.type, "\"> ").concat(data.textContent, " </button>\n     "));
    
};

export function logoutButton(data) {
    var lgoB = {
        type: 'logout',
        textContent: 'Quitter',
        id: 'log-out-button',
    };
    return ("\n        <button id=\"".concat(data.id, "\" type =\"").concat(data.type, "\"> ").concat(data.textcontent, " </button>\n        "));
    
};

export function outButton(data) {
    var oB = {
        type: 'logoff',
        textContent: 'Fermer',
        id: 'log-off-button',
    };
    return ("\n        <button id=\"".concat(data.id, "\" type =\"").concat(data.type, "\"> ").concat(data.textcontent, " </button>\n        "));
    
};


export const button = function (data, type, id) {
  return 
  `
    <button class="button" id"${id} type="${type}">${data}</button>

    `;
    
};


