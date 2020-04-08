console.log('contact js Active');


$(document).ready(function (){
  $('#sendMessage').click(function (event) {
    console.log('clicked button');


    var name = $('#name').val()
    var email = $('#email').val()
    var subject = $('#phone').val()
    var message = $('#message').val()

    console.log(name);
    console.log(email);
    console.log(subject);
    console.log(message);


    if (email == "email@example.com") {
      event.preventDefault()
      document.getElementById('email').value = ""
      document.getElementById("email").placeholder = "the placeholder really...?"
      document.getElementById("sendMessage").value = "Try Again";

    }

    else if (email == "example@example.com") {
      event.preventDefault()
      document.getElementById('email').value = ""
      document.getElementById("email").placeholder = "Nice Try"
      document.getElementById("sendMessage").value = "Try Again";
      document.getElementById("email").style.setProperty('border-color', '#a30000', 'important');
    }

    if(email.length > 5 && email.includes('@') && email.includes('.')) {
      console.log('email is valid');
      document.getElementById("email").style.setProperty('border-color', 'white', 'important');
    }

      else {
        event.preventDefault()
        console.log('email is invalid');
        document.getElementById("sendMessage").value = "Try Again";
        document.getElementById("email").style.setProperty('border-color', '#a30000', 'important');
      }

    if(name.length >= 2  ){
      console.log('Name is valid');
      document.getElementById("name").style.setProperty('border-color', 'white', 'important');
    }
    else{
      event.preventDefault()
      console.log('Name is too short');
      document.getElementById("sendMessage").innerHTML = "Try Again";
      document.getElementById("name").style.setProperty('border-color', '#a30000', 'important');
    }


    if(message.length > 10 ){
      console.log('Message is valid');
      //document.getElementById("message").style.setProperty('border-color', 'white', 'important');
    }
    else{
      event.preventDefault()
      console.log('Message is too short');
      document.getElementById("sendMessage").style.transition = "all 0.5s";
      document.getElementById("sendMessage").value = "Try Again";
      document.getElementById("message").style.setProperty('border-color', '#a30000', 'important');
    }

  })

  $('#reset').click(function (reset) {
    document.getElementById("name").style.setProperty('border-color', 'white', 'important');
    document.getElementById("email").style.setProperty('border-color', 'white', 'important');
    document.getElementById("email").placeholder="email@example.com"
    document.getElementById("phone").style.setProperty('border-color', 'white', 'important');
    document.getElementById("message").style.setProperty('border-color', 'white', 'important');
    document.getElementById("sendMessage").innerHTML = "Send";
    document.getElementById("johnSmith").style.display="none";
  })

})
