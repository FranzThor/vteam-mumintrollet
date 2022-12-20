/**
 * A function to wrap it all in.
 */
(function () {
    "use strict";

    /* *******************************************************************************
    * This code is made to add the active class on the right nav button.
    * If you add a button to the navbar you will need to add an id to the button
    * that symbolize the page the button is linked to, then add the same id to
    * the main container in the linked page to get the script to work on your
    * new button.
    ******************************************************************************* */

    const container = document.getElementsByClassName("container");     // selects the container to the page
    const id = container[0].id;                                         // the variable is given the containers id 

    const nav_buttons = document.getElementsByClassName("nav_btn");     // selects the navbar buttons

    /* This loop cycles all the nav buttons to match the container id with the button id */
    for (let i = 0; i < nav_buttons.length; i++) {

        /*  */
        if (id == nav_buttons[i].id) {

            /* Selects the button if active is not a class on the button */
            /* If the we just add the class it might be duplicated */
            if (!nav_buttons[i].className.includes("active")) {
                nav_buttons[i].className += " active";
            }

            /* This loop cycles the nav buttons to remove the active class on the buttons */
            /* not matched with the container */
            for (let y = 0; y < nav_buttons.length; y++) {
                if (!nav_buttons[y].id == nav_buttons[i].id) {
                    if (nav_buttons[y].className.includes("active")) {
                        nav_buttons[y].className -= " active";
                    }
                }
            }
        }
    }
    /* **************************************************************************** */

}());
