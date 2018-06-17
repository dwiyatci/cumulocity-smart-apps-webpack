/**
 * Created by glenn on 07.05.17.
 */

const devicesComponent = {
  template: `
    <div class="csa-devices">
      <form ng-submit="vm.filter.text = vm.textFilter">
        <div class="input-group">
          <input class="form-control" placeholder="Filter with device name..." ng-model="vm.textFilter">
          <span class="input-group-btn">
            <button class="btn btn-default">Submit</button>
          </span>
        </div>
      </form>
    </div>
  `,
  bindings: {
    filter: '<'
  },
  controllerAs: 'vm'
};

export default devicesComponent;
