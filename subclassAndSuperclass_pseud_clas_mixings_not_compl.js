// EXPERIMENTING WITH AND INVESTIGATING A PSEUDO-CLASSICAL PATTERN
// CONSTRUCTOR MODE USING WORD NEW

// PSEUDOCLASSICAL IS JUST A SYNTACTIC CONVENIENCE OVER A PROTOTYPAL PATTERN
// 

// WHEN YOU USE NEW, THE PROCESSOR LOOKS UP FOR A CONSTRUCTOR Function
// THEN, AT THE BEGINNING OF THIS FUNCTION IS ADDS A LINE:
// THIS = CREATE.OBJECT(CONSTRUCTOR.PROTOTYPE);
// AND AT THE END ENDS
// RETURN THIS;


var cloneObjSimple = function(obj,target,arrKeys){
  var copy;
  
  // Handle the 3 simple types and null or undefined
  if (null == obj || "object" != typeof obj) return obj;

  // Handle Date
  if (obj instanceof Date){
    copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  };
  
  // Handle Array
  if (obj instanceof Array){
    copy = [];
    for (var i=0, len=obj.lengh;i < len;i++){
      copy[i] = cloneObjSimple(obj[i]);
    }
    return copy;
  };
  
  // Handle Object
  if (obj instanceof Object){
    copy = {};
    if (target instanceof Object) copy = target; 
    for(var key in obj){
      if(obj.hasOwnProperty(key)) copy[key] = cloneObjSimple(obj[key]);
    }
    return copy;
  };
  
  throw new Error("Unable to define the type of the argument. Copy has not been done.")
};

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
// MAIN SUBCLASS
*/
var CarCriminal = function(loc){
  Car.call(this,loc); // added loc and other custom properties
};

/*
// OTHER SUB CLASS 1
*/
var CarSedan = function(){};
CarSedan.prototype.midMirror = function(){console.log('I see you in mid mirror')};
CarSedan.prototype.trunk = 'flat';

CarCriminal.prototype = carCriminalPrototype;
CarCriminal.prototype = Object.create(Car.prototype); // 
Object.assign(CarCriminal.prototype, CarSedan.prototype);
//CarCriminal.prototype = cloneObjSimple(CarSedan.prototype,CarCriminal.prototype);
CarCriminal.prototype.constructor = CarCriminal(); // used for new operator - 
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