'use strict';

export default(options, document, callback) => {
  const candidates = document.querySelectorAll('._5pcb');
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
