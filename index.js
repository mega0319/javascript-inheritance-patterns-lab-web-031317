function Point(x, y) {
  this.x = x
  this.y = y
  this.toString = function(){
    return this.x + ", " + this.y
  }
}

class Shape{
  constructor(){
  }

  addToPlane(x, y){
    return this.position = new Point(x, y)
  }

  move(x, y){
    return this.position = new Point(x, y)
  }
}

// function Shape(){
//
// }
// Shape.prototype.addToPlane = function(x, y){
//   return this.position = new Point(x, y)
// }
// Shape.prototype.move = function(x, y){
//   return this.position = new Point(x, y)
// }

class Circle extends Shape{
  constructor(radius){
    super()
    this.radius = radius
  }

  diameter(){
    return (2 * this.radius)
  }

  area(){
    return (Math.PI * (this.radius**2))
  }

  circumference(){
    return (2 * Math.PI * this.radius)
  }
}

// function Circle(radius){
//   Shape.call(this)
//   this.radius = radius
// }
// Circle.prototype = Object.create(Shape.prototype)
// Circle.prototype.constructor = Circle
// Circle.prototype.diameter = function(){
//   return 2 * this.radius
// }
// Circle.prototype.area = function(){
//   return (Math.PI * (this.radius**2))
// }

class Side{
  constructor(length){
    this.length = length
  }
}

class Polygon extends Shape{
  constructor(sides){
    super()
    this.sides = sides
  }

  perimeter(){
   console.log('this.sides: ', this.sides)
    var p = this.sides.reduce(function(perimeter, side){
      return perimeter + side.length
    },0)
    console.log('perimeter for: ', this)
    console.log('p', p);
    return p
  }

  numberOfSides(){
    return this.sides.length
  }
}

class Quadrilateral extends Polygon{
  constructor(sideOneL, sideTwoL, sideThreeL, sideFourL){
    super([new Side(sideOneL), new Side(sideTwoL), new Side(sideThreeL), new Side(sideFourL)])
    // this.sideOneL = new Side(sideOneL)
    // this.sideTwoL = new Side(sideTwoL)
    // this.sideThreeL = new Side(sideThreeL)
    // this.sideFourL = new Side(sideFourL)
  }
}

class Rectangle extends Quadrilateral{
  constructor(width, height){
    super(height, width, height, width)
    this.height = height
    this.width = width
  }

  area(){
    return this.height * this.width
  }
}

class Triangle extends Polygon{
  constructor(s1, s2, s3){
    super([new Side(s1), new Side(s2), new Side(s3)])
  }
}

class Square extends Rectangle{
  constructor(sideL){
    super(sideL, sideL)
    this.sideL = sideL
  }
  listProperties(){
    
  }
}
