/**
 * Created by glenn on 11.08.16.
 */

import angular from 'angular';

import './login.css';
import LoginController from './login.controller';

export default angular
  .module('app.login', [])
  .controller('LoginController', LoginController);
