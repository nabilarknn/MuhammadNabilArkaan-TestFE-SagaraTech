document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("loginButton");

  loginButton.addEventListener("click", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    // menampilkan dalam di console
    // console.log("Email: ", emailValue);
    // console.log("Password: ", passwordValue);

    // menampilkan dalam bentuk alert
    alert("Email: " + emailValue + "\nPassword: " + "*".repeat(passwordValue.length)); //hide password
  });
});
