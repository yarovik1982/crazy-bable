

const herro = document.getElementById('herro');
const wall = document.getElementById('wall');
// const startGame = function startGame()
let left = 0;




function startGame() { 

document.onkeydown = checkKey;
document.onkeyup = upJamp;

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '37' || e.keyCode == '65') {
      left -= 15;
      (left > 0) ? herro.style.left = left + "px" : left = 0;
    }
    else if (e.keyCode == '39' || e.keyCode == '68') {
       left += 15;
      (left < 800) ? herro.style.left = left + "px" : left = 0;
    }
    let top = 0;
    if (e.keyCode == '38' || e.keyCode == '87') {
    	top += 300;
    	(top > 0) ? herro.style.top = top + "px" : top = 0;
    }
}
 function upJamp(e) { 
 	e = e || window.event;
 	let top = 300;
 	if (e.keyCode == '38' || e.keyCode == '87') {
    	top += 70;
    	(top > 0) ? herro.style.top = top + "px" : top = 370;
 	}
}
}
startGame();
// const out = document.querySelector('.out');
// const frends = [
// 	{name: 'John', age: 23, luckyNumbers:[1,2,3]},
// 	{name: 'Katty', age: 25, luckyNumbers:[4,5,6]},
// 	{name: 'Betty', age: 22, luckyNumbers:[7,8,9]},
// ];
// 	frends.forEach(frend =>{
// 		out.innerHTML += 'имя - ' + (frend.name) +', ' +'возраст - ' + (frend.age) + ', ' + (frend.luckyNumbers) + '<br>';
// 	})

