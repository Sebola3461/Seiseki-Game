var { readdirSync } = require("fs")
var { parse } = require("ini")
var beatmaps_folder = "D:/Seiseki/Songs/";
var all_beatmaps_folders = readdirSync(beatmaps_folder, "utf-8");

function shortByDate() {
    all_beatmaps_folders.sort(function(a, b) {
        let beatmap1 = a.toUpperCase().slice(0,6);
        let beatmap2 = b.toUpperCase().slice(0,6);
        return (beatmap1 < beatmap2) ? -1 : (beatmap1 > beatmap2) ? 1 : 0;
    });
}

function shortByAlphabeticArtist() {
    all_beatmaps_folders.sort(function(a, b) {
        let beatmap_data1 = parse(readFileSync(`${beatmaps_folder}/${a}/data.ini`, "utf-8"))
        let beatmap_data2 = parse(readFileSync(`${beatmaps_folder}/${b}/data.ini`, "utf-8"))
        let beatmap1 = beatmap_data1.data.artist.toUpperCase()
        let beatmap2 = beatmap_data2.data.artist.toUpperCase()
        return (beatmap1 < beatmap2) ? -1 : (beatmap1 > beatmap2) ? 1 : 0;
    });
}

function shortByAlphabeticTitle() {
    all_beatmaps_folders.sort(function(a, b) {
        let beatmap_data1 = parse(readFileSync(`${beatmaps_folder}/${a}/data.ini`, "utf-8"))
        let beatmap_data2 = parse(readFileSync(`${beatmaps_folder}/${b}/data.ini`, "utf-8"))
        let beatmap1 = beatmap_data1.data.title.toUpperCase()
        let beatmap2 = beatmap_data2.data.title.toUpperCase()
        return (beatmap1 < beatmap2) ? -1 : (beatmap1 > beatmap2) ? 1 : 0;
    });
}

async function createBeatmapSelectors(listing) {
    switch (listing) {
        case 0:
            shortByDate()
            break;

        case 1:
            shortByAlphabeticArtist()
            break;

        case 2:
            shortByAlphabeticTitle()
            break;
    }

    try {

        for (let index = 0; index < all_beatmaps_folders.length; index++) {

            const beatmap_data = parse(readFileSync(`${beatmaps_folder}/${all_beatmaps_folders[index]}/data.ini`, "utf-8"))
            const selectors_modal = document.getElementById("beatmap-selectors-modal")

            const beatmap_selector_content = document.createElement("div");
            beatmap_selector_content.setAttribute("class", "beatmap-selector-content");
            beatmap_selector_content.setAttribute("beatmap-index", index);
            beatmap_selector_content.setAttribute("opened", false)

            //* Selector body
            const big_selector = document.createElement("beatmap-selector")
            big_selector.setAttribute("class", "big-selector beatmap-selector-click beatmap-selector-hover");
            big_selector.tabIndex = index;

            const selector_thumbnail = document.createElement("div")
            selector_thumbnail.setAttribute("class", "selector-thumbnail beatmap-selector-click");
            selector_thumbnail.style.backgroundImage = `url("${beatmaps_folder}/${all_beatmaps_folders[index]}/${beatmap_data.data.thumbnail}")`

            //* Selector Info
            const selector_song_info = document.createElement("div")
            selector_song_info.setAttribute("class", "selector-song-info beatmap-selector-click");

            const songTitle = document.createElement("p")
            songTitle.setAttribute("class", "selector-title beatmap-selector-click");
            songTitle.innerText = beatmap_data.data.title;

            const songArtist = document.createElement("p")
            songArtist.setAttribute("class", "selector-artist beatmap-selector-click")
            songArtist.innerText = beatmap_data.data.artist;
            //* Mount html blocks
            big_selector.appendChild(selector_thumbnail)

            selector_song_info.appendChild(songTitle)
            selector_song_info.appendChild(songArtist)
            big_selector.appendChild(selector_song_info)
            beatmap_selector_content.appendChild(big_selector)
            selectors_modal.appendChild(beatmap_selector_content)
        }
    } catch (e) {
        return e;
    }
}

// ?                             ind its the index
async function createDiffsSelectorsFrom(ind) {
    const selector_content = document.querySelectorAll(".beatmap-selector-content");
    if (selector_content[ind].getAttribute("opened") !== "false") return removeDiffsSelectorsFrom(ind);

    const beatmap_diffs_files = readdirSync(`${beatmaps_folder}/${all_beatmaps_folders[ind]}`, "utf-8").filter(file => file.endsWith(".sd"))

    for (let current_index = 0; current_index < beatmap_diffs_files.length; current_index++) {

        //* Selector data
        const diff_data = parse(readFileSync(`${beatmaps_folder}/${all_beatmaps_folders[ind]}/${beatmap_diffs_files[current_index]}`, "utf-8"))

        //* Create the modal
        const diff_selector_modal = document.createElement("div")
        diff_selector_modal.setAttribute("class", "diff-selector-modal")

        const beatmap_diff_selector = document.createElement("div")
        beatmap_diff_selector.setAttribute("class", "beatmap-diff-selector")
        beatmap_diff_selector.setAttribute("diff_file_name",`${beatmap_diffs_files[current_index]}`)
        if (current_index === beatmap_diffs_files.length - 1) {
            beatmap_diff_selector.style.marginBottom = "3.5vh";
        }

        const diff_thumbnail = document.createElement("div")
        diff_thumbnail.setAttribute("class", "diff-thumbnail")
        diff_thumbnail.style.backgroundImage = `url("${beatmaps_folder}/${all_beatmaps_folders[ind]}/${diff_data.data.background}")`

        const selector_diff_info = document.createElement("div")
        selector_diff_info.setAttribute("class", "selector-diff-info")

        const diff_title = document.createElement("p")
        diff_title.setAttribute("class", "diff-title")
        diff_title.innerText = diff_data.data.diffname;

        const diff_mapper = document.createElement("p")
        diff_mapper.setAttribute("class", "diff-mapper")
        diff_mapper.innerText = diff_data.data.mapper

        diff_selector_modal.appendChild(beatmap_diff_selector)
        beatmap_diff_selector.appendChild(diff_thumbnail)

        selector_diff_info.appendChild(diff_title)
        selector_diff_info.appendChild(diff_mapper)
        beatmap_diff_selector.appendChild(selector_diff_info)
        selector_content[ind].appendChild(diff_selector_modal)
        selector_content[ind].setAttribute("opened", "true")
    }
}

function removeDiffsSelectorsFrom(ind) {
    const selector_content = document.getElementsByClassName("beatmap-selector-content");
    const diff_selectors = document.querySelectorAll(".diff-selector-modal");
    for (let index = 0; index < diff_selectors.length; index++) {
        diff_selectors[index].style.zIndex = "-1000";
        diff_selectors[index].style.transition = "linear 250ms";
        diff_selectors[index].style.opacity = "0";
        diff_selectors[index].style.marginTop = "-10vh";
        setTimeout(function() { diff_selectors[index].remove() }, 260)
    }
    selector_content[ind].setAttribute("opened", false)
}

function changeListingMode(type) {
    const current_selectors = document.querySelectorAll(".beatmap-selector-content");
    const current_diff_selectors = document.querySelectorAll(".diff-selector-modal");
    for (let selector = 0; selector < current_selectors.length; selector++) {
        current_selectors[selector].style.transition = "cubic-bezier(0.68, -0.55, 0.27, 1.55) 500ms";
        current_selectors[selector].style.opacity = "0";
        current_selectors[selector].style.marginTop = "-10vh";
        setTimeout(function () {
            current_selectors[selector].remove()
        }, 500)
    }
    for (let selector = 0; selector < current_diff_selectors.length; selector++) {
        current_diff_selectors[selector].style.transition = "cubic-bezier(0.68, -0.55, 0.27, 1.55) 500ms";
        current_diff_selectors[selector].style.opacity = "0";
        current_diff_selectors[selector].style.marginTop = "-10vh";
        setTimeout(function () {
            current_diff_selectors[selector].remove()
        }, 350)
    }
    setTimeout(function () {
        createBeatmapSelectors(type)
        setupSelectorsManager()
    }, 500);
}





module.exports.createBeatmapSelectors = createBeatmapSelectors;
module.exports.createDiffsSelectorsFrom = createDiffsSelectorsFrom;
module.exports.shortByAlphabeticArtist = shortByAlphabeticArtist;
module.exports.shortByAlphabeticTitle = shortByAlphabeticTitle;
module.exports.shortByDate = shortByDate;
module.exports.changeListingMode = changeListingMode;