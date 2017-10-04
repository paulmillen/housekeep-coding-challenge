bookingApp.controller('BookingController', ['BookingService', function(BookingService) {
  this.days = BookingService.getAll();
}]);
