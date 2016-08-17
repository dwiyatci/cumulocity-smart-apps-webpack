/**
 * Created by glenn on 11.08.16.
 */

configure.$inject = ['c8yCumulocityProvider'];

function configure(c8yCumulocityProvider) {
  c8yCumulocityProvider.setAppKey('core-application-key');
  c8yCumulocityProvider.setBaseUrl('https://glenn.cumulocity.com/');
  c8yCumulocityProvider.setTenant('glenn');
}

export default configure;
