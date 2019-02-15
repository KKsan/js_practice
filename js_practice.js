import {someFunction} from "<filename>"
import * as someName from "<filename>" //import everything from <filename>

// Data types: undefined, null, boolean, string, symbol, number, and object

var myName = "Beau"; //global variable
myName = 8;
let ourName = "freeCodeCamp"; //can't declare the same varibale twice, recommended

"use strict"; // put at the beginning of code, extra checks on grammar

const pi = 3.14; //constant

var a = 3;
var b = 2 ;

console.log(33/3);

var str1 = "this is string 1";
str1 += " xyz";

console.log(str1);


var someStr = "";
someStr = str1[3];

console.log(someStr);


function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
	var result = ""; //scoped to this function locally
	globalResult = "";//no var keyword, scoped globally

	result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
	return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));

var ourArray = ["john", 123, true,  false, "xyz"];
var nestedArray = ["xyz", ["yui", 123], [456, 789]];

console.log(nestedArray);

ourArray.push("newItem"); //add item to the end of the array

console.log(ourArray);

ourArray.pop(); //remove the last item
ourArray.shift(); //remove the first item
ourArray.unshift("newItem2"); //add item in the beginning

3 === 3 //true, === is strict equal, it does not convert type to be the same
3 === '3' //false

3 == '3' //true, performs a type conversion

3 !== '3' //true, strict inequality
3 != '3' //false, performs a type conversion

//object
var testObj = {
	"attr1": "abc",
	"attr2": 2,
	"attr3": [1,2,3]
};

//access object properties
var theAttr1 = testObj[attr1];

var testObj2 = {
	12: "LA",
	18: "SF"
};

var cityNum = 12;
var city = testObj2[cityNum]; //or
var city = testObj2.cityNum;

//add new property to object
testObj["attr4"] = 123; //or
testObj.attr4 = 123;

//delete object property
delete testObj.attr1;

//use object for lookup table
testObj.hasOwnProperty("attr1") 


testObj["attr1"] = testObj["attr1"] || []; // if testObj["attr1"] has value then set it to itself, 
										   //otherwise set it to []



//loops
while(i < 5) {
	myArray.push(i);
	i++;
}

for(var i=0, i<5, ++i) {

}

do {
	myArray.push(i);
} while(i < 5)


Mathmrandom * 10; // random number between 0 and 9
Math.floor(Math.random() * 20);

//ternary
num > 0? "positive" : num < 0 ? "negative" : "zero";

//prevent data mutation
function freezeObj() {
	"use strict";
	const SOME_OBJ = {
		PI: 3.14;
	};

	Object.freeze(SOME_OBJ); //SOME_OBJ can't be mutated anymore

	try {
		SOME_OBJ.PI = 99;
	} catch (ex) {
		console.log(ex);
	}
	return SOME_OBJ.PI;
}

let magic = () => new Date(); //arrow function, shortended way to write functions

const MY_CONST = (arr1, arr2) => arr1.concat(arr2);

const realNumArray = [1,2,3,4,5];

const squareList = (arr) => {
	const squaredInt = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x);
	return squaredInt;
};

const squaredList = squareList(realNumArray);


class SpaceShuttle {
	constructor(targetPlanet) {
		this.targetPlanet = targetPlanet;
	}
}

var zeus = new SpaceShuttle('Jupiter');

class Vegetable {
	constructor(name) {
		this.name = name;
	}

	get theName(){
		return this.name;
	}

	set theName(updatedName) {
		this.name = updatedName;
	}
}

carrot = new Vegetable('carrot');



export const captitalizeString = str => str.toUpperCase();






