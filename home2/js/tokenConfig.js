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

// 图片获取
function GetImageUrl(name) {
	var urlData = "null";
	$
			.ajax({
				headers : {
					"Authorization" : localStorage.getItem("Bearer ")
				// 此处放置请求到的用户token
				},
				url : "http://3st8469753.wicp.vip/api/content/getBannerListName?bannerName="
						+ name,
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
					// console.log("success==" + JSON.stringify(res));
					urlData = res;
				},
				error : function() {
					alert("GetImageUrl error!");
				}
			});
	return urlData;
}

/**
 * dynamic_news.html
 */
function GetNews() {
	$
			.ajax({
				headers : {
					"Authorization" : localStorage.getItem("Bearer ")
				// 此处放置请求到的用户token
				},
				url : "http://3st8469753.wicp.vip/api/content/getNews",
				type : 'post',
				contentType : "application/json",
				dataType : 'json',
				cache : false,
				async : false,
				// beforeSend: function (XMLHttpRequest) {
				// XMLHttpRequest.setRequestHeader("Authorization",
				// localStorage.getItem("mytoken"));
				// },
				success : function(res) {
//					console.log("res_" + JSON.stringify(res));
					if (res.code === 200) {
						// localStorage.setItem("news_content", res.data[0]);
						// window.location.href = "dynamic_news_show.html";
						var htmlVal = "";
						for (var i = 0;i < res.data.length;i++) {
							var item = res.data[i];
							htmlVal += '<a href="###">'
									+ '<img src="' + item.thumbnail + '">'
									+ '<span>' + '	<h1>' + item.title + '</h1>'
									+ '	<h2>' + item.content + '</h2>'
									+ '	<h3>' + item.createTime + '</h3>'
									+ '</span></a>';
						}
						jQuery("#issues li").html(htmlVal);
					}
				},
				error : function() {
					alert("GetNewsContent error!");
				}
			});
}