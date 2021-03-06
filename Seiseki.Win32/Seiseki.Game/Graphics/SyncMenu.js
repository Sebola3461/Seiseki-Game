// Sync menu to current beatmap bpm
function syncMenuEffects() {
    const { parse } = require('ini')
    const { readFileSync } = require('fs')
    const currentMusicData = parse(readFileSync(music.getAttribute("music-data-archive"), "utf-8"));
    const musicBpmPointsValue = currentMusicData.timming.bpmPointsValue.split(',')
    const musicBpmPointsOffset = currentMusicData.timming.bpmPointsOffset.split(',')
    setTimeout(function(){
        document.getElementById("menu-help-title").style.animationDuration = `${calculateBpmMs(musicBpmPointsValue[0])*2}s`
    },musicBpmPointsOffset[0])
}

function calculateBpmMs(bpm) {
    const ms = 60 / bpm * 1/1;
    return ms;
}