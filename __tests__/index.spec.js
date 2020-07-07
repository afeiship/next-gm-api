(function() {
  var nx = require('@feizheng/next-js-core2');
  var NxGmApi = require('../src/next-gm-api');

  describe('NxGmApi.methods', function() {
    test('init', function() {
      var data = {
        key: 1,
        value: 2
      };
      expect(!!data).toBe(true);
    });
  });
})();
