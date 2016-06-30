'use strict';

import url from 'url';

import Fb from './parse/fb';
import Technews from './parse/technews';

export default (options, callback, error) => {
  if(options.url === undefined) {
    throw new Error('"url" is needed.');
  }

  let output = {};
  switch(url.parse(options.url).hostname) {
    case 'www.facebook.com':
      output = Fb(options, callback, error);
      break;
    case 'technews.tw':
      output = Technews(options, callback, error);
      break;
    case 'video':
      break;
    default:
      break;
  }

  return output;
};
