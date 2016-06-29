'use strict';

import url from 'url';
import jsdom from 'jsdom';

export default(url_path, callback, error) => {
  jsdom.env({
    url: url_path,
    defaultEncoding: 'utf-8',
    done: (err, window) => {
      if(error !== undefined) {
        error(err);
      }

      const candidates = window.document.querySelectorAll('._5pcb');
      Object.keys(candidates).map((index) => {
        if(candidates[index].querySelector('._5pcq').href === url_path) {
          const output = {
            type: url.parse(url_path).hostname,
            img: candidates[index].querySelectorAll('img')[1] !== undefined ? candidates[index].querySelectorAll('img')[1].src : null,
            title: candidates[index].querySelector('.fwb > a').innerHTML,
            content: candidates[index].querySelector('.userContent').innerHTML,
            author: candidates[index].querySelector('.fwb > a').innerHTML,
            date: candidates[index].querySelector('.timestampContent').innerHTML,
            link: url_path
          };

          callback(output);
        }
      });
    }
  });
}
