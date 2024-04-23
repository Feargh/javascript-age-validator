// function validateAge() {
//     console.log('Running validateAge function')
// }

function validateForm() {
    let valid = true;
    console.log("console.log of valid, is it valid? " + valid)
    
    // check birthdate
	valid = validateBirthdate();

    console.log(`Valid after DOB check: ${valid}`)
    // return valid;

    if (valid) {
        setTimeout(function() {
        window.location.href = "success.html";
      }, 0);
    } else {
        return valid
    }
    
}

function validateBirthdate() {
    // get current date
    let currentDate = new Date();

	// get input date
    let day = document.getElementById("dobDay").value;
    let month = document.getElementById("dobMonth").value;
    let year = document.getElementById("dobYear").value;

      // Check if all fields are filled
  if (!day || !month || !year) {
    alert("Please fill in all fields.");
    return;
  } else if (year < 1900) {
    alert("Please check the year")
  }

    let birthdate = new Date(year, month, day);

	// return if age is over 18
    // let age = currentDate.getFullYear() - birthdate.getFullYear();
    // let monthDiff = currentDate.getMonth() - birthdate.getMonth();


    let diff = new Date(currentDate - birthdate)
    console.log(`diff variable: ${diff}`)

    let age = Math.abs(diff.getUTCFullYear() - 1970);
    console.log(`Age in years is: ${age}`)

    // if (
    //     monthDiff < 0 ||
    //     (monthDiff === 0 && currentDate.getDate() < birthdate.getDate())
    //   ) {
    //     age--;
    //   }

    // const months = Math.abs(monthDiff) + (age * 12);
    // const days = Math.floor((currentDate - birthdate) / (1000* 60 * 60 * 24));

    // console.log(`Age: ${age} years, ${months % 12} months, ${days % 30} days`);

    // if (age >= 18) {
    //     window.location.href = "success.html";
    // }

    return age >= 18;
}