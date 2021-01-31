const musicPlayer = require("./../Audio/playMusic")

function playTheme() {
    musicPlayer.addToQueue("./../Resources/audio/menu-theme.mp3")
    musicPlayer.startQueue()
}

module.exports.playTheme = playTheme;