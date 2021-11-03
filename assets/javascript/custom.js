$(document).ready(function () {
    // Input radio image border coloring
    $(document).on('change', '.wallet-radio__input', function () {
        if ($(this).is(':checked')) {
            $(document).find('.wallet-radio').removeClass('wallet-radio--selected')
            $(this).closest('.wallet-radio').addClass('wallet-radio--selected')
        }
    })

    // Trigger change input radio image
    $(document).find('.wallet-radio__input').trigger('change')

    // Interval background change
    const walletSidebar = $(document).find('.wallet-sidebar')
    let walletSidebarIterator = 1
    setInterval(() => {
        if (walletSidebarIterator >= 5) walletSidebarIterator = 1
        else walletSidebarIterator += 1

        const imageSource = walletSidebar.data(`src-${walletSidebarIterator}`)
        walletSidebar.css('background-image', `url(${imageSource})`)
    }, 60000) // 60 second
})

$('.dropdown-menu').on("click.bs.dropdown", function (e) {
    e.stopPropagation();
});

var dropdownFilter = document.querySelectorAll('#dropdown-filter');

dropdownFilter.forEach((value, index) => {
    $(value).on("show.bs.dropdown", function (e) {
        var dropdown = $(this);
        var input = $(this).find('input');
        var btn = e.relatedTarget;
        var nameDropdown = $(btn).data('name');
        $(input).on('change', function(e) {
            if($(dropdown).find('input:checked').length > 0) {
                $(dropdown).addClass('filtered');
                $(btn).html(`${nameDropdown} <span class="badge badge-success">${$(dropdown).find('input:checked').length}</span>`);
            }else{
                $(dropdown).removeClass('filtered');
                $(btn).html(`${nameDropdown}`);
            }
        })
    });
})

var dropdownSort = document.querySelectorAll('#dropdown-sort');

dropdownSort.forEach((value, index) => {
    $(value).on("show.bs.dropdown", function (e) {
        var dropdown = $(this);
        var input = $(this).find('input');
        var btn = e.relatedTarget;
        var nameDropdown = $(btn).data('name');
        $(input).on('change', function(e) {
            if($(dropdown).find('input:checked').length > 0) {
                $(btn).html(`${$(dropdown).find('input:checked').data('value')}`);
            }else{
                $(btn).html(`${nameDropdown}`);
            }
        })
    });
})

$('#footerCollapse').on('show.bs.collapse', function (e) {
    e.target.scrollIntoView();
    $('#copyrightFooter').addClass('d-none');
    var id = $(e.target).attr('id');
    var button = $(`button[data-target='#${id}']`);
    button.addClass('show');
    button.text('Collapse Footer');
});

$('#footerCollapse').on('hide.bs.collapse', function (e) {
    $('#copyrightFooter').removeClass('d-none');
    var id = $(e.target).attr('id');
    var button = $(`button[data-target='#${id}']`);
    button.removeClass('show');
    button.text('Expand Footer')
});