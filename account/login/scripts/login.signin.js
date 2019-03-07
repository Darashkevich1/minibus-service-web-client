var p_error_login = $("#p_error_login")
var progress_load = $("#progress_load")

var signin_result = function(data) {
	if(data) {
		$.cookie("userId", data.userId, { path: "/" })
		$.cookie("accessToken", data.accessToken, { path: "/" })
		window.location.href = "../../index.html"
	} else {
		p_error_login.slideDown(200)
	}
	progress_load.slideUp(100)
}

var signin = function() {
	p_error_login.slideUp(100)

	if(check_fields()) {
		progress_load.slideDown(200)
		setTimeout(function() {
			$.ajax({
				method: "POST",
				url: "https://busappmini.azurewebsites.net/user/login",
				data: { email: input_login.val(), password: input_password.val() },
				success: signin_result
			})
		}, 1000)
	}
}

$("#button_login").click(signin)