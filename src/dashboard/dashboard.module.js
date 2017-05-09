/**
 * Created by glenn on 09.05.17.
 */

import dashboardComponent from './dashboard.component';
import sectionComponent from './section.component';
import alarmsComponent from './alarms.component';
import devicesComponent from './devices.component';
import eventsComponent from './events.component';
import chartsComponent from './charts.component';
import datapointComponent from './datapoint.component';

export default angular
  .module('app.dashboard', [])
  .component('csaDashboard', dashboardComponent)
  .component('csaSection', sectionComponent)
  .component('csaAlarms', alarmsComponent)
  .component('csaDevices', devicesComponent)
  .component('csaEvents', eventsComponent)
  .component('csaCharts', chartsComponent)
  .component('csaDatapoint', datapointComponent);
