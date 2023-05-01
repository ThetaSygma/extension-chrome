let videoData = JSON.parse(localStorage.getItem('videoData')) || {};
document.getElementById('output').innerHTML = "videoData = " + JSON.stringify(videoData);