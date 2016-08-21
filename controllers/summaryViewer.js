changeDisplayOnClickSummary();

function changeDisplayOnClickSummary(){
  window.addEventListener("hashchange", displayOnClickSummary);
}

function displayOnClickSummary(){
displaySummary(getSummaryFromURL(window.location));
}

function getSummaryFromURL(location){
  return location.hash.split("#")[1];
}

function displaySummary (id){
  getSummaryById();
  setTimeout(function() {
  var all_sentences = summary.sentences;
  document.getElementById("_summary").innerHTML = viewSummary(all_sentences, id);
}, 2000);
}
