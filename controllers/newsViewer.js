getNews();

setTimeout(function() {
  var allHeadings = headings[0].response.results;
  document.getElementById("topHeadings").innerHTML = viewHeadings(allHeadings);
}, 1000);
