const hasCity = (country, cities) => (city) =>
  cities.includes(city)
    ? `${city} is a city from ${country}`
    : `${city} is not a city from ${country}`
