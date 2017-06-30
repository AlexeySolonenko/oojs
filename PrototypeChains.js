
var gold = {a:1};
console.log(gold.a); // 1
console.log(gold.z); // undefined

// 1-time copying, or cloning
var blue = cloneObjSimple(gold);
blue.b = 2;
console.log(blue.a);//1
console.log(blue.b);//2
console.log(blue.z);//undefined

// delegation
var rose = Object.create(gold);
rose.b = 2; 
console.log(gold.b);
console.log('rose.a : '+rose.a);// 1
console.log('rose.b : '+rose.b);// 2
console.log('rose.z : '+rose.z);// undefined
gold.z = 3;
console.log('blue.z : '+blue.z);//undefined
console.log('rose.z : '+rose.z);//3