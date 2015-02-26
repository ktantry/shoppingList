$(document).ready(function() {

	$('.shopping-cart').load(function() {
		$("#my-table").after("<ul class='footer-total'>"+
		"<li class='sub-total'>Subtotal:<input type='value'></li>"+
		"<li class='tax'>Tax:<input type='value'></li>"+
		"<li class='dollars-total'>Total:<input type='value'></li>"+
		"</ul>");
	});


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
		calculateSum($(this));
	})


	function rowTotal(el) {
		var thisRow = el.closest('tr');
		var price = +thisRow.find('td.price input').val()*100;
		var quantity = +thisRow.find('td.quantity input').val();
		var total = price * quantity;
		total = Math.round(total)/100;
		thisRow.find('td.total input').val(total);

	}

	function calculateSum(element) {

        var subTotal = 0;
        var thisList = $('.footer-total');
        $('tr .total input').each(function() {
        var value = $(this).val();
        // add only if the value is number
        if(!isNaN(value) && value.length != 0) {
            subTotal += parseFloat(value);
        }
    });

        var tax = subTotal * 0.0825 * 100;
        tax = Math.round(tax)/100;
        var finalTotal = subTotal + tax;
        console.log(subTotal);
        console.log(tax);
        console.log(finalTotal);
        thisList.find('li.sub-total input').val(subTotal);
        thisList.find('li.tax input').val(tax);
        thisList.find('li.dollars-total input').val(finalTotal);
	}
});

