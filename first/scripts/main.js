const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('あなたの名前を入力してください。');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla はすばらしいよ、' + myName;
}

myButton.onclick = function() {
  setUserName();
}

