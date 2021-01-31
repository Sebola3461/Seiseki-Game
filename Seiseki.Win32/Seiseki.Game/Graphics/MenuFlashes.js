const audioIllustrator = require("audio-illustrator")

function startListener() {

    const illustrator = new audioIllustrator.default()
    navigator.mediaDevices.getUserMedia({
        audio: true
    }).then(function(stream) {
        illustrator.connect(stream.getAudioTracks()[0])
    })
    const startListenerLoop = () => {
        illustrator.startLoop(startListenerLoop)
        const audioData = illustrator.getData(1)
        console.log(audioData)
    }
}

module.exports.startListener = startListener;