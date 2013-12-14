//Gary's shooting advice

//Array of all the animals Gary wants you to shoot
var shootAdvice = new Array()
shootAdvice[0] = 'tiger'
shootAdvice[1] = 'deer'
shootAdvice[2] = 'monkey'
shootAdvice[3] = 'bear'
shootAdvice[4] = 'cat'
shootAdvice[5] = 'coon'
shootAdvice[6] = 'fox'
shootAdvice[7] = 'bald eagle'
shootAdvice[8] = 'terrorist'
shootAdvice[9] = 'whale'
shootAdvice[10] = 'hamburgler'
shootAdvice[11] = 'hoop'
shootAdvice[12] = 'guy'

//black magic
var p = shootAdvice.length,
    preBuffer = new Array();

for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = shootAdvice[i]
}

//this cuntbucket needs to have the current time in the equation
function randomAdvice() {
    return shootAdvice[Math.floor(Math.random()*p)];
}

//function that calls for advice on page load
function initialShootAdvice() {
    document.write(randomAdvice());
}

//function that calls for new advice when a button is pressed
function newShootAdvice() {
    document.getElementById('garyshootadvice').innerHTML = randomAdvice();
}
