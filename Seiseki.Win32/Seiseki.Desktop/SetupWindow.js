/*
 * Copyright Sebola (c) 2021
 * See the licence.md file for more info
 */

const { BrowserWindow, app, dialog } = require('electron')

function launch(resolutionW, resolutionH, fullscreen) {
    const win = new BrowserWindow({
        title: 'Seiseki',
        width: resolutionW,
        height: resolutionH,
        fullscreen: fullscreen,
        backgroundColor: 'rgb(0,0,0)',
        frameless: true,
        //autoHideMenuBar: true,
        webPreferences: {
            scrollBounce: true,
            nodeIntegration: true
        }
    })

    win.webContents.frameRate = 240;

    // * Load the main file and launch the window
    win.loadFile(__dirname + "/../Seiseki.Game/Screens/Screen.html").then(() => {
        console.log(`${Date().slice(0,21)} - [Window Manager] Loaded the file MainMenu.html`);
    }).catch((e) => {

        // * Show error message if error
        dialog.showErrorBox("Oh no!", `An error has occurred:\n${e}`)
    })
}

// * Disable for best input response
app.disableHardwareAcceleration()

// * Show error message if error
app.on("renderer-process-crashed" || "gpu-process-crashed", err => {
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