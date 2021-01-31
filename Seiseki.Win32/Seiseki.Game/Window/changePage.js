const TransitionManager = require("./../Graphics/Transitions")
const effectsPlayer = require("./../Audio/effectsPlayer.js")
const music_audio_element = document.getElementById("music-track")
const { readFileSync } = require("fs")

function changeToSongSelection() {

    // songSelectionElementsAnimation.js 
    const all_css_imports = ['./../Graphics/Stylesheets/SongSelection.css']
    const all_js_imports = ['./../Graphics/Transitions/songSelectionElementsAnimation.js']

    for (let createdTags = 0; createdTags < all_css_imports.length; createdTags++) {
        let el = document.createElement("link")
        el.rel = "stylesheet"
        el.href = all_css_imports[createdTags]
        document.head.appendChild(el)
    }

    for (let createdTags = 0; createdTags < all_js_imports.length; createdTags++) {
        let el = document.createElement("script")
        el.src = all_js_imports[createdTags]
        document.head.appendChild(el)
    }

    music_audio_element.volume = music_audio_element.volume / 5;
    //TransitionManager.toLoadingIn()
    const pageContent = document.getElementById("screen-content")
    pageContent.innerHTML = readFileSync(__dirname + "/../Screens/SongSelection/content.html", "utf-8");
}

function changeToMainMenu() {
    const all_js_imports = ['./../Audio/utils/playMenuTheme.js', './../Input/Keybinds/MenuKeybinds.js', './../Graphics/AudioVisualizers.js', './../Graphics/Utils/nowPlayingPanel.js', './../Input/ButtonsManager/MenuButtons.js']

    for (let createdTags = 0; createdTags < all_js_imports.length; createdTags++) {
        let el = document.createElement("script")
        el.src = all_js_imports[createdTags]
        document.head.appendChild(el)
    }

    document.getElementById("screen-content").innerHTML = readFileSync(__dirname + "/../Screens/MainMenu/content.html", "utf-8");
    TransitionManager.menuIntro()
}

module.exports.changeToSongSelection = changeToSongSelection;
module.exports.changeToMainMenu = changeToMainMenu;