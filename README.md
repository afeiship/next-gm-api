# next-gm-api
> APIs for tampermonkey.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-gm-api
```

## apis
| api                       | description        |
|---------------------------|--------------------|
| `gets`                    | Get all the apis.  |
| addStyle                  | From tampermonkey. |
| deleteValue               | From tampermonkey. |
| listValues                | From tampermonkey. |
| addValueChangeListener    | From tampermonkey. |
| removeValueChangeListener | From tampermonkey. |
| setValue                  | From tampermonkey. |
| getValue                  | From tampermonkey. |
| log                       | From tampermonkey. |
| getResourceText           | From tampermonkey. |
| getResourceURL            | From tampermonkey. |
| registerMenuCommand       | From tampermonkey. |
| unregisterMenuCommand     | From tampermonkey. |
| openInTab                 | From tampermonkey. |
| xmlhttpRequest            | From tampermonkey. |
| download                  | From tampermonkey. |
| getTab                    | From tampermonkey. |
| saveTab                   | From tampermonkey. |
| getTabs                   | From tampermonkey. |
| notification              | From tampermonkey. |
| setClipboard              | From tampermonkey. |
| info                      | From tampermonkey. |
| cookie                    | From tampermonkey. |

## usage
```js
// @grant GM_addStyle
// @grant GM_deleteValue
// @grant GM_listValues
// @grant GM_addValueChangeListener
// @grant GM_removeValueChangeListener
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_log
// @grant GM_getResourceText
// @grant GM_getResourceURL
// @grant GM_registerMenuCommand
// @grant GM_unregisterMenuCommand
// @grant GM_openInTab
// @grant GM_xmlhttpRequest
// @grant GM_download
// @grant GM_getTab
// @grant GM_saveTab
// @grant GM_getTabs
// @grant GM_notification
// @grant GM_setClipboard
// @grant GM_info
// @grant GM_cookie

import NxGmApi from '@feizheng/next-gm-api';

NxGmApi.log('hello From tampermonkey.~');
```

## resources
- https://www.From tampermonkey..net/documentation.php

## license
Code released under [the MIT license](https://github.com/afeiship/next-gm-api/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-gm-api
[version-url]: https://npmjs.org/package/@jswork/next-gm-api

[license-image]: https://img.shields.io/npm/l/@jswork/next-gm-api
[license-url]: https://github.com/afeiship/next-gm-api/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-gm-api
[size-url]: https://github.com/afeiship/next-gm-api/blob/master/dist/next-gm-api.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-gm-api
[download-url]: https://www.npmjs.com/package/@jswork/next-gm-api
