/**
 * Created by glenn on 8/12/16.
 */

import angular from 'angular';

import xxCharts from './charts.directive';
import xxDatapoint from './datapoint.directive';

export default angular
  .module('app.charts', [])
  .directive('xxCharts', xxCharts)
  .directive('xxDatapoint', xxDatapoint);
