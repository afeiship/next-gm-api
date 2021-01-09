/*!
 * name: @jswork/next-gm-api
 * description: APIs for tampermonkey.
 * homepage: https://github.com/afeiship/next-gm-api
 * version: 1.0.2
 * date: 2021-01-09 16:38:53
 * license: MIT
 */

(function() {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  var APIS = [
    'GM_addStyle',
    'GM_deleteValue',
    'GM_listValues',
    'GM_addValueChangeListener',
    'GM_removeValueChangeListener',
    'GM_setValue',
    'GM_getValue',
    'GM_log',
    'GM_getResourceText',
    'GM_getResourceURL',
    'GM_registerMenuCommand',
    'GM_unregisterMenuCommand',
    'GM_openInTab',
    'GM_xmlhttpRequest',
    'GM_download',
    'GM_getTab',
    'GM_saveTab',
    'GM_getTabs',
    'GM_notification',
    'GM_setClipboard',
    'GM_info'
  ];

  var NxGmApi = nx.declare('nx.GmApi', {
    statics: {
      version: '4.10.0',
      generate: function (inContext) {
        var results = {};
        APIS.forEach(function (api) {
          var shortName = api.split('_')[1];
          this[shortName] = results[shortName] = inContext[api];
        }, this);
        return results;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxGmApi;
  }
})();
