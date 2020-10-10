function removeVersion()
{
	$(event.target).parents("tbody").find(".table-element").attr("disabled", true);
	$(event.target).parents("tbody").hide();
	if($("#versionTable tbody").filter('[style="display: none;"]').length === 100){
		$("#versionTable").hide();
	}
	hideAddVersionButton();
	VersionCount();
}
function addVersion()
{
	$("#versionTable tbody").filter('[style="display: none;"]').first().find(".table-element").attr("disabled", false);
	$("#versionTable tbody").filter('[style="display: none;"]').first().show();
	$("#versionTable").show();
	hideAddVersionButton();
	VersionCount();
}
function hideAddVersionButton()
{
	if($("#versionTable tbody").filter('[style="display: none;"]').length === 0)
		$("#addVersionBtn").hide();
	else
		$("#addVersionBtn").show();
}
function VersionCount()
{
	$("#VersionCount").html(100 - $("#versionTable tbody").filter('[style="display: none;"]').length);
}

function addVersionImage(i)
{
	var control = '<div class="img-wrap col-6 col-md-3 mt-1 mb-2">';
		control +=	'<div class="custom-image-upload image-preview mx-0">';
			control += '<img class="img-preview">';
			control +=	'<label class="custom-label">';
				control+= '<input type="file" name="version_images['+i+'][]" onchange="upload_img_preview(event);" accept="image/*" class="table-element" required>';
			control +=	'</label>';
			control +=	'<svg id="i-close" onclick="removeVersionImage();" class="remove-preview" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">';
				control += '<path d="M2 30 L30 2 M30 30 L2 2"></path>';
			control += '</svg>';
		control += '</div>';
		control +=	'<div>';
		control +=		'<input type="text" class="d-block form-control" name="version_image_names['+i+'][]" placeholder="Tiêu đề" value="">';
		control +=		'<input type="number" class="d-block form-control" name="version_image_indexes['+i+'][]" placeholder="Thứ tự" value="">';
		control += '</div>';
	control += '</div>';
	$(event.target).parents("tbody").find(".selected-images").append(control);
}

function removeVersionImage()
{
	$(event.target).parents(".img-wrap").remove();
}