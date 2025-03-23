document.addEventListener("DOMContentLoaded", function () {
    function getProgress(key) {
        return localStorage.getItem(key) || 0;  // Get saved progress, default 0%
    }

    function calculateSubjectProgress(keys) {
        let total = 0;
        let count = keys.length;
        keys.forEach(key => {
            total += parseFloat(getProgress(key));
        });
        return count > 0 ? (total / count).toFixed(2) : 0; // Calculate average
    }

    const subjects = {
        languages: ["nouns-g1", "verbs-to-be", "proper-noun-g2", "common-noun-g2", "subject-of-a-sentence"],
        maths: ["graph-and-tally-g1", "length-measurement", "probability", "am-and-pm-and-the-24-hours-clock", "input-output-tables"],
        science: ["seasons", "natural-resources-of-the-earth", "earth-and-its-history", "lemurs-monkeys-and-apes", "rotation-and-revolution"]
    };

    // Update progress bars
    document.querySelector(".progress-bar.languages").style.width = calculateSubjectProgress(subjects.languages) + "%";
    document.querySelector(".progress-bar.languages").textContent = "Pre " + calculateSubjectProgress(subjects.languages) + "%";

    document.querySelector(".progress-bar.maths").style.width = calculateSubjectProgress(subjects.maths) + "%";
    document.querySelector(".progress-bar.maths").textContent = "Pre " + calculateSubjectProgress(subjects.maths) + "%";

    document.querySelector(".progress-bar.science").style.width = calculateSubjectProgress(subjects.science) + "%";
    document.querySelector(".progress-bar.science").textContent = "Pre " + calculateSubjectProgress(subjects.science) + "%";
});
document.addEventListener("DOMContentLoaded", function () {
    let subjects = {
        languages: ["nouns-g1", "verbs-to-be", "proper-noun-g2", "common-noun-g2"],
        maths: ["graph-and-tally-g1", "length-measurement", "probability"],
        science: ["seasons", "natural-resources-of-the-earth", "earth-and-its-history"]
    };

    function getCompletionPercentage(keys) {
        let completed = keys.filter(key => localStorage.getItem(key) === "completed").length;
        return (completed / keys.length) * 100;
    }

    document.querySelector(".progress-bar.languages").style.width = getCompletionPercentage(subjects.languages) + "%";
    document.querySelector(".progress-bar.maths").style.width = getCompletionPercentage(subjects.maths) + "%";
    document.querySelector(".progress-bar.science").style.width = getCompletionPercentage(subjects.science) + "%";
});
function loadProgress() {
    let keys = Object.keys(localStorage);
    console.log("Stored Keys:", keys);
    
    keys.forEach((key) => {
        let progressDiv = document.getElementById(key);
        if (progressDiv) {
            progressDiv.innerText = "✔ Completed!";
        }
    });
}
document.addEventListener("DOMContentLoaded", loadProgress);
