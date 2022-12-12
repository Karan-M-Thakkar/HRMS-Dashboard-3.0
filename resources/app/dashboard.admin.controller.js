const dashboardAdminApp = angular.module("dashboardAdminApp", [
  "ngAnimate",
  "ngSanitize",
  "ui.bootstrap",
]);

dashboardAdminApp.controller(
  "DashboardAdminController",
  function ($scope, $log, $http, $timeout) {
    $log.log("DashboardAdminController loaded successfully!");
    $scope.activeFormType = "news";
    $scope.formMode = 'create'
    $scope.fromDate = null;
    $scope.toDate = null;
    $scope.expiryDate = null;
    $scope.eventDate = null;
    $scope.status = 'active'

    $scope.fromDateOptions = {};
    $scope.toDateOptions = {};
    $scope.expiryDateOptions = {};
    $scope.eventDateOptions = {};

    $scope.fromDatePopup = {
      opened: false,
    };

    $scope.toDatePopup = {
      opened: false,
    };

    $scope.expiryDatePopup = {
      opened: false,
    }

    $scope.eventDatePopup = {
      opened: false,
    }

    $scope.openFromDatepicker = function () {
      $scope.fromDatePopup.opened = true;
    };

    $scope.openToDatepicker = function () {
      $scope.toDatePopup.opened = true;
    };

    $scope.openExpiryDatepicker = function () {
      $scope.expiryDatePopup.opened = true;
    }

    $scope.openEventDatepicker = function () {
      $scope.eventDatePopup.opened = true;
    }

    $scope.toggleForm = (formType) => {
      $scope.activeFormType = formType;
    };

    $scope.restrictToDate = () => {
      $scope.toDateOptions = {
        minDate: new Date($scope.fromDate)
      }
    }

    $scope.redirectToDashboard = () => {
      window.open('../../index.html', '_self');
    }
  }
);

dashboardAdminApp.filter('capitalize', function() {
  return function(input) {
    return (angular.isString(input) && input.length > 0) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : input;
  }
});