var input_firstname = $("#input_firstname")
var input_lastname = $("#input_lastname")
var input_phone = $("#input_phone")
var input_address = $("#input_address")
var edit_buttons = $("#edit_buttons")
var label_load = $("#label_load")
var inputs_panel = $("#inputs_panel")

$(document).ready(function() {
	fetch_current_user(fetch_current_user_success)
})

var fetch_current_user_success = function(data) {
	if(data) {
		input_firstname.val(data.firstName)
		input_lastname.val(data.lastName)
		input_phone.val(data.phone)
		input_address.val(data.address)
		edit_buttons.slideDown(300)
		label_load.slideUp(300)
		inputs_panel.slideDown(300)
	}
}

$("#button_save").click(function() {
	update_user_info(input_firstname.val(), input_lastname.val(), input_phone.val(), input_address.val(), $.cookie("accessToken"), update_user_info_success)
})

var update_user_info_success = function(data) {
	if(data) {
		set_success_type()
		show_alert_message("Профиль успешно сохранен!")
	} else {
		set_danger_type()
		show_alert_message("Не удалось сохранить профиль :(")
	}
}

$("#button_delete").click(function() {
	delete_user($.cookie("userId"), $.cookie("accessToken"), delete_user_success)
})

var delete_user_success = function(data) {
	if(data) {
		label_load.html("Пользователь успешно удален!")
		inputs_panel.slideUp(300)
		edit_buttons.slideUp(300)
		label_load.slideDown(300)
		$.cookie("accessToken", null)
		$.cookie("userId", null)
	} else {
		label_load.html("Не удалось удалить пользователя :(")
		inputs_panel.slideUp(300)
		edit_buttons.slideUp(300)
		label_load.slideDown(300)
	}
}