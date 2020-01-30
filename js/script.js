'use strict';

let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function getRandomNumber(){
	return function(){
		return Math.floor(Math.random() * 99 + 1);
	};
}
const randomNumber = getRandomNumber()();
console.log('random: ' + randomNumber);

const guesses = function(){
	function getGuessNumber(){
		let guessNumber = '';
		guessNumber = prompt('Угадай число от 1 до 100');
		if (guessNumber === null){
			return alert('game over');
		}
		if (!isNumber(guessNumber)){
			alert('Введи число!');
			return getGuessNumber();
		}
		return +guessNumber;
	}
	let guessedNumber = getGuessNumber();
	console.log('предполагаемое число: ' + guessedNumber + ' искомое число ' + randomNumber);
	
	if (guessedNumber > randomNumber){
		alert('Загаданное число меньше');
		return guesses();
	}
	if (guessedNumber < randomNumber){
		alert('Загаданное число больше');
		return guesses();
	}
	if (guessedNumber === randomNumber){
		alert('угадано');
		return true;
	}
	
};
guesses();