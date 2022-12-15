//Exercise 1
/*The getResult function simulate a DB Request returning a Promise with world cup results like

 {
  year: Number,
  team: Number,
  result: String,
}[]

Modify rearrangeWcResults to get the results and rearrange them to return an object with teams data with year results like

{
  1: {
    1994: ['w', 'w'],
    1998: ['t'],
    2002: ['t']  
  },
  ...
}
*/

const wcResults = [
  {
    year: 1994,
    team: 1,
    result: 'w',
  },
  {
    year: 1994,
    team: 1,
    result: 'w',
  },
  {
    year: 1994,
    team: 2,
    result: 'w',
  },
  {
    year: 1998,
    team: 1,
    result: 't',
  },
  {
    year: 2002,
    team: 1,
    result: 't',
  },
  {
    year: 2002,
    team: 2,
    result: 'l',
  },
  {
    year: 1994,
    team: 3,
    result: 'l',
  },
];

const getResults = () => {
  return new Promise((resolve) => {
    resolve(wcResults);
  });
};

const rearrangeWcResults = () => {};

rearrangeWcResults();

// // exercise 2
// (() => {
//   console.log('First log');
//   setTimeout(console.log.bind(null, 'Second Log'), 1000);
//   setTimeout(console.log.bind(null, 'Third Log'), 0);
//   console.log('Last log');
// })();

// // exercise 3
// const x = 'global';
// (() => {
//   let x = 'First value';
//   const fn = () => {
//     let x = 'Other value';
//     console.log(x);
//   };
//   fn();
//   console.log(x);
// })();

// // exercise 4
// (() => {
//   const x = ['a', 'b', 'c', 'd', 'e'];
//   let counter = 0;
//   x.forEach((i) => {
//     setTimeout(() => {
//       console.log(i);
//       counter++;
//     });
//   });
//   console.log(counter);
// })();
