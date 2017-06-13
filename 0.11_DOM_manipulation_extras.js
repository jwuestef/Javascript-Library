function helloWorld() {
  
  //TODO - create a first name and last name variable that will be assigned data from inputs
  var firstName = document.getElementById("firstNameId").value;
  var lastName = document.getElementById("lastNameId").value;
  
  //TODO - create the code that updates the html with the names from the inputs
  document.getElementById("DOMfirstName").innerHTML = firstName;
  document.getElementById("DOMlastName").innerHTML = lastName;
}