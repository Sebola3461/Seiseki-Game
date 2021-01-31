const music_track = document.getElementById("music-track");
const effect_track = document.getElementById("effect-track");
const music_volume_bar = document.getElementById("music_volume_bar")
const effect_volume_bar = document.getElementById("effect_volume_bar")
const music_volume = document.getElementById("music_volume")
const effect_volume = document.getElementById("effect_volume")

music_track.addEventListener("volumechange", ev => {
    if (music_track.volume == 1.0) {
        music_volume_bar.style.width = `100%`;
        music_volume.innerText = `100%`;
        return;
    } else {
        music_volume_bar.style.width = `${music_track.volume.toFixed(2).slice(2)}%`;
        music_volume.innerText = `${music_track.volume.toFixed(2).slice(2)}%`;
        return;
    }
})

effect_track.addEventListener("volumechange", ev => {
    if (effect_track.volume == 1.0) {
        effect_volume_bar.style.width = `100%`;
        effect_volume.innerText = `100%`;
        return;
    } else {
        effect_volume_bar.style.width = `${effect_track.volume.toFixed(2).slice(2)}%`;
        effect_volume.innerText = `${effect_track.volume.toFixed(2).slice(2)}%`;
        return;
    }
})