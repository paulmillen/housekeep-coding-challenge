describe('BookingController', () => {
  beforeEach(module('bookingApp'));

  beforeEach(inject(function($controller) {
    ctrl = $controller('BookingController');
  }));

  it('initialises with an array', () => {
    expect(ctrl.days).toEqual(jasmine.any(Array))
  });
});
