var np_button = document.getElementById("nowplaying-options-button")
var np_panel = document.getElementById("now-playing-panel-wrapper")
var np_panel_manager = require("./../Graphics/Utils/nowPlayingPanel.js")

np_button.addEventListener("click", function() {
    if (np_panel.style.left != "2.5vw") {
        np_panel_manager.showPanel()
    } else {
        np_panel_manager.hidePanel()
    }
}, true)

// * Now playing panel buttons
var np_last = document.getElementById("np-last")
var np_pause = document.getElementById("np-pause")
var np_next = document.getElementById("np-next")

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