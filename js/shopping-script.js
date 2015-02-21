$(document).ready(function() {
	

	$('.add-button').mousedown(function() {
		/*$("#my-table tbody").app();*/
		/*alert('Hello There');*/
		$("#my-table tr:last").after("<tr>"+
		"<td><input type='text'/></td>"+
		"<td><input type='text'/></td>"+
		"<td><input type='text'/></td>"+
		"<td><input type='text'/></td>"+
		"<td><input type='text'/></td>"+
		"</tr>");
	});
});

