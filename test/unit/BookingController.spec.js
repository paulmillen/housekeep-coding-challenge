describe('BookingController', () => {
  beforeEach(module('bookingApp'));

  let ctrl = {};

  beforeEach(inject(function($controller) {
    ctrl = $controller('BookingController');
  }));

  it('initialises with a day', () => {
    expect(ctrl.day).toEqual("Day")
  })
});
