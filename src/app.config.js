/**
 * Created by glenn on 11.08.16.
 */

/* @ngInject */
function configure(
  c8yCumulocityProvider
) {
  c8yCumulocityProvider.setAppKey('core-application-key');
  c8yCumulocityProvider.setBaseUrl('https://demos.cumulocity.com/');
  // c8yCumulocityProvider.setBaseUrl('https://glenn.cumulocity.com/');
  // c8yCumulocityProvider.setTenant('glenn');
}

export default configure;
