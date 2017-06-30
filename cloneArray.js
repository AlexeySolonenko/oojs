var ar1 = [0,1,2];
var ar2 = ar1;
var ar3 = ar1.slice();
ar3[2] = 4;
ar2[2] = 3;
console.log('ar1 changed together with ar2: ar1[2]: '+ar1[2]+'; ar2[2]: '+ar2[2]+'. ar3 is a new stand-alone array, ar3[2]: '+ar3[2]);
