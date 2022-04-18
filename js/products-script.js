$(function loadbtn() {
    $(".box-hidden").slice(0, 2).css('display', 'flex');
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".box-hidden:hidden").slice(0, 1).slideDown('fast','linear').css('display','flex');
        if ($(".box-hidden:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
});