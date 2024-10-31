//Name : Marc F
//Date : 10/25/2024
    // JavaScript code for form validation
    
  
  // Retrieve the input field value
  let form = document.getElementById('myForm')
  let inputFieldValue = document.getElementById('inputField')
  
  // Regular expression pattern for alphanumeric input
  let regexTest = /^[a-zA-Z0-9_]+$/;

  // Add event listener -> submit
  form.addEventListener('submit', function(event) {
    // Prevent form from submitting
    event.preventDefault();
  
  if (!regexTest.test(inputFieldValue.value)){
    console.log("So true")
  }
  else {
    (console.log("Invalid Input!"))
  }
  })




      //var inputFieldValue = document.getElementById('inputField');


      // Check if the input value matches the pattern
      //let InputTest = regExp.test(inputFieldValue)

      //function validateStuff() {

        // Valid input: display confirmation and submit the form
        //inputFieldValue.addEventListener('blur', function(){
        
        //if (!regexTest.test(inputFieldValue.value)){
          //console.log("So true.")
        //}
        
        // Invalid input: display error message
        //else {
          //(console.log("Invalid Input!"))
        //}
      //});
    //}
