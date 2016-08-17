/**
 * Created by glenn on 8/14/16.
 */

EventsController.$inject = ['$scope'];

export default function EventsController($scope) {
  const vm = this;

  vm.refresh = $scope.refresh;
}
