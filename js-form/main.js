let submitButton = document.getElementById('submit');
submitButton.addEventListener("onclick", submit());

function submit() {
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let age = document.getElementById('age').value;
  let phone = document.getElementById('phone').value;
  let address = document.getElementById('address').value;
  let city = document.getElementById('city').value;
  let zip = document.getElementById('zip').value;
  let hobbies = document.getElementById('hobbies').value;
  let userName = document.getElementById('userName').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let passwordConfirm = document.getElementById('passwordConfirm').value;
  if(firstName.length == 0) {
    let firstNameError = document.getElementById('firstNameError').innerHTML.hidden = "*'First name' is a required field!";
  }
  if(lastName.length == 0) {
    let lastNameError = document.getElementById('lastNameError').innerHTML.hidden = "*'Last name' is a required field!";
  }
  if(address.length == 0) {
    let addressError = document.getElementById('addressError').innerHTML.hidden = "*'Address' is a required field!";
  }
  if(city.length == 0) {
    let cityError = document.getElementById('cityError').innerHTML.hidden = "*'City' is a required field!";
  }
  if(zip.length == 0) {
    let zipError = document.getElementById('zipError').innerHTML.hidden = "*'ZIP' is a required field!";
  }
  if(userName.length == 0) {
    let userNameError = document.getElementById('userNameError').innerHTML.hidden = "*'Username' is a required field!";
  }
  if(email.length == 0) {
    let emailError = document.getElementById('emailError').innerHTML.hidden = "*Please make sure to use an '@gmail.com' emailaddress only!";
  }
  if(password.length == 0) {
    let passwordError = document.getElementById('passwordError').innerHTML.hidden = "*Password must contain at least 1 number and 1 uppercase!";
  }
  if(passwordConfirm != password) {
    let passwordConfirmError = document.getElementById('passwordConfirmError').innerHTML.hidden = "*Please make sure your passwords match!";
  }
  //location.href="submit.html"
}

let resetButton = document.getElementById('reset');
resetButton.addEventListener("onclick", reset());
function reset() {
}
