var button_login = $("#button_login")
var button_profile = $("#button_profile")
var weather_info = $("#weather_info")

if($.cookie("userId") != "null" && $.cookie("userId") != undefined) {
	button_profile.show()
} else {
	button_login.show()
}

$.ajax({
	url: "http://api.apixu.com/v1/current.json?key=319c202de86c434983c112021190503&q=Minsk",
	success: function(data) {
		weather_info.text("Город: " + data.location.name + ", температура: " + data.current.temp_c + " C, скорость ветра: " + data.current.wind_mph + " миль/ч")
	}
})