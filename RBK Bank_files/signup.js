
 
 var count=accountNum();
 var makeAccount = function (firstName,midName,lastName,pass,accountType,Num)
 {  var instance={};
 	 instance.balance =0 ,
 	 instance.firstName = firstName,
 	 instance.midName = midName,
 	 instance.lastName = lastName,
 	 instance.pass = pass,
 	 instance.accountType = accountType,
 	 instance.accountNum = Num
 	 return instance;
 
}

 function accountNum(){
 var  counter=100;

    return function (){
        ++counter;
        return counter;
    }
}
$('#an').val(count)
 
$('#btnsub').click(function(){
	var fn=$('#fn').val();
	var mn=$('#mn').val();
	var ln=$('#ln').val();
	var pss=$('#pss').val();
	var at=$('#at').val();
	var an=$('#an').val();
	console.log(fn,mn,ln,pss,at,an)
	var account=makeAccount(fn,mn,ln,pss,at,an);
	Accounts.push(account);
	$('#an').val(count)
})