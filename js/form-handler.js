console.log("I am the handler of forms")

function capture (){
  event.preventDefault();
  console.log(document.customerEmail.email.value);
  var successfulEmail = document.customerEmail.email.value;
  console.log("Thanks for signing up, " + successfulEmail + "!");
}
