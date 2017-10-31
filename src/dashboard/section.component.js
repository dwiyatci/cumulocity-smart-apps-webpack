/**
 * Created by glenn on 07.05.17.
 */

/* global _ */

const sectionComponent = {
  template: `
    <div class="csa-section">
      <div ng-switch="vm.name">
        <csa-alarms ng-switch-when="alarms" filter="vm.filter"></csa-alarms>
        <csa-devices ng-switch-when="devices" filter="vm.filter"></csa-devices>
        <csa-events ng-switch-when="events" on-refresh="vm.refresh()"></csa-events>
      </div>
      <p class="text-warning m-t-2">
        Page size is {{vm.filter.pageSize}} by default. See <code>pageSize</code> filter.
      </p>
      <table class="table">
        <h2>List</h2>
        <tr
            c8y-repeat="x in {{vm.name}}"
            filter="vm.filter"
            refresh="vm.refresh"
            realtime="true"
        >
          <td>{{x.id}}</td>
          <td>{{x.type}}</td>
          <td>{{x.text}}</td>
          <td>{{x.name}}</td>
          <td>{{x.severity}}</td>
        </tr>
      </table>
    </div>
  `,
  bindings: {
    name: '@',
  },
  controllerAs: 'vm',
  controller: Controller,
};

/* @ngInject */
function Controller($scope) {
  const vm = this;

  // `c8y-repeat` attaches its magic to `$scope.filter` and `$scope.refresh`. #legacy
  _.assign(vm, {
    filter: _.defaults($scope.filter, { pageSize: 10 }),
    refresh: $scope.refresh || _.noop,
  });
}

export default sectionComponent;
