$('body').css( {
  'margin':'0','font-family':'Arial,Helvetica,sans-serif' , 'background' : 'url("bg.jpg")' });

$('.topnav').css({
  'overflow': 'hidden',
  'background-color': ' #8B0000'
}) 
/*$(".topnav").text3d({
  'depth': '6',
  'angle': '135',
  'color': "#aaa",
  'lighten': '-0.1',
  'shadowDepth': '30',
  'shadowAngle': '45',
  'shadowOpacity': '0.2'
});
*/
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
 

/*$('.topnav a ').active(function(){$(this).css( {
  'background-color': '#4CAF50',
  'color': 'white'
});
}
)*/