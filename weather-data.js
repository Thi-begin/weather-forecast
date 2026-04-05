var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32]; 

console.log(highTemperatures[0] );
console.log(lowTemperatures[lowTemperatures.length - 1]);

let sum_high = 0;
let sum_low = 0;

for (let i = 0; i < highTemperatures.length; i++) {
    sum_high += highTemperatures[i];
}

for (let i = 0; i < lowTemperatures.length; i++) {
    sum_low += lowTemperatures[i];
}

console.log('The average high temperature: ', sum_high/highTemperatures.length);
console.log('The average low temperature: ', sum_low/lowTemperatures.length);
