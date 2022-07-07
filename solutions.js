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

// const arrayOfWords = ["John", "Paul", "the", "Second"];
// arrayOfWords.splice(3, 0, "and");
// console.log(arrayOfWords.join(" "));
