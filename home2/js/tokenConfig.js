//function network(url, type) {
//	$.ajax({
//		headers : {
//			"Authorization" : localStorage.getItem("Bearer ")
//		// 此处放置请求到的用户token
//		},
//		url : "http://3st8469753.wicp.vip" + url,
//		type : type,
//		contentType : "application/json",
//		dataType : 'json',
//		cache : false,
//		async : false,
//		// beforeSend: function (XMLHttpRequest) {
//		// XMLHttpRequest.setRequestHeader("Authorization",
//		// localStorage.getItem("mytoken"));
//		// },
//		success : function(res) {
////			console.log("success==" + JSON.stringify(res));
//			localStorage.setItem("images",JSON.stringify(res.data));
//		},
//		error : function() {
//			alert("error!");
//		}
//	});
//}

// 判断是否需要获取新图
//if(localStorage.getItem("imagesVersion") == null){
//	network("/api/content/getBannerList","post");
//}

function GetImageUrl(name) {
	var urlData = "null";
	$.ajax({
		headers : {
			"Authorization" : localStorage.getItem("Bearer")
		// 此处放置请求到的用户token
		},
		url : "http://3st8469753.wicp.vip/api/content/getBannerListName?bannerName=" + name,
		type : 'get',
		contentType : "application/json",
		dataType : 'text',
		cache : false,
		async : false,
		// beforeSend: function (XMLHttpRequest) {
		// XMLHttpRequest.setRequestHeader("Authorization",
		// localStorage.getItem("mytoken"));
		// },
		success : function(res) {
//			console.log("success==" + JSON.stringify(res));
			urlData = res;
		},
		error : function() {
			alert("error!");
		}
	});
	return urlData;
}