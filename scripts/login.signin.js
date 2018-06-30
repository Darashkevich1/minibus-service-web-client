var p_error_login = $("#p_error_login")
var progress_load = $("#progress_load")

var signin_result = function(data) {
	if(data) {
		alert(data.accessToken)
	} else {
		p_error_login.show()
	}
	progress_load.hide()
}

var signin = function() {
	progress_load.show()
	p_error_login.hide()

	setTimeout(function() {
		if(check_fields()) {
			$.ajax({
				method: "POST",
				url: "http://localhost:8080/user/login",
				data: { email: input_login.val(), password: input_password.val() },
				success: signin_result
			})
		}
	}, 1000)
}

$("#button_login").click(signin)