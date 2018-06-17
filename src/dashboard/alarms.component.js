/**
 * Created by glenn on 07.05.17.
 */

/* global _ */

const alarmsComponent = {
  template: `
    <div class="btn-group alarm-severity csa-alarms">
      <style>
        .alarm-severity .btn:focus {
          outline: none;
        }
      </style>
      <button
        ng-repeat="severity in vm.severities"
        class="btn {{severity.buttonClass}}"
        ng-class="{'active': vm.isActive(vm.filter, severity)}"
        ng-click="vm.onClick(vm.filter, severity)"
      >
        {{severity.name}}
      </button>
    </div>
  `,
  bindings: {
    filter: '<'
  },
  controllerAs: 'vm',
  controller: Controller
};

/* @ngInject */
function Controller() {
  const vm = this;

  _.assign(vm, {
    onClick,
    isActive,
    severities: [
      { name: 'Critical', value: 'CRITICAL', buttonClass: 'btn-danger' },
      { name: 'Major', value: 'MAJOR', buttonClass: 'btn-warning' },
      { name: 'Minor', value: 'MINOR', buttonClass: 'btn-primary' },
      { name: 'Warning', value: 'WARNING', buttonClass: 'btn-info' }
    ]
  });

  ////////////

  function onClick(filter, { value }) {
    filter.severity = value !== filter.severity ? value : undefined;
  }

  function isActive({ severity }, { value }) {
    return severity === value;
  }
}

export default alarmsComponent;
