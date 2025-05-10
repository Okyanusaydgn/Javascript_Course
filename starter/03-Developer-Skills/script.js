// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// TODO: Bu fonksiyonu optimize et
// FIXME: Burada hata var, düzeltilecek
// BUG: Şu case yanlış çalışıyor
// NOTE: Dikkat, bu kısım özel durum

// PROBLEM 1
// We work for a company building a smart home thermometer. Our most recent task in this: "Given an array of themperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures ?
// - What's a sensor error ?  And what to do ?

// 2) Breaking up into sub-problems
//  - How to ignore errors ?
//  - Find max value in temp array
//  - Find min value in temp array
//  - Subtract min from max (amplitude) and return it

/*
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
*/

// PROBLEM 2
// Function should now recieve 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice ? No!

// 2) Breaking up into sub-problems
// - How to merge 2 arrays ?

/*
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    // C) FIX
    // value: Number(prompt('Degrees celcius:')),
    value: 10,
  };

  // B) FIND
  console.log(measurement);
  // console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// IDENTIFY
console.log(amplitudeBug);
*/

////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures,
the thermometer displays a string with these
temperatures.

Example : [17, 21, 23] will print "... 17°C in a 1 days ... 21°C in 2 days ... 23°C in 3 days ..."

Create a function 'printForecast' which take in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/*
// My Solving

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = ''; // We will store the final string here

  // Loop through each temperature in the array
  for (let i = 0; i < arr.length; i++) {
    // Add each temperature and day info to the string
    str += `... ${arr[i]}°C in ${i + 1} days `;
  }

  return str; // Return the complete string
};

console.log(printForecast(data1)); // Call the function and print the result
*/

// General Sokving

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days ? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transfrom array into string
// - Transform each element to string with °C
// - Strings needs to contain day (index + 1 )
// - Add ... between elements and start and end of string

/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = ''; // We will store the final string here

  // Loop through each temperature in the array
  for (let i = 0; i < arr.length; i++) {
    // Add each temperature and day info to the string
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }

  console.log('...' + str);
};
printForecast(data1);
*/

////////////////////////////
// Coding Challenge #2 with AI

/*
Let's say you're building a time tracking application for
freelancers. At some point in building this app, you need
a function that receives daily work hours for a certain
week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the weel was full- time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

const trackingSystem = function (arr) {
  let totalHours = 0;
  let maxHours = 0;
  let daysWorked = 0;

  for (let i = 0; i < arr.length; i++) {
    totalHours += arr[i];
    if (arr[i] > maxHours) {
      maxHours = arr[i];
    }
    if (arr[i] !== 0) {
      daysWorked += 1;
    }
  }
  const avgDailyHours = totalHours / 7;
  const result = {
    totalHours: totalHours,
    avgDailyHours: avgDailyHours,
    daysWorked: daysWorked,
    maxHours: maxHours,
    isFullTime: totalHours >= 35 ? `Full-time` : `part-time`,
  };

  console.log(result);
  return result;
};

trackingSystem([7.5, 8, 6.5, 0, 8.5, 4, 0]);
