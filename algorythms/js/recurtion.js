/*sum function with Euclid algorithm
We need to get array of numbers and then sum that numbers
basic case - aray have length 1 or 0;
*/

const array = [1, 10, 25, 30, 44];
const sumArray = sum(array);
function sum(array){
    if (array.length == 1){
        return 1
    }
    if (array.length == 0){
        return 0
    }
    let firstArrEl = array.splice(0, 1);
    return firstArrEl[0] + sum(array);
}

