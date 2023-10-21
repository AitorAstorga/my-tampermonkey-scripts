// ==UserScript==
// @name         ChatGPT Width Expander
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Expand the width of the chat
// @author       Aitor Astorga Saez de Vicuña
// @match        https://chat.openai.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        .gizmo\\:xl\\:max-w-\\[48rem\\] {
            max-width: 90% !important;
        }
    `);

})();
