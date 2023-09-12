// Challenge 1

function filterOutFalsy(val1, val2){
    return (!val1) ? val1 : val2;
}

console.log(filterOutFalsy(false, 100))

// Challenge 2

function arrLength(arr){
    return arr.length
}

console.log(arrLength([1, 2, 3]))

//Challenge 3 ... Get teh Last Elelment in the Array

function lastElem(arr1) {
    return arr1[arr1.Length - 1];
}

console.log(lastElem([1, 2, 3, 4]))

// challenge 4--- sum or array

function arrSum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
}
console.log(arrSum([2, 2, 2]))

// Challenge 5 ------ Progressive Sum

function progressiveSum(num){
    let sum = 0;
    for (let i = 0; i < num; i++){
        sum = sum + i;
    }
    return sum + num 
}
console.log(progressiveSum(600))

// Challenge 6 ---Calculate the time
function calcTime(num){
    let timerMinutes = Math.floor(num / 60);
    let timerSeconds = num % 60;
    if (timerMinutes.toString().length === 1){
        timerMinutes = "0" + timerMinutes
    }
    return timerMinutes + ":" + timerSeconds
}
console.log(calcTime(50))


// Challenge  7 ------ Return Largest Number in Array
function getMax(arr){
    let max = arr[0];
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max}
console.log(getMax([1,2,3]))

// Challenge 8 ----------- Reversing a String
function reverseString (str){
    let reversedString = '';
    for (let i = 0; i < str.length; i++){
        reversedString = str[i] + reversedString;
    }
    return reversedString
}

console.log(reverseString("Usama"))

// Challenge 9 ------------- Changing every value to zero in array

function convertToZero (arr){
    return arr.map(element => 0)
}

console.log(convertToZero([1, 2]))

// Challenge 10 -------------------------- remove apples from string 
// Using For loop
function removeApples(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] != 'Apple'){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(removeApples(['Banana', 'Orange', 'Apple']))

// Using arr.filter 

function removeApple(arr){
    return arr.filter(element => element != 'Apple')
}

console.log(removeApple(['Apple','Banana', 'Orange']))


//Challenge 11 ------------------- Reomves Falsy Values and reeturn truthy values

function filterOutFalsy(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (!! arr[i] == true ){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(filterOutFalsy(["", [], null, undefined, "0"]))

function filtersOutFalsy(arr){
    return arr.filter(element => !!element == true)
}

console.log(filtersOutFalsy(["", [], null, undefined, "0"]))


// Challenge 12 ----------------- truthy to true & Falsy to False

function convertToBoolean (arr){
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        if (!!arr[i] == true){
            newArr.push(true)
        }
        else{
            newArr.push(false)
        }
    }
    return newArr
}

console.log(convertToBoolean([500, 0, "David", "", []]))

// Using arr.map method
function convertsToBoolean(arr){
    return arr.map(element => !!element)
}

console.log(convertsToBoolean([500, 0, "David", "", []]))
