
// class name with Capital letter

var Car = function(loc){
  var obj = Object.create(Car.prototype);
  // not obj delegates property look-ups to Car.methods,
  // it does not simply copy them, and we do not setup a 
  // primitive one-time reference to its methods.
  // the technique is automatic and will follow Car.methods
  // amendemends and extensions, as proved and tested earlier.
  
  obj.loc = loc;

  
  return obj;
};

Car.prototype = {
    move : function(){this.loc++;},
  moveFast : function(){this.loc++;this.loc++;}
};


var carIvan = Car(4);
console.log('Ivan : ' + carIvan.loc);
console.log(carIvan.constructor);
console.log('carIvan instanceof Car : '+(carIvan instanceof Car));