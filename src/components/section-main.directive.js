/**
 * Created by glenn on 8/13/16.
 */

xxSectionMain.$inject = ['$compile'];

export default function xxSectionMain($compile) {
  const ddo = {
    restrict: 'E',
    scope: {
      filter: '=?',
      refresh: '=?',
    },
    link: linkFunc,
  };

  return ddo;

  function linkFunc(scope, element, attrs) {
    const { templateName, controllerName } = attrs;

    /*
     * Dynamically create template based on template name for main contents of
     * the section (e.g. '../alarms/alarms.html').
     */
    // eslint-disable-next-line global-require
    element.html(require(`../${templateName}/${templateName}.html`));

    // Dynamically add corresponding controller to the template.
    const children = element.children();
    children.attr('ng-controller', `${controllerName} as vm`);

    $compile(children)(scope);
  }
}
