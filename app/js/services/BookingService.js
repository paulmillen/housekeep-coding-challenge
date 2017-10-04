bookingApp.service('BookingService', ['$http', function($http) {
  const self = this;

  self.getAll = function(callback) {
    $http.get('https://private-anon-e3371ee7c6-housekeepavailability.apiary-mock.com/availability/?weekBeginning=2016-12-05&visitDuration=2.5&postcode=EC1R%203BU')
    .then(function(response) {
      callback(response);
    });
  };
}]);
