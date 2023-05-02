function getVideo() {
    videoData = JSON.parse(localStorage.getItem('videoData')) || {}
    const regex = /watch\?v=/;
    if (regex.test(window.location.href)) {
        videoUrl = window.location.href;
        videoUrl = videoUrl.replace(/&.*/i, "");
    }
    if (videoUrl != previousURL) {
        videoData[videoUrl] = (videoData[videoUrl] || 0) + 1;
        previousURL = videoUrl;
        console.log('Données récupérées de localStorage :', videoData);

        chrome.storage.local.set({ videoData }).then(() => {
            console.log("Value is set to " + videoData[videoUrl]);
        });
    }
}

let previousURL;
let videoUrl;
let videoData;
window.addEventListener("click", function () {
    getVideo();
});