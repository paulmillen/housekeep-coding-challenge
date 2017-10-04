bookingApp.controller('BookingController', ['$scope', 'BookingService', function($scope, BookingService) {

  BookingService.getAll(function(response) {
    $scope.week = response.data;
   });

   $scope.booking = {
     day: "None Selected",
     startTime: {
       start: "",
       end: ""
     },
     visitDuration: 1,
     propertyId: "ealdk1f9"
   };

   $scope.submit = function() {
    BookingService.returnBooking(function(response) {
      $scope.confirmation = response.data;
    }, $scope.booking);
  };

}]);
