const TransitionManager = require("./../Graphics/Transitions")
const effectsPlayer = require("./../Audio/effectsPlayer.js")
const music_audio_element = document.getElementById("music-track")
const { readFileSync } = require("fs")

function changeToSongSelection() {

    // songSelectionElementsAnimation.js 
    const all_css_imports = ['./../Graphics/Stylesheets/SongSelection.css']
    const all_js_imports = ['./../Graphics/Transitions/songSelectionElementsAnimation.js', './../Graphics/SongSelection/createBeatmapSelectors.js', './../Input/SongSelection/beatmapSelectors.js']
    const topbar_components = readFileSync(__dirname+"/../Screens/SongSelection/top-sidebar-components.html")
    const all_menu_imports = document.querySelectorAll('.menu-import');

    if (all_menu_imports.length !== 0) {
        for (let index = 0; index < all_menu_imports.length; index++) {
            all_menu_imports[index].remove()
        }
    }

    for (let createdTags = 0; createdTags < all_js_imports.length; createdTags++) {
        let el = document.createElement("script")
        el.defer;
        el.src = all_js_imports[createdTags]
        el.className = "song-selection-import";
        document.head.appendChild(el)
    }

    music_audio_element.volume = music_audio_element.volume / 5;
    const pageContent = document.getElementById("screen-content")


    TransitionManager.toLoadingIn().then(setTimeout(function() {
        document.getElementById("top-sidebar").insertAdjacentHTML("beforeEnd", topbar_components)
        pageContent.innerHTML = readFileSync(__dirname + "/../Screens/SongSelection/content.html", "utf-8")
        setTimeout(function() { createBeatmapSelectors().finally(setupSelectorsManager()) }, 150)
    }, 250)).finally(TransitionManager.toLoadingOut())
}


function changeToMainMenu() {
    const all_js_imports = ['./../Audio/utils/playMenuTheme.js', './../Input/Keybinds/MenuKeybinds.js', './../Graphics/MenuFlashes.js', './../Graphics/AudioVisualizers.js', './../Graphics/Utils/nowPlayingPanel.js', './../Input/ButtonsManager/MenuButtons.js']
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
        el.className = "menu-import";
        document.head.appendChild(el)
    }

    document.title = "Seiseki"
    document.getElementById("screen-content").innerHTML = readFileSync(__dirname + "/../Screens/MainMenu/content.html", "utf-8");
    TransitionManager.menuIntro()
}


module.exports.changeToSongSelection = changeToSongSelection;
module.exports.changeToMainMenu = changeToMainMenu;