// define as class 

class Print {

    constructor(firstName, lastName){

        this.firstName = firstName;
        this.lastName = lastName;
    }

    // define a function(instance -> in class)

    fullName(){

        return `Your full name is: ${this.firstName} ${this.lastName}`
    }


    justFirstName(){

        return `Your first-name is ${this.firstName}`
    }

}

// create an object aka an instance of the class

let objOne = new Print("Robin","Son");

// calling the function aka method 

// all the difference over here is calling the function 

// it will called by the name of the object 

console.log(objOne.fullName());

// creating another instance of the class Print 

let objTwo = new Print("Bob","Peter");

objTwo.fullName();

console.log(objTwo.fullName());

// calling justFirstName method 

let objThree = new Print("Harris", "Morgan")

console.log(objThree.justFirstName());
