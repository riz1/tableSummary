/*
example use:

$('#tableID').tableSummary(1,3,4); // pass col number

*/
(function($){
  $.fn.tableSummary = function(){ 
  	
  		$(this).append('<tfoot> '+ $(this).find('tbody tr:last').html() +' </tfoot>');
		$(this).find('tfoot tr td').html('');
		$(this).find('tfoot tr td:first').html('Summary');

  		for(var i = 0; i < arguments.length; i++)
		{
			 var total = 0;
			  $(this).find('tbody tr')
				  .children("td:nth-child(" + arguments[i] + ")")
				  .each(function(idx,td) {
				  	var n = parseFloat($(td).text());
				    total += isNaN(n)? 0: n;
			  });

		    $(this).find('tfoot tr td:nth-child('+arguments[i]+')').html(total);
		}
  };

})(jQuery);

