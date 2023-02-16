//----------- task 1 -----------
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// function removeElement(array, elem) {
//   let indexItem = arr.indexOf(elem);
//
//   if (arr.includes(elem)) {
//     arr.splice(indexItem, 1);
//   } else if (isNaN(elem)) {
//     console.log('wrong type of data, integer is required');
//   } else {
//     console.log('value not found');
//   }
// }
//
// removeElement(arr, 7);
// console.log(arr);

//----------- task 2 -----------
// let arr = [4, 'John', 35, 'Lock', 8, 'Lost', 73];
// let onlyNumbersArr = [];
// let sum = 0;
// let average = 0;
// function getAverageFromArrayOnlyNumberElements(array) {
//   console.log(array.length);
//   for (let value of array) {
//     if (!isNaN(value)) {
//       onlyNumbersArr.push(value);
//       sum += value;
//     }
//   }
//   return (average = Math.round(sum / onlyNumbersArr.length));
// }
//
// getAverageFromArrayOnlyNumberElements(arr);
// console.log(average);

//----------- task 3 -----------
// let resMessage;
// function removeSymbols(message, symbols) {
//   for (symbol of symbols) {
//     let regSymbol = new RegExp(symbol, 'g');
//     return (resMessage = message.replace(regSymbol, '));
//   }
// }
//
// removeSymbols('hello world', ['l', 'd']);
// console.log(resMessage);
