// lets get start with javascript code
// now we will get the Element using id for displaying alert message
let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");
// we will generate random in range between 1 to 100 using random method and then we will convert decimal number into number for that we will using floor method
const actualnumber = Math.floor(Math.random() * 100) + 1;
// console.log(actualnumber) this i have done for checking its working or not
// now we will count the no of guesses attempt by user and its initial value will be 0
let no_of_guesses = 0;
// after that we will store the user guessed number in array
let guesses_num = []; // [] -> it is used to create new empty array
// now we will run function when user click on guess button
document.getElementById("submitbtn").onclick = function () {
  // i have fetch the user guess value from input box
  let user_guess = document.getElementById("guess").value;
  //   now we will add condition that if user enter less than 1 or more than 100 then it will message error
  if (user_guess < 1 || user_guess > 100) {
    alert("Please Enter a number Between 1 to 100");
  }
  //   now we will add limited chances that user can attempt to guess the correct number for better fun
  else if (no_of_guesses < 10) {
    guesses_num.push(user_guess); //push - it will add the number in array
    no_of_guesses += 1; //it will increment the no of guess
    if (user_guess < actualnumber) {
      msg1.textContent = "Your Guess is Too low";
      msg2.textContent = "No. Of Guesses : " + no_of_guesses;
      msg3.textContent = "Guessed Number Are: " + guesses_num;
    } else if (user_guess > actualnumber) {
      msg1.textContent = "Your Guess is Too High";
      msg2.textContent = "No. Of Guesses : " + no_of_guesses;
      msg3.textContent = "Guessed Number Are: " + guesses_num;
    } else if (user_guess == actualnumber) {
      msg1.textContent = "Congratulation !! You have Guess the correct Number The Number Was: "+actualnumber;
      msg2.textContent = " You guessed it in " + no_of_guesses + " Guesses";
      msg3.textContent = "Guessed Numbers Are: "+no_of_guesses;

    }
  } else {
    // if user exceeds its chance limit then it will show below message
    msg1.textContent =
      "You have Used Your 10 Chances. Better Luck Next Time !!";
  }
};


//hope you like the game and understand the functionality.
