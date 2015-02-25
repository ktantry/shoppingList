$(document).ready(function() {
	

	$('.add-button').mousedown(function() {
		$("#my-table tr:last").after("<tr>"+
		"<td class='checkbox'><input type='checkbox' class='case'/></td>"+
		"<td><input type='text'/></td>"+
		"<td class='price'><input type='value'/></td>"+
		"<td class='quantity'><input type='value'/></td>"+
		"<td class='total'><input type='value'/></td>"+
		"</tr>");
	});

	$('.delete-button').mousedown(function() {
		$('.case:checkbox:checked').parents("tr").remove();
	});


	$("#my-table").on("keyup","input",function() {
		rowTotal($(this));
		console.log($(this));
	})


	function rowTotal(el) {
		var thisRow = el.closest('tr');
		var price = +thisRow.find('td.price input').val()*100;
		var quantity = +thisRow.find('td.quantity input').val();
		var total = price * quantity;
		total = Math.round(total)/100;

			thisRow.find('td.total input').val(total);

		}


});

