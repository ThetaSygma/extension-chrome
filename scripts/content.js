function getVideo() {
    videoData = JSON.parse(localStorage.getItem('videoData')) || {}
    videoUrl = document.getElementsByName('twitter:url')[0].content;
    //if (videoUrl != previousURL) {
        videoTitle = document.getElementsByName('title')[0].content;
        videoPic = document.getElementsByName('twitter:image')[0].content;
        videoAuthor = document.getElementsByClassName('yt-simple-endpoint style-scope ytd-video-description-header-renderer')[0].href;
        videoTags =  document.getElementsByName('keywords')[0].content || null;
        console.log(videoUrl);
        console.log(videoTitle);
        console.log(videoPic);
        console.log(videoAuthor);
        console.log(videoTags);
            videoData[videoUrl] = (videoData[videoUrl] || 0) + 1;
        previousURL = videoUrl;
        console.log('Données récupérées de localStorage :', videoData);

        chrome.storage.local.set({ videoData });
    }
//}
let previousURL;
let videoUrl;
let videoTitle
let videoPic
let videoAuthor
let videoTags
let videoData;
setInterval(() => {
    getVideo();
}, 5000);