 
 

 $('#btnSn').click(function () {
 	saccountNum = Number($('#cn').val());
 	spass = $('#ps').val();

 	for (var i = 0; i < Accounts.length; i++) {
 		if(Accounts[i].accountNum === saccountNum && Accounts[i].pass === spass){
 				window.open('operaitions.html')
 				return;
 		}
 	}
 	alert("account number or password not correct")
 	return
 

 })
