$('body').css( {
  'margin':'0','font-family':'Arial,Helvetica,sans-serif' , 'background' : 'url("bg.jpg")' });
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
 'text-shadow': '8px 8px #ff0000',
 'text-align'  : 'center',
 'font-family' : 'Times New Roman',
 'color'  : ' #D2691E'

})
  $('#slogan').css({
 'font-size' : '50px' , 
  'text-shadow': '2px 2px #ff0000',
 'text-align'  : 'center',
 'font-family' : 'Times New Roman',
 'color'  : ' #D2691E'

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

/*$('.topnav a ').active(function(){$(this).css( {
  'background-color': '#4CAF50',
  'color': 'white'
});
}
)*/