// Tạo đường dẫn khi thay đổi Tên sản phẩm
function slug_make()
{
	var name = $("input[name=name]").val();
	var code = $("input[name=code]").val();
	if(code){
		var slug = convertToSlug(name) + "-" + code;
	}else{
		var slug = convertToSlug(name);
	}
	$("input[name=slug]").val(slug);
	$(".seo-container .seo-title").html(name);
	$(".seo-container .seo-url").html(base_url + slug + ".html");
}

// Title change
function title_make()
{
	var title = $("input[name=title]").val();
	if(title == "")
		slug_make();
	else
		$(".seo-container .seo-title").html(title);
}

// Description change
function description_make()
{
	var description = $("textarea[name=description]").val();
	if(description == "")
		description = "Mô tả sản phẩm hoặc trang web được rút gọn từ bài viết thông tin sản phẩm";
	$(".seo-container .seo-description").html(description);
}