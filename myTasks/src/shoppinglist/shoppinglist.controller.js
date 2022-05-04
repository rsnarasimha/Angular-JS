(function () {
  'use strict';

  angular.module('myTasks')
  .controller('ShoppingListController', ShoppingListController);

  ShoppingListController.$inject = ['ShoppingListService'];
  function ShoppingListController(ShoppingListService) {
    var list = this;
    list.items = [];
    list.boughtitems = [];

    list.items = ShoppingListService.getItems();
    list.boughtitems = ShoppingListService.getBoughtItems();

    list.itemName = "";
    list.itemQuantity = "";

    list.addItem = function () {
      ShoppingListService.addItem(list.itemName, list.itemQuantity);
    };

    list.removeItem = function (itemIndex) {
      ShoppingListService.removeItem(itemIndex);

    };

    list.moveItem = function (itemIndex){
      ShoppingListService.moveItem(itemIndex);
      list.boughtitems = ShoppingListService.getBoughtItems();
      //console.log(list.boughtitems);
    };

    list.clearList = function () {
      ShoppingListService.clearList();
      list.boughtitems = ShoppingListService.getBoughtItems();
    }

  }

})();
