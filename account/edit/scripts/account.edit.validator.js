
var show_popover = function(obj, message) {
	obj.attr("data-content", message)
	obj.popover("enable")
	obj.popover("show")
}

var hide_popover = function(obj) {
	obj.popover("disable")
	obj.popover("hide")
}

$(".form-control").click(function() {
	hide_popover($(this))
})

var validate_fields = function() {
	var firstname = input_firstname.val()
	var lastname = input_lastname.val()
	var address = input_address.val()
	var phone = input_phone.val()
	var valid = true
	var phone_validator = new RegExp("^\\+\\d{3}\\(\\d{2}\\)\\d{7}$")

	if(firstname.length == 0) {
		show_popover(input_firstname, "Поле Имя должно быть заполненным.")
		valid = false
	}
	if(lastname.length == 0) {
		show_popover(input_lastname, "Поле Фамилия должно быть заполненным.")
		valid = false
	}
	if(address.length == 0) {
		show_popover(input_address, "Поле Адрес должно быть заполненным.")
		valid = false
	}
	if(!phone_validator.test(phone)) {
		show_popover(input_phone, "Строка должна быть в виде +XXX(XX)XXXXXXX")
		valid = false
	}

	return valid
}