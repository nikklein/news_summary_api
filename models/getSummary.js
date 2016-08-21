var summary;

function getSummaryById (id) {
  var request = new XMLHttpRequest();
  var url = results[0].webUrl;
    request.onreadystatechange = function() {
    if(request.readyState === 4 && request.status === 200) {
      summary = JSON.parse(request.responseText);
    }
  };
  request.open('GET', "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + url);
  request.send();
}
