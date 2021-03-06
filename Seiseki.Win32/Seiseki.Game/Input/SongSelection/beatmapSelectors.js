async function setupSelectorsManager() {
    const beatmap_selector = document.getElementsByClassName("beatmap-selector-content")

    for (let index = 0; index < beatmap_selector.length; index++) {
        beatmap_selector[index].addEventListener("click", ev => {
            ev.target.scroll()
            createDiffsSelectorsFrom(ev.target.getAttribute("tabindex"))
        })
        beatmap_selector[index].addEventListener("mouseenter", ev => {
            playEffect("element-hover")
        })
    }
}

module.exports.setupSelectorsManager = setupSelectorsManager;