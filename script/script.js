

// function flipping card
function flipCard() {
  const card = document.getElementById("flipCard");
  card.classList.toggle("flipped");
}

// signUp form validations

const nameInput = document.getElementById("name");
const signupForm = document.getElementById("signupForm");
const mobileInput = document.getElementById("MobileNumber");
const signUpUserName = document.getElementById("usernameSignUp");
const signupPassword = document.getElementById("signupPassword");
const conformPassword = document.getElementById("conformPassword");
const userEmail= document.getElementById("userEmail");


signupForm.addEventListener("submit", (event) => {
  const mobileNumber = mobileInput.value.trim();
  const UsernameSignUP = signUpUserName.value.trim();
  const usernamePattern = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;

  if (nameInput.value.trim() === "") {
    event.preventDefault();
    alert("Enter name to continue");
    return;
  }

  if (mobileNumber === "" || isNaN(mobileNumber)) {
    event.preventDefault();
    alert("Enter a valid mobile number!");
    return;
  }
  if (!usernamePattern.test(UsernameSignUP)) {
    event.preventDefault();
    alert(
      "Username must contain at least one number and one special character!"
    );
    return;
  }
  if(signupPassword.value!==conformPassword.value){
    alert("Password mismatch – please re-enter to confirm.")
    return
  }else{
   event.preventDefault()
  alert("signup suceassfull !")
document.getElementById("flipCard").classList.toggle("flipped");

const userData={
  name:nameInput.value,
  mobileNumber:mobileInput.value,
  email:userEmail.value,
  username:signUpUserName.value,
  password:signupPassword.value,

}

localStorage.setItem("userData", JSON.stringify(userData));

  }




}
);





//sign in form validation


let signInForm = document.getElementById("signInForm");

signInForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form refresh

  const signInUserName = document.getElementById("signInuserName");
  const signInPassword = document.getElementById("signInPassword");

  if (signInUserName.value.trim() === "") {
    alert("Enter a valid user name!!");
    return;
  }

  if (signInPassword.value.trim() === "") {
    alert("Enter a valid user password!!");
    return;
  }

  const storedData = localStorage.getItem("userData");

  if (storedData) {
    const userData = JSON.parse(storedData); 

    if (
      signInUserName.value === userData.username &&
      signInPassword.value === userData.password
    ) {
      alert("Login successful!!");
    } else {
      alert("Incorrect credentials!!");
    }
  } else {
    alert("No user found. Please sign up first.");
  }
});






