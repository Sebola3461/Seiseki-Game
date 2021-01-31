const volumeDashboardManager = require("./../Audio/Utils/volumeDashboard.js")
const volumeManager = require("./../Audio/volumeManager.js")

// * Make a keybind manager for menu
document.addEventListener("keydown", key => {
    console.log(key.key)

    // * Music volume up keybind
    if (key.altKey && key.key == "ArrowUp") {
        volumeDashboardManager.showAudioDashboard()
        volumeManager.musicVolumeUp();
        keyupAction = void {};
    }

    // * Music volume down keybind
    if (key.altKey && key.key == "ArrowDown") {
        currentAltCombo = "ArrowDown";
        volumeDashboardManager.showAudioDashboard()
        volumeManager.musicVolumeDown();
        keyupAction = void {};
    }

    // * Effect volume up keybind 
    if (key.altKey && key.key == "ArrowRight") {
        volumeDashboardManager.showAudioDashboard()
        volumeManager.effectVolumeUp();
        keyupAction = void {};
    }

    // * Effect volume down keybind
    if (key.altKey && key.key == "ArrowLeft") {
        volumeDashboardManager.showAudioDashboard()
        volumeManager.effectVolumeDown();
        keyupAction = void {};

    }
})

/*
 * This part write the configs of the audio volume too
 */
document.addEventListener("keyup", key => {
    down = false;
    console.log(key.altKey)
    if (!key.altKey) {
        keyupAction = setTimeout(function() { volumeDashboardManager.hideAudioDashboard() }, 5000);
        try {
            keyupAction()
        } catch (e) {
            void {};
        }
    }
})

function keyupAction() {
    setTimeout(function() { volumeDashboardManager.hideAudioDashboard() }, 5000);
}