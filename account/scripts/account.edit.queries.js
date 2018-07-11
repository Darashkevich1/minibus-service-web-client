var update_user_info = function(firstname, lastname, phone, address, accessToken) {
	$.ajax({
		method: "POST",
		url: "http://localhost:8080/user/update",
		data: {firstname: firstname, lastname: lastname, phone: phone, address: address, accessToken: accessToken},
		success: update_user_info_success
	})
}

var update_user_info_success = function(data) {
	if(data) {
		set_success_type()
		show_alert_message("Профиль успешно сохранен!")
	} else {
		set_danger_type()
		show_alert_message("Не удалось сохранить профиль :(")
	}
}