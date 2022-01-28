function getInfo() { // this is a function for get infromation from the user about him/her self 
    console.log('Hello there! I need to get to know you, in order to do that I will ask you three quesitons'); // prints a message
    var name; //creates a variable named name 
    var age; //creates a variable named age
    var favoriteColor; //creates a variable names favoritecolor
    var person = [name, age, favoriteColor]; // creates a variable with three objects in it, which are the three variables name/age and favorite color
    var person_name = window.prompt('Please enter your name: '); // prompts the user for an input for name which is stored in the name object in person
    var person_age = window.prompt('Please enter your age: '); // prompts the user for an input for age which is stored in the age object in person
    var person_favoriteColor = window.prompt('Please Enter your favorite color: '); // prompts the user fpr input for favorite color which is stored in the object favoritecolor inside of person
    return person; // returns the function 
    console.log('Hello' + name + 'you are ' + age + ' years old, and your favorite color is  ' + color); // prints out a string along with the objects inside of person
}
getInfo(); //calls the function