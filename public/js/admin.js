$(document).ready(function () {
    $('.fa-bell').click(function(){
        $('.content').toggleClass('d-none');
    });
    $('#close-noti').click(function(){
        $('.content').addClass('d-none');
    });
});