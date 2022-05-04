(function () {
  'use strict';

  angular.module('myTasks')
  .controller('ToDoController', ToDoController);

  ToDoController.$inject = ['ToDoService'];
  function ToDoController(ToDoService) {
      var todo = this;
      todo.tasks = [];

      todo.tasks = ToDoService.getTasks();
      todo.taskName = "";

      todo.addTask = function () {
        ToDoService.addTask(todo.taskName);
        todo.taskName = "";
      };

      todo.removeTask = function (itemIndex) {
        ToDoService.removeTask(itemIndex);
      };

      todo.removeMarked = function () {
        //console.log("Controller remove marked");
        ToDoService.removeMarked();
        todo.tasks = ToDoService.getTasks();
      };
  }

})();
