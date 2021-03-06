/*
 * Copyright Sebola (c) 2021
 * See the licence.md file for more info
 */

const { BrowserWindow, app, dialog } = require('electron')
const {optimizeMinimizedWindow} = require("./../Seiseki.Game/Window/setupElements")

function launch(resolutionW, resolutionH, fullscreen) {
    const win = new BrowserWindow({
        title: 'Seiseki',
        width: resolutionW,
        height: resolutionH,
        fullscreen: fullscreen,
        backgroundColor: 'rgb(0,0,0)',
        frameless: true,
        show: false,
        opacity: 0.0,
        autoHideMenuBar: true,
        webPreferences: {
            scrollBounce: true,
            nodeIntegration: true
        }
    })

    win.webContents.frameRate = 240;

    // * Load the main file and launch the window
    win.loadFile(__dirname + "/../Seiseki.Game/Screens/MainMenu/content.html").then(() => {
        console.log(`${Date().slice(0,21)} - [Window Manager] Loaded the file MainMenu.html`);
    }).catch((e) => {

        // * Show error message if error
        dialog.showErrorBox("Oh no!", `An error has occurred:\n${e}`)
    })

    win.on("ready-to-show", () => {
        win.on("maximize", () => {
            win.focus()
        })
        let closed = false;
        win.show();
        win.focus();
        app.on("will-quit", () => { closed = true; })
        setInterval(function() {
            if (closed == true) return app.quit()
            if (win.getOpacity() == 1) return;
            win.setOpacity(win.getOpacity() + 0.1)
        }, 50)
    })

}

// * Disable for best input response
app.disableHardwareAcceleration()
app.setMaxListeners(100)

// * Show error message if error
app.on("renderer-process-crashed" | "gpu-process-crashed" | "abort", err => {
    dialog.showMessageBox("Cyberpunk 2077", `Seiseki crashed:\n${err}`).then(res => {
        if (res.response != 0) app.quit()
    })
})

// * Launch
app.whenReady().then(() => {
    launch(1280, 720, true)
    console.log(`${Date().slice(0,21)} - [Window Manager] Launched the window.`)
}).catch((e) => {

    // * Show error message if error
    dialog.showErrorBox("Oh no!", `An error has occurred:\n${e}`)
})