'use strict';

/**
 * @ngdoc function
 * @name ossuClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ossuClientApp
 */
angular.module('ossuClientApp')
  .controller('MainCtrl', function (localStorageService, $uibModal) {

    function checkLocalStorage(key) {
      return localStorageService.get(key);
    }

    function setLocalStorage(key, value) {
      localStorageService.set(key, value);
    }

    var openedModalKey = '7296425a43a9208958f0473cc733489c67e8a88a';

    if (!checkLocalStorage(openedModalKey)) {
      $uibModal.open({
        animation: true,
        backdrop: 'static',
        controller: 'MainmodalcontrollerCtrl',
        templateUrl: '../partials/homePageModal.html',
        size: 'lg'
      });

      setLocalStorage(openedModalKey, true);
    }


  });
