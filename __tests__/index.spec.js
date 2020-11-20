(function() {
  const NxGmApi = require('../src');

  describe('NxGmApi.methods', function() {
    test('init', function() {
      const data = { key: 1, value: 2 };
      expect(!!data).toBe(true);
    });
  });
})();
