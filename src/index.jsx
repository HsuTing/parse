'use strict';

import url from 'url';
import jsdom from 'jsdom';

import Fb from './parse/fb';
import Technews from './parse/technews';
import YouTube from './parse/youtube';

export default (options, callback, error) => {
  if(options.url === undefined) {
    throw new Error('"url" is needed.');
  }

  jsdom.env({
    url: options.url,
    defaultEncoding: 'utf-8',
    done: (err, window) => {
      if(err !== null) {
        if(error !== undefined) {
          error(err);
        }
        else {
          throw new Error('Can not get data from "' + options.url + '"');
        }
      }

      switch(url.parse(options.url).hostname) {
        case 'www.facebook.com':
          Fb(options, window.document, callback);
          break;

        case 'technews.tw':
          Technews(options, window.document, callback);
          break;

        case 'www.youtube.com':
          YouTube(options, window.document, callback);
          break;

        default:
          if(options.custom === undefined) {
            throw new Error('"' + url.parse(options.url).hostname + '" is not supported.');
          }

          options.custom(options, window.document, callback);
          break;
      }
    }
  });
};
