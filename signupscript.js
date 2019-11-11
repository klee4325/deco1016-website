function showMenuIcon() {
  var nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}



var currentTab = 0; // Set to be the first sign up page
showTab(currentTab); // Display the page

function showTab(n) {
  // Display the specified page of the form
  var tab = document.getElementsByClassName("tab");
  tab[n].style.display = "block";
  // Previous/Next buttons
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else if (n == 2) {
    document.getElementById("signForm").style.height = "1400px";
    document.getElementById("prevBtn").style.display = "none";
  } else if (n == 3) {
    document.getElementById("signForm").style.height = "1600px";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("save").style.display = "inline";
  } else if (n == 1) {
    document.getElementById("prevBtn").style.display = "inline";
  } else {
    document.getElementById("prevBtn").style.display = "none";
  }
  

  
  if (n == (tab.length -1)) {
    document.getElementById("nextBtn").innerHTML = "Create Account";
  } else if (n == 1) {
    document.getElementById("nextBtn").innerHTML = "Create Account";
  } else if(n == 2) {
    document.getElementById("nextBtn").innerHTML = "Save";
  } else if(n == 3) {
    document.getElementById("nextBtn").innerHTML = "Save";

  } else {
    document.getElementById("nextBtn").innerHTML = "Continue";
  }
}




  var constraints = {
    email: {         // Email is required
      presence: true,
      email: true
    },
    password: {      // Passwword is required
      presence: true,
      length: {
        minimum: 5
      }
    },

    firstname: {      // First name is required
      presence: true,
      length: {
        minimum: 2,
      },
      format: {
        pattern: "[a-z ]+",
        flags: "i",
        message: "can only contain letters"
      }
    },
    lastname: {
      presence: true,
      length: {
        minimum: 2,
      },
      format: {
        pattern: "[a-z ]+",
        flags: "i",
        message: "can only contain letters"
      }
    },


    cardname: {
      presence: true,
      length: {
        minimum: 3,
      },
      format: {
        pattern: "[a-z ]+",
        flags: "i",
        message: "can only contain letters"
      }
    },

    cardnumber: {
         // You need to pick a username too
      presence: true,
      // And it must be between 3 and 20 characters long
      length: {
        minimum: 12,
        maximum: 19
      },
      format: {
        // We don't allow anything that a-z and 0-9
        pattern: "[0-9]+",
        message: "can only contain 0-9"
      }
    },

    securitycode: {
      presence: true,
      // And it must be between 3 and 20 characters long
      length: {
        minimum: 3,
        maximum: 4
      },
      format: {
        // We don't allow anything that a-z and 0-9
        pattern: "[0-9]+",
        message: "can only contain 0-9"
      }
    },

  }

  

// Hook up the form so we can prevent it from being posted
var form = document.querySelector("form");
form.addEventListener("submit", function(ev) {
  ev.preventDefault();
  handleFormSubmit(form);
});

// Hook up the inputs to validate on the fly
var inputs = document.querySelectorAll("input, textarea, select");
console.log(inputs);
for (var i = 0; i < inputs.length; ++i) {
  inputs.item(i).addEventListener("change", function(ev) {

    var errors = validate(form, constraints) || {};
    showErrorsForInput(this, errors[this.name])
  });
}

function handleFormSubmit(form, input) {
  // validate the form against the constraints
  var errors = validate(form, constraints);
  // then we update the form to reflect the results
  showErrors(form, errors || {});
  if (!errors) {
    showSuccess();
  }
}

// Updates the inputs with the validation errors
function showErrors(form, errors) {
  // We loop through all the inputs and show the errors for that input
  form.querySelectorAll("input[name], select[name]").forEach( function(input) {
    // Since the errors can be null if no errors were found we need to handle
    // that
    showErrorsForInput(input, errors && errors[input.name]);
  });
}

// Shows the errors for a specific input
function showErrorsForInput(input, errors) {
  // This is the root of the input
  var formGroup = closestParent(input.parentNode, "form-group")
    // Find where the error messages will be insert into
    , messages = formGroup.querySelector(".messages");
  // First we remove any old messages and resets the classes
  resetFormGroup(formGroup);
  // If we have errors
  if (errors) {
    console.log("Error");
    // we first mark the group has having errors
    formGroup.classList.add("has-error");
    // then we append all the errors
    errors.forEach(function(error) {
      addError(messages, error);
    });
  } else {
    // otherwise we simply mark it as success
    formGroup.classList.add("has-success");
  }
}

// Recusively finds the closest parent that has the specified class
function closestParent(child, className) {
  if (!child || child == document) {
    return null;
  }
  if (child.classList.contains(className)) {
    return child;
  } else {
    return closestParent(child.parentNode, className);
  }
}

function resetFormGroup(formGroup) {
  // Remove the success and error classes
  formGroup.classList.remove("has-error");
  formGroup.classList.remove("has-success");
  // and remove any old messages
  formGroup.querySelectorAll(".help-block.error").forEach(function(el) {
    el.parentNode.removeChild(el);
  });
}

// Adds the specified error with the following markup
// <p class="help-block error">[message]</p>
function addError(messages, error) {
  var block = document.createElement("p");
  block.classList.add("help-block");
  block.classList.add("error");
  block.innerText = error;
  messages.appendChild(block);
}

function showSuccess() {
  // We made it \:D/
  alert("Success!");
}


  function validateForm(currentTab) {
    return true;
  }

  function nextPrev(n) {
    // This function will figure out which tab to display
    var tab = document.getElementsByClassName("tab");

    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm(currentTab)) return false;
    // if (currentTab == 0) {
    //   // checkPass()
    // }
    // Hide the current tab:
    tab[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= tab.length) {
      //...the form gets submitted:
      document.getElementById("signForm").submit();
      return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
  }

  var b = 1
  function move(){
    bar = document.getElementsByClassName("bar");
    bar[b].style.display = "block";
    bar[b].classList.remove("animrev");
    bar[b].classList.add("anim");
    b += 1;
  }

  function back(){
    b -= 1;
    bar = document.getElementsByClassName("bar");
    bar[b].classList.remove("anim");
    bar[b].classList.add("animrev");
  }