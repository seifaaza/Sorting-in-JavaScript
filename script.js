let numbers = [6, 9, 5, 1, 4]

function selectionSort (numbers) {
    for(let i = 0; i < numbers.length; i++){
        let indexOfmin = i;
        for(let j = i; j < numbers.length; j++){
            numbers[j] < numbers[indexOfmin] ? indexOfmin= j : null
        }
        if (indexOfmin !== i) {
             let temp = numbers[indexOfmin] ;
             numbers[indexOfmin] = numbers[i];
             numbers[i] = temp;
        }
    }
    return numbers
}
console.log(selectionSort(numbers))

function bubbleSort(numbers) {
    for(let i = 0 ; i < numbers.length; i++){
        for (let j = 1 ; j < numbers.length; j++){
            if( numbers[j] > numbers[j -1]){
                let tmp = numbers[j];
                numbers[j] = numbers[j -1]
                numbers[j -1] = tmp
            }
        }
    }
    return numbers
}
console.log(bubbleSort(numbers))

function insertionSort(numbers){
    for(let i = 0; i < numbers.length; i++){
        currentNumber = numbers[i]
        let j = i - 1
        while(j >= 0 && numbers[j] > currentNumber){
            numbers[j +1] = numbers[j];
            j--
        }
        numbers[j + 1] = currentNumber
    }
    return numbers
}

console.log(insertionSort(numbers))

function linearSearch(numbers, value){
    let existItem = false
     for(let i = 0; i < numbers.length; i++){
        if( numbers[i] == value) {
            existItem = true
        }
     }
     return existItem ? "Item found !" : "Not found !"
}

console.log(linearSearch(numbers, 1))

function matrixSearchOcc(matrix, value){
    occ = 0
    for(let i = 0 ; i < matrix.length ; i++){
        for(let j = 0; j < matrix[i].length; j++){
            matrix[i][j] == value ? occ += 1 : null
        }
    }
    return occ
}
console.log(matrixSearchOcc(
    [
        [1, 9, 0, 5, 7],
        [4, 3, 2, 0, 1],
        [0, 2, 1, 9, 8]
    ], 0));