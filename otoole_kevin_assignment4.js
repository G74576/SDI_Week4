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
		"sepReplace": sepReplace
	}


}

var newLib = new myLibrary();

console.log("Is this a number? " + newLib.checkNumeric(156));
console.log("Is this Lee? " + newLib.areYouLee("Lee"));
console.log("The dash is in position " + newLib.checkString("123-456"));
console.log("Is this a URL? " + newLib.checkUrl("http://www.kevinotoole.com"));
console.log("The new string is: " + newLib.sepReplace("Jeanine,Kevin,James,Kelly", ",", "/"));