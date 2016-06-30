'use strict';

const Funct = require('./../index');

const fb_url = 'https://www.facebook.com/planettTW/photos/a.266939230121116.1073741828.263606337121072/658104984337870/?type=3';
const media_url = 'http://technews.tw/2016/06/29/apple-new-patent-titled-micro-device-with-stabilization-post/';
const video_url = 'https://www.youtube.com/watch?v=eZMH6Mo0f9A';

Funct({url: video_url}, (data) => {
  console.log(data);
}, (err) => {
  console.log(err);
});
