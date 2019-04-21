$(document).ready(function () {
    if($( window ).width() > 960){
        $('.navbar').addClass('active');
        $('#sidebar').addClass('active');
    }
   $('#close-menu').click(function(){
       $('#sidebar').toggleClass('show');
   }); 
   $('.navbar-toggler').click(function(){
        if($( window ).width() > 960){
            $('#sidebar').toggleClass('d-lg-block');
            $('#sidebar').toggleClass('active');
            $('#sidebar').toggleClass('desactive');
            $('#sidebar').toggleClass('show');
            $('.navbar').toggleClass('active');
        }
   })
});