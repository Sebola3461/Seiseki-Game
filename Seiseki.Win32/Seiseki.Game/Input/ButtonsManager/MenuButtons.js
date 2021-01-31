const np_button = document.getElementById("nowplaying-options-button")
const np_panel = document.getElementById("now-playing-panel-wrapper")
const np_panel_manager = require("./../Graphics/Utils/nowPlayingPanel.js")

np_button.addEventListener("click", function() {
    console.log("a")
    if (np_panel.style.left != "2.5vw") {
        np_panel_manager.showPanel()
    } else {
        np_panel_manager.hidePanel()
    }
}, true)

// * Now playing panel buttons
const np_last = document.getElementById("np-last")
const np_pause = document.getElementById("np-pause")
const np_next = document.getElementById("np-next")

np_pause.addEventListener("click", () => {
    let act = np_pause.getAttribute("act");
    if (act == "pause") {
        np_pause.setAttribute("act", "play")
        np_pause.style.backgroundImage = "url('./../Resources/svg/audio-play.svg')"
        pauseTrack()
    }

    if (act != "pause") {
        np_pause.setAttribute("act", "pause")
        np_pause.style.backgroundImage = "url('./../Resources/svg/audio-pause.svg')"
        resumeTrack()
    }
})