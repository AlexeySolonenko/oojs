// Basic custom function to clone simple objects

var obj1 = {
  prop1: {prop1pr1: 4, prop1pr2 : 5, prop1pr3 : 6},
  prop2: {prop2pr1: 4, prop2pr2 : 5, prop2pr3 : 6},
  prop3: {meth1:function(){console.log('Hi, I am meth1');},meth2:function(){console.log('Hi, I am meth2');}}
};

var obj2 = {};

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

obj2 = cloneObjSimple(obj1);
obj2.prop1pr1 = 8;
obj1.prop1pr1;
obj2.prop3.meth1 = function(){console.log('updated')};
obj2.prop3.meth1();
obj1.prop3.meth1();
