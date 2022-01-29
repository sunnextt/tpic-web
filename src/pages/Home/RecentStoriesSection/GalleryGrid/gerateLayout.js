import _ from 'lodash';

export const evenOrOdd = (num) => {
  //for string length take string
  if (num % 2 === 0) {
    //and replace numm with string.length here
    return 'even';
  } else {
    return 'odd';
  }
};
const generateLayout = () => {
  return _.map(_.range(0, 9), function (item, i) {
    return {
      x: _.random(0, 8),
      y: 0,
      w: 2,
      h: 6,
      i: i.toString(),
      static: Math.random() < 0.05,
    };
  });
};

export const layoutGenerate = generateLayout();
