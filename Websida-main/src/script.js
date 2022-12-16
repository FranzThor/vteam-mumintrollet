/**
 * A function to wrap it all in.
 */
(function () {
    "use strict";

    const container = document.getElementsByClassName("container");
    const id = container[0].id;

    const btn_home = document.getElementById("btn_home");
    const btn_history = document.getElementById("btn_history");
    console.log(id, btn_home);

    if (id == "home") {
        if (!btn_home.className.includes(" active")) {
            btn_home.className += " active";
        }
        if (btn_history.className.includes(" active")) {
            btn_history.className -= " active";
        }
    } else {
        console.log("no");
    }

    if (id == "history") {
        if (!btn_history.className.includes(" active")) {
            btn_history.className += " active";
        }
        if (btn_home.className.includes(" active")) {
            btn_home.className -= " active";
        }
    } else {
        console.log("no");
    }

}());
