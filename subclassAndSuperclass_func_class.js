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

// Super Class function
var Car = function(loc){
  var obj = {loc:loc};
  obj.move = function(){this.loc++;};
  return obj;
};


var carBad = function(loc){
  var obj = Car(loc);
  obj.grab = function(){console.log('you are grabbed')};
  return obj;
};

var carCop = function(loc){
  var obj = Car(loc);
  obj.call = function(){console.log('Cop is called')};
  return obj;
};

var oleg = carBad(5);
var vasja = carCop(1);
oleg.loc;
vasja.loc;
