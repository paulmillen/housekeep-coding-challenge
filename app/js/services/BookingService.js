bookingApp.service('ApiService', ['$http', function($http) {
  const self = this;

  self.getAll = function() {
    const json = [];
    $http.get('https://private-anon-e3371ee7c6-housekeepavailability.apiary-mock.com/availability/?weekBeginning=2016-12-05&visitDuration=2.5&postcode=EC1R%203BU')
    .then(function(response) {
      response.data.forEach(function(data) {
        json.push(data)
      })
    });
    return json;
  };
}]);
