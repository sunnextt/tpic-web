import _ from 'lodash';

let number = 4;
const evenOrOdd = (num) => {
  //for string length take string
  if (num % 2 === 0) {
    //and replace numm with string.length here
    return 'even';
  } else {
    return 'odd';
  }
};

const check = evenOrOdd(number);


const arr = [2, 3, 4, 5, 6, 7, 8];
const returnEvenArray = (arr) => {
  return arr.filter((el) => {
    return el % 2 === 0;
  });
};

const evenArray = returnEvenArray(arr);
var randNumber = evenArray[Math.floor(Math.random() * evenArray.length)];



function random_item(items) {
  return items[Math.floor(Math.random() * items.length)];
}

const items = [0, 3, 6, 9];

const xranNumber = random_item(items);

console.log(xranNumber);
console.log(randNumber);

const generateLayout = () => {
  return _.map(_.range(0, 3), function (item, i) {
    // var y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: xranNumber,
      y: 2,
      w: 3,
      h: randNumber,
      i: i.toString(),
      static: Math.random() < 0.05,
    };
  });
};

export const layoutGenerate = generateLayout();
