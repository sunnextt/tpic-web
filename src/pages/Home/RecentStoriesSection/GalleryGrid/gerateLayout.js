import _ from 'lodash';

let number = 4;
const evenOrOdd = (num) => {
  //for string length take string
  if (num % 2 == 0) {
    //and replace numm with string.length here
    return 'even';
  } else {
    return 'odd';
  }
};

const check = evenOrOdd(number);

const generateLayout = () => {
  return _.map(_.range(0, 3), function (item, i) {
    var y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: 0,
      y: 2,
      w: 3,
      h: 6,
      i: i.toString(),
      static: Math.random() < 0.05,
    };
  });
};

export const layoutGenerate = generateLayout();
