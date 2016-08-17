/**
 * Created by glenn on 8/14/16.
 */

const datapointTemplate = require('./datapoint.html');

export default function xxDatapoint() {
  const ddo = {
    restrict: 'E',
    template: datapointTemplate,
    scope: {
      value: '=',
    },
  };

  return ddo;
}
