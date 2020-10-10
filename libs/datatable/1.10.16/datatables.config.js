// Datatable Translate
$(document).ready(function () {
	var sort_asc = $("table th").hasClass("sort-asc");;
	var sort_desc = $("table th").hasClass("sort-desc");
	var dtTable = $("#dataTable").DataTable({
		"lengthMenu": [[10, 25, 50, 100, 250, 500, -1], [10, 25, 50, 100, 250, 500, "Tất cả"]],
		"displayLength": 25,
		"language": {
			"lengthMenu": "Hiển thị _MENU_ kết quả mỗi trang",
			"zeroRecords": "Xin lỗi, không có kết quả nào để hiển thị.",
			"info": "Trang _PAGE_ trên tổng số _PAGES_ trang",
			"infoEmpty": "Không có dữ liệu để hiển thị",
			"infoFiltered": "(Đã lọc từ tổng số _MAX_ records)",
			"search":         "Tìm kiếm:",
			"paginate": {
				"first":      "Đầu",
				"last":       "Cuối",
				"next":       "Sau",
				"previous":   "Trước"
			},
		},
		"order": [
			// [sort_asc ? $("th.sort-asc").index() : (sort_desc ? $("th.sort-desc").index() : 0), sort_asc ? "asc" : "desc"],
			// [1, "desc"],
		],
		dom: "Bfrtip",
		buttons: [
			{extend: "print", text: "In"},
			{extend: "excel", text: "Xuất tập tin Excel"},
			{extend: "pageLength"},
        ],
        columnDefs: [
          { targets: 'no-sort', orderable: false },
          { targets: 'no-export', visible: false }

        ]
	});
});

// Check all table checkbox
$(document).ready(function() {
	$(".check-all").on("change", function() {
		if($(this).prop('checked') == true) {
			$(".table input[type=checkbox]").prop("checked", true);
		} else {
			$(".table input[type=checkbox]").prop("checked", false);
		}
	});
	$("#dataTable").find(".no-sort").removeClass("sorting_desc");
});
