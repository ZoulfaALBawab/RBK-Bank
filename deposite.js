$("#btnPush").click(function() {
	var sum=Number($('#htmlD').val())*10+Number($('#cssD').val())*10+Number($('#jqueryD').val())*10+Number($('#githubD').val())*10+Number($('#ProjectsN').val())*10;
	for (var i = 0; i < Accounts.length; i++) {
		if(Accounts[i].accountNum === saccountNum){
			Accounts[i].balance+=sum
			window.open('index.html')
		}
	}
			window.open('index.html')
	
})