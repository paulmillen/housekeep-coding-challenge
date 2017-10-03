bookingApp.controller('BookingController', ['ApiService', function(ApiService) {
  this.days = ApiService.getAll();
}]);
