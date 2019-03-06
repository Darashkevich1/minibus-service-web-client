var current_user = null

var update_user_info = function(firstname, lastname, phone, address, accessToken, success_func) {
	$.ajax({
		method: "POST",
		url: "https://busappmini.azurewebsites.net/user/update",
		data: {firstname: firstname, lastname: lastname, phone: phone, address: address, accessToken: accessToken},
		success: success_func
	})
}

var delete_user = function(id, accessToken, success_func) {
	$.ajax({
		method: "POST",
		url: "https://busappmini.azurewebsites.net/user/delete",
		data: {id: id, accessToken: accessToken},
		success: success_func
	})
}

var fetch_current_user = function(success_func) {
	$.ajax({
		method: "GET",
		url: "https://busappmini.azurewebsites.net/user/"+$.cookie("userId"),
		success: success_func
	})
}