function trashItem(event, id, url){
	swal({
		title: 'Bạn có chắc',
		text: "Chuyển mục này vào thùng rác?",
		type: 'question',
		showCancelButton: true,
		confirmButtonColor: '#d33',
		cancelButtonColor: '#3085d6',
		confirmButtonText: 'Thực hiện',
		cancelButtonText: 'Bỏ qua'
	}).then(function(isConfirm) {
		if (isConfirm.value) {
			$.ajaxSetup({
				headers: {
					'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
				}
			});
			$.ajax({
				url : url,
				data : {
					id : id
				},
				type : 'POST',
				success : function (data) {
					$("#dataTable").DataTable().row($(event.target).parents("tr")).remove().draw();
					toastr[data.alert]("<b>" + data.title + "</b><br/>" + data.msg);
				},
				error: function (xhr, ajaxOptions, thrownError) {
					toastr.error(xhr.responseText);
				}
			});
		}
	})
}

function restoreItem(event, id, url){
	swal({
		title: 'Bạn có chắc',
		text: "Thực hiện thao tác khôi phục mục này?",
		type: 'question',
		showCancelButton: true,
		confirmButtonColor: '#d33',
		cancelButtonColor: '#3085d6',
		confirmButtonText: 'Thực hiện',
		cancelButtonText: 'Bỏ qua'
	}).then(function(isConfirm) {
		if (isConfirm.value) {
			$.ajaxSetup({
				headers: {
					'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
				}
			});
			$.ajax({
				url : url,
				data : {
					id : id
				},
				type : 'POST',
				success : function (data) {
					$("#dataTable").DataTable().row($(event.target).parents("tr")).remove().draw();
					toastr[data.alert]("<b>" + data.title + "</b><br/>" + data.msg);
				},
				error: function (xhr, ajaxOptions, thrownError) {
					toastr.error(xhr.responseText);
				}
			});
		}
	})
}

function destroyItem(event, url){
	swal({
		title: 'Bạn có chắc',
		text: "Thực hiện thao tác xóa mục này?",
		type: 'question',
		showCancelButton: true,
		confirmButtonColor: '#d33',
		cancelButtonColor: '#3085d6',
		confirmButtonText: 'Xóa',
		cancelButtonText: 'Bỏ qua'
	}).then(function(isConfirm) {
		if (isConfirm.value) {
			$.ajaxSetup({
				headers: {
					'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
				}
			});
			$.ajax({
				url : url,
				type : 'DELETE',
				success : function (data) {
					toastr[data.alert]("<b>" + data.title + "</b><br/>" + data.msg);
					$("#dataTable").DataTable().row($(event.target).parents("tr")).remove().draw();
					$(event.target).parents("tr").remove();
				},
				error: function (xhr, ajaxOptions, thrownError) {
					toastr.error(xhr.responseText);
				}
			});
		}
	})
}

function disableItem(event, id, url){
	swal({
		title: 'Bạn có chắc',
		text: "Thực hiện thao tác vô hiệu hóa người dùng này?",
		type: 'question',
		showCancelButton: true,
		confirmButtonColor: '#d33',
		cancelButtonColor: '#3085d6',
		confirmButtonText: 'Vô hiệu hóa',
		cancelButtonText: 'Bỏ qua'
	}).then(function(isConfirm) {
		if (isConfirm.value) {
			$.ajaxSetup({
				headers: {
					'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
				}
			});
			$.ajax({
				url : url,
				data : {
					id : id
				},
				type : 'POST',
				success : function (data) {
					toastr[data.alert]("<b>" + data.title + "</b><br/>" + data.msg);
				},
				error: function (xhr, ajaxOptions, thrownError) {
					toastr.error(xhr.responseText);
				}
			});
		}
	})
}

function activateItem(event, id, url){
	swal({
		title: 'Bạn có chắc',
		text: "Thực hiện thao tác mở khóa người dùng này?",
		type: 'question',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Mở khóa',
		cancelButtonText: 'Bỏ qua'
	}).then(function(isConfirm) {
		if (isConfirm.value) {
			$.ajaxSetup({
				headers: {
					'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
				}
			});
			$.ajax({
				url : url,
				data : {
					id : id
				},
				type : 'POST',
				success : function (data) {
					toastr[data.alert]("<b>" + data.title + "</b><br/>" + data.msg);
				},
				error: function (xhr, ajaxOptions, thrownError) {
					toastr.error(xhr.responseText);
				}
			});
		}
	})
}

function updatePosition(event, id, url){
	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	});
	$.ajax({
		url : url,
		data : {
			id : id,
			position : $(event.target).val()
		},
		type : 'POST',
		success : function (data) {
			location.reload();
		},
		error: function (xhr, ajaxOptions, thrownError) {
			toastr.error(xhr.responseText);
		}
	});
}