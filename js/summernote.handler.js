function uploadFile(file, editor, welEditable) {
	data = new FormData();
	data.append("files", file);
	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	});
	$.ajax({
		url: base_url + "ajax/summernote/file-upload",
		data: data,
		cache: false,
		contentType: false,
		processData: false,
		type: "POST",
		success: function(data){
			$('#content').summernote('editor.insertImage', data);
		},
		error: function(){
			toastr.error("<strong>Lỗi!</strong><br/>Dung lượng file vượt quá kích thước cho phép (2MB)");
		}
	});
}
function deleteFile(src) {
	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	});
	$.ajax({
		data: {
			file: src
		},
		type: "POST",
		url: base_url + "ajax/summernote/file-delete",
		cache: false,
		success: function(data) {
			console.log(data);
		}
	});
}