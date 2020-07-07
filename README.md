# next-gm-api
> APIs for tampermonkey.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @feizheng/next-gm-api
```

## apis
| api                       | description  |
| ------------------------- | ------------ |
| addStyle                  | tampermonkey |
| deleteValue               | tampermonkey |
| listValues                | tampermonkey |
| addValueChangeListener    | tampermonkey |
| removeValueChangeListener | tampermonkey |
| setValue                  | tampermonkey |
| getValue                  | tampermonkey |
| log                       | tampermonkey |
| getResourceText           | tampermonkey |
| getResourceURL            | tampermonkey |
| registerMenuCommand       | tampermonkey |
| unregisterMenuCommand     | tampermonkey |
| openInTab                 | tampermonkey |
| xmlhttpRequest            | tampermonkey |
| download                  | tampermonkey |
| getTab                    | tampermonkey |
| saveTab                   | tampermonkey |
| getTabs                   | tampermonkey |
| notification              | tampermonkey |
| setClipboard              | tampermonkey |
| info                      | tampermonkey |

## usage
```js
import NxGmApi from '@feizheng/next-gm-api';

NxGmApi.log('hello tampermonkey~');
```

## resources
- https://www.tampermonkey.net/documentation.php

## license
Code released under [the MIT license](https://github.com/afeiship/next-gm-api/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-gm-api
[version-url]: https://npmjs.org/package/@feizheng/next-gm-api

[license-image]: https://img.shields.io/npm/l/@feizheng/next-gm-api
[license-url]: https://github.com/afeiship/next-gm-api/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-gm-api
[size-url]: https://github.com/afeiship/next-gm-api/blob/master/dist/next-gm-api.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/next-gm-api
[download-url]: https://www.npmjs.com/package/@feizheng/next-gm-api
