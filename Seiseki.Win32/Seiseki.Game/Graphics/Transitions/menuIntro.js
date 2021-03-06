/*
 * Copyright Sebola (c) 2021
 * See the licence.md file for more info
 */

// * Make the initial transition on open the game or change to menu

module.exports = function() {
    const menu = document.body;
    const menuTitle = document.getElementById("menu-title-text")
    const menuHelpTitle = document.getElementById("menu-help-title")
    const menuFirstFadeOut = document.getElementById("menu-fade-transition");

    try {
        menuFirstFadeOut.style.transition = "linear 250ms";
        menuFirstFadeOut.style.backgroundColor = "transparent";
        setTimeout(function() { menuFirstFadeOut.remove() }, 255);
    } catch (e) {}

    menuTitle.style.transition = "cubic-bezier(0.175, 0.885, 0.32, 1.275) 400ms";
    menuHelpTitle.style.transition = "linear 200ms";
    menuHelpTitle.style.opacity = "1";
    menuHelpTitle.style.display = "block";

}