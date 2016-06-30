'use strict';

import jsdom from 'jsdom';

export default(options, callback, error) => {
  jsdom.env({
    url: options.url,
    defaultEncoding: 'utf-8',
    done: (err, window) => {
      if(error !== undefined && err !== null) {
        error(err);
      }

      const candidates = window.document.querySelectorAll('._5pcb');
      Object.keys(candidates).map((index) => {
        if(candidates[index].querySelector('._5pcq').href === options.url) {
          const imgs = candidates[index].querySelectorAll('img');
          const output = {
            img: Object.keys(imgs).map((key) => {
              return imgs[key].src;
            }),
            title: candidates[index].querySelector('.fwb > a').innerHTML,
            content: candidates[index].querySelector('.userContent').innerHTML,
            author: candidates[index].querySelector('.fwb > a').innerHTML,
            date: candidates[index].querySelector('.timestampContent').innerHTML,
            link: options.url
          };

          callback(output);
        }
      });
    }
  });
}
