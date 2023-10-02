chrome.storage.local.get(["videoData"]).then((result) => {
  let finalResults = JSON.stringify(result)
  document.getElementById('output').innerHTML = finalResults;
});

let detail = document.getElementById("detail");
detail.addEventListener("click", () =>{
  chrome.tabs.create({
    url: "tab.html"
  });
});