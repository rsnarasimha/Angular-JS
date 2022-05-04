(function () {
  'use strict';

  angular.module('myTasks')
  .service('ToDoService', ToDoService);

  ToDoService.$inject = ['localStorageService'];
  function ToDoService(localStorageService) {
    var service = this;

    var tasks = [];

    service.addTask = function(taskName) {
      var task = {
        name: taskName,
        done: false
      };
      tasks.push(task);
      localStorageService.set("taskData", tasks);
    };

    service.removeTask = function(index) {
      tasks.splice(index, 1);
      localStorageService.set("taskData", tasks);
    };

    service.removeMarked = function() {
      //console.log("Service remove marked");
      var tempList = tasks;
      tasks = [];
      angular.forEach(tempList, function(x) {
        if (!x.done) tasks.push(x);
      });
      localStorageService.set("taskData", tasks);
    };

    service.getTasks = function() {
      if(localStorageService.get("taskData")){
        tasks = localStorageService.get("taskData");
      } else {
        tasks = [];
      }

      return tasks;
    };

  }
})();
