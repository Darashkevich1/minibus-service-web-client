var input_login = $("#input_login")
var input_password = $("#input_password")

var input_login_status = $("#input_login_status")
var input_password_status = $("#input_password_status")

var check_email_result = function(isFree) {
	input_login_status.show()
	hide_popovers()

	if(isFree) {
		input_login_status.html("&#10003")
		input_login_status.removeClass("bg-danger")
		input_login_status.addClass("bg-success")
	} else {
		input_login_status.html("&#10005")
		input_login_status.removeClass("bg-success")
		input_login_status.addClass("bg-danger")
		show_popover(input_login_status, "Такой email уже зарегистрирован в системе.")
	}
}

var check_email = function(email) {
	$.ajax({
		method: "POST",
		url: "http://localhost:8080/user/emailIsFree",
		data: {email:input_login.val()},
		success: check_email_result
	})
}

// check fields return bool

input_login.focusout(function() {
	if(input_login.val().length > 5) {
		var firstIndex = input_login.val().indexOf("@")
		var lastIndex = input_login.val().lastIndexOf("@")
		if(firstIndex == lastIndex) {
			check_email(input_login.val())
		}
	}
})

var hide_popovers = function() {
	input_login_status.popover("hide")
	input_login_status.popover("disable")
	input_password_status.popover("hide")
	input_password_status.popover("disable")
}

var show_popover = function(popover, text) {
	popover.popover("enable")
	popover.attr("data-content", text)
	popover.popover("show")
}