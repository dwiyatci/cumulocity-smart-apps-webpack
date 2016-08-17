/**
 * Created by glenn on 8/5/16.
 */

import angular from 'angular';

import coreModule from './core/core.module';
import componentsModule from './components/components.module';
import loginModule from './login/login.module';
import dashboardModule from './dashboard/dashboard.module';
import devicesModule from './devices/devices.module';
import alarmsModule from './alarms/alarms.module';
import eventsModule from './events/events.module';
import chartsModule from './charts/charts.module';
import fiddleModule from './fiddle/fiddle.module';

export default angular
  .module('app', [

    /*
     * Order is not important. Angular makes a
     * pass to register all of the modules listed
     * and then when app.dashboard tries to use app.data,
     * its components are available.
     */

    /*
     * Everybody has access to these.
     * We could place these under every feature area,
     * but this is easier to maintain.
     */
    coreModule.name,
    componentsModule.name,

    /*
     * Feature areas
     */
    loginModule.name,
    dashboardModule.name,
    devicesModule.name,
    alarmsModule.name,
    eventsModule.name,
    chartsModule.name,

    /*
     * Playground
     */
    fiddleModule.name,
  ]);
