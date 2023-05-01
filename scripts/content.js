console.log("aa");
window.addEventListener('load', function () {
    let videoUrl;
    let previousURL;
    if (window.location.href != "https://www.youtube.com/") {
        videoUrl = window.location.href;
        videoUrl = videoUrl.replace(/&.*/i, "");
    }
    if (videoUrl != previousURL) {
        previousURL = videoUrl;
    }
    setInterval(() => {

        if (window.location.href != "https://www.youtube.com/") {
            videoUrl = window.location.href;
            videoUrl = videoUrl.replace(/&.*/i, "");
        }
        if (videoUrl != previousURL) {
            previousURL = videoUrl;
        }

    }, 1000);
});

let previousURL;
videoData = JSON.parse(localStorage.getItem('videoData')) || {}
if (window.location.href != "https://www.youtube.com/") {
    videoUrl = window.location.href;
    videoUrl = videoUrl.replace(/&.*/i, "");
}
if (videoUrl != previousURL) {
    videoData[videoUrl] = (videoData[videoUrl] || 0) + 1;
    previousURL = videoUrl;
    console.log('Données récupérées de localStorage :', videoData);

    chrome.storage.local.set({ videoData }).then(() => {
        console.log("Value is set to " + value);
    });
}
setInterval(() => {
    videoData = JSON.parse(localStorage.getItem('videoData')) || {}
    if (window.location.href != "https://www.youtube.com/") {
        videoUrl = window.location.href;
        videoUrl = videoUrl.replace(/&.*/i, "");

        if (videoUrl != previousURL) {
            videoData[videoUrl] = (videoData[videoUrl] || 0) + 1;
            previousURL = videoUrl;
            console.log('Données récupérées de localStorage :', videoData);

            chrome.storage.local.set({ videoData }).then(() => {
                console.log("Value is set to " + value);
            });
        }
    }
}, 1000);
