/**
 * Created by glenn on 05.08.16.
 */

/* global angular */

import configure from './app.config';
import configureRoute from './app.route';
import loginModule from './login/login.module';
import dashboardModule from './dashboard/dashboard.module';
import fiddleComponent from './fiddle.component';

export default angular
  .module('app', [
    /**
     * Cumulocity UI core API modules (8.x).
     * @see http://resources.cumulocity.com/documentation/jssdk/latest/#/api
     */
    'c8y.sdk',

    // 3rd-party modules.
    'ngRoute',
    'ui.bootstrap',

    // Feature areas.
    loginModule.name,
    dashboardModule.name
  ])
  .config(configure)
  .config(configureRoute)
  .component('csaFiddle', fiddleComponent);
