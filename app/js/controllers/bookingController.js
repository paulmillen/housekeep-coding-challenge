bookingApp.controller('BookingController', ['$scope', '$http', 'BookingService', function($scope, $http, BookingService) {

  BookingService.getAll(function(response) {
    $scope.week = response.data;
   });

   $scope.booking = {
     day: "None Selected",
     startTime: {
       start: "None Selected",
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
