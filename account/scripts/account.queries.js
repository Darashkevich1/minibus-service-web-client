var fetch_current_user = function(userId, success_func) {
	$.ajax({
		method: "GET",
		url: "http://localhost:8080/user/"+userId,
		success: success_func
	})
}

var logout = function(token, success_func) {
	$.ajax({
		method: "POST",
		url: "http://localhost:8080/user/logout",
		data: {token: token},
		success: success_func
	})
}