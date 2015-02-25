$(document).ready(function() {
	

	$('.add-button').mousedown(function() {
		$("#my-table tr:last").after("<tr>"+
		"<td><input type='checkbox' class='case'/></td>"+
		"<td><input type='text'/></td>"+
		"<td><input type='text'/></td>"+
		"<td><input type='text'/></td>"+
		"<td><input type='text'/></td>"+
		"</tr>");
	});

	$('.delete-button').mousedown(function() {
		$('.case:checkbox:checked').parents("tr").remove();
	});

});

