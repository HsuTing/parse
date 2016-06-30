# Web Parse 

The module is used for parsing data from website.

## Start

- Install

```
  npm install web-parse --save
```

## Usage

- `parse(options, callback, error)`

```
'use strict';

import parse from 'web-parse';

const url = 'http://url';

parse({url: url}, (data) => {
// When program gets data successfully, it will execute this function.
  console.log(data);
}, (err) => {
// When program gets data unsuccessfully, it will execute this function.
  console.log(err);
});
```

## Support

- `www.facebook.com`
- `technews.tw`
- `www.youtube.com`

If your website is not supported or you want to get custom output, you can add `custom` in `options` like `{ custom: (document) => {} }`.
