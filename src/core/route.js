/**
 * Created by glenn on 11.08.16.
 */

const loginTemplate = require('../login/login.html');
const dashboardTemplate = require('../dashboard/dashboard.html');
const fiddleTemplate = require('../fiddle/fiddle.html');

configureRoute.$inject = ['$routeProvider'];

export default function configureRoute($routeProvider) {
  $routeProvider
    .when('/login', {
      template: loginTemplate,
      controller: 'LoginController',
      controllerAs: 'vm',
    })
    .when('/fiddle', {
      template: fiddleTemplate,
      controller: 'FiddleController',
      controllerAs: 'vm',
    })
    .when('/:section?', {
      template: dashboardTemplate,
      controller: 'DashboardController',
      controllerAs: 'vm',
    });
}
