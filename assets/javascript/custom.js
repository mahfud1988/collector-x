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

    $(document).on('click', '.project-detail__item-header', function () {
        $(this).toggleClass('show')
    })

    // Project tab
    $(document).on('click', '#pills-list-tab, #pills-grid-tab', function () {
        const type = $(this).data('type')
        const value = type == 'list' ? 'pills-project-list-' : 'pills-project-grid-'
        if (type) {
            $(document).find('.project-side-content__item').map((i, el) => {
                const target = $(el).data('project-target')
                $(el).attr({
                    'href': `#${value + target}`,
                    'aria-controls': value + target
                })
            })

            const target = $(document).find('.project-side-content__item.active').data('project-target')
            if (target) {
                $(document).find('.project-main-content__table > .tab-content > .tab-pane, .project-main-content__grid > .tab-content > .tab-pane').removeClass('show active')
                $(document).find(`#pills-project-list-${target}, #pills-project-grid-${target}`).addClass('show active')
            }
        }
    })

    $(document).on('click', '.project-side-content__item', function () {
        if ($(window).width() < 992) {
            document.location.href = 'portfolio-project-selected.html'
        }
    })
})

$('.dropdown-menu .dropdown-item').on("click.bs.dropdown", function (e) {
    var children = $(this).find('input');
    if(children.length != 0){
        e.stopPropagation();
    }
});

var dropdownFilter = document.querySelectorAll('#dropdown-filter');

dropdownFilter.forEach((value, index) => {
    $(value).on("show.bs.dropdown", function (e) {
        var dropdown = $(this);
        var input = $(this).find('input');
        var btn = e.relatedTarget;
        var nameDropdown = $(btn).data('name');
        var spanText = $(btn).find('span.text')
        $(input).on('change', function (e) {
            if ($(dropdown).find('input:checked').length > 0) {
                $(dropdown).addClass('filtered');
                $(btn).html(`${nameDropdown} <span class="badge badge-success">${$(dropdown).find('input:checked').length}</span>`);
            } else {
                $(dropdown).removeClass('filtered');
                $(btn).html(`${nameDropdown}`);
            }
        })
    });
})

var dropdownSort = document.querySelectorAll('#dropdown-sort, #chart-filter, #project-filter');

dropdownSort.forEach((value, index) => {
    $(value).on("show.bs.dropdown", function (e) {
        var dropdown = $(this);
        var input = $(this).find('input');
        var btn = e.relatedTarget;
        var nameDropdown = $(btn).data('name');
        var img = $(btn).find('img');
        var spanText = $(btn).find('span.text')
        $(input).on('change', function (e) {
            if ($(dropdown).find('input:checked').length > 0) {
                $(spanText).text($(dropdown).find('input:checked').data('value'));
            } else {
                $(spanText).text(nameDropdown);
            }
        })
    });
})

$('#footerCollapse').on('shown.bs.collapse', function (e) {
    $('#copyrightFooter').addClass('d-none');
    $('html, body').animate({
        scrollTop: $("#footerCollapse").offset().top
    });
    var id = $(e.target).attr('id');
    var button = $(`button[data-target='#${id}']`);
    button.addClass('show');
    button.html('<span>Collapse Footer</span>');
});

$('#footerCollapse').on('hide.bs.collapse', function (e) {
    $('#copyrightFooter').removeClass('d-none');
    var id = $(e.target).attr('id');
    var button = $(`button[data-target='#${id}']`);
    button.removeClass('show');
    button.html('<span>Expand Footer</span>');
});

$('.js-navbar__humberger').on('click', function () {
    $('.js-container-navbar').addClass('show');
    $('.js-navbar__menu-box').addClass('show');
    // $('.js-navbar__shadow').addClass('show');
    $('.js-space').hide();
});

$('.js-nav-link__close').on('click', function () {
    $('.js-container-navbar').removeClass('show');
    $('.js-navbar__menu-box').removeClass('show');
    $('.js-navbar__shadow').removeClass('show');
    $('.js-space').show();
});
/*
$('.js-navbar__close').on('click', function(){
    $('.js-container-navbar').removeClass('show');
    $('.js-navbar__menu-box').removeClass('show');
    $('.js-navbar__shadow').removeClass('show');
    $('.js-space').show();
});
*/

$(window).resize(function (e) {
    var heightNav = $('.container-navbar').outerHeight();
    $('.space').height(heightNav);
})

$(document).ready(function (e) {
    if ($(window).width() < 992) {
        var elem = $(`#descReadMore`);
        var childElem = $(elem).find('p');
        var sizeElem = $(childElem).length;
        var button = $(elem).find('button');
        $(childElem).hide();
        var perLoad = 3;
        var x;
        $(`#descReadMore p:lt(${perLoad})`).show();
        $(button).click(function () {
            if (!$(elem).hasClass('show')) {
                $(button).text('Read Less');
                $(`#descReadMore p:lt(${sizeElem})`).show();
                $(elem).addClass('show');
            } else {
                $(button).text('Read More');
                $(`#descReadMore p`).not(`:lt(${perLoad})`).hide();
                $(elem).removeClass('show');
            }
        })
    }
    if ($(window).width() < 845) {
        $('table.section-upcoming__table td:nth-child(1)').click(function (e) {
            $(this).toggleClass('selected');
            var parentTd = $(this).parent();
            var firstTd = $(this);
            var dataTitle = $(firstTd).data('title-table');
            var sibling = $(this).siblings();
            var siblingPos = $(this).siblings().position();
            if ($(firstTd).hasClass('selected')) {
                $(firstTd).after(`<td class="align-middle">${dataTitle}</td>`);
            } else {
                $(firstTd).next().remove();
            }
        })
    }
});
