var Accounts = [ {balance:1300,firstName:"zoulfa",midName:'mohamad',lastName:'Bawab',pass:'123',accountType:'saving',accountNum:1}
,{balance:700,firstName:"abdulhameed",midName:'mohamad',lastName:'abdalla',pass:'456',accountType:'saving',accountNum:2},
{balance:300,firstName:"Ahmed",midName:'lee',lastName:'jim',pass:'123',accountType:'saving',accountNum:3},
{balance:600,firstName:"Marck",midName:'Joe',lastName:'Pen',pass:'123',accountType:'saving',accountNum:4}] ;
var saccountNum=0; 
 var spass='0';

$('body').css( {
  'margin':'0','font-family':'Arial,Helvetica,sans-serif' , 'background' : 'url("bp.jpg")','background-repeat': 'no-repeat', 'background-size': '2000px 1200px'});
$('#sobar').hide();
$('.topnav').css({
  'overflow': 'hidden',
  'background-color': ' #8B0000'
}) 

$('.topnav a').css({
  'float': 'left', 
  'color': '#f2f2f2',
  'text-align': 'center',
  'padding': '14px 16px',
 ' text-decoration': 'none',
 ' font-size': '17px'
})

$('.lang').css({
  'float':'right'
})

    $( '.topnav a' ).hover(
  function() {
    $( this ).addClass( "hover" ).css({
  'background-color': '#ddd', 
  'color': 'black'
          
  });
  }, function() {
    $( this ).removeClass( "hover" ).css({
  'background-color': '#8B0000', 
  'color': 'white'
          
  });
  }
);
 
 $('#rbk').css({
 'font-size' : '150px' , 
 'text-shadow': 'grey',
 'text-align'  : 'center',
 'font-family' : 'Times New Roman',
 'color'  : ' brown'

})
  $('#slogan').css({
 'font-size' : '50px' , 
  'text-shadow': '2px 2px #ff0000',
 'text-align'  : 'center',
 'font-family' : 'Times New Roman',
 'color'  : ' brown'

})

$('#btnsu').css({
    'background-color': '#FFE4C4', 
     'text-shadow': '1px 1px #ff0000',
    'border': 'none',
    'color': 'black',
    'padding': '15px 32px',
    'text-align': 'center',
    'text-decoration': 'none',
    'display': 'inline-block',
    'font-size': '25px'
}) 
// sign in
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
/*$('.topnav a ').active(function(){$(this).css( {
  'background-color': '#4CAF50',
  'color': 'white'
});
}
)*/