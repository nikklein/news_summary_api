var testy = new Testy();

describe('New note', function (){
  it ('A new note is made', function (title) {
    var note = new Note("Georgia");
    testy.isTrue(title, note.message === "Georgia");
  });
});

describe('New message', function (){
  it ('test makes a new note', function(title){
    var note = new Note("Georgia");
    var noteList = new NoteList();
    noteList.add(note);
    var list = noteList.notes;
    testy.isTrue('create message click works', list[list.length - 1].message === "Georgia");
  });
});

localStorage.clear();
