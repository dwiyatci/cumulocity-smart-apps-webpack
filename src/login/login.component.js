/**
 * Created by glenn on 07.05.17.
 */

/* global _:true */

import './login.css';

const loginComponent = {
  template: `
    <div class="container">
      <form class="form-signin">
        <h2 class="form-signin-heading">Please login</h2>
        <label for="inputTenant" class="sr-only">Tenant</label>
        <input type="text" id="inputTenant" class="form-control" placeholder="Tenant" autofocus ng-model="vm.tenant">
        <label for="inputUsername" class="sr-only">Username</label>
        <input type="text" id="inputUsername" class="form-control" placeholder="Username" required autofocus ng-model="vm.username">
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required ng-model="vm.password">
        <div class="checkbox">
          <label><input type="checkbox" ng-model="vm.rememberMe"> Remember me</label>
        </div>
        <button
          class="btn btn-lg btn-primary btn-block"
          c8y-login
          tenant="vm.tenant"
          user="vm.username"
          password="vm.password"
          remember-me="vm.rememberMe"
          on-success="vm.redirectToDashboard()"
        >
          Sign in
        </button>
      </form>
    </div>
  `,
  controller: Controller,
  controllerAs: 'vm',
};

/* @ngInject */
function Controller(
  $rootScope,
  $location,
) {
  const vm = this;

  _.assign(vm, {
    redirectToDashboard,
    $onInit: onInit,
  });

  function onInit() {
    if ($rootScope.loggedIn) {
      redirectToDashboard();
    }
  }

  function redirectToDashboard() {
    $location.path('/');
  }
}

export default loginComponent;
