(function () {
  'use strict';

  angular.module('myTasks')
  .service('ShoppingListService', ShoppingListService);

  ShoppingListService.$inject = ['localStorageService'];
  function ShoppingListService(localStorageService) {
    var service = this;

    var items = [];
    var boughtitems = [];

    service.addItem = function(itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
      localStorageService.set("shopData", items);
    };

    service.removeItem = function(index) {
      items.splice(index, 1);
      localStorageService.set("shopData", items);
    };

    service.moveItem = function(itemIndex) {
      boughtitems.push(items[itemIndex]);
      items.splice(itemIndex, 1);
      localStorageService.set("shopData", items);
      localStorageService.set("boughtData", boughtitems);
      //console.log("In service move item: ");
      //console.log(boughtitems);
    };

    service.clearList = function() {
      boughtitems = [];
      localStorageService.set("boughtData", boughtitems);
    };

    service.getItems = function() {
      if(localStorageService.get("shopData")){
        items = localStorageService.get("shopData");
      } else {
        items = [];
      }
      return items;
    };

    service.getBoughtItems = function() {
      if (localStorageService.get("boughtData")) {
        boughtitems = localStorageService.get("boughtData");
      } else {
        boughtitems = [];
      }
      return boughtitems;
    };

  }
})();
