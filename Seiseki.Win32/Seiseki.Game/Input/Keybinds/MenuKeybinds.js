const menu_play = document.getElementById("menu-game-title")

document.addEventListener("keydown", key => {
    if (key.altKey && key.key == "w") {
        rapidShow()
        np_pause.click()
    }

    if (key.altKey && key.key == "q") {
        rapidShow()
        np_last.click()
    }

    if (key.altKey && key.key == "e") {
        rapidShow()
        np_next.click()
    }
})

menu_play.addEventListener("click", () => {
    changeToSongSelection()
})