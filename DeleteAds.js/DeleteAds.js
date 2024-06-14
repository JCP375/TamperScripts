// ==UserScript==
// @name        DeleteDefinitive
// @namespace    http://tampermonkey.net/
// @version      2024-06-14
// @description  Delete all suscription model windows and popups from websites. Enjoy the content without interruptions! 🎉
// @author       You
// @match        http://*/*
// @match        https://*/*
// @icon        https://1000logos.net/wp-content/uploads/2022/03/Phantom-Thieves-of-Hearts-Logo.png
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    // Load jQuery
    var jqueryScript = document.createElement("script");
    jqueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    jqueryScript.onload = function() {
        console.log("jQuery loaded");
        loadToastr();
    };
    document.head.appendChild(jqueryScript);

    function loadToastr() {
        var toastrScript = document.createElement("script");
        toastrScript.src = "https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js";
        toastrScript.onload = function() {
            console.log("Toastr loaded");
            initialize();
        };
        document.head.appendChild(toastrScript);

        var toastrCss = document.createElement("link");
        toastrCss.rel = "stylesheet";
        toastrCss.href = "https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css";
        document.head.appendChild(toastrCss);
    }

    function initialize() {
        // Set body to scroll
        document.body.style.overflow = "scroll";

        toastr.info("Cargando pagina... 👌");

        // Define elements to search
        var elementsToSearch = [
            "#fides-overlay",
            "#onetrust-consent-sdk",
            "#pmConsentWall",
            "#didomi-popup"
        ];

        // Remove elements after a delay
        setTimeout(function () {
            removeElements(elementsToSearch);
            if (typeof toastr !== 'undefined') {
                toastr.success("De nada :)");
            } else {
                console.error("Toastr is not available.");
            }
        }, 3000);
    }

    function removeElements(elementsToSearch) {
        elementsToSearch.forEach(function (selector) {
            var elements = document.querySelectorAll(selector);
            if (elements.length > 0) {
                elements.forEach(function (element) {
                    element.remove();
                });
                console.log("Removed elements for selector: " + selector);
            } else {
                console.log("No elements found for selector: " + selector);
            }
        });
    }
})();
