'use strict';

let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
};



function game() {
  // создаем рандомное число
  function getRandomNumber(){
    return function(){
      return Math.floor(Math.random() * 99 + 1);
    };
  }
  let randomNumber = getRandomNumber()();

  // создаем счетчик попыток
  function tryCounter(){
    let count = 10;
    return function(){
      return --count;
    };
  }
  // внутренний для подсчета, внешний для вывода пользователю
  let count = tryCounter(),
      countOut = tryCounter();
  const guesses = function(){	
    // получаем от пользователя число
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
    
    if (count() === 0){
      if(confirm('попытки закончились, хотите сыграть еще?')){
        return game();
      }
      else return alert('game over');
    }
    if (guessedNumber > randomNumber){
      alert('Загаданное число меньше, осталось попыток:' + countOut());
      return guesses();
    }
    if (guessedNumber < randomNumber){
      alert('Загаданное число больше, осталось попыток: ' + countOut());
      return guesses();
    }
    if (guessedNumber === randomNumber){
      alert('угадано');
      return true;
    }
	
};
guesses();
}
game();