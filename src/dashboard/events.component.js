/**
 * Created by glenn on 07.05.17.
 */

const eventsComponent = {
  template: `
    <div class="csa-events">
      <button class="btn btn-default pull-right m-b-2" ng-click="vm.onRefresh()">
        Refresh
      </button>
    </div>
  `,
  bindings: {
    onRefresh: '&',
  },
  controllerAs: 'vm',
};

export default eventsComponent;
