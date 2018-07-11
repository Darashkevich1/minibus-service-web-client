var alert_update = $("#alert_update")

var set_success_type = function() {
	alert_update.removeClass("alert-danger")
	alert_update.addClass("alert-success")
}

var set_danger_type = function() {
	alert_update.removeClass("alert-success")
	alert_update.addClass("alert-danger")
}

var show_alert_message = function(message) {
	alert_update.slideDown(100)
	alert_update.html(message)
	setTimeout(function() {
		alert_update.slideUp(100)
	}, 3000)
}