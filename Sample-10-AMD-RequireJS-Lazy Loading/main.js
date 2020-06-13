require(['jquery', 'index'], function ($, indexUtil) {
    $(document).ready(function () {
        indexUtil.showPersons();

        $("#auth").on('click', function () {
            require(['auth'], function (auth) {
                console.log(auth.login('jha', 123));
            });
        });
    });
});