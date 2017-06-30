//remember, that the below does not stand strict comparison

var makeObject = function(){
  return {prop1:1};
}
var obj1 = makeObject();
var obj2 = makeObject();
obj1 === obj2;
