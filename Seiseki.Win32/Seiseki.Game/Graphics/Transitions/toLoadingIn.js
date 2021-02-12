/*
 * Copyright Sebola (c) 2021
 * See the licence.md file for more info
 */

module.exports = async function() {
    const overlay1 = document.createElement("div")
    const overlay2 = document.createElement("div")
    overlay1.id = "transitionOverlay1"
    overlay2.id = "transitionOverlay2"
    const overlays = [overlay1, overlay2]

    overlay1.style.transition = "cubic-bezier(0.4, 0, 0.2, 1)"
    overlay1.style.transitionProperty = "all"
    overlay1.style.transitionDuration = "300ms"

    overlay2.style.transition = "cubic-bezier(0.4, 0, 0.2, 1)"
    overlay2.style.transitionProperty = "all"
    overlay2.style.transitionDuration = "350ms"

    overlays.forEach(el => {
        el.setAttribute('class', 'transitionElement')
        document.body.appendChild(el)
    })
    console.log("[Transition] Started the page transition.")

    // * Start moving the transition blocks
    setTimeout(function() {
        overlay1.style.top = "0";
        overlay2.style.top = "0";

        // * Change the background color to black
        setTimeout(function() {
            // * Add the "Loading" text on the black overlay
            setTimeout(function() {
                overlay2.innerHTML = "Loading"
            }, 800)
        }, 500)
    }, 50)
}