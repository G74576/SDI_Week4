//alert("JavaScript works!");

// Kevin M. O'Toole
// SDI 1301
// Project 4
// Function Library

// My Library

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

	// FIND THE NUMBER OF HOURS OR DAYS BETWEEN TWO DATES
	var dateDif = function(date1, date2) {
		var aDay = 1000 * 60 * 60 * 24  // Milliseconds * Seconds * Minutes * Hours
		var difference = ((date1.getTime() - date2.getTime()) / aDay);
		return difference;
	}
	
	// FIND THE SMALLEST VALUE IN AN ARRAY THAT IS GREATER THAN A GIVEN NUMBER.
	var smallVal = function(givenNum, array) {
		for (var i = 0; i <= array.length; i++) {
			if (array[i] > givenNum) {
				return array[i];
			}
		}
	}
	
	// RETURN OBJECTS
	return {
		"checkUrl": checkUrl,
		"sepReplace": sepReplace,
		//"replSep": replSep,
		"decimal": decimal,
		"strNum": strNum,
		"dateDif": dateDif,
		"smallVal": smallVal
	}


}

var newLib = new myLibrary();

console.log("Is this a URL? " + newLib.checkUrl("http://www.kevinotoole.com"));
console.log("The new string is: " + newLib.sepReplace("Jeanine,Kevin,James,Kelly", ",", "/"));
//console.log(newLib.replSep("jenanine,kevin,james,kelly", ",", " / "));
console.log("This coffee cost $" + newLib.decimal(5.5));
console.log("The number is: " + newLib.strNum("42"));
console.log("The difference in days is: " + newLib.dateDif(new Date(2013, 06, 21, 0),new Date(2013, 02, 28,0)));
console.log("The smalles value of the array that is greater then the given number is: " + newLib.smallVal(17, [1, 9, 12, 13, 21, 29, 33, 45]));