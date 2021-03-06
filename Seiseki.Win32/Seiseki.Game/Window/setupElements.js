const {animateWorkInProgressIntro} = require("./../Graphics/Animations/introAnimations")
function setupElement() {
    startAutoQueue().finally(menuFirstEnter().finally(startQueue().then(animateWorkInProgressIntro().then(syncMenuEffects)))).catch(e => {
        console.log(e)
    })
    window.onfocus = () => { restoreContent( )}
    window.onblur = () => { optimizeMinimizedWindow() };
}

function restoreContent() {
    document.getElementsByTagName("html")[0].style.background = "none"
    document.body.style.display = "block";
}

function optimizeMinimizedWindow() {
    document.getElementsByTagName("html")[0].style.background = "#000"
    document.body.style.display = "none"
}

module.exports.optimizeMinimizedWindow = optimizeMinimizedWindow;