bookingApp.controller('BookingController', ['$scope','BookingService', function($scope, BookingService) {
  BookingService.getAll(function(response) { $scope.week = response.data });
}]);
