// creation of a node 

//1. data body 
//2. next 

class Node {

    constructor(data){

        this.data = data;
        this.next = null;
    }
}


// creation of a singly linked list 

//1. head
//2. tail
//3. length
//4. at the start the liked list in empty 

class SinglyLinkedList{

    constructor(){


        // as the list is empty 

        this.head = null;
        this.tail = null;
        this.length = 0; 
    }

    // pushing a node in a list via function 

            push(val){

                var newNode = new Node(val);

                // checking if the list is empty or not 

                // if the list is empty 
                if(!this.head){

                    this.head = newNode;
                    this.tail = newNode;

                }
                //if the list is not empty
                else{
                    
                    
                    this.tail.next = newNode;
                    this.tail = newNode;

                }
                this.length++;
                return this;

            }
}

// pushing a node to the list 

var eleOne = new SinglyLinkedList();

// console.log(eleOne.push("THERE"));
// console.log(eleOne.push("HELLO"));

// console.log(eleOne.push());



