/**
 * Created by glenn on 11.08.16.
 */

/* @ngInject */
function configure(
  c8yCumulocityProvider,
) {
  c8yCumulocityProvider.setAppKey('csa-application-key');
  c8yCumulocityProvider.setBaseUrl('https://demos.cumulocity.com/');
}

export default configure;
