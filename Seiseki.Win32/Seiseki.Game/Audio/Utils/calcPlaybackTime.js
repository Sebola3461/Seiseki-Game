function calcTimebarSize() {
    let duration = music.duration;
    let currentTime = music.currentTime;

    return ((currentTime / duration) * 100).toFixed(2);
}