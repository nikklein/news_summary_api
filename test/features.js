testy = new Testy();

describe('Online form', function () {
  it('displays the form', function(title) {
    testy.isTrue(title, document.forms.Form !== null );
  });

  it('check you can write a message', function(title) {
    var note = new Note("Georgia");
    testy.isTrue(title, document.forms.message !== null );
  });

  it ('Submit button works', function(title) {
    document.getElementById('createMessage').click();
    testy.isTrue(title, document.getElementById('messages') !== null );
  });
});

describe('Local storage', function(){
  it('Notes persist in local storage', function(title){
    var notesArray = JSON.parse(localStorage.getItem("notes"));
    testy.isTrue(title, notesArray !== null );
  });

  it('New notes save to local storage', function(title){
    note = new Note('Hello');
    var noteList = new NoteList();
    noteList.add(note);
    var list = noteList.notes;
    var notesArray = JSON.parse(localStorage.getItem("notes"));
    testy.isTrue(title, notesArray[notesArray.length - 1]['message'] === 'Hello');
  });
});

describe('Page view', function(){
  it('Shows the messages in a list the page', function(title){
    document.getElementById('message').value = 'JESS';
    document.getElementById('createMessage').click();
    window.setTimeout(function(){testy.isTrue(title, document.getElementById('messages').textContent.indexOf('JESS') !== -1 )}, 500);
  });

  it('Shortens notes to 20 ch', function(title){
    document.getElementById('message').value = 'Jess is super cool and is part of the best group everrrrrrrrrrr';
    document.getElementById('createMessage').click();
    window.setTimeout( function (){testy.isTrue(title, document.getElementById('messages').textContent.indexOf('Jess is super cool a...') !== -1 )}, 500);
  });

  it('Click on the note to show the full note', function(title){
    var message = 'Ryan is super cool and is part of the best group everrrrrrrrrr';
    document.getElementById('message').value = message;
    document.getElementById('createMessage').click();
    window.setTimeout(function() {
      for(var i = 0, len = document.links.length; i < len; i += 1) {
      if(document.links[i].textContent === "Ryan is super cool a...") {
          document.links[i].click();
      }
    }
  }, 500);
  window.setTimeout( function (){testy.isTrue(title, document.getElementById('currentMessage').textContent.indexOf(message) !== -1 )}, 1000)
  });
});
