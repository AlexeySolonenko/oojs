// Either use clonen object (prefered) 

// OR

// NOT SOLVED 

obj1 = { prop1:{p1:1,p2:{pp1:11,pp2:[23,23,2,'asdf']}},
         prop2:{meth1:function(){console.log('meth1')},meth2:function(){console.log('meth2')}}
};
var obj2 = {};

obj2.prop1 = Object.create(obj1.prop1);
obj2.prop1.p2.pp1 = 5;
obj1.prop1.p2.pp1;
console.log(obj1.prop1.prop1pr1);