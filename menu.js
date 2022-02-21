var contador = 1;

$(document).ready(function() {
    $('#btn-menu').on('click', function() {

        if (contador == 1) {
            $('.menu-rp').css('width', '100%');
            $('.menu-rp').css('height', '100%');
            //$('.menu-rp').css('display', 'block');
            $('.menu-rp').css('overflow', 'visible');
            contador = 0;
        } else {
            $('.menu-rp').css('width', '0%');
            $('.menu-rp').css('height', '0%');
            //$('.menu-rp').css('display', 'none');
            $('.menu-rp').css('overflow', 'hidden');
            contador = 1;
        }
    });
});