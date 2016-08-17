/**
 * Created by glenn on 11.08.16.
 */

import angular from 'angular';

import xxSection from './section.directive';
import xxSectionMain from './section-main.directive';
import upperFirst from './upper-first.filter';

export default angular
  .module('app.components', [])
  .directive('xxSection', xxSection)
  .directive('xxSectionMain', xxSectionMain)
  .filter('upperFirst', upperFirst);
