// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two getters getArea() (PIr^2) and getPerimeter() (2PI*r) which give both respective areas and perimeter (circumference).

class Circle {
  constructor(radius) {
    // this.PI = 22 / 7;
    this.radius = radius;
  }

  getArea() {
    // return this.PI * (this.radius * this.radius);
    return Math.PI * Math.pow(this.radius, 2);
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

let circleArea = new Circle(11);
console.log(circleArea.getArea());

let circleParameter = new Circle(4.44);
console.log(circleParameter.getPerimeter());

// class Rectangle {
//   constructor(sideA, sideB) {
//     this.sideA = sideA;
//     this.sideB = sideB;
//   }
//   getArea() {
//     return this.sideA * this.sideB;
//   }
//   getPerimeter() {
//     return (this.sideA + this.sideB) * 2;
//   }
// }

// let q = new Rectangle(4, 5);
// console.log(q.getArea());
// console.log(q.getPerimeter());
