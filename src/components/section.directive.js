/**
 * Created by glenn on 11.08.16.
 */

const sectionTemplate = require('./section.html');

export default function xxSection() {
  const ddo = {
    restrict: 'E',
    template: sectionTemplate,
    scope: {
      service: '@',
      filter: '=?',
      refresh: '=?',
    },
    controller: SectionController,
    controllerAs: 'vm',
  };

  return ddo;
}

SectionController.$inject = ['$scope'];

function SectionController($scope) {
  const vm = this;

  vm.service = $scope.service;
  vm.filter = $scope.filter || {};

  vm.filter.pageSize = 10;

  $scope.$watch('vm.refresh', newValue => ($scope.refresh = newValue));
}
