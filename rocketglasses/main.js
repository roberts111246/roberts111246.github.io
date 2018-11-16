function main() {
    $('.infocol').on('click', function() {
        $(this).text('hi');
    });
}

$(document).ready(main);