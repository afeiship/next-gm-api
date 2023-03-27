/*!
 * name: @jswork/next-gm-api
 * description: APIs for tampermonkey.
 * homepage: https://js.work
 * version: 1.0.0
 * date: 2023-03-27 14:43:23
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
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
