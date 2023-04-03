const countriesPopulation = [
  { country: "China", population: 1439323776 },
  { country: "India", population: 1379302771 },
  { country: "USA", population: 331002651 },
  { country: "Indonesia", population: 269603400 },
  { country: "Pakistan", population: 220892340 },
  { country: "Bangladesh", population: 164970459 },
  { country: "Japan", population: 126451398 },
  { country: "Philippines", population: 109581078 },
  { country: "Vietnam", population: 97338579 },
  { country: "Turkey", population: 84339642 },
];

const populationTotal = 8000000000;

/* ------------------------------------------------------------------------------------------------------------ */
function percentageOfPopulation(population, populationTotal) {
  const counting = Math.floor((population / populationTotal) * 10000) / 100;
  return counting;
}

/*------------------------------------------------------------------------------------------------------------- */
const copyCountries = countriesPopulation.slice();

/* ------------------------------------------------------------------------------------------------------------ */
copyCountries.sort((a, b) => a.population - b.population);
/* console.log(copyCountries); */

/* ----------------------------------------------------------------------------------------------------------- */
copyCountries.forEach(
  (item, index) => (item.id = item.country.substring(0, 3) + index)
);
/* console.log(copyCountries); */

/* --------------------------------------------------------------------------------------------------------- */
copyCountries.forEach(
  (item) =>
    (item.percentage = percentageOfPopulation(item.population, populationTotal))
);
/* console.log(copyCountries); */

/* ------------------------------------------------------------------------------------------------------------ */
const longShort = copyCountries.filter(function (item) {
  return (
    item.country.length <= 8 &&
    item.country.length > 4 &&
    item.percentage > 1.5 &&
    item.percentage < 10
  );
});
/* console.log(longShort); */

/* ------------------------------------------------------------------------------------------------------------ */
