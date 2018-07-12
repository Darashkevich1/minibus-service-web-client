var panel_user_info = $("#panel_user_info")
var panel_load = $("#panel_load")
var input_firstname = $("#input_firstname")
var input_lastname = $("#input_lastname")
var input_phone = $("#input_phone")
var input_address = $("#input_address")
var input_account_type = $("#input_account_type")
var panel_load_label = $("#panel_load_label")

var fetch_current_user_success = function(data) {
	if(data) {
		input_firstname.val(data.firstName)
		input_lastname.val(data.lastName)
		input_address.val(data.address)
		input_phone.val(data.phone)
		switch(data.role) {
			case "Admin": input_account_type.val("Администратор"); break;
			case "Leader": input_account_type.val("Предприниматель"); break;
			case "Driver": input_account_type.val("Водитель"); break;
			case "Passenger": input_account_type.val("Пассажир"); break;
		}
		panel_load.slideUp(300)
		panel_user_info.slideDown(300)
	} else {
		panel_load_label.html("Не удалось загрузить данные :(")
	}
}

$(document).ready(function() {
	fetch_current_user($.cookie("userId"), fetch_current_user_success)
})

var logout_success = function(data) {
	if(data) {
		$.cookie("userId", null)
		$.cookie("accessToken", null)
		window.location.href = "../index.html"
	}
}

$("#button_logout").click(function() {
	logout($.cookie("accessToken"), logout_success)
})