'use strict';

import Fb from './fb/index'

export default (link, callback, error) => {
  let output;
  const token = link.split('|');

  switch(token[0]) {
    case 'fb':
      output = Fb(token[1], callback, error);
      break;
    case 'media':
      break;
    case 'video':
      break;
    default:
      break;
  }

  return output;
};
