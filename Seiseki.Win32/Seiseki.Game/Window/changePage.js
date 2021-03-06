const TransitionManager = require("./../Graphics/Transitions")
const effectsPlayer = require("./../Audio/effectsPlayer.js")
const music_audio_element = document.getElementById("music-track")
const { readFileSync } = require("fs")

function changeToSongSelection() {
    document.body.setAttribute("page", "1")
    const all_css_imports = ['./../Graphics/Stylesheets/SongSelection.css']
    const all_js_imports = ['./../Graphics/SongSelection/createBeatmapSelectors.js', './../Input/SongSelection/beatmapSelectors.js']
    const all_menu_imports = document.querySelectorAll('.menu-import');

    if (all_menu_imports.length !== 0) {
        for (let index = 0; index < all_menu_imports.length; index++) {
            all_menu_imports[index].remove()
        }
    }

    for (let index = 0; index < all_css_imports.length; index++) {
        let el = document.createElement("link")
        el.setAttribute("rel", "stylesheet");
        el.href = all_css_imports[index]
        el.className = "song-selection-import";
        document.head.appendChild(el)
    }

    for (let createdTags = 0; createdTags < all_js_imports.length; createdTags++) {
        let el = document.createElement("script")
        el.defer;
        el.src = all_js_imports[createdTags]
        el.className = "song-selection-import";
        document.head.appendChild(el)
    }
    const pageContent = document.getElementById("screen-content")

    TransitionManager.toLoadingIn().then(setTimeout(function() {
        document.getElementById("top-sidebar").insertAdjacentHTML("beforeEnd", readFileSync(__dirname+ "/SongSelection/sidebars-content.html", "utf-8"))
        pageContent.innerHTML = readFileSync(__dirname + "/../Screens/SongSelection/content.html", "utf-8")
        setTimeout(function() { createBeatmapSelectors().finally(setupSelectorsManager().finally(TransitionManager.toLoadingOut())) }, 150)
    }, 250))
}


async function menuFirstEnter() {
document.body.setAttribute("page", "0")
    const all_js_imports = ['./../Input/Keybinds/MenuKeybinds.js', './../Graphics/AudioVisualizers.js', './../Graphics/Utils/nowPlayingPanel.js', './../Input/ButtonsManager/MenuButtons.js']
    const all_song_selection_imports = document.querySelectorAll('.song-selection-import');
    const all_menu_imports = document.querySelectorAll('.menu-import');

    for (let createdTags = 0; createdTags < all_js_imports.length; createdTags++) {
        let el = document.createElement("script")
        el.src = all_js_imports[createdTags]
        el.defer;
        el.className = "menu-import";
        document.head.appendChild(el)
    }
    document.title = "Seiseki"
    document.getElementById("screen-content").innerHTML = readFileSync(__dirname + "/../Screens/MainMenu/content.html", "utf-8");
    setupMenuEffects()
    TransitionManager.menuIntro()
}

function changeToMainMenu() {
    document.body.setAttribute("page", "0")
    TransitionManager.toLoadingIn().finally(setTimeout(function(){changeContent().finally(setupMenuEffects(), TransitionManager.toLoadingOut())},250))
    const all_js_imports = ['./../Input/Keybinds/MenuKeybinds.js', './../Graphics/MenuFlashes.js', './../Graphics/AudioVisualizers.js', './../Graphics/Utils/nowPlayingPanel.js', './../Input/ButtonsManager/MenuButtons.js']
    const all_song_selection_imports = document.querySelectorAll('.song-selection-import');
    const all_menu_imports = document.querySelectorAll('.menu-import');

    if (all_menu_imports.length != 0) {
        if (all_song_selection_imports.length !== 0) {
            for (let index = 0; index < all_song_selection_imports.length; index++) {
                all_song_selection_imports[index].remove()
            }
        }
    }

    for (let createdTags = 0; createdTags < all_js_imports.length; createdTags++) {
        let el = document.createElement("script")
        el.src = all_js_imports[createdTags]
        el.defer;
        el.className = "menu-import";
        document.head.appendChild(el)
    }

    document.title = "Seiseki"
    async function changeContent() {
        document.getElementsByClassName("top-sidebar-options")[0].remove()
        document.getElementById("screen-content").innerHTML = readFileSync(__dirname + "/../Screens/MainMenu/content.html", "utf-8");
        document.getElementById("menu-title-text").style.fontSize = "100px";
    }
}

function changeToGameScreen(beatmapIndex, selectorIndex) {
    document.body.setAttribute("page", "2")
    TransitionManager.toLoadingIn()
    document.getElementById("screen-content").innerHTML = readFileSync(__dirname + "/../Screens/inGameScreens/standard.html", "utf-8");

}

module.exports.changeToSongSelection = changeToSongSelection;
module.exports.menuFirstEnter = menuFirstEnter;