async function setupMenuEffects() {
    const menuElements1 = document.querySelectorAll(".element2")
    menuElements1.forEach(element => {
        element.addEventListener("mouseenter", ev => {
            playEffect("element-hover2")
        })
        element.addEventListener("click", ev => {
            playEffect("element-click2")
        })
    })
}

module.exports.setupMenuEffects = setupMenuEffects;