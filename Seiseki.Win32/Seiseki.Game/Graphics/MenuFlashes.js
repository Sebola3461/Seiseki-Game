function initializeMenuFlashesListener() {
    const { parse } = require('ini')
    const { readFileSync } = require('fs')
    const currentMusicData = parse(readFileSync(music.getAttribute("music-data-archive"), "utf-8"));
    const musicBpmPointsValue = currentMusicData.timming.bpmPointsValue.split(',')
    const musicbpmPointsOffset = currentMusicData.timming.bpmPointsOffset.split(',')

    function checkIfSpecialTime() {
        for (let index = 0; index < currentMusicData.timming.specialTimesStarts.split(',').length; index++) {
            if (music.currentTime.toString().includes(currentMusicData.timming.specialTimesStarts.split(',')[index])) {
                startSpecialTimeEffects()
            }
        }
    }

    setInterval(checkIfSpecialTime, 100)
}

function startSpecialTimeEffects() {

}

module.exports.initializeMenuFlashesListener = initializeMenuFlashesListener;