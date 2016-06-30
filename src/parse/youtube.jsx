'use strict';

export default(options, document, callback) => {
  const metas = document.querySelectorAll('meta');
  let first = true;

  const output = {
    video: Object.keys(metas).map((key) => {
      if(metas[key].getAttribute("property") === 'og:video:url' && first) {
        first = false;
        return metas[key].getAttribute("content");
      }
      return '';
    }).join(''),
    title: document.querySelector('#eow-title').innerHTML,
    content: document.querySelector('#eow-description').innerHTML,
    author: document.querySelector('.yt-user-info > a').innerHTML,
    date: document.querySelector('.watch-time-text').innerHTML,
    link: options.url
  }

  callback(output);
}
