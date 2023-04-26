  //1 Create a var that stores the name that user enters via prompt.
var capName = prompt(`What is your name?`);

  //2 Capitalize the first letter of their name.
    //a Isolate the first character
var firstChar = capName.slice(0,1);

    //b Turn the first character to upper case.
var upperCaseFirstChar = firstChar.toUpperCase();

    //c Isolate the rest of the name.
var restOfName = capName.slice(1,capName.length);

    //d Change the rest of the name to lower case.
restOfName = restOfName.toLowerCase();

    //e Concatenate the first character with the rest of the characters
var capitalisedName = upperCaseFirstChar + restOfName;

  //3 We use the capitalised version of their name to greet them using an alert.
alert(`Hello there ` + capitalisedName);