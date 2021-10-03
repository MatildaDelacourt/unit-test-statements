/*
 * stmnts-03.js
 * Language: javascript
 * Test: tests/stmnts-03.test.js
 * Path: src/stmnts-03.js
 * Temperature Calculator
 */

/**
 * Converts a temperature in Fahrenheit to Celsius rounded to 2 decimal places
 * @param {number} fahrenheit - temperature in Fahrenheit
 * @returns {number} - temperature in Celsius
 */
function fahrenheitToCelsius(fahrenheit) {
  // write your code here & return
  let number = (fahrenheit - 32) * (5 / 9);
  number = +number.toFixed(2);
  return number;
}

/**
 * Converts a temperature in Celsius to Fahrenheit rounded to 2 decimal places
 * @param {number} celsius - temperature in Celsius
 * @returns {number} - temperature in Fahrenheit
 */
function celsiusToFahrenheit(celsius) {
  // write your code here & return
  let number = celsius * 1.8 + 32;
  number = +number.toFixed(2);
  return number;
}

module.exports = {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
};
