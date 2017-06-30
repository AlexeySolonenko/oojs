// A MISCONCEPTION THAT I SOLVED JUST TODAY
// DECLARING A VAR REFERRING TO ANOTHER VAR/Function
// DECLARED OBJECT IS NOT THE SAME AS REFERRING TO
// PROPERTIES
var someFunc = function(){console.log('hello')};
var obj1 = {prop1:1,meth1:someFunc};
var obj2 = {};
obj2.prop4 = obj1.prop1;
obj2.meth1 = obj1.meth1; // hello - refer to differen already made objects
obj1.meth1 = function(){console.log('updated');};
//properties are just copied, and that it is 
// objects are cross-referenced
obj3 = {p1:1,p2:2};
obj4 = obj3;
obj4.p2 = 8;
obj3.p2; // 8, refer to the same object
