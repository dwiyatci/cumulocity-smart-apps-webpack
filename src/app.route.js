/**
 * Created by glenn on 11.08.16.
 */

/* @ngInject */
function configureRoute(
  $routeProvider
) {
  $routeProvider
    .when('/login', { template: '<csa-login />' })
    .when('/fiddle', { template: '<csa-fiddle />' })
    .when('/', { template: '<csa-dashboard />' })
    .when('/:section?', { template: '<csa-dashboard />' });
}

export default configureRoute;
