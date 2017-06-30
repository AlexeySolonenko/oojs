// EXPERIMENTING WITH AND INVESTIGATING A PSEUDO-CLASSICAL PATTERN
// CONSTRUCTOR MODE USING WORD NEW

// PSEUDOCLASSICAL IS JUST A SYNTACTIC CONVENIENCE OVER A PROTOTYPAL PATTERN
// 

// WHEN YOU USE NEW, THE PROCESSOR LOOKS UP FOR A CONSTRUCTOR Function
// THEN, AT THE BEGINNING OF THIS FUNCTION IS ADDS A LINE:
// THIS = CREATE.OBJECT(CONSTRUCTOR.PROTOTYPE);
// AND AT THE END ENDS
// RETURN THIS;


/*
// SUPER CLASS
*/
var Car = function(loc){
  this.loc = loc;
};
Car.prototype = {
  move : function(){this.loc++;},
  moveFast : function(){this.loc++;this.loc++;}
};

/*
// SUB CLASS 1
*/
var CarSedan = function(loc){
  Car.call(this,loc); // added loc and other custom properties
   
};
CarSedan.prototype = Object.create(Car.prototype);
CarSedan.prototype.constructor = CarSedan;
CarSedan.prototype.midMirror = function(){console.log('I see you in mid mirror')};
CarSedan.prototype.trunk = 'flat';


/*
// SUB SUB CLASS 1 OF SUB CLASS 1
*/
var CarCriminal = function(loc){
  CarSedan.call(this,loc);
  /* this.guns = {
    qty:0,
    ammos:0
  }; */
  console.log('Car is called on: '+this);
};
CarCriminal.prototype = Object.create(CarSedan.prototype);
CarCriminal.prototype.constructor = CarCriminal; // used for new operator - 
// it looks up for a constructor function
CarCriminal.prototype.grab = function(){console.log('you are grabbed')};


var CarCop = function(loc){
  Car.call(this,loc); //added loc and other custom properties;
}

Car.customMethods = {
  honk: function(){console.log('honk')},
  beep: function(){console.log('beep')}
};

var carIvan = new CarCriminal(4);
console.log('Ivan : ' + carIvan.loc);
console.log(carIvan.constructor);
console.log('carIvan instanceof Car : '+(carIvan instanceof Car));