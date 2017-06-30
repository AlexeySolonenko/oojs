// Classes differ from decorators in the following:
// decorators amend an existing object.
// functional classes - a function creates new object


// THIS IS A FUNCTIONAL CLASS FUNCTION, NOT A DECORATOR
var Car = function(loc){
  var obj = {loc:loc};
  
  return obj;
}


Car.methods = {
  move : function(){this.loc++;},
  moveFast : function(){this.loc++;this.loc++;}
};

var carIvan = Car(4);
carIvan.move();
var carIgor = Car(4);
carIgor.moveFast();
console.log('Ivan : '+carIvan.loc);
console.log('Ivan : '+carIgor.loc);