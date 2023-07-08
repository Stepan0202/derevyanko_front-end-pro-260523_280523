'use strict'
let array = [87, 52, 14, 67, 91, 29, 75, 41, 63, 10, 36, 68, 59, 81, 7, 48, 3, 19, 94, 46, 22, 85, 56, 2, 65, 98, 12, 33, 74, 16, 96, 71, 25, 93, 30, 70, 6, 83, 47, 1, 79, 42, 58, 88, 21, 38, 99, 9, 66, 27, 54, 76, 11, 45, 80, 18, 86, 69, 20, 97, 40, 13, 55, 77, 34, 50, 73, 5, 92, 39, 15, 60, 28, 84, 32, 64, 89, 43, 8, 90, 53, 72, 23, 61, 78, 4, 95, 17, 82, 26, 49, 37, 62, 31, 57, 24, 51, 35, 44, 0];
function chooseSorting(array){
    let result = [];
    let iterations = array.length
    for(let i = 0; i < iterations; i++){
        let max = array[0];
        let index = 0;
        for(let j = 0; j < array.length; j++){
            if (array[j] > max){
                max = array[j];
                index = j;
            }
        }
        result.push(max);
        array.splice(index, 1);
        return result;
    }
    
}

function fastSorting(array){
    let startIndex = Math.floor(array.length/2);
    const startElement = array[startIndex];
    console.log(startElement);
    console.log(startIndex);
    console.log(array);
    for(let i = 0; i < array.length; i++){
        if(array[i] > startElement){
            if(i > startIndex){
                let replacedElement = array.splice(i,1)[0];
                array.unshift(replacedElement);
                startIndex++;
            }
        }
        if(array[i] < startElement){
            if(i < startIndex){
                let replacedElement = array.splice(i,1)[0];
                array.push(replacedElement);
                
            }
        }
    }
    console.log(array);
    if (array.length = 0){
        return array[0];
    }
}
const startChooseSorting = performance.now();
chooseSorting(array);
const endChooseSorting = performance.now();

const startFastSorting = performance.now();
fastSorting(array);
const endFastSorting = performance.now();
console.log(`Choose sorting time: ${endChooseSorting - startChooseSorting}`);
console.log(`Fast sorting time: ${endFastSorting - startFastSorting}`);
