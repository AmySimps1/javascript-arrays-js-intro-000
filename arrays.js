// var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

// function addElementToBeginningOfArray(array, element) { 
// return [element, ...array];
// }
 
// function destructivelyAddElementToBeginningOfArray(array, element) { 
// array.unshift(element)
// return array
// }
 
// function addElementToEndOfArray(array, element) {
// return [...array, element];
// }
 
// function destructivelyAddElementToEndOfArray(array, element) {
// array.push(element)
// return array
// }
 
// function accessElementInArray(array, index) {
//   return array[index];
// }
 
// function destructivelyRemoveElementFromBeginningOfArray(array) {
//   array.shift()
//   return array
// }
 
// function removeElementFromBeginningOfArray(array) {
//   return array.slice(-2)
// }
 
// function destructivelyRemoveElementFromEndOfArray(array) {
//   array.pop()
//   return array
// }
 
// function removeElementFromEndOfArray(array) {
//   return array.slice(0, array.length - 1)
// }
 
 var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]



function addElementToBeginningOfArray(array, element){
var newArray = [element, ...array];
	return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
	return array.unshift(element);
}
 
function addElementToEndOfArray(array, element){
var newArray = [...array, element];
return newArray;
}

function destructivelyAddElementToEndOfArray(array, element){
	return array.push(element);
}

function accessElementInArray(array, index){
	return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
	var newArray = array.shift();
	return newArray;
}

function removeElementFromBeginningOfArray(array){
	array.slice(array.length - 2);
	return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
return array.pop();
}

function removeElementFromEndOfArray(array){
return array.slice(0, array.length -1)
}


function bonus(array){
return array.splice()	
}


 
 
 