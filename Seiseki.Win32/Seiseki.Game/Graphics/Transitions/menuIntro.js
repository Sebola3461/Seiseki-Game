/*
 * Copyright Sebola (c) 2021
 * See the licence.md file for more info
 */

// * Make the initial transition on open the game or change to menu

module.exports = function() {
    const menu = document.body;
    const menuSidebar = [document.getElementsByClassName("sidebar")[0], document.getElementsByClassName("sidebar")[1]]
    const menuTitle = document.getElementById("menu-title-text")
    const menuHelpTitle = document.getElementById("menu-help-title")
    const menuFirstFadeOut = document.getElementById("menu-fade-transition");

    try {
        menuFirstFadeOut.style.transition = "linear 250ms";
        menuFirstFadeOut.style.backgroundColor = "transparent";
        setTimeout(function() { menuFirstFadeOut.remove() }, 255);
    } catch (e) {}

    menuSidebar[0].style.transition = "cubic-bezier(0.165, 0.84, 0.44, 1) 400ms";
    menuSidebar[1].style.transition = "cubic-bezier(0.165, 0.84, 0.44, 1) 400ms";

    menuTitle.style.transition = "cubic-bezier(0.175, 0.885, 0.32, 1.275) 400ms";
    menuHelpTitle.style.transition = "linear 200ms";

    setTimeout(function() {
        setTimeout(function() {
            menuSidebar.forEach(el => {
                el.style.margin = "0";
                menuTitle.style.fontSize = "100px"
            })
            setTimeout(function() {
                menuHelpTitle.style.opacity = "1";
                menuHelpTitle.style.display = "block";
            }, 5000)
        }, 401)
    }, 400)
}