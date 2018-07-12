var panel_user_info = $("#panel_user_info")
var panel_load = $("#panel_load")
var input_firstname = $("#input_firstname")
var input_lastname = $("#input_lastname")
var input_phone = $("#input_phone")
var input_address = $("#input_address")
var input_account_type = $("#input_account_type")
var panel_load_label = $("#panel_load_label")
var input_file = $("#input_file")
var button_load_ava = $("#button_load_ava")
var avatar = $("#avatar")

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
		$.cookie("userId", null)
		$.cookie("accessToken", null)
	}
}

$(document).ready(function() {
	upload_ava_success()
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

button_load_ava.click(function() {
	input_file.click()
})

var upload_ava_success = function(data) {
	if(data) {
		window.location.href = "index.html"
	}
	avatar.css("background-image", "url(http://localhost:8080/file/load/"+$.cookie("userId")+"), url('images/user.png')")
}

input_file.on("change", function() {
	upload_ava(input_file[0].files[0], upload_ava_success)
})