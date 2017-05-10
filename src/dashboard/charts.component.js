/**
 * Created by glenn on 07.05.17.
 */

/* global _:true */

const chartsComponent = {
  template: `
    <div class="row csa-charts">
      <div class="col-md-9">
        <div class="row m-b-2">
          <div class="col-md-12">
            <button
              class="btn btn-primary pull-right"
              ng-click="vm.getMeasurement()"
            >
              Refresh
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="panel c8y p-a-2">
              <h2>Radial Gauge</h2>
              <c8y-radial-gauge dp="vm.datapoint" measurement="vm.measurement" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="panel c8y p-a-2">
              <h2>Linear Gauge</h2>
              <c8y-linear-gauge dp="vm.datapoint" measurement="vm.measurement" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <form>
          <div class="form-group">
            <label>
              Device ID
              <input
                class="form-control"
                ng-model="vm.source"
                placeholder="Device ID"
                required
              >
            </label>
          </div>
          <div class="form-group">
            <label>
              Fragment
              <input
                class="form-control"
                ng-model="vm.fragmentType"
                placeholder="Fragment"
                required
              >
            </label>
          </div>
          <div class="form-group">
            <label>
              Series
              <input
                class="form-control"
                ng-model="vm.series"
                placeholder="Series"
                required
              >
            </label>
          </div>
        </form>
        <csa-datapoint value="vm.datapoint" measurement="vm.measurement" />
      </div>
    </div>
  `,
  controller: Controller,
  controllerAs: 'vm',
};

/* @ngInject */
function Controller(
  c8yBase,
  c8yMeasurements,
) {
  const vm = this;

  _.assign(vm, {
    getMeasurement,
    onMeasurement,
    source: '144880600',
    fragmentType: 'c8y_Temperature',
    series: 'Temperature',
    datapoint: {
      min: 0,
      max: 100,
      yellowRangeMin: 75,
      yellowRangeMax: 90,
      redRangeMin: 90,
      redRangeMax: 100,
    },
    measurement: { value: 0 },
  });

  ////////////

  async function getMeasurement() {
    const { source, fragmentType, series } = vm;

    if (source && fragmentType && series) {
      const data = await c8yMeasurements.list(c8yBase.timeOrderFilter({
        source,
        fragmentType,
        revert: true,
        reverse: true,
        pageSize: 1,
      }));

      onMeasurement(fragmentType, series, data);
    }
  }

  function onMeasurement(fragmentType, series, data) {
    if (data.length > 0) {
      vm.measurement = _.get(data, `[0].${fragmentType}.${series}`);
    }
  }
}

export default chartsComponent;
