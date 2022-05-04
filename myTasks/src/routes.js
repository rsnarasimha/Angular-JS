(function() {
  'use strict';

  angular.module('myTasks')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Setup UI States ***
    $stateProvider

    //Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/templates/home.html'
    })

    // Notes Page
    .state('notes', {
      url: '/notes',
      templateUrl: 'src/templates/notes.html',
      controller:'NotesController',
      controllerAs: 'eznote'
    })

    // Notes(id) Page
    .state('noteDetail', {
      url: '/notes/{id}',
      templateUrl: 'src/templates/noteid.html',
      controller:'NoteDetailController',
      controllerAs: 'notedetail'
    })

    // Todo List Page
    .state('todo', {
      url: '/todo',
      templateUrl: 'src/templates/todo.html',
      controller:'ToDoController as todo'
    })

    // Shopping List Page
    .state('shoppinglist', {
      url: '/shoppinglist',
      templateUrl: 'src/templates/shoppinglist.html',
      controller:'ShoppingListController as list'
    });

  }

})();
