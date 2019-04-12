/*eslint-env browser*/

/***********************************************
*****  Strings and String Manipulation  ********
***********************************************/

//////////////////	Step 1	//////////////////
//var person = prompt('Please enter your name.');
//alert('The number of chracters in your name is ' + person.length);


//////////////////	Step 2	//////////////////
//var person = prompt('Please enter your name.');
//var numLetter = prompt('Please enter a number between 1 and ' + person.length);
//alert('The character you chose in your name is ' + person.charAt(numLetter-1));


//////////////////	Step 3	//////////////////
//var first = prompt('Please enter your first name.');
//var last = prompt('Please enter your last name.');
//alert('Your full name is: ' + first + ' ' + last);


//////////////////	Step 4	//////////////////
//var sentence = 'The quick brown fox jumps over the lazy dog';
////var start = sentence.indexOf('f');
////var end = sentence.indexOf('x');
////alert(sentence.substr(start, 3));
//alert(sentence.search('fox'));


//////////////////	Step 5	//////////////////
//var sentence = 'The quick brown fox jumps over the lazy dog';
//alert(sentence.lastIndexOf('fox'));


//////////////////	Step 6	//////////////////
//var sentence = 'The quick brown fox jumps over the lazy dog';
//var person = prompt('Please enter your full name.');
//alert(sentence.replace('fox', person););


//////////////////	Step 7	//////////////////
//var sentence = 'The quick brown fox jumps over the lazy dog';
//var word = prompt('Please enter a word.');
//alert(sentence.search(word));


//////////////////	Step 8	//////////////////
//var old_string = 'The quick brown fox jumps over the lazy dog';
//var new_string = old_string.slice(31,43);
//alert(new_string);


//////////////////	Step 9	//////////////////
//var sentence = '            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ';
//alert(sentence.toLowerCase().trim());


//////////////////	Step 10	//////////////////
//var sentence = 'the quick brown fox jumps over the lazy dog';
//sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
//alert(sentence);