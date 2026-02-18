// create a class 


class Sample {

    constructor(data){

        this.data = data;
        this.next = null;   //null pointer 
        
    }

}

// intilaize the object of the class Sample 

let one = new Sample("Hello")

// now we use one as an object 

one.next = new Sample("There");

one.next.next = new Sample("What is up!!");

one.next.next.next = new Sample("Let's Hang-out");

console.log(one.next);
