/**
 * Created by glenn on 07.05.17.
 */

const datapointComponent = {
  template: `
    <div class="csa-datapoint">
      <form>
        <div class="form-group">
          <label>
            Min
            <input
              class="form-control"
              type="number"
              ng-model="vm.value.min"
              placeholder="Min"
              required
            >
          </label>
        </div>
        <div class="form-group">
          <label>
            Max
            <input
              class="form-control"
              type="number"
              ng-model="vm.value.max"
              placeholder="Max"
              required
            >
          </label>
        </div>
        <div class="form-group">
          <label>
            Yellow Min
            <input class="form-control"
              type="number"
              ng-model="vm.value.yellowRangeMin"
              placeholder="Min"
              required
            >
          </label>
        </div>
        <div class="form-group">
          <label>
            Yellow Max
            <input class="form-control"
              type="number"
              ng-model="vm.value.yellowRangeMax"
              placeholder="Max"
              required
            >
          </label>
        </div>
        <div class="form-group">
          <label>
            Red Min
            <input class="form-control"
              type="number"
              ng-model="vm.value.redRangeMin"
              placeholder="Red Range Min"
              required
            >
          </label>
        </div>
        <div class="form-group">
          <label>
            Red Max
            <input class="form-control"
              type="number"
              ng-model="vm.value.redRangeMax"
              placeholder="Red Range Max"
              required
            >
          </label>
        </div>
      </form>
    </div>
  `,
  bindings: {
    value: '<'
  },
  controllerAs: 'vm'
};

export default datapointComponent;
