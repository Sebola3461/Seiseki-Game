module.exports = function(beatmapIndex, difficultyFilename) {
    const {readFileSync, readdirSync} = require("fs")
    const {parse} = require("ini")
    const songs_folder = readdirSync("d:/Seiseki/Songs/", "utf-8")
    const selected_diff_data = parse(readFileSync(`D:/Seiseki/Songs/${songs_folder[beatmapIndex]}/${difficultyFilename}`, "utf-8"))

    return selected_diff_data;
}