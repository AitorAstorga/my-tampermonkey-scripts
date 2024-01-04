// ==UserScript==
// @name         ChatGPT Width Expander
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Always expand the width of the chat to 90%
// @author       Aitor Astorga Saez de Vicuña
// @match        https://chat.openai.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to modify the styles of the specified elements
    function changeStyles(elements, styleProperties) {
        for (const element of elements) {
            for (const property in styleProperties) {
                element.style[property] = styleProperties[property];
            }
        }
    }

    // Function to apply custom styles when the page content is loaded
    function applyCustomStyles() {
        // Target elements with the specific class
        const elements = document.querySelectorAll('.xl\\:max-w-\\[48rem\\]');

        const customStyles = {
            'max-width': '90%'
        };

        changeStyles(elements, customStyles);
    }

    // Apply custom styles when the page is loaded or updated
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                // Apply custom styles every time new nodes are added to the DOM
                applyCustomStyles();
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Apply custom styles immediately for the elements already present in the DOM
    applyCustomStyles();
})();
