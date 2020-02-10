'use strict';

(function () {
    function init() {
        new Router([
            new Route('info', 'info.html', true),
            new Route('engineering', 'engineering.html')
        ]);
    }
    init();
}());
