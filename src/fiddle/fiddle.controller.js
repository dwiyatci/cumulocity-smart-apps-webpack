/**
 * Created by glenn on 8/14/16.
 */

FiddleController.$inject = ['c8ySystem'];

export default function FiddleController(c8ySystem) {
  const vm = this;

  c8ySystem
    .getUIVersion()
    .then(version => (vm.uiVersion = version));

  // Put your fiddle code here.
}
