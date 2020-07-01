function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


function makeWidth(mas) {
    var el = mas.$el.querySelectorAll('li'),
        _ItemMarginR = Number(window.getComputedStyle(el[0]).marginRight.replace(/[^0-9]/g, '')),
        ItemsWidth = (el[0].offsetWidth + _ItemMarginR) * el.length - _ItemMarginR

    return ItemsWidth
}