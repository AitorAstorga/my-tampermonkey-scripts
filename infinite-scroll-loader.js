// ==UserScript==
// @name         Infinite Scroll Loader
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Load an entire website!
// @author       Aitor Astorga Saez de Vicuña
// @match        YOUR_URL_HERE
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to scroll to the bottom
    function scrollToBottom() {
        window.scrollTo(0, document.body.scrollHeight);
    }

    // Interval for scrolling
    setInterval(scrollToBottom, 1000); // Scrolls every 1000 milliseconds (1 second)
})();
