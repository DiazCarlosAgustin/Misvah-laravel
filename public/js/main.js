$(document).ready(function(){
    $('meta[content]').hide();
    //mostrar o no el contenedor de buscar
    $('#i-lg-carrito').click(function(){
        $('.cart').toggleClass('cart-active');
    });

    //mostrar o no la barra de busqueda el menu
    $('#i-buscar').click(function(){
        $('.d-buscar').toggleClass('d-buscar-active')
        if($('#i-buscar').text() === 'search'){
            $('#i-buscar').text('close');
        }
        else{
            $('#i-buscar').text('search');
        }
    });
    $('#i-xs-buscar').click(function(){
        $('.d-buscar').toggleClass('d-buscar-active')
        if($('#i-xs-buscar').text() === 'search'){
            $('#i-xs-buscar').text('close');
        }
        else{
            $('#i-xs-buscar').text('search');
        }
    });
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $('.d-buscar').css('top','54px');
        }
        else{
            $('.d-buscar').css('top','57px');
        }
    });
});