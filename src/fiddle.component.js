/**
 * Created by glenn on 07.05.17.
 */

const fiddleComponent = {
  template: `
    <div class="container csa-fiddle">
      hello, world
      <div>UI version: <code>{{vm.uiVersion}}</code></div>
    </div>
  `,
  controller: Controller,
  controllerAs: 'vm',
};

/* @ngInject */
function Controller(c8ySystem) {
  const vm = this;

  ((async () => { vm.uiVersion = await c8ySystem.getUIVersion(); })());

  // Put your fiddle code below.
}

export default fiddleComponent;
