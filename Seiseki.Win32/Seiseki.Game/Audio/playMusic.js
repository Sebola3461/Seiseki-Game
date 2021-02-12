var tracks = [];
var currentTrack = 0;
const audio = document.getElementById("music-track")
const audioVisualizers = require("../Graphics/AudioVisualizers")
const beatmapsFolder = "D:/Seiseki/Songs";

function addToQueue(audio_src) {
    tracks = tracks.concat(audio_src)
    return tracks;
}

function startQueue() {
    audio.src = tracks[0];
    audio.play()
    currentTrack = 0;
    setNowPlayingInfo()
    npBarUpdate()

    try {
        audioVisualizers.startDrawing()
    } catch (e) {
        return;
    }

    return audio;
}

function skipTrack() {
    currentTrack++
    audio.src = tracks[currentTrack];
    audio.oncanplay = () => {
        audio.play()
    }
    updateNpData()
}

function backTrack() {
    currentTrack--
    audio.src = tracks[currentTrack];
    audio.oncanplay = () => {
        audio.play()
    }
    updateNpData()
}

function pauseTrack() {
    audio.pause()
}

function resumeTrack() {
    audio.play()
}

// * add the audio info for the audio tag
audio.onended = () => {
    skipTrack()
}

function updateNpData() {
    const ini = require("ini")
    const { readFileSync, readdirSync } = require("fs")
    const all_beatmaps = readdirSync(beatmapsFolder, "utf-8")

    audio.setAttribute("index", currentTrack)
    audio.setAttribute("music-data-archive", `${beatmapsFolder}/${all_beatmaps[currentTrack]}/data.ini`, "utf-8")
    audio.setAttribute("music-title", ini.parse(readFileSync(`${beatmapsFolder}/${all_beatmaps[currentTrack]}/data.ini`, "utf-8")).data.title)
    audio.setAttribute("music-artist", ini.parse(readFileSync(`${beatmapsFolder}/${all_beatmaps[currentTrack]}/data.ini`, "utf-8")).data.artist)
    audio.setAttribute("thumbnail", `${beatmapsFolder}/${all_beatmaps[currentTrack]}/` + ini.parse(readFileSync(`${beatmapsFolder}/${all_beatmaps[currentTrack]}/data.ini`, "utf-8")).data.thumbnail)
    setNowPlayingInfo()
}

function startAutoQueue() {
    const ini = require("ini")
    const { readFileSync, readdirSync } = require("fs")
    const all_beatmaps = readdirSync(beatmapsFolder, "utf-8")

    currentTrack = 0;
    audio.setAttribute("index", currentTrack)
    audio.setAttribute("music-data-archive", `${beatmapsFolder}/${all_beatmaps[0]}/data.ini`, "utf-8")
    audio.setAttribute("music-title", ini.parse(readFileSync(`${beatmapsFolder}/${all_beatmaps[0]}/data.ini`, "utf-8")).data.title)
    audio.setAttribute("music-artist", ini.parse(readFileSync(`${beatmapsFolder}/${all_beatmaps[0]}/data.ini`, "utf-8")).data.artist)
    audio.setAttribute("thumbnail", `${beatmapsFolder}/${all_beatmaps[0]}/` + ini.parse(readFileSync(`${beatmapsFolder}/${all_beatmaps[0]}/data.ini`, "utf-8")).data.thumbnail)

    for (let current_beatmap = 0; current_beatmap < all_beatmaps.length; current_beatmap++) {
        const current_beatmap_info = ini.parse(readFileSync(`${beatmapsFolder}/${all_beatmaps[current_beatmap]}/data.ini`, "utf-8"))
        addToQueue(`${beatmapsFolder}/${all_beatmaps[current_beatmap]}/${current_beatmap_info.data.audio}`)
    }
}


module.exports.tracks = tracks;
module.exports.currentTrack = currentTrack;
module.exports.addToQueue = addToQueue;
module.exports.startQueue = startQueue;
module.exports.skipTrack = skipTrack;
module.exports.startAutoQueue = startAutoQueue;
module.exports.updateNpData = updateNpData;
module.exports.pauseTrack = pauseTrack;
module.exports.resumeTrack = resumeTrack;
module.exports.backTrack = backTrack;