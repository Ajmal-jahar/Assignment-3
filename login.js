function validateLogin(callback) {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username.trim() === "admin" && password.trim() === "12345") {
      callback(true); 
  } else {
      callback(false); 
  }
}

function handleLogin(isValid) {
  if (isValid) {
      window.location.href = "index.html";
  } else {
    alert("Inavlid username or password");
  }
}

document.getElementById("loginButton").addEventListener("click", function() {
  validateLogin(handleLogin);
});
sessionStorage.setItem("login", "true");