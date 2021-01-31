function startDrawing() {
    const canvas = document.getElementById("audio-bars-visualizer")
    canvas.width = canvas.getBoundingClientRect().width
    canvas.height = (canvas.getBoundingClientRect().height / 5)
    setupCanvas(canvas)
    const Wave = require("@foobar404/wave")
    let wave = new Wave();
    wave.fromElement("music-track", "audio-bars-visualizer", {
        stroke: 3,
        type: "bars",
        colors: ["rgb(172, 184, 207)"]
    });
}

function setupCanvas(canvas) {
    var dpr = window.devicePixelRatio || 1;
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    var ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
}

module.exports.startDrawing = startDrawing;
module.exports.startDrawing = startDrawing;