// Since JavaScript doesn't have a built-in Linked List, we build it using Objects. A basic node looks like this

// data in linked list is contained in a node 

let node = {

    data: "It's a node one",
    next: null              //this will eventually point to another node//
}



// creation of a first node 

class Node {

    constructor(data){

        this.data = data
        this.next = null
    }
}

