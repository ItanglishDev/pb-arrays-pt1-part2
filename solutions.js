const myLuckyNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultIs =
  myLuckyNumber[0] +
  myLuckyNumber[1] +
  myLuckyNumber[2] +
  myLuckyNumber[3] +
  myLuckyNumber[4] +
  myLuckyNumber[5] +
  myLuckyNumber[6] +
  myLuckyNumber[7] +
  myLuckyNumber[8] +
  myLuckyNumber[9];

console.log(resultIs);

const valueOne = 5.2;
const valueTwo = 4.9;
const valueTogether = valueOne.toString() + valueTwo.toString();
console.log(valueTogether);
const valueTogetherArray = valueTogether.split("");
console.log(valueTogetherArray);

console.log("this is something" + myLuckyNumber[0]);

const valueOneString = valueOne.toString();
// const valueOneStringArray = valueOneString.split("");
const newArray = [myLuckyNumber[0], valueOne];
console.log(valueOneString);
console.log(newArray);
// console.log(valueOneStringArray);

console.log(myLuckyNumber[9]);
myLuckyNumber.push(valueOne);
console.log(myLuckyNumber);

myLuckyNumber.includes(valueOne)
  ? console.log(myLuckyNumber)
  : myLuckyNumber.push(valueTwo)
  ? console.log(myLuckyNumber)
  : "";

const arrayOfWords = ["John", "Paul", "the", "Second"];
const arrayOfWordsOne = arrayOfWords.slice(0, 3);
const arrayOfWordsTwo = arrayOfWords.slice(3);
console.log(arrayOfWordsOne.join(" ") + " and " + arrayOfWordsTwo.join(" "));
// console.log(arrayOfWordsOne);
// console.log(arrayOfWordsTwo);

// console.log(arrayOfWordsOne + "and" + arrayOfWordsTwo);

console.log(myLuckyNumber.slice(0, 6));

const stringOfNumbers = "025468";
const stringOfNumbersArray = stringOfNumbers.split("");
const stringOfNumbersArrayInt = [stringOfNumbersArray.map(Number)];
console.log("array made into number " + stringOfNumbersArray);
// console.log("line 56 " + stringOfNumbersArray);

stringOfNumbersArray[0] % 2 == 0 && stringOfNumbersArray[1] % 2 === 0
  ? stringOfNumbersArray.splice(1, 0, "-")
  : "";

stringOfNumbersArray[1] % 2 == 0 &&
stringOfNumbersArray[2] % 2 === 0 &&
stringOfNumbersArray[1] != dash
  ? stringOfNumbersArray.splice(2, 0, "-")
  : "";

stringOfNumbersArray[2] % 2 == 0 &&
stringOfNumbersArray[3] % 2 === 0 &&
stringOfNumbersArray[2] != dash
  ? stringOfNumbersArray.splice(3, 0, "-")
  : "";

stringOfNumbersArray[3] % 2 == 0 && stringOfNumbersArray[4] % 2 === 0
  ? stringOfNumbersArray.splice(4, 0, "-")
  : "";

stringOfNumbersArray[4] % 2 == 0 &&
  stringOfNumbersArray[5] % 2 === 0 &&
  stringOfNumbersArray[4] != "-";
stringOfNumbersArray[5] != "-" ? stringOfNumbersArray.splice(4, 0, "-") : "";
stringOfNumbersArray[5] % 2 == 0 &&
stringOfNumbersArray[6] % 2 === 0 &&
stringOfNumbersArray[5] != "-"
  ? stringOfNumbersArray.splice(5, 0, "-")
  : "";

console.log("final string " + stringOfNumbersArray);
