'use strict';

export default(options, document, callback) => {
  const imgs = document.querySelectorAll('img');
  let img = [];
  Object.keys(imgs).map((key) => {
    if(imgs[key].parentNode.nodeName === 'A') return;
    if(imgs[key].src.indexOf('uploads') === -1) return;
    if(imgs[key].parentNode.className === 'jj-thumb-holder') return;

    img.push(imgs[key].src);
  });

  const heads = document.querySelectorAll('.head');
  const bodys = document.querySelectorAll('.body');
  const data = {};
  Object.keys(heads).map((key) => {
    if(heads[key].innerHTML === '作者') {
      data['author'] = bodys[key].querySelector('a').innerHTML;
    }
    else if(heads[key].innerHTML === '發布日期') {
      data['date'] = bodys[key].innerHTML;
    }
  });

  const content = document.querySelectorAll('.indent > p');

  const output = {
    img: img,
    title: document.querySelector('.entry-title > a').innerHTML,
    content: Object.keys(content).map((key) => {
      return '<p>' + content[key].innerHTML + '</p>';
    }).join(''),
    author: data.author,
    date: data.date,
    link: options.url
  }

  callback(output);
}
