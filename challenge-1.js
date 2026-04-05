var todaysWeather = {
  temperature: {
    high: 85,
    low: 75
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "6:30 AM",
    sunset: "5:00 PM"
  }
}

console.log(todaysWeather.temperature.high)
console.log(todaysWeather.temperature.low)
console.log(todaysWeather.conditions)
console.log(todaysWeather.astronomy.sunrise)

console.log(`Today's weather is ${todaysWeather.conditions}. The high temperature is ${todaysWeather.temperature.high} degrees and the low is ${todaysWeather.temperature.low} degrees. The sun rose this morning at ${todaysWeather.astronomy.sunrise} and will set at ${todaysWeather.astronomy.sunset}.`)


