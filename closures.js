var eaterArr = ['Bob','Mark','Pat'];
var fruitArr = ['apple','banana','pear'];
var toolArr = ['fork','sticks','hands'];
var eater;
var fruit;
var tool;
var eaterIndex = 0;
var fruitIndex = 0;
var toolIndex = 0;
var getRandomInt = function(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min)) + min;
};
var eaterRandom = function(){eater = eaterArr[getRandomInt(0,3)];};
var fruitRandom = function(){fruit = fruitArr[getRandomInt(0,3)]};
var toolRandom = function(){tool = toolArr[getRandomInt(0,3)]};

var lunchList = [];
eaterRandom();
var newLunch = function(){
  fruitRandom();
  lunchList.push(function(){
    toolRandom();
    console.log(eater + fruit + tool);    
  });
}

// clear enough
