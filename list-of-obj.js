/*Input: List of objects like

 [{
  year: Number,
  team: String,
  result: String,
 },
{
  ...
}]

Output: Object with teams data with year results like

{
  teamName: {
    year: [result1, result2, ...],
    year: [result1, result2, ...],
    year: [result1, result2, ...],
  },
  teamName: {
    year: [result1, result2, ...],
    year: [result1, result2, ...],
    year: [result1, result2, ...],
  },
  ...
}
*/

const getResults = () => {
  const wcResults = [
    {
      year: 1994,
      team: 'team1',
      result: 'w',
    },
    {
      year: 1994,
      team: 'team1',
      result: 'w',
    },
    {
      year: 1994,
      team: 'team2',
      result: 'w',
    },
    {
      year: 1998,
      team: 'team1',
      result: 't',
    },
    {
      year: 2002,
      team: 'team1',
      result: 't',
    },
    {
      year: 2002,
      team: 'team2',
      result: 'l',
    },
    {
      year: 1994,
      team: 'team3',
      result: 'l',
    },
  ];

  return new Promise((resolve) => {
    resolve(wcResults);
  });
};

const rearrangeWcResults = () => {
  console.log(getResults())
};

rearrangeWcResults();