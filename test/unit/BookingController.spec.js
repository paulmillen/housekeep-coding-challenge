describe('BookingController', () => {
  beforeEach(module('bookingApp'));

  let ctrl = {};

  beforeEach(inject(function($controller) {
    ctrl = $controller('BookingController');
  }));

  it('initialises with an array of days', () => {
    let days = [{name: 'Monday'}, {name: 'Tuesday'}]
    expect(ctrl.days).toEqual(days)
  })
});
