 firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    
      document.getElementById("user-div").style.display = "block";
      document.getElementById("login-div").style.display = "none";

      var user = firebase.auth().currentUser;

      if(user != null){

          var email_id = user.email;

          document.getElementById("user_para").innerHTML = " Welcome user :" + email_id;


      }


      
  } else {
    
      document.getElementById("user-div").style.display = "none";
      document.getElementById("login-div").style.display = "block";
      
      
  }
});


function login(){
    
    var userEmail = document.getElementById("email_field").value;
    var userPassword = document.getElementById("password_field").value;
    
    window.alert(userEmail + " " + userPassword);


    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

        window.alert("Error :" + errorMessage);
    });
    
}

function logout() {
    firebase.auth().signOut();
    
}