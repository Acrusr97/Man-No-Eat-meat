"use strict";
/*const LSUBOUTTON =document.querySelectorById('login-submit-button');
const LGOBUTTON =document.querySelectorById('log-out-button');
const LGFBUTTON =document.querySelectorById('log-off-button');*/
Object.defineProperty(exports, "__esModule", { value: true });
var input_js_1 = require("./input.js");
var button_js_1 = require("./button.js");
function default_1(data) {
    return ("\n        <form id=\"".concat(data.id, "\" class\"form\">\n          <section>\n               ").concat(data.inputs.map(function (el, index) { return (0, input_js_1.default)(el); }).join(''), "\n\n         </section>\n          <section>\n              ").concat(data.inputs.map(function (el, index) { return (0, button_js_1.submitButton)(el); }).join(''), "\n\n          </section>\n\n        </form>\n        "));
}
exports.default = default_1;
