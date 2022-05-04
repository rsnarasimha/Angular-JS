(function() {
'use strict';

angular.module('myTasks')
.controller('NoteDetailController', NoteDetailController);

NoteDetailController.$inject = ['$stateParams', 'NotesService'];
function NoteDetailController ($stateParams, NotesService) {
  var notedetail = this;
  notedetail.noteId = $stateParams.id;

  notedetail.notes = [];
  notedetail.notes = NotesService.getNotes();
}

})();
