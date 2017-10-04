describe('BookingController', function() {
  beforeEach(module('bookingApp'));

  var ctrl = 'test';

  beforeEach(inject(function($controller) {
    console.log($controller('BookingController'))
    ctrl = $controller('BookingController');
  }));

  it('initialises with an array', function() {
    expect(ctrl).toBeDefined();
  });
});
