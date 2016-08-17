/**
 * Created by glenn on 11.08.16.
 */

LoginController.$inject = ['$location', 'c8yUser'];

export default function LoginController($location, c8yUser) {
  const vm = this;

  vm.credentials = {};
  vm.onSuccess = onSuccess;

  c8yUser
    .current()
    .then(onSuccess);

  ////////////

  function onSuccess() {
    $location.path('/');
  }
}
