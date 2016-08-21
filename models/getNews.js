var headings = [];

function getNews() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if(request.readyState === 4 && request.status === 200) {
    headings.push(JSON.parse(request.responseText));
      }
  };
  request.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=world&show-fields=body&show-editors-picks=true');
  request.send();
}
