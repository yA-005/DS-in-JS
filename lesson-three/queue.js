// let's take an example of a coffee shop 

let shopeQueue = ['firstPerson', 'secondPerson', 'thirdPerson']

// someone new joins the line 

shopeQueue.push('fourthPerson')

// the person at the front is served 

let served = shopeQueue.shift()

console.log(shopeQueue)

// the first person has been popped out 
console.log(served)