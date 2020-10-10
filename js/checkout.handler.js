function get_transportations()
{
	var target = $(event.target);
	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	});
	$.ajax({
		url : base_url + '/mua-hang/transportations',
		data : {
			id: target.val(),
		},
		type : 'POST',
		success : function (data) {
			$("#transportationContainer").html(data.transportation);
			$("#btnSubmit").attr("disabled", false);
			$(".cart-total").html(data.total);
			$(".transport-price").html(data.price);
		},
		error: function (xhr, ajaxOptions, thrownError) {
			$("#transportationContainer").html(xhr.responseText);
			$("#btnSubmit").attr("disabled", true);
		}
	});
}

function update_prices()
{
	var id = $("input[name=transportation]:checked").val();
	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	});
	$.ajax({
		url : base_url + '/mua-hang/update-prices',
		data : {
			id: id,
		},
		type : 'POST',
		success : function (data) {
			$(".cart-total").html(data.total);
			$(".transport-price").html(data.price);
		},
		error: function (xhr, ajaxOptions, thrownError) {
			swal('Lỗi!', xhr.responseText, 'error');
		}
	});
}