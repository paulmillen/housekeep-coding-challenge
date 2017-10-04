describe('BookingController', function() {
  beforeEach(module('bookingApp'));

  var ctrl, scope;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('BookingController', { $scope: scope });
  }));

  it('initialises with an array', function() {
    expect(ctrl).toBeDefined();
  });
});
