/**
 * Created by glenn on 8/14/16.
 */

const chartsTemplate = require('./charts.html');

export default function xxCharts() {
  const ddo = {
    restrict: 'E',
    template: chartsTemplate,
    controller: ChartsController,
    controllerAs: 'vm',
  };

  return ddo;
}

ChartsController.$inject = ['c8yBase', 'c8yMeasurements'];

function ChartsController(c8yBase, c8yMeasurements) {
  const vm = this;

  vm.source = '144880600';
  vm.fragmentType = 'c8y_Temperature';
  vm.series = 'Temperature';
  vm.datapoint = {
    min: 0,
    max: 100,
    yellowRangeMin: 75,
    yellowRangeMax: 90,
    redRangeMin: 90,
    redRangeMax: 100,
  };
  vm.measurement = { value: 0 };

  vm.onMeasurement = onMeasurement;
  vm.getMeasurement = getMeasurement;

  ////////////

  function onMeasurement(fragmentType, series, data) {
    if (data.length > 0) {
      vm.measurement = data[0][fragmentType][series];
    }
  }

  function getMeasurement() {
    const { source, fragmentType, series } = vm;

    if (source && fragmentType && series) {
      c8yMeasurements
        .list(c8yBase.timeOrderFilter({
          source,
          fragmentType,
          revert: true,
          reverse: true,
          pageSize: 1,
        }))
        .then(data => onMeasurement(fragmentType, series, data));
    }
  }
}
