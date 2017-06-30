// EXPERIMENTING WITH AND INVESTIGATING A PSEUDO-CLASSICAL PATTERN
// CONSTRUCTOR MODE USING WORD NEW

// PSEUDOCLASSICAL IS JUST A SYNTACTIC CONVENIENCE OVER A PROTOTYPAL PATTERN
// 

// WHEN YOU USE NEW, THE PROCESSOR LOOKS UP FOR A CONSTRUCTOR Function
// THEN, AT THE BEGINNING OF THIS FUNCTION IS ADDS A LINE:
// THIS = CREATE.OBJECT(CONSTRUCTOR.PROTOTYPE);
// AND AT THE END ENDS
// RETURN THIS;



// class name with Capital letter

var Car = function(loc){
  // var obj = Object.create(Car.prototype);
  // the above line is obsolete and has been substituted
  // with new invocation below. now it is this = Object.create(Car.prototype);
  
  
  // not obj delegates property look-ups to Car.methods,
  // it does not simply copy them, and we do not setup a 
  // primitive one-time reference to its methods.
  // the technique is automatic and will follow Car.methods
  // amendemends and extensions, as proved and tested earlier.
  
  // also let's copy some custom methods that will be unique for that object.
  // kind of decorator
  
  // obj = cloneObjSimple(Car.customMethods,obj);
  this.loc = loc;

  
  return this;
};

Car.prototype = {
    move : function(){this.loc++;},
  moveFast : function(){this.loc++;this.loc++;}
};


var carIvan = new Car(4);
console.log('Ivan : ' + carIvan.loc);
console.log(carIvan.constructor);
console.log('carIvan instanceof Car : '+(carIvan instanceof Car));