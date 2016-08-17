/**
 * Created by glenn on 8/13/16.
 */

AlarmsController.$inject = ['$scope'];

export default function AlarmsController($scope) {
  const vm = this;

  vm.filter = $scope.filter;

  vm.severities = [
    { name: 'Critical', value: 'CRITICAL', buttonClass: 'btn-danger' },
    { name: 'Major', value: 'MAJOR', buttonClass: 'btn-warning' },
    { name: 'Minor', value: 'MINOR', buttonClass: 'btn-primary' },
    { name: 'Warning', value: 'WARNING', buttonClass: 'btn-info' },
  ];

  vm.onClick = onClick;
  vm.isActive = isActive;

  ////////////

  function onClick(filter, severity) {
    if (filter.severity === severity.value) {
      filter.severity = undefined;
    } else {
      filter.severity = severity.value;
    }
  }

  function isActive(filter, severity) {
    return filter.severity === severity.value;
  }
}
