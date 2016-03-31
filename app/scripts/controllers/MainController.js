angular.module('AngularScaffold.Controllers')
  .controller('MainController', ['$scope', 'MainService', '$sessionStorage', function ($scope, MainService, $sessionStorage) {
    function ModalCtrl() {
    var vm = this, //this way vm is passed to scope by controllerAs syntax with no using of $scope
        today = moment().format('dddd');

    vm.date = today + (today == 'Friday' ? ' =D' : ' =/');
}
  }]);
