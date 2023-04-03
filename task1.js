const countries = [
  "United States",
  "China",
  "India",
  "Indonesia",
  "Brazil",
  "Pakistan",
  "Nigeria",
  "Bangladesh",
  "Russia",
  "Mexico",
  "Japan",
  "Philippines",
  "Vietnam",
  "Ethiopia",
  "Egypt",
  "Iran",
  "Turkey",
  "Democratic Republic of the Congo",
  "Thailand",
  "Myanmar",
];

function checkCountry(country, countries) {
  if (
    typeof country === "string" &&
    country.length > 0 &&
    countries.includes(country) === true
  ) {
    const ind = countries.indexOf(country);
    console.log(
      `Zadaná krajina ${country} se nachází v seznamu krajin na index ${ind}.`
    );
  } else if (
    typeof country === "string" &&
    country.length > 0 &&
    countries.includes(country) === false
  ) {
    console.log(`Zadaná krajina ${country} se nenachází v seznamu krajin.`);
  } else {
    console.log(`Zadali jste neplatný dotaz ${country}`);
  }
}

// Pro kontrolu správnosti
checkCountry("Germany", countries);
checkCountry("Japan", countries);
checkCountry(1000, countries);
checkCountry("Chzechia", countries);
checkCountry("Baraba3ka", countries);
checkCountry(25, countries);
checkCountry(null, countries);

/* ----------------------------------------------------------------------------------------------------------- */
function addCountry(country, countries) {
  const ind = countries.indexOf(country);
  if (
    typeof country === "string" &&
    country.length > 0 &&
    countries.includes(country) === true
  ) {
    console.log(
      `Zadaná krajina ${country} se nachází v seznamu krajin na index ${ind}.`
    );
  } else if (
    typeof country === "string" &&
    country.length > 0 &&
    countries.includes(country) === false
  ) {
    countries.push(country);
    countries.length;
    console.log(
      `Zadaná krajina ${country} byla úspěšně přidaná do seznamu krajin na indexu ${ind}. Celkový počet krajin v seznamu je ${countries.length}.`
    );
  } else {
    console.log(`Zadali jste neplatný dotaz ${country}`);
  }
}
// Pro kontrolu správnosti
addCountry("Vietnam", countries);
addCountry("Mexico", countries);
addCountry("Poland", countries);
addCountry("", countries);

/* ------------------------------------------------------------------------------------------------------------ */
function removeCountry(country, countries) {
  const ind = countries.indexOf(country);
  if (
    typeof country === "string" &&
    country.length > 0 &&
    countries.includes(country) === false
  ) {
    console.log(`Zadaná krajina ${country} se nenachází v seznamu.`);
  } else if (countries.includes(country) === true) {
    const del = countries.splice(country.ind, 1);
    const total = countries.length;
    console.log(
      `Zadaná krajina ${country} byla odstraněná se seznamu krajin na indexu ${ind}. Aktuální počet krajin v seznamu je ${total} .`
    );
  } else {
    console.log(`Zadali jste neplatný dotaz ${country}`);
  }
}

// Pro kontrolu správnosti
removeCountry("", countries);
removeCountry("Vietnam", countries);
removeCountry("Laos", countries);
removeCountry("Thailand", countries);
removeCountry("Chzechia", countries);
removeCountry("Baraba3ka", countries);
removeCountry(25, countries);
removeCountry(null, countries);
