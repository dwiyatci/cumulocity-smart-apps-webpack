/**
 * Created by glenn on 11.08.16.
 */

/* @ngInject */
function configure(c8yCumulocityProvider) {
  c8yCumulocityProvider.setAppKey('core-application-key');
  c8yCumulocityProvider.setBaseUrl('https://developer.cumulocity.com/');
}

export default configure;
