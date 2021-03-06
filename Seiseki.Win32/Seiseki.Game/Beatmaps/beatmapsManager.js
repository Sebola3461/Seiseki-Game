function startBeatmapsEngine(beatmapIndex, difficultyFilename) {
    // DisplayArtist - DisplayTitle | DisplayDifficultyName
    const diffData = require('./parseBeatmap')(beatmapIndex, difficultyFilename)
    document.title = document.title.replace("DisplayArtist", `${diffData.data.artist}`).replace("DisplayTitle", `${diffData.data.title}`).replace("DisplayArtist", `${diffData.data.diffname}`)
    return diffData;
}

module.exports.startBeatmapsEngine = startBeatmapsEngine;