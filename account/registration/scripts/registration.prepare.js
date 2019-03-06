var input_login = $("#input_login")
var input_password = $("#input_password")

var input_login_status = $("#input_login_status")
var input_password_status = $("#input_password_status")

var button_registration_background = $("#button_registration_background")

var user_types = $("#user_types")

var timeout_id = null

var show_danger_status = function(object_status) {
	object_status.html("&#10005")
	object_status.removeClass(["bg-success", "bg-warning"])
	object_status.addClass("bg-danger")
	object_status.slideDown(100)
}

var show_success_status = function(object_status) {
	object_status.html("&#10003")
	object_status.removeClass(["bg-danger", "bg-warning"])
	object_status.addClass("bg-success")
	object_status.slideDown(100)
}

var show_loading_status = function(object_status) {
	object_status.html("&#x21bb")
	object_status.removeClass(["bg-success", "bg-danger"])
	object_status.addClass("bg-warning")
}

var show_popover_message = function(object_popover, message) {
	object_popover.popover("enable")
	object_popover.attr("data-content", message)
	object_popover.popover("show")
}

var hide_popover_message = function(object_popover) {
	object_popover.popover("disable")
	object_popover.popover("hide")
}

var check_email = function(email) {
	var isFree = false
	$.ajax({
		method: "POST",
		async: false,
		url: "https://busappmini.azurewebsites.net/user/emailIsFree",
		data: {email:email},
		success: function(data) {
			isFree = data
		}
	})
	return isFree
}

var show_select_types = function() {
	if(input_login_status.hasClass("bg-success") && input_password_status.hasClass("bg-success")) {
		user_types.slideDown(100)
	} else {
		$(".button_user_type").removeClass("active")
		user_types.slideUp(100)
		button_registration_background.slideUp(100)
	}
}


var checking_login = function() {
	var trimmed_login = input_login.val().trim()

	if(trimmed_login.length < 5) {
		show_danger_status(input_login_status)
		show_popover_message(input_login_status, "Длина почтового адреса должна превышать 5 символов.")
	} else if(trimmed_login.indexOf("@") != trimmed_login.lastIndexOf("@") || trimmed_login.indexOf("@") == -1) {
		show_danger_status(input_login_status)
		show_popover_message(input_login_status, "Символ @ отсутствует, либо встречается неоднократно.")
	} else {
		show_loading_status(input_login_status)
		show_select_types()
		clearTimeout(timeout_id)
		timeout_id = setTimeout(function() {
			var result = check_email(trimmed_login)
			if(result) {
				show_success_status(input_login_status)
				hide_popover_message(input_login_status)
			} else {
				show_danger_status(input_login_status)
				show_popover_message(input_login_status, "Такой адрес уже зарегистрирован в системе.")
			}
			show_select_types()
		}, 1500)
	}
}

var checking_password = function() {

	var trimmed_password = input_password.val().trim()

	if(trimmed_password.length < 5) {
		show_danger_status(input_password_status)
		show_popover_message(input_password_status, "Длина пароля должна превышать 5 символов.")
	} else {
		show_success_status(input_password_status)
		hide_popover_message(input_password_status)
	}
}

input_login.on("input", function() {
	checking_login()
})

input_password.on("input", function() {
	checking_password()
	show_select_types()
})

$(".button_user_type").click(function() {
	$(".button_user_type").removeClass("active")
	$(this).addClass("active")
	button_registration_background.slideDown(100)
})