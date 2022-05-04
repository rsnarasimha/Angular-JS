(function() {
  'use strict';

  angular.module('myTasks')
  .service('NotesService', NotesService)
  .filter('truncate', truncate);

  NotesService.$inject = ['localStorageService'];
  function NotesService (localStorageService) {
    var service = this;
    var notes = [];

    service.getNotes = function() {
      if(localStorageService.get("noteData")){
        notes = localStorageService.get("noteData");
      } else {
        notes = [];
      }
      //console.log("In getNotes: ");
      //console.log(notes);
      return notes;
    }

    service.addNote = function(title, content) {
      notes.unshift({
        title: title,
        content: content,
        noteId: Date.now()
      });
      localStorageService.set("noteData", notes);
      console.log("In addNote ");
      console.log(localStorageService.get("noteData"));
    }

    service.deleteNote = function(index) {
      var confirmDelete = confirm("Are you sure you want to delete this note?");
      if (confirmDelete) {
        notes.splice(index, 1);
        localStorageService.set("noteData", notes);
      }
      localStorageService.set("noteData", notes);
    }
  }

  function truncate() {
    return function (input) {
      if (!input) {
          return '';
      } else if (input.length > 50) {
          return (input.slice(0,50).concat(" ...")); //limit to first 50 characters only
      }
       else
        return input;
    };
  }

})();
