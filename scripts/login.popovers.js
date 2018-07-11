var input_login = $("#input_login")
var input_password = $("#input_password")

var hide_popover = function() {
	$(this).popover("disable")
	$(this).popover("hide")
	$(this).removeClass("border-danger")
}

var show_popover = function(input) {
	input.addClass("border-danger")
	input.popover("enable")
	input.popover("show")
}

var check_fields = function() {
	var valid = true

	if(input_login.val().length < 5) {
		input_login.attr("data-content", "E-mail не должен быть короче 5 символов")
		show_popover(input_login)
		valid = false
	} else if(input_login.val().length > 30) {
		input_login.attr("data-content", "E-mail не должен быть длиннее 30 символов")
		show_popover(input_login)
		valid = false
	} else {
		var firstIndex = input_login.val().indexOf("@")
		if(firstIndex == -1 || firstIndex != input_login.val().lastIndexOf("@")) {
			input_login.attr("data-content", "Отсутсвует символ @, либо встречается неоднократно.")
			show_popover(input_login)
			valid = false
		}
	}

	if(input_password.val().length < 5) {
		input_password.attr("data-content", "Пароль не должен быть короче 5 символов")
		show_popover(input_password)
		valid = false
	}
	if(input_password.val().length > 20) {
		input_password.attr("data-content", "Пароль не должен быть длиннее 20 символов")
		show_popover(input_password)
		valid = false
	}

	return valid
}


$("#input_login").click(hide_popover)
$("#input_password").click(hide_popover)
