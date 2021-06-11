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
//每页数量、返回数据总数、应建页数、当前页
const pageSize = 2;
var valLength = 0;
var pages = 0;
var thisPage = 1;

// 页数内容：开始部分、中间、结尾
var pageHtmlStart = "";
var pageHtmlBody = "";
var pageHtmlEnd = "";

// 新闻内容
var newsHtml = "";

// 返回的数据
var NewsDatas = null;

function GetNews() {
	// 接收数据
	NewsDatas = GetNewsJson();
	
	// 返回数据总数、应建页数
	valLength = NewsDatas.length;
//	pages = valLength % pageSize != 0 ? Math.ceil(valLength / pageSize) : valLength / pageSize;
	pages = Math.ceil(valLength / pageSize)
	
	// 创建页数内容
	pageHtmlStart = "<li onclick='LoadNews(1)'>首页</li>" +
			"<li onclick='LoadUpNews()'>上一页</li>";
	pageHtmlBody = "";
	pageHtmlEnd = "<li onclick='LoadDownNews()'>下一页</li>" +
			"<li onclick='LoadNews(" + pages + ")'>末页</li>";
	
	for(var i = 1;i <= pages;i++){
		pageHtmlBody += "<li data-index='" + i + "' onclick='LoadNews(" + i + ")'>" + i + "</li>";
	}
	
	jQuery("#page_content").html(pageHtmlStart + pageHtmlBody + pageHtmlEnd);
	
	// 载入新闻
	LoadNews(thisPage);
}

function GetNewsJson() {
	var rtnData = "null";
	$.ajax({
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
			if (res.code === 200) {
				// 返回数据
				rtnData = res.data;
			}
		},
		error : function() {
			rtnData = "error";
		}
	});
	return rtnData;
}

function LoadNews(newsPage){
	// 记录页
	thisPage = newsPage;
	
	// 加入内容
	newsHtml = "";
	
	// 载入下标、终止位置
	var newsIndex = pageSize == 1 ? thisPage - 1 : newsPage - 1 < 0 ? 0 : (newsPage - 1) * pageSize < 0 ? 0 : (newsPage - 1) * pageSize;
	var newsEndIndex = newsIndex + pageSize > valLength ? valLength : newsIndex + pageSize;
	
	for (var i = newsIndex;i < newsEndIndex;i++) {
		var item = NewsDatas[i];
		newsHtml += '<a href="###" onclick="OpenNewsPage(' + i + ')">' + '<img src="' + item.thumbnail
				+ '">' + '<span>' + '	<h1>' + item.title + '</h1>'
				+ '	<h3>' + item.createTime + '</h3>' + '</span></a>';
	}
	jQuery("#issues li").html(newsHtml);
	
	// 修改样式
	jQuery("#page_content li[class='cur']").removeClass("cur");
	jQuery("#page_content li[data-index='" + thisPage + "']").addClass("cur");
}

function LoadUpNews(){
	LoadNews(thisPage - 1 == 0 ? pages : thisPage - 1);
}

function LoadDownNews(){
	LoadNews(thisPage + 1 > pages ? 1 : thisPage + 1);
}

function OpenNewsPage(index){
	console.log(index);
	localStorage.setItem("OpenNewsIndex", index);
	window.open("dynamic_news_show.html","_blank");
}


function GetNotice() {
	$.ajax({
		headers : {
			"Authorization" : localStorage.getItem("Bearer ")
		// 此处放置请求到的用户token
		},
		url : "http://p38r469753.eicp.vip/api/message/queryNewMessage?page=0&size=10&sort=id,desc",
		type : 'get',
		contentType : "application/json",
		dataType : 'json',
		cache : false,
		async : false,
		// beforeSend: function (XMLHttpRequest) {
		// XMLHttpRequest.setRequestHeader("Authorization",
		// localStorage.getItem("mytoken"));
		// },
		success : function(res) {

			if (res.code === 200) {
				var datas = res.data.content;
				var htmlVal = '';
				for(var i = 0;i < datas.length;i++){
					htmlVal += "<li><a href='###'>" +
							"<img src='" + datas[i].imageUrl + "'></a>" +
							"<span class='cover'></span><div class='info'>" +
							"<a href='###'>" + datas[i].title
							"</a></div></li>";
				}
				
				jQuery("#panle").html(htmlVal);
			}
		},
		error : function() {
			alert("GetNotice error!");
		}
	});
}