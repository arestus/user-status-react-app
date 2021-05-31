import cities from '../../cities.json';

const biggestCity = [...cities]
  .sort((a, b) => b.population - a.population)
  .splice(0, 1);

const withoutBiggestCity = [...cities]
  .sort((a, b) => a.population - b.population)
  .splice(0, 22)
  .filter(city => city.population > 50000)
  .sort(function (a, b) {
    if (a.city < b.city) {
      return -1;
    }
    if (a.city > b.city) {
      return 1;
    }
    return 0;
  });

const byAlphabet = [...biggestCity, ...withoutBiggestCity];

export default byAlphabet;
