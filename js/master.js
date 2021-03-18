function inPalindrome() {
	/* 
	Palindrome is some word that has the same letter forward and backwards
	mom = yes
	dad = yes
	racecar = yes
	Helen = no
	*/

	/*
	how to see if word is palindrome 
	check end letter with first letter, second to last to second etc
	
	index #
	abcdefghij
	a        j
	0		 (legnth - 1)
	 b      i
	 1      (legnth - 2)

	For ood # legnth words
		legnth / 2 -1 also works 
	race car : length of 7, 7/2 = 3.5 -> 2
		c

	For even # legnth words 
	carrot legnth 6, 6 / 2 = 3
	*/


	/* solution 1st version: just making the wrod flipped
	and seeing if word come out the same

	var word = "racecar";
	var length = word.length;
	var builder = "";
	for (var i = length - 1; i >=0; i--) {
		builder += word[i];
	} 
	if (word == builder) {
		alert(word + " is a Palindrome")
	}

	else {
		alert(word + " is NOT a palindrome")
	}
	*/
	
	var word = "racecar";
	var length = word.length;
	var builder = "";
	var palindrome = true;

	for (var i=0; i < Math.floor(length / 2); i++) {

		if (word[i] != word[length - 1 - i]) {
			palindrome = false
			break;
			
		}

		else{
			continue
		}
	}
	if(palindrome)
			alert(word + " is a Palindrome")
	else
		alert(word + " is a palindrome")
}
function romanDictionary(letter){
	/* 
	I, V, X, L, C, D, M
	1, 5, 10, 50, 100, 500, 1000 
	
	IV = 4
	LXI = 61

	MMIV= 2004
	IVMM = invalid number
	*/
	/*
	Switch is replacing this if else statement
	if (letter =="i") {
		do this
	}

	else(letter =="V") {
		do this
	}
	*/
	switch(letter){
		case "I":
			return 1; 
			break;
		case "V":
			return 5; 
			break;
		case "X":
			return 10; 
			break;
		case "L":
			return 50; 
			break;
		case "C":
			return 100; 
			break;
		case "D":
			return 500; 
			break;
		case "M":
			return 1000; 
			break;
		default:
			alert("Not a valid roman numeral");
			break;
	}
}

function convertRoman() {
	var roman = "XXVII";
	var total = 0;
	var length = roman.length;

	for (var i = 0; i < length; i++) {

		if(i < length - 1 && romanDictionary(roman[i]) < romanDictionary(roman[i+1])){
			total += romanDictionary(roman[i+1]) - romanDictionary(roman[i])  
			//total += (-1 * romanDictionary(roman[i]));
			i++
		}

		else {
			total += romanDictionary(roman[i]);
			continue;
		}


	}
	alert(total);	
}

function enterPlayer(player) {
	var playerName = document.getElementById(player + "Name").value;
	var playerImage = document.getElementById(player + "Image").value;
	var builder = playerName + "<br><img src='images/" + playerImage + ".png' />"
	document.getElementById(player + "Info").innerHTML = builder; 
}
