/**
 * Created by glenn on 11.08.16.
 */

DashboardController.$inject = ['$location', '$routeParams', 'c8yUser'];

export default function DashboardController($location, $routeParams, c8yUser) {
  const vm = this;

  vm.sections = {
    alarms: 'Alarms',
    devices: 'Devices',
    events: 'Events',
  };
  vm.currentSection = $routeParams.section;
  vm.filter = {};
  vm.logout = redirectToLogin;

  activate();

  ////////////

  function activate() {
    c8yUser
      .current()
      .catch(redirectToLogin);
  }

  function redirectToLogin() {
    $location.path('/login');
  }
}
