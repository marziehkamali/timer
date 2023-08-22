

let userInput = process.argv; //change the const to let otherwise cant reassign it 
userInput = userInput.slice(2);
for(let i = 0; i < userInput.length; i++) {
  let result = userInput[i];
  if(result >= 0 && isNaN(result) == false){
    let ms = result * 1000;
    console.log(ms);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, ms)
  }
}

