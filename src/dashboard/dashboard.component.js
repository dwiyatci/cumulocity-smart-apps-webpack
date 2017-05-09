/**
 * Created by glenn on 07.05.17.
 */

import './dashboard.css';

const dashboardComponent = {
  template: `
    <div ng-if="vm.c8y.user">
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <button
                type="button"
                class="navbar-toggle collapsed"
                ng-click="vm.isCollapsed = !vm.isCollapsed"
                aria-expanded="false"
                aria-controls="navbar"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" ng-href="#/">Cumulocity</a>
          </div>
          <div id="navbar" class="navbar-collapse" collapse="vm.isCollapsed">
            <ul class="nav navbar-nav navbar-right">
              <li><a c8y-logout ng-click="vm.logout()">Logout</a></li>
            </ul>
            <p class="navbar-text navbar-right">Hello {{vm.c8y.user.firstName}}</p>
          </div>
        </div>
      </nav>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-3 col-md-2 sidebar">
            <ul class="nav nav-sidebar">
              <li
                  ng-repeat="section in vm.sections"
                  ng-class="{'active': section === vm.currentSection}"
              >
                <a ng-href="#/{{section}}">{{section[0].toUpperCase() + section.slice(1)}}</a>
              </li>
            </ul>
          </div>
          <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <csa-section ng-if="!!vm.currentSection" name="{{vm.currentSection}}" />
            <csa-charts ng-if="!vm.currentSection" />
          </div>
        </div>
      </div>
    </div>
  `,
  controller: Controller,
  controllerAs: 'vm',
};

/* @ngInject */
function Controller(
  $location,
  $routeParams,
  c8yUser
) {
  const vm = this;

  _.assign(vm, {
    $onInit: onInit,
    isCollapsed: true,
    sections: ['alarms', 'devices', 'events'],
    currentSection: $routeParams.section,
    logout: redirectToLogin,
  });

  ////////////

  function onInit() {
    c8yUser.current()
      .then(user => _.set(vm, 'c8y.user', user))
      .catch(redirectToLogin);
  }

  function redirectToLogin() {
    $location.path('/login');
  }
}

export default dashboardComponent;
