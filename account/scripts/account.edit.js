var input_firstname = $("#input_firstname")
var input_lastname = $("#input_lastname")
var input_phone = $("#input_phone")
var input_address = $("#input_address")

$("#button_save").click(function() {
	update_user_info(input_firstname.val(), input_lastname.val(), input_phone.val(), input_address.val(), $.cookie("accessToken"))
})

$("#button_delete").click(function() {
	
})