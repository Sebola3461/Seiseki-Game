const {note_image} = require("./../../Graphics/Elements/normalnote");

function render(ctx) {
    const pf = calcPlayfieldSize();
    let note_spacing1 = pf.x
    for (let index = 0; index < 4;index++) {
        ctx.drawImage(note_image,note_spacing1,pf.y*1.5,80,80)
        note_spacing1 = note_spacing1+200.0-20;
    }
    let note_spacing2 = note_spacing1/375*100
    console.log(note_spacing2)
    for (let index = 0; index < 3;index++) {
        ctx.drawImage(note_image,note_spacing2,pf.y*4.5,80,80)
        note_spacing2 = note_spacing2+200.0-10.5;
    }
}

module.exports.render = render;