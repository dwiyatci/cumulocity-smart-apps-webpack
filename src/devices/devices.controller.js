/**
 * Created by glenn on 8/14/16.
 */

DevicesController.$inject = ['$scope'];

export default function DevicesController($scope) {
  const vm = this;

  vm.filter = $scope.filter;
}
