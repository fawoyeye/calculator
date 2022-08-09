var zero = document.querySelector('.zero');
var one = document.querySelector('.one');
var two = document.querySelector('.two');
var three = document.querySelector('.three');
var four = document.querySelector('.four');
var five = document.querySelector('.five');
var six = document.querySelector('.six');
var seven = document.querySelector('.seven');
var eight = document.querySelector('.eight');
var nine = document.querySelector('.nine');
var divide = document.querySelector('#divide');
var add = document.querySelector('#add');
var multiply = document.querySelector('#multiply');
var subtract = document.querySelector('#subtract');
var dot = document.querySelector('.dot');
var del = document.querySelector('#del');
var p = document.querySelector('p');
var back = document.querySelector('#backspace');
var control = document.getElementsByClassName('.control');
var calculate = document.querySelector('#calculate');

//Event listeners

zero.addEventListener("click",function () {
p.textContent+="0"});
one.addEventListener("click",function () {p.textContent+="1"});
two.addEventListener("click",function () {p.textContent+="2"});
three.addEventListener("click",function () {p.textContent+="3"});
four.addEventListener("click",function () {p.textContent+="4"});
five.addEventListener("click",function () {p.textContent+="5"});
six.addEventListener("click",function () {p.textContent+="6"});
seven.addEventListener("click",function () {p.textContent+="7"});
eight.addEventListener("click",function () {p.textContent+="8"});
nine.addEventListener("click",function () {p.textContent+="9"});
dot.addEventListener("click",function () {p.textContent+="."});
del.addEventListener("click",function () {p.textContent="";/*p.textContent="0";*/});
subtract.addEventListener("click",function () {p.textContent+=subtract.innerText});

add.addEventListener("click",function () {p.textContent+=add.innerText});
divide.addEventListener("click",function () {p.textContent+=divide.innerText});
multiply.addEventListener("click",function () {p.textContent+=multiply.innerText});


		

calculate.onclick = function () {
p.innerText = eval(p.innerText);
				
}
back.onclick = function () {
		p.innerText = p.innerText.substr(0, p.innerText.length-1);		
}

/*
window.onload =function () {
p.innerText=0;
				
}*/
		

var control = document.getElementsByClassName('controls');








/*var td = document.querySelector('td');
if(p.length = 1) {
for(i=0;i<td.length;i++){
				td[i].addEventListener("click",function (e) {
								
				p.innerText = e.target.innerText;});
				}
}*/
