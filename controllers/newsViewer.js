getNews();

setTimeout(function() {
  results = headings[0].response.results;
  document.getElementById("topHeadings").innerHTML = viewHeadings(results);
}, 1000);
