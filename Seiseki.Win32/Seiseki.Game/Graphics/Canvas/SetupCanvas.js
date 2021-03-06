const layers = document.querySelectorAll('canvas')

function prepareCanvas(index) {
        const dpr = window.devicePixelRatio || 1;
        const rect = layers[index].getBoundingClientRect();
        layers[index].width = rect.width * dpr;
        layers[index].height = rect.height * dpr;
        const ctx = layers[index].getContext('2d');
        ctx.scale(dpr, dpr);
        return ctx;
}

module.exports.prepareCanvas = prepareCanvas;