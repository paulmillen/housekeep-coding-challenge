bookingApp.controller('BookingController', ['$scope','BookingService', function($scope, BookingService) {

  BookingService.getAll(function(response) {
    $scope.week = response.data;
   });

   $scope.booking = {
     day: "",
     startTime: {
       start: "",
       end: ""
     },
     visitDuration: 1,
     propertyId: "ealdk1f9"
   };

   $scope.submit = function() {
     $http.post("https://private-anon-2e5e7d446d-housekeepavailability.apiary-mock.com/book/", $scope.booking)
     .then(function(response){
        $scope.confirmation = response.data;
      })
    };

}]);
