
function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePhoneNumber(number) {
	var re = /^[789]\d{9}$/;
    return re.test(number);
}

$(document).ready(function() {
	$('#program_experience_form').submit(function(event){
		isValidEmail = validateEmail($('#email').val());
  		isValidPhone = validatePhoneNumber($('#phone').val());

		if (!isValidEmail) {
		    $('#email').addClass('validation_element');
		    $('#email_validation_msg').removeClass('hidden_element');
		    event.preventDefault();
		}
		else {
		    $('#email').removeClass('validation_element');
		    $('#email_validation_msg').addClass('hidden_element');
		}

		if (!isValidPhone) {
		    $('#phone').addClass('validation_element');
		    $('#phone_validation_msg').removeClass('hidden_element');
		    event.preventDefault();
		}
		else {
		    $('#phone').removeClass('validation_element');
		    $('#phone_validation_msg').addClass('hidden_element');
		}
    });
});