jQuery(document).ready(function(){
	var images = JSON.parse(localStorage.getItem("images"));
//	console.log(images);
	//替换
	jQuery("link[type='image/x-icon']").attr("href",images[0].imageUrl);
});