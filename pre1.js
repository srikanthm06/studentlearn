document.addEventListener("DOMContentLoaded", function () {
    let videos = document.querySelectorAll("video");

    videos.forEach(video => {
        let key = video.getAttribute("data-key");

        // Restore progress when page loads
        let savedTime = localStorage.getItem(key);
        if (savedTime) {
            video.currentTime = parseFloat(savedTime);
        }

        // Track video time update
        video.addEventListener("timeupdate", function () {
            let progress = (video.currentTime / video.duration) * 100;

            if (progress >= 95) {  // If watched 95% or more, mark as complete
                localStorage.setItem(key, "100");
            } else {
                localStorage.setItem(key, progress.toFixed(2));
            }
        });
    });
});
function markAsCompleted(videoKey) {
    localStorage.setItem(videoKey, "completed");
}
function markAsCompleted(videoKey) {
    localStorage.setItem(videoKey, "completed");
    console.log("Saved:", videoKey);
}
