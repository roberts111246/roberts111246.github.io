function main() {
    $('.infocol').on('click', function() {
        $('.infocol, .infotxt, #overlay').toggle(); 
        $(this).toggleClass('activeinfocol');
        $(this).toggleClass('infocol');
        $(this).show(); 
    });
}

$(document).ready(main);