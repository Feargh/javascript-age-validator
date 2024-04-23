// function validateAge() {
//     console.log('Running validateAge function')
// }

function validateForm() {
    let valid = true;
    console.log("console.log of valid, is it valid? " + valid)
    // check birthdate
	valid = validateBirthdate();

    console.log(`Valid after DOB check: ${valid}`)
    return valid;
    
}

function validateBirthdate() {
    // get current date
    let currentDate = new Date();

	// get input date

    let day = document.getElementById("dobDay").value;
    let month = document.getElementById("dobMonth").value - 1;
    let year = document.getElementById("dobYear").value;

    let birthdate = new Date(year, month, day);

	// return if age is over 18
    let diff = new Date(currentDate - birthdate)
    console.log(`diff variable: ${diff}`)

    let age = Math.abs(diff.getUTCFullYear() - 1970);
    console.log(`Age is: ${age}`)
    
    return age >= 18;
}