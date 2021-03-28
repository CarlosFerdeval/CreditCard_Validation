
/* Author 	Carlos Fernandez 
assignment Order Form2
Date written 	06/09/2020 */ 
 


function validateForm()
{
	var firstName = document.getElementById("firstname");
	var firstNameError = document.getElementById("firstNameError");
	var lastName = document.getElementById("lastname");
	var lastNameError = document.getElementById("lastNameError");
	var postCode = document.getElementById("postcode");
	var postCodeError = document.getElementById("postCodeError");
	var email = document.getElementById("email");
	var emailError = document.getElementById("emailError");
	var ccNumber = document.getElementById("ccnumber");
	var ccNumberError = document.getElementById("ccNumberError");
	var ccvNumber = document.getElementById("ccvnumber");
	var ccvNumberError = document.getElementById("ccvNumberError");
	var expiredNumber = document.getElementById("expired");
	var expiredNumberError = document.getElementById("expiredNumberError");
	var date = new Date();
	var month = date.getMonth()+1;//get the current month
	var exmonth = document.getElementById("exmonth").value;
	var year = date.getFullYear();
	var exyear = document.getElementById("exyear").value;
	
	
	if (firstName.value=="")
	{
		//alert("Your firstName cannot be left blank");
		//output to the innerHTML instead of alert box
		firstNameError.style.color="red"
		firstNameError.innerHTML = "First Name required";
		firstName.focus();
		return false;
	}
	firstNameError.innerHTML = ""; //clear innerHTML error
	if (lastName.value=="")
	{
		//alert("Your lastName cannot be left blank");
		//output to the innerHTML instead of alert box
		lastNameError.style.color="red"
		lastNameError.innerHTML = "Last Name required";
		lastName.focus();
		return false;
	}
	lastNameError.innerHTML = ""; //clear innerHTML error
	if (postCode.value.length !=4)
	{
		//alert("Your userID must be at least 6 numbers");
		postCodeError.style.color="red"
		postCodeError.innerHTML = "postcode must be 4 numbers";
		postCode.focus();
		return false;
	}
	if (isNaN(postCode.value))
	{
		//alert("Your userID must be numeric");
		postCodeError.style.color="red"
		postCodeError.innerHTML = "postcode must be numeric";
		postCode.focus();
		return false;
	}
	postCodeError.innerHTML = ""; //clear innerHTML error
	if (email.value.length <8)
	{
		//alert("Your userID must be at least 8 characters");
		emailError.style.color="red"
		emailError.innerHTML = "email must be at least 8 characters ";
		email.focus();
		return false;
	}
	if (email.value.indexOf("@")==-1)
	{
		// alert ("Your email address must include @ symbol"); 
		emailError.style.color="red"
		emailError.innerHTML = "Your email address must include @ symbol  ";
		email.focus();
		return false;
	}
	emailError.innerHTML = ""; //clear innerHTML error
	if ( ccNumber.value=="")
	{
		//alert ("Your credit card number cannot be left blank");
		ccNumberError.style.color="red"
		ccNumberError.innerHTML = "credit card number cannot be left blank";
		ccNumber.focus();
		return false;
	}
	if (isNaN(ccNumber.value))
	{
		//alert("Your userID must be numeric");
		ccNumberError.style.color="red"
		ccNumberError.innerHTML = "credit card must be numeric";
		ccNumber.focus();
		return false;
	}
	   /* The validation of the credict card validate the credit card number has 16 numbers (not characters) 
       validate the ccv has 3 numbers (not characters) and check the credit card has not expired 
	   by validating the expiry month and expiry year against the current month and current year */
 
	if (ccNumber.value.length!=16)
	{
		//alert("your credit card number must be 16 characters");
		ccNumberError.style.color="red"
		ccNumberError.innerHTML = "credit card must be 16 characters";
		ccNumber.focus();
		return false;
	}	
	ccNumberError.innerHTML = ""; //clear innerHTML error
	if (ccvNumber.value=="")
	{
		//alert ("Your credit card number cannot be left blank");
		ccvNumberError.style.color="red"
		ccvNumberError.innerHTML = "CCV number cannot be left blank";
		ccvNumber.focus();
		return false;
	}
	if (isNaN(ccvNumber.value))
	{
		//alert("Your CCV must be numeric");
		ccvNumberError.style.color="red"
		ccvNumberError.innerHTML = "CCV must be numeric";
		ccvNumber.focus();
		return false;
	}
	if (ccvNumber.value.length!=3)
	{
		//alert("your credit card number must be 16 characters");
		ccvNumberError.style.color="red"
		ccvNumberError.innerHTML = "credit card must be 3 characters";
		ccvNumber.focus();
		return false;	
	}
	ccvNumberError.innerHTML = ""; //clear innerHTML error
	if (year >= exyear && month > exmonth ) //check if the date
	{
		expiredNumberError.style.color="red"
		expiredNumberError.innerHTML = "credit card expired";
		expiredNumberError.focus();
		return false;
	}
	expiredNumberError.innerHTML = ""; //clear innerHTML error
	if (year > exyear  ) //check if the date
	{
		expiredNumberError.style.color="red"
		expiredNumberError.innerHTML = "credit card expired";
		expiredNumberError.focus();
		return false;
	}
	
		expiredNumberError.innerHTML = ""; //clear innerHTML error
		alert("Thank you for your submission!");
	
		return true;
		
	

}

/* The user’s choice must be validated for the available given choices, 1,2,3 
It will keep prompting the user to enter a valid choice and must not continue until a valid choice is entered. */
function openNewSite() 
{
	choice = parseInt(prompt("Which website do you want?\n 1: Google\n 2: Tafe\n 3: Learn",""));
    while (choice!=1 && choice!=2 && choice!=3) 
	{ 
		choice=parseInt(prompt("The value that you entered is not valid please select again\n 1: Google\n 2: Tafe\n 3: Learn",""));
		
	}	
	
	if (choice==1)	{		
		window.open( "http://www.google.com/", "myWindow", 
				"status = 1, height = 800, width = 800, resizable = 0" );
	}	
	else if (choice==2){
		window.open("https://www.tafesa.edu.au//", "myWindow", 
               "status = 1, height = 800, width = 800, resizable = 0" );
	}
	else if (choice==3) {
		window.open("https://learn.tafesa.edu.au//", "myWindow", 
               "status = 1, height = 800, width = 800, resizable = 0" );
	}
	
		
	return true;
}


// The user can press the HELP button to understand how to fill the form 
function help() 
{   var help;
	window.open("../html/help.html", "", "width=500 height=500");
	

	

	return;
}



