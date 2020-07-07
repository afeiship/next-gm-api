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


  var NxGmApi = nx.declare('nx.GmApi', {
    statics: {
      version: '4.10.0',
      apis: {},
      init: function () {
        APIS.forEach(function (api) {
          var shortName = api.split('_')[1];
          this.apis[shortName] = nx.GLOBAL[api];
        }, this);
        nx.mix(this, this.apis);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxGmApi;
  }
})();
