function viewHeadings(headings) {
var newsList = "";
for(var i = 0; i < headings.length;i++) {
  newsList += "<br><a href=#" + i +">" + headings[i].webTitle + "...</a><br/>";
}
return newsList;
}
