$('.dropdown-menu').on("click.bs.dropdown", function (e) {
    e.stopPropagation();
});

$('#footerCollapse').on('show.bs.collapse', function (e) {
    $('#copyrightFooter').addClass('d-none');
    var id = $(e.target).attr('id');
    var button = $(`button[data-target='#${id}']`);
    button.addClass('show');
    button.text('Collapse Footer')
});

$('#footerCollapse').on('hide.bs.collapse', function (e) {
    $('#copyrightFooter').removeClass('d-none');
    var id = $(e.target).attr('id');
    var button = $(`button[data-target='#${id}']`);
    button.removeClass('show');
    button.text('Expand Footer')
});