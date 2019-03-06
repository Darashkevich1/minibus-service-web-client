var fetch_current_user = function(userId, success_func) {
	$.ajax({
		method: "GET",
		url: "http://busappmini.azurewebsites.net/user/"+userId,
		success: success_func
	})
}

var logout = function(token, success_func) {
	$.ajax({
		method: "POST",
		url: "http://busappmini.azurewebsites.net/user/logout",
		data: {token: token},
		success: success_func
	})
}

var upload_ava = function(file, success_func) {
	var dataForm = new FormData()
	dataForm.append("file", file)
	dataForm.append("accessToken", $.cookie("accessToken"))
	$.ajax({
		method: "POST",
		processData: false,
    	contentType: false,
    	cache: false, 
		url: "http://busappmini.azurewebsites.net/file/upload",
		data: dataForm,
		success: success_func
	})
}