chrome.storage.local.get(["videoData"]).then((result) => {
  let regex = /^\{"videoData":|\}$/g;
  let finalResults = JSON.stringify(result).replace(regex, '');
  document.getElementById('output').innerHTML = finalResults;
});

let detail = document.getElementById("detail");
detail.addEventListener("click", () =>{
  chrome.tabs.create({
    url: "tab.html"
  });
});