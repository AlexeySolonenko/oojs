var myButton = document.querySelector('button')
var myHeading = document.querySelector('h1')

function setUserName(){
  var myName = prompt('Please enter your name')
  localStorage.setItem('name',myName)
  myHeading.textContent = 'Mozilla is cool, '+ myName
}

(!localStorage['getItem']('name')) ? (
  setUserName()
) : (
  function(){
    var storedName = localStorage['getItem']('name')
    myHeading[textContent] = 'Mozilla is cool, ' + storedName
  }
);
  
myButton['onclick'] = function(){
  console.log('hello');
  setUserName();
};