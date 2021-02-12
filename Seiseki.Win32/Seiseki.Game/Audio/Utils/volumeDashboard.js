const dashboard = document.getElementById("volumeDashboardContent");

function showAudioDashboard() {
    dashboard.style.right = "2vw";
}

function hideAudioDashboard() {
    dashboard.style.right = "-50vw";
}

module.exports.showAudioDashboard = showAudioDashboard;
module.exports.hideAudioDashboard = hideAudioDashboard;