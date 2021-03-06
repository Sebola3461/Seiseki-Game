module.exports = async function() {
    let overlay1 = document.getElementById("transitionOverlay1")
    let overlay2 = document.getElementById("transitionOverlay2")

    setTimeout(function() {
        overlay2.style.transition = "cubic-bezier(0.4, 0, 0.2, 1)"
        overlay2.style.transitionProperty = "all"
        overlay2.style.transitionDuration = "300ms"

        overlay1.style.transition = "cubic-bezier(0.4, 0, 0.2, 1)"
        overlay1.style.transitionProperty = "all"
        overlay1.style.transitionDuration = "350ms"
    }, 750)

    setTimeout(function() {
        overlay1.style.marginTop = "100vh";
        overlay2.style.marginTop = "100vh";
    }, 750)

    setTimeout(function() {
        overlay1.remove()
        overlay2.remove()
    }, 1200)
}