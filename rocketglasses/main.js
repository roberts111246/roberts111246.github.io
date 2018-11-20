function main() {
    $('.infocol').on('click', function() {
        $(this).toggleClass('activeinfocol');
        $('.infocol:not(.activeinfocol)').toggle(); //messier line of code; essentially affects every infocol that isn't the clicked one
        $('#productimg').toggle();
        $(this).show(); 
    });
}

$(document).ready(main);