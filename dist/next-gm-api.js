/*!
 * name: @feizheng/next-gm-api
 * description: APIs for tampermonkey.
 * homepage: https://github.com/afeiship/next-gm-api
 * version: 1.0.0
 * date: 2020-07-07T22:53:34.025Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var APIS = [
    "GM_addStyle",
    "GM_deleteValue",
    "GM_listValues",
    "GM_addValueChangeListener",
    "GM_removeValueChangeListener",
    "GM_setValue",
    "GM_getValue",
    "GM_log",
    "GM_getResourceText",
    "GM_getResourceURL",
    "GM_registerMenuCommand",
    "GM_unregisterMenuCommand",
    "GM_openInTab",
    "GM_xmlhttpRequest",
    "GM_download",
    "GM_getTab",
    "GM_saveTab",
    "GM_getTabs",
    "GM_notification",
    "GM_setClipboard",
    "GM_info"
  ];

  var API_PRETTY = function () {
    var results = {};
    APIS.forEach(function (api) {
      var shortName = api.split('_')[1];
      results[shortName] = nx.GLOBAL[api];
    });
    return results;
  }

  var NxGmApi = nx.declare('nx.GmApi', {
    statics: nx.mix({
      version: '4.10.0',
    }, API_PRETTY)
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxGmApi;
  }
})();
