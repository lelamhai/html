// Image Upload Control
var preview = document.querySelector('#multiImagePanel');
var numimage = $("#numimage").val();
var ii = parseInt(numimage)+1;
$(document).ready(function() {
	$('#add_image').on('click', function() {
		if($("#multiImagePanel input[type=file]").length < 20) {
			var col = '<div class="img-wrap col-md-3" id=col_' + ii + '></div>';
			var div = '<div class=image_' + ii + ' id=image></div>';
			var label = '<label for=image_' + ii + ' class=label_' + ii + '></label>';
			var image = '<img id="image_preview_' + ii + '" height=130px required>';
			var input = '<input type=file class=hidden name=images[] id="image_' + ii + '" onchange="makeImageArr(event, ' + ii + ')" accept="image/*">';
			var inputTitle = '<input type="text" class="d-block form-control" id="image_name_' + ii + '" placeholder="Tiêu đề" name="names[]">';
			var inputIndex = '<input type="number" class="d-block form-control" id="image_index_' + ii + '"placeholder="Thứ tự" name="indexes[]">';
			var input = '<input type=file class=hidden name=images[] id="image_' + ii + '" onchange="makeImageArr(event, ' + ii + ')" accept="image/*">';

			var span = '<svg id="i-close" onclick="this.parentElement.parentElement.remove();" class="remove button_' + ii + '" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M2 30 L30 2 M30 30 L2 2"></path></svg>';							

			$('#multiImagePanel .row').append(col);
			$('#col_' + ii).append(div);
			$('.image_' + ii).append(label);
			$('.label_' + ii).append(image);
			$('.label_' + ii).append(inputTitle);
			$('.label_' + ii).append(inputIndex);
			$('.image_' + ii).append(input);
			$('.image_' + ii).append(span);

			ii++;

		}else {
			toastr.error("<strong>Lỗi</strong><br/>Bạn chỉ có thể chọn tối đa 20 tấm ảnh.");
		}        	
	});
});
var makeImageArr = function(event, id) {	
	var size = event.target.files[0].size;
	if(size > 1024 * 1024 * 128){
		toastr.error("<strong>Lỗi</strong><br/>Dung lượng ảnh vượt quá kích thước cho phép (128MB).");
		$(event.target).val('');
		$(event.target).parents('.img-wrap').find('img').attr('src', '');
		$(event.target).parents('.img-wrap').find('input[type=hidden]').val('');
		// $(event.target).parents(".img-wrap").remove();
		// $("#add_image").trigger("click");
	}else{
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		reader.onload = function(){
			var output = document.getElementById('image_preview_' + id);
			var old = document.getElementById('photos_old_' + id);
			output.src = reader.result;
			old.value = '';
		};
	}
};