var error_confirmation = 0;
var table_validation =0;
// function form_validation() {
//
// }



var firstName = document.getElementById("fname");
var lastName = document.getElementById("lname");
var emailAddress = document.getElementById("email");
var password = document.getElementById("txtPassword");
var phone = document.getElementById("phone");
var ans = document.getElementById("answer");
var confirmPassword = document.getElementById("txtConfirmPassword");
// var gen = document.querySelector('input[name="gender"]:checked').value;

// console.log(gen);
function form_validation(e) {
  e.preventDefault();

  var firstNameValue = firstName.value.trim();
  var validFirstName = /^[A-Za-z]+$/;
  var firstNameErr = document.getElementById("name-error");
  if (firstNameValue === "") {
    firstNameErr.innerHTML = "First Name is required";
    error_confirmation = 1;
    return false;
   
  } else if (firstNameValue.match(validFirstName) === null) {
    firstNameErr.textContent =
      "First Name must be only string without white spaces";
    error_confirmation = 1;
    return false;
  } else {
    firstNameErr.textContent = "";
    // error_confirmation = 1
  }

  //  LastName Validation
  var lastNameValue = lastName.value.trim();
  var validLastName = /^[A-Za-z]+$/;
  var lastNameErr = document.getElementById("lastname-error");
  if (lastNameValue === "") {
    lastNameErr.textContent = "Last Name is required";
    error_confirmation = 1;
    return false;
  } else if (lastNameValue.match(validLastName) === null) {
    lastNameErr.textContent =
      "Last Name must be only string without white spaces";
      error_confirmation = 1;
    return false;
  } else {
    lastNameErr.textContent = "";
    // error_confirmation = 1;
    // return false;
  }

  //pass validation

  var passwordValue = password.value.trim();
  var cpasswordValue = confirmPassword.value.trim();
  var passwordErr = document.getElementById("password-error");
  var cpasswordErr = document.getElementById("cpassword-error");
  validPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (passwordValue === "") {
    passwordErr.textContent = "Password is required";
    error_confirmation = 1;
    return false;
    // error_confirmation = 1;
  } else if (!validPassword.test(passwordValue)) {
    passwordErr.innerHTML =
      "Password should be in a format with at least one Uppercase, lowercase, digit, special characters & 8 characters";
    error_confirmation = 1;
  } else if (cpasswordValue === "") {
    cpasswordErr.textContent = "Confirm Password is required";
    error_confirmation = 1;
    return false;
  } else if (passwordValue !== cpasswordValue) {
    cpasswordErr.textContent = "Password Doesn't match";
    error_confirmation = 1;
    return false;
  } else {
    passwordErr.textContent = "";
    cpasswordErr.textContent = "";
  }


//gender validation
  var s = document.getElementById("rbtn1");
  var n = document.getElementById("rbtn2");
  var valgen = document.getElementById("gen-error");
  if (!s.checked && !n.checked) {
    valgen.textContent = "select gender";
    error_confirmation = 1;
    return false;
  }
  else{
    valgen.textContent = "";
  }

  var emailAddressValue = emailAddress.value.trim();
  var validEmailAddress = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var emailAddressErr = document.getElementById("email-error");

  if (emailAddressValue.length === 0) {
    emailAddressErr.textContent = "Email Address is required";
    error_confirmation = 1;
    return false;
    // error_confirmation = 1;
  } else if (!validEmailAddress.test(emailAddressValue)) {
    emailAddressErr.textContent =
      "Email Address must be in valid formate with @ symbol";
    error_confirmation = 1;
    return false;
  } else {
    emailAddressErr.textContent = "";
  }

  data_local_storage(firstName.value,lastName.value,emailAddress.value,phone.value,password.value,ans.value);
  createTable(firstName.value,lastName.value,emailAddress.value,phone.value)
}

document.getElementById("submit").addEventListener("click", form_validation);

//localstoragefunction

function data_local_storage(fname,lname,email,phone,password,answer){
  const local_storage = {
    FIRSTNAME: fname,
    LASTNAME: lname,
    EMAIL: email,
    PASS: password,
    PHONE: phone,
    ANS: answer
  };
  localStorage.setItem("user_details",JSON.stringify(local_storage));
}


//table

function createTable(fname,lname,email,phone) {
  if(table_validation===0){
    table_validation=1;
    const tableContainer = document.getElementById('table-container');
  const table = document.createElement('table');
  table.className = 'table';
  table.id="user_table"
  const table_heading =["first name","last name","email","phone"];
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');


   table_heading.forEach((key)=>{
    const th = document.createElement('th');
    th.textContent = key;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const valuesOfTable = [fname, lname, email, phone];
  // Create table body
  const tbody = document.createElement('tbody');
  const row = document.createElement('tr');


  valuesOfTable.forEach(item => {
      const td = document.createElement('td');
      td.textContent = item;
      row.appendChild(td);
  });

  tbody.appendChild(row);
  table.appendChild(tbody);

  tableContainer.appendChild(table);
    
  }
  else{
    const tableContainer = document.getElementById('table-container');
    const valuesOfTable = [fname, lname, email, phone];
    const table=document.getElementById("user_table")
    // Create table body
    const tbody = document.createElement('tbody');
    const row = document.createElement('tr');

    valuesOfTable.forEach(item => {
        const td = document.createElement('td');
        td.textContent = item;
        row.appendChild(td);
    });

    tbody.appendChild(row);
    table.appendChild(tbody);
  
    tableContainer.appendChild(table);
  }
  
}
