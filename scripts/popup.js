chrome.storage.local.get(["videoData"]).then((result) => {
    let regex = /^\{"videoData":|\}$/g;
    let finalResults = JSON.stringify(result).replace(regex, '');
    document.getElementById('output').innerHTML = finalResults;
  });