import $ from 'jquery';

export function domManipulation() {
    if ($('.empty-div').length === 0) {
        $('<div class="empty-div"></div>').appendTo(document.body);
    }
}

export function bindEvents() {
    $(document.body).on('click', '.empty-div', function () {
        $(this).remove();
    });
}