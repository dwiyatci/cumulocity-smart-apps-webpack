/**
 * Created by glenn on 11.08.16.
 */

import angular from 'angular';

import './dashboard.css';
import DashboardController from './dashboard.controller';

export default angular
  .module('app.dashboard', [])
  .controller('DashboardController', DashboardController);
