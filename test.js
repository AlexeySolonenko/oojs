var myConstr = function(){
 var obj ={}
 obj.prop1 = 1;
 obj.prop2 = 2;
 obj.meths = [];
 myConstr.meths.forEach(function(item,index){
   console.log(item);
  obj.meths[index] = item;
 });
 obj.meth3 = function(){console.log('meth3')};
 obj.meth4 = function(){console.log('meth4')};
 return obj;
};

myConstr.meths = [

{'meth1':function(){console.log('meth1')} },
{'meth2':function(){console.log('meth2')} }

];

var obj1 = myConstr();