// Authentication Util Namespace
var authUtils = function AuthUtils() {
    return {
        login: function (username, password) {
            if (!username || !password)
                return false;
            var user = $.grep(persons, function (p) {
                if (p.username == username && p.password == btoa(password))
                    return p;
            })[0];
            return user ? user : false;
        }
    }
};

module.exports = authUtils;