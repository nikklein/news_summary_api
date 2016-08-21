function viewSummary(all_sentences, id) {
var articleSummary = "";
articleSummary += "<h2>" + results[id].webTitle + "</h2>";
for(var i = 0; i < all_sentences.length;i++) {
  articleSummary += "<br>" + all_sentences[i] + "<br/>";
}
return articleSummary;
}
