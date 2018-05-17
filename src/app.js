/**
 * Created by glenn on 11.08.16.
 */

/* global angular */

import 'babel-polyfill';

/**
 * Cumulocity UI core SDK (8.x).
 */
import 'cumulocity-clients-javascript/build/main-standalone';

/**
 * Other vendor dependencies for this amazing project.
 */
import 'bootstrap-loader';
import 'angular-route';
import 'angular-ui-bootstrap/dist/ui-bootstrap';
import 'angular-ui-bootstrap/dist/ui-bootstrap-tpls';

import './app.css';
import appModule from './app.module';

angular.bootstrap(
  document.querySelector('#app'),
  [appModule.name],
);
