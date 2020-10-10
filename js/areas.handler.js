/**
 * Danh sách quận huyện theo tỉnh thành
 */
function get_districts(event){
	var control = $(event.target);
	var province_id = control.val();
	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	});
	$.ajax({
		url : base_url + '/ajax/get-districts',
		data : {
			'province_id' : province_id,
		},
		type : 'POST',
		success : function (data) {
			control.parents("form").find('select[name=district]').html(data);
		},
		error: function (xhr, ajaxOptions, thrownError) {
			console.log(thrownError);
		}
	});
};

/**
 * Danh sách Phường xã theo Quận huyện
 */
function get_wards(event){
	var control = $(event.target);
	var district_id = control.val();
	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	});
	$.ajax({
		url : base_url + '/ajax/get-wards',
		data : {
			'district_id' : district_id,
		},
		type : 'POST',
		success : function (data) {
			control.parents("form").find('select[name=ward]').html(data);
		},
		error: function (xhr, ajaxOptions, thrownError) {
			console.log(thrownError);
		}
	});
};