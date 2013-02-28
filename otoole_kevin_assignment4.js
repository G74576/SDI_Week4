//alert("JavaScript works!");

// Kevin M. O'Toole
// SDI 1301
// Project 4
// Function Library

// My Library
// Sample Functions for My Library 

var myLibrary = function() {

	// IS THE STRING A URL? DOES IT START WITH HTTP: OR HTTPS:?
	var checkUrl = function(val) {
		var end = val.indexOf("/");
		var url = val.substring(0,end);
		if (url === "http:") {
			return true;
		} else { 
			if (url === "https:") {
				return true;
			} else {
			return false;
			}
		}
	}

	/*GIVEN A STRING THAT IS A LIST OF THINGS SEPARATED BY A GIVEN STRING,
	AS WELL AS ANOTHER STRING SEPARATOR, RETURN A STRING WITH THE FIRST
	SEPARATOR CHANGED TO THE SECOND.*/
	var sepReplace = function(string,sep1,sep2) {
		var stringArray = string.split(sep1),
			results = [ ];
		for (var i=0; i < stringArray.length; i++) {
			results.push(stringArray[i]);
		}
		return (results.join (" " + sep2 + " " ));
	}
	
	/*var replSep = function(string,sep1,sep2) {
		var results = string.replace(sep1,sep2);
		for (var i=0; i=results.length; i++) {
			results.push(results[i]);
		}
		return results;
	}  //play with this some more*/
	
	// FORMAT A NUMBER TO USE A SPECIFIC AMOUNT OF DECIMAL PLACES.
	var decimal = function(val) {
		var decNum = val.toFixed(2);
		return decNum;
	}
	
	// GIVEN THE STRING VERSION OF A NUMBER, RETURN THE VALUE AS AN ACTUAL NUMBER
	var strNum = function(val) {
		var number = Number(val);
		return number;
	}

	// CHECK NUMERIC FUNCTION
	var checkNumeric = function(val) {
		
		if(isNaN(val)) {
			return false;
		} else { 
			return true;
		}	
	}
	
	
	// NAME FUNCTION
	var areYouLee = function(val) {
		
		var name = (val === "Lee");
		return name;
		
		// can do either way
		
		/*if (val === "Lee") {
			return true;
		} else {
			return false;	
		}*/
		
	}
	
	// CHECK STRING PATTER
	var checkString = function (val) {
	
		var strLen = val.length;
		for (var i=0; 1 <= strLen; i++){
			if (val.substring(i, i+1) === "-"){
			return i;
			}
		}
	
	}
	
	
	// RETURN OBJECT
	return {
		"checkNumeric": checkNumeric,
		"areYouLee": areYouLee,
		"checkString": checkString,
		"checkUrl": checkUrl,
		"sepReplace": sepReplace,
		//"replSep": replSep,
		"decimal": decimal,
		"strNum": strNum
	}


}

var newLib = new myLibrary();

console.log("Is this a number? " + newLib.checkNumeric(156));
console.log("Is this Lee? " + newLib.areYouLee("Lee"));
console.log("The dash is in position " + newLib.checkString("123-456"));
console.log("Is this a URL? " + newLib.checkUrl("http://www.kevinotoole.com"));
console.log("The new string is: " + newLib.sepReplace("Jeanine,Kevin,James,Kelly", ",", "/"));
//console.log(newLib.replSep("jenanine,kevin,james,kelly", ",", " / "));
console.log("This coffee cost $" + newLib.decimal(5.5));
console.log("The number is: " + newLib.strNum("42"));