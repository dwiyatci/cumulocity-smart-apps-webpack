/**
 * Created by glenn on 11.08.16.
 */

/* @ngInject */
function configureRoute($routeProvider) {
  $routeProvider
    .when('/login', { template: '<csa-login></csa-login>' })
    .when('/fiddle', { template: '<csa-fiddle></csa-fiddle>' })
    .when('/:section?', { template: '<csa-dashboard></csa-dashboard>' });
}

export default configureRoute;
