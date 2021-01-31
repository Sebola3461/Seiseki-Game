const current_track = document.getElementById("music-track")
const npTrackPosition = document.getElementById("track-progress")

function setNowPlayingInfo() {
    const panel_track_title = document.getElementById("now-playing-title")
    const panel_track_artist = document.getElementById("now-playing-artist")
    updateNpImage()
    panel_track_title.innerText = current_track.getAttribute("music-title")
    panel_track_artist.innerText = current_track.getAttribute("music-artist")
}

function updateNpImage() {
    const nowPlaying_background = document.getElementById("now-playing-background")
    nowPlaying_background.style.backgroundImage = `url("${current_track.getAttribute('thumbnail')}")`
}

function showPanel() {
    const nowPlaying_panel = document.getElementById("now-playing-panel-wrapper")
    nowPlaying_panel.style.left = "2.5vw"
}

function hidePanel() {
    const nowPlaying_panel = document.getElementById("now-playing-panel-wrapper")
    nowPlaying_panel.style.left = "-25vw"
}

function rapidShow() {
    showPanel()
    setTimeout(function() { hidePanel() }, 2000)
}

function npBarUpdate() {
    setInterval(function() {
        npTrackPosition.style.width = `${calcTimebarSize()}%`
        console.log("updating the track-position bar")
    }, 1000)
}

module.exports.setNowPlayingInfo = setNowPlayingInfo;
module.exports.showPanel = showPanel;
module.exports.hidePanel = hidePanel;
module.exports.rapidShow = rapidShow;
module.exports.npBarUpdate = npBarUpdate;