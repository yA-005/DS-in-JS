// define a class 

class Point{

    constructor(x, y){

        this.x = x;
        this.y = y;
    }

    // will define a class method by using static keyword 

    static distance(a, b){

        const dx = a.x - b.x;
        
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(10, 15);

const p2 = new Point(20, 25);

// all the difference over here is calling the function 

// it will called by the name of the class 

Point.distance(p1, p2);

console.log(Point.distance(p1, p2));