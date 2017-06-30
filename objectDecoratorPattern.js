// decorators are commonly named as adjectives
var carlike = function(obj,propArr){
  var decorated = {};
  decorated = obj;
  for(var i = 0;i<propArr.length;i++){
    decorated['prop'+i] = propArr[i];
  };
  return decorated;
}

car1 = {};
car1 = carlike(car1,[3,4,2,{meth1:function(){console.log('decorated method');}}]);
car1.prop3.meth1(); // decorated method
