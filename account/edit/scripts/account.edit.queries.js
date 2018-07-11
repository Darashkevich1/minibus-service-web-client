var current_user = null

var update_user_info = function(firstname, lastname, phone, address, accessToken, success_func) {
	$.ajax({
		method: "POST",
		url: "http://localhost:8080/user/update",
		data: {firstname: firstname, lastname: lastname, phone: phone, address: address, accessToken: accessToken},
		success: success_func
	})
}

var delete_user = function(id, accessToken, success_func) {
	$.ajax({
		method: "POST",
		url: "http://localhost:8080/user/delete",
		data: {id: id, accessToken: accessToken},
		success: success_func
	})
}

var fetch_current_user = function(success_func) {
	$.ajax({
		method: "GET",
		url: "http://localhost:8080/user/"+$.cookie("userId"),
		success: success_func
	})
}