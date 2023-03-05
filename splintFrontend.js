// import Header from './dist/header.js';
// import openSidebar from "./dist/header.js";
// import closeSidebar from "./dist/header.js";



// import  from './modules/theme/themeController';

function require(script) {
    $.ajax({
        url: script,
        dataType: "script",
        async: false,           // <-- This is the key
        success: function () {
            // all good...
        },
        error: function () {
            throw new Error("Could not load script " + script);
        }
    });
}

import "./dist/header.js";
import "./components/header/headerController.js";