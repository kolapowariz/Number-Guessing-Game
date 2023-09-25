let random = Math.floor(Math.random() * 20 + 1);
console.log(random);
let guesses = 0;

document.querySelector(".guessBtn").addEventListener("click", () => {
  guess();
});

document.querySelector(".resetBtn").addEventListener("click", () => {
  guesses = 0;
  document.querySelector(".textBox").value = "";
  alert("Game has been reset");
  random = Math.floor(Math.random() * 20 + 1);
  console.log(random);
});

function guess() {
  
  let text = document.querySelector(".textBox").value;
  guesses++;

  if (text === "" || text === null || text === undefined) {
    alert("Please enter a number");
    guesses = 0;
  } else {
    text = +document.querySelector(".textBox").value;
    if (text === random) {
      alert(
        `${random} is the number. You are correct and it took you ${guesses} guesses.`
      )
      guesses = 0;
      document.querySelector(".textBox").value = "";
      alert("Game has been reset");
      random = Math.floor(Math.random() * 20 + 1);
      console.log(random);
    } else if (text < random) {
      alert("Your guess is less");
    } else if (text > random) {
      alert("Your guess is greater");
    }
  }
  }

/*
document.querySelector('.guessBtn').addEventListener('click', () => {
  let text = +document.querySelector('.textBox').value;
  guesses++;
  
  if (text === random) {
    alert(`${random} is the number. You are correct and it took you ${guesses} guesses.`);
  } else if (text < random) {
    alert('Your guess is less');
  } else{
    alert('Your guess is greater');
  }
})*/

/*
document.querySelector('.guessBtn').onclick = function(){
  
  let text = +document.querySelector('.textBox').value;
  guesses++;
  
  if (text === random) {
    alert(`${random} is the number. You are correct and it took you ${guesses} guesses.`);
  } else if (text < random) {
    alert('Your guess is less');
  } else{
    alert('Your guess is greater');
  }
}
*/
