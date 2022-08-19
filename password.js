//create a password as a string 
//create a conditonal statement to count the amount of characters
//create another statement that will see if the characters are greater than or less than 10
//create a statment that will see if there are any numbers in the password
//console log a statment saying that the password doesnt meet requirments or that the password was created succesfully if it meets the requirements


let password = "Minionsriseofgru2"
if(password.length() < 10 ){
    console.log('Password needs to be 10 characters.')
}else if (password.length() >= 10){
    console.log("Pass word has been succesfully created")
}