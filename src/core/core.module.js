/**
 * Created by glenn on 11.08.16.
 */

import angular from 'angular';

import configure from './config';
import configureRoute from './route';

export default angular
  .module('app.core', [

    /**
     * Cumulocity UI core API modules (6.3.x)
     * @see http://resources.cumulocity.com/documentation/jssdk/latest/#/core
     */
    'c8y.sdk',
    'c8y.ui',

    // 3rd-party modules
    'ngRoute',
    'ui.bootstrap',
  ])
  .config(configure)
  .config(configureRoute);
