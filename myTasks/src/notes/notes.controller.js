(function() {
'use strict';

angular.module('myTasks')
.controller('NotesController', NotesController);

NotesController.$inject = ['NotesService'];
function NotesController (NotesService) {
  var eznote = this;
  eznote.notes = [];

  eznote.addMesg = "";
  eznote.notes = NotesService.getNotes();

  eznote.title = "";
  eznote.content = "";

  eznote.addNote = function() {
    eznote.addMesg = "";
    //console.log("In addNote");
    NotesService.addNote(eznote.title, eznote.content);
    eznote.title = "";
    eznote.content = "";
    eznote.addMesg = "Note Saved";
  }

  eznote.clearNote = function() {
    eznote.addMesg = "";
    eznote.content = "";
  }

  eznote.deleteNote = function(index){
    NotesService.deleteNote(index);
    eznote.addMesg = "";
  }

/*
  $scope.updateNote = function(){
    localStorageService.set("noteData", $scope.notes);
  }
*/
}

})();
