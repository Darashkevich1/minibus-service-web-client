var button_registration = $("#button_registration")
var stop_animating = false

button_registration.click(function() {
	var role = $(".button_user_type").filter(".active").attr("id")
	signin(input_login.val().trim(), input_password.val().trim(), role)
	animate_button_registration()
})

var animate_button_registration = function() {
	var opacity = 0.5
	setInterval(function() {
		button_registration_background.fadeTo("slow", opacity)
		if(opacity == 0.5) {
			opacity = 1
		} else {
			opacity = 0.5
		}
	}, 500)
}

var signin = function(email, password, role) {
	$.ajax({
		method: "POST",
		url: "http://localhost:8080/user/register",
		data: { email: email, password: password, role: role },
		success: signin_success
	})
}

var signin_success = function(data) {
	if(data) {
		$.cookie("accessToken", data.accessToken)
		window.location.href = "account/edit.html"
	}
} 