/**
 * Created by glenn on 11.08.16.
 */

import angular from 'angular';

import './main.css';
import appModule from './app.module';

angular.bootstrap(
  document.querySelector('#app'),
  [appModule.name],
  { strictDi: true });
