var {readdirSync} = require("fs")

function playEffect(effect_name) {
    let effect_audio = new Audio(`../Resources/audio/${effect_name}.mp3`)
    effect_audio.volume = effect.volume;
    effect_audio.play()
    effect_audio.onended = () => {
        effect_audio = void{};
    }
}

module.exports.playEffect = playEffect;