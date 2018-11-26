function main() {
    $('.infocol').on('click', function() {
        $('.infocol, .infotxt, #overlay').toggle(); 
        $(this).toggleClass('activeinfocol');
        $(this).show(); 
    });
}

$(document).ready(main);