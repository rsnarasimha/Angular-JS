(function() {
  'use strict';

  angular.module('myTasks', ['LocalStorageModule', 'ui.router'])
  .config(LocalStorageConfig);

  LocalStorageConfig.$inject = ['localStorageServiceProvider'];
  function LocalStorageConfig(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('myNotes');
  };

})();
