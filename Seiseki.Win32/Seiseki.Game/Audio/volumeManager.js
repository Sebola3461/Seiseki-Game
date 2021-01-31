const music = document.getElementById("music-track");
const effect = document.getElementById("effect-track");

/*
* Volume manager
TODO: make a best audio sync 
 */
function musicVolumeUp() {
    if (music.volume == 1) return;
    let audioVolume = parseFloat(music.volume) + 0.05;
    music.volume = audioVolume.toFixed(4);
    return audioVolume.toFixed(4);
}

function effectVolumeUp() {
    if (effect.volume == 1) return;
    let audioVolume = parseFloat(effect.volume) + 0.05;
    effect.volume = audioVolume.toFixed(4);
    return audioVolume.toFixed(4);
}

function musicVolumeDown() {
    if (music.volume == 0.0) return music.volume = 0;
    let audioVolume = parseFloat(music.volume) - 0.05;
    music.volume = audioVolume.toFixed(4);
    return audioVolume.toFixed(4);
}

function effectVolumeDown() {
    if (effect.volume == 0.0) return effect.volume = 0;
    let audioVolume = parseFloat(effect.volume) - 0.05;
    effect.volume = audioVolume.toFixed(4);
    return audioVolume.toFixed(4);
}

module.exports.musicVolumeUp = musicVolumeUp;
module.exports.effectVolumeUp = effectVolumeUp;
module.exports.musicVolumeDown = musicVolumeDown;
module.exports.effectVolumeDown = effectVolumeDown;