'use strict';

const Funct = require('./../index');

const url = 'fb|https://www.facebook.com/planettTW/photos/a.266939230121116.1073741828.263606337121072/658104984337870/?type=3';

Funct(url, (data) => {
  console.log(data);
}, (err) => {
  console.log(err);
});
