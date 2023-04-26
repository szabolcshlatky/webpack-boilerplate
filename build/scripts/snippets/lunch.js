function whosPaying(pets) {
    
/******Don't change the code above*******/

var pets = [`Nóra`, `Öreg`, `Kamásli`, `Hédi`, `Pisti`, `Leia`];

    //Write your code here.
var numberOfPeople = pets.length;
var randomPersonPosition = Math.round(Math.random() * numberOfPeople);
var randomPerson = pets[randomPersonPosition];

return randomPerson + ` is going to buy lunch today!`
    
/******Don't change the code below*******/    
}

alert(whosPaying());