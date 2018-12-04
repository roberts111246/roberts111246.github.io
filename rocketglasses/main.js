function main() {
    
    $('.infocol').on('click', function() {
        $('.infotxt, #overlay').show(); 
        $('.infocol').hide();
        $(this).addClass('activeinfocol');
        $(this).removeClass('infocol');
        $(this).show(); //only shows infocol, can't do anything else
        $('.infocolexit').show();
    });
    
    $('.infocolexit').click(function() {
        $('.infotxt, #overlay').hide();
        $('.infocol').show();
        $('.activeinfocol').addClass('infocol');
        $('.activeinfocol').removeClass('activeinfocol');
        $('.infocolexit').hide();
    });
    
}

$(document).ready(main);