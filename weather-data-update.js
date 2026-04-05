var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32]; 

let highest_temp = highTemperatures[0];
let lowest_temp = lowTemperatures[0];

for (let i = 1; i < highTemperatures.length; i++) {
    if(highest_temp < highTemperatures[i]) {
        highest_temp = highTemperatures[i];
    }
}
for (let i = 1; i < lowTemperatures.length; i++) {
    if(lowest_temp > lowTemperatures[i]) {
        lowest_temp = lowTemperatures[i];
    }
}

console.log(`The highest temperature: `, highest_temp);
console.log(`The lowest temperature: `, lowest_temp);

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

let median_high;
let median_low;

function median(ar) {
    let sorted_array = ar.slice();
    sorted_array.sort(function(a, b) {return a - b});
    let middle = Math.floor(sorted_array.length/2);
    if(sorted_array.length % 2 == 0) {
        return (sorted_array[middle - 1] + sorted_array[middle]) / 2;
    } else {
        return sorted_array[middle];
    }
}

console.log(`Median high temperature: `, median(highTemperatures));
console.log(`Median low temperature: `, median(lowTemperatures));



