var button_login = $("#button_login")
var button_profile = $("#button_profile")

if($.cookie("userId") != "null" && $.cookie("userId") != undefined) {
	button_profile.show()
} else {
	button_login.show()
}