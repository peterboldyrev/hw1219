//my lets
let specChar = ' " !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~"  ';
let numChar = '0123456789';
let lowChar = 'abcdefghijklmnopqrstuvwxyz';
let upChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// user presses the generate password button 

document.getElementById("generate").addEventListener("click", passGen);


// user gets a prompt that is stored to a let length: to choose a length of 8-128

function passGen () {

    //  the idea is to pass the lets above to this array once the user confirms smth
    let charsAll = []; 

    // adding an empty variable inside the function so that it would reset after user presses the Generate Button again;
    let retPassword = '';

    // user is required to input the password length
    let passwordLength = prompt('Please choose lenght, enter number between 8-128');
    let passwordNum = parseInt(passwordLength);

    // if number is less than 8 or more that 128 user gets an alert 
    if (parseInt(passwordLength)<8 || parseInt(passwordLength)>128) {
        alert("please press Generate button and enter a number between 8 - 128");
    };
    console.log(passwordNum);

// user gets a confirm about  future password 
    let wantsToProceedQ = confirm(' Now you will be asked about other parameters for your password: If you want your password to have special characters, numeric characters, lowercase characters, UPPERCASE characters. Do you want to proceed? (Press OK to proceed and Cancel to stop');
    if (wantsToProceedQ === false){
    alert("ok thanks!")
    return stop;
    };

// user gets a prompt that is stored to a let (HOW TO DECLARE SPEC CHAR???)
    let specCharQ = confirm('(1/4) Would you like to have special characters in your password? Example:!"#$%&()*+,-./:;<=>?@[\]^_`{|}~')
    if (specCharQ === true) {
        charsAll.push(specChar);
    }
    console.log(specCharQ);
    console.log(charsAll);
    alert("Ok! Moving to the next question (2/4)!");

// user gets a prompt about numeric char that is stored to a let 
    let numCharQ = confirm('(2/4) Would you like to have numeric characters in your password?  (Press OK to include or Cancel to exclude and proceed to the next question');
    if (numCharQ === true) {
        charsAll.push(numChar);
    }
    console.log(numCharQ);
    console.log(charsAll);
    alert("Ok! Moving to the next question (3/4)!");

// user gets a prompt about lower char that is stored to a let 
    let lowCharQ= confirm('(3/4) Would you like to have lowercase characters in your password? (Press OK to include or Cancel to exclude and proceed to the next question');
    if (lowCharQ === true) {
        charsAll.push(lowChar);
    }
    console.log(lowCharQ);
    console.log(charsAll);
    alert("Ok! Moving to the next question (4/4)!");

// user gets a prompt about UPPER char that is stored to a let 
    let upCharQ= confirm('(4/4) Would you like to have UPPERCASE characters in your password?  (Press OK to include or Cancel to exclude and proceed to the next question');
    if (upCharQ === true) {
        charsAll.push(upChar);
    }
    console.log(upCharQ);
    console.log(charsAll);
    alert("Ok! please see your password!");


function readyToGenerate(){
//   generating password using the parameters 
    for (var i=0;i<passwordNum;i++){

    // variable with random string in array called arrayString
    let arrayString = Math.floor(Math.random() * charsAll.length + 1);
    retPassword+=arrayString.charAt(Math.floor(Math.random() * arrayString.length + 1));
}
return retPassword;

}
    console.log(readyToGenerate());
  

}







