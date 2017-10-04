describe('BookingController', function() {
  beforeEach(module('bookingApp'));

  var ctrl = 'test';

  beforeEach(inject(function($rootScope, $controller) {
    var scope = $rootScope.$new();
    ctrl = $controller('BookingController', { $scope: scope });
  }));

  it('initialises with an array', function() {
    expect(ctrl).toBeDefined();
  });
});
