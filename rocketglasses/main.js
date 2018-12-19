function main() {
    
    $('.infocol').on('click', function() {
        $('.infotxt, #overlay').show(); 
        $('.infocol').hide();
        $(this).addClass('activeinfocol');
        $(this).removeClass('infocol');
        $(this).fadeIn(); //button only shows infocol,can't hide
        $('.infocolexit').fadeIn();
    });
    
    $('.infocolexit').click(function() {
        $('.infotxt, #overlay').hide();
        $('.infocol').show();
        $('.activeinfocol').addClass('infocol');
        $('.activeinfocol').removeClass('activeinfocol');
        $('.infocolexit').fadeOut();
    });
    
}

$(document).ready(main);