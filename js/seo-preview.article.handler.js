// Tạo đường dẫn khi thay đổi Tiêu đề hiển thị
function slug_make()
{
	var name = $("input[name=name]").val();
	var slug = convertToSlug(name);
	$("input[name=slug]").val(slug);
	$(".seo-container .seo-title").html(name);
	$(".seo-container .seo-url").html(base_url + "bai-viet/" + slug + ".html");
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
		description = "Trích đoạn từ nội dung bài viết một cách ngắn gọn...";
	$(".seo-container .seo-description").html(description);
}