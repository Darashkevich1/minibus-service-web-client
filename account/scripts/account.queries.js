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

var upload_ava = function(file, success_func) {
	var dataForm = new FormData()
	dataForm.append("file", file)
	dataForm.append("accessToken", $.cookie("accessToken"))
	$.ajax({
		method: "POST",
		processData: false,
    	contentType: false,
    	cache: false, 
		url: "http://localhost:8080/file/upload",
		data: dataForm,
		success: success_func
	})
}