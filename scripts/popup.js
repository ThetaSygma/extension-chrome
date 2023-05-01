chrome.storage.local.get(["videoData"]).then((result) => {
    console.log("Value currently is " + result.key);
    document.getElementById('output').innerHTML = "videoData = " + JSON.stringify(result);
  });