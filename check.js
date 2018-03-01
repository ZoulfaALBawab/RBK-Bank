$('.chv').css({
	'align':'center',
	'font-family':'Times New Roman' ,
	'color':'brown',
	 'font-weight': 'bold'
})
$('#gd').hide();
$('#av').hide();
$('#fi').hide();
$('#chv1').hide();
$('#chv2').hide();
$('#chv3').hide();
  $('#btnCheck').click(function() {
  	var accnum=Number($('#checkNum').val())
  	for (var i = 0; i < Arrays.length; i++) {
  		if(Arrays[i].accountNum === accnum){
  			if (Arrays[i].balance<500) {
  				$('#fi').show();
  				$('#chv3').show();
  				return;
  			}
  			else if(Arrays[i].balance>=500 && Arrays[i].balance<=1000){
					$('#av').show();
					$('#chv2').show();
					return;

  			}
  			else{
					$('#chv1').show();
					$('#gd').show();
					return;
  			}
  		}
  	}
  	return;
  })
