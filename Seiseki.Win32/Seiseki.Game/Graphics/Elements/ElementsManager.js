const canvas_manager = require("./../../Graphics/Canvas/SetupCanvas")
const {render} = require("./../../Graphics/Elements/playfield")

function calcPlayfieldSize() {
    const x = 0.5 * window.innerWidth;
    const y = 0.5 * window.innerHeight;
    const w = Math.pow(x,1.05);
    const h = Math.pow(y,1.05)
    return {
        w:w,
        h:h,
        x:w/4.20,
        y:h/4.20
    }
}

render(canvas_manager.prepareCanvas(2))

module.exports.calcPlayfieldSize = calcPlayfieldSize;